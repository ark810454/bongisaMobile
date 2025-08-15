<template>
    <div class="container" id="notif">
        <div class="home nn">
       <NavBack title="HISTOTIQUE"/> 
       <button :class="{'Certificat' : showCertificat}" style="display: none;" @click="downloadFile">Télécharger le certificat
        <svg v-if="showCertificat" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000080"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/></svg>
    </button>
       <div class="notif descent">

        <span class="date" style="width: max-content;">Anciens notifs</span>

        
        <!-- <NotifCard
          v-for="(notif, index) in filterRappels"
        :key="index"
         :title="'Rappel: jour de l\'assainissement'"
         :time="notif.date_rappel"
         :text="'Rappel'"
         :etat="notif.payement? true : false"
         :see="notif.seepayement? true : false"
         :id="notif.id"
         :id_etab="notif.id_serv"
         :role="role"
         />  -->  

       <div style="width: 100%; height: 100%; display: flex; flex-direction: column; gap: 16px;"
        v-if="role == 'Service_assaini'">
        <NotifCard
         v-for="(notif, index) in notifs"
        :key="index"
         :title="notif.sujet"
         :time="notif.created_at"
         :time2="notif.update_pay"
         :text="notif.contenu"
         :etat="notif.montant? true : false"
         :payement="notif.payement? true : false"
         :see="notif.seepayement? true : false"
         :id="notif.id"
         :id_etab="notif.id_etab"
         :services="notif.services"
         :role="role"
         /> 
       </div>
       
       <div style="width: 100%; height: 100%; display: flex; flex-direction: column; gap: 16px;"
        v-if="role == 'Etablissement'">
        <NotifCard
         v-for="(notif, index) in filterNotifs"
        :key="index"
         :title="'Confirmation: '+notif.sujet"
         :time="notif.updated_valid_serv"
         :text="'Confirmation de votre demande d\'assainissement à été validé par le service d\'hygiène. Nous vous prions de passer au payement de la facture.'"
         :etat="notif.payement? true : false"
         :id="notif.id"
         :id_etab="notif.id_serv"
         :montant="notif.montant"
         :role="role"
         /> 
       </div>

       
         <br><br><br><br><br>
        </div> 
    <BottomBar 
            link3="route" 
            link2="route" 
            link4="activeLink" 
            link1="route" 
            />
      </div> 
    </div>
  </template>

  <script> 
  
import BottomBar from '@/components/BottomBar.vue';
  import NavBack from '@/components/NavBack.vue';
  import NotifCard from '@/components/NotifCard.vue';
  import axios from 'axios'
  //import echo from '@/plugins/echo';
/* import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';  */
  export default {
    name: "HistoryView",
    mounted() { 
      this.getToken() 
      if (this.role == "Service_assaini") {
       // echo.channel('assainissement')
      //.listen('.task.completed', (event) => {
       // console.log('Mise à jour des assainissements', event);});
        this.getNotif();
        this.interval = setInterval(this.getNotif, 30000);
      }
      if (this.role == "Etablissement") {
       
        this.getNotifE();
        this.interval = setInterval(this.getNotifE, 30000);
      }

 

      
    },
    data() {
        return {
            id_auth: null,
            role: null,
            type: null,
            notifs: [],
            showCertificat: false,
            path_certificat: '',
            id_certif: null,
       }},
    computed: {
      filterNotifs() {
        return this.notifs.filter(notif=> notif.montant !=null)
      },
      filterRappels() {
        return this.notifs.filter(notif=> notif.type == "rappel")
      },
    },
    components:{
        NavBack,
        NotifCard, 
        BottomBar,
    },
    methods: { 
      async  getNotif(){
await axios.get("https://bongisa.dscrdc.com/api/getNotif/"+ this.id_auth)
.then(response => {  
if (response.status === 200) {  
  this.notifs = response.data.notifs;  
  
} 
else
{ 
    console.log("Impossible de recuperer les notifs !" )
} 
})
 
.catch(error => {  
console.error("Une erreur s'est produite:", error.status);

    /* toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    }); */
});
},
async  getNotifE(){
await axios.get("https://bongisa.dscrdc.com/api/getNotifE/"+ this.id_auth)
.then(response => { 
if (response.status === 200) {
  this.notifs = response.data.notifs;  
     
} 
else
{ 
    console.log("Impossible de recuperer les notifs !" )
} 
})
 
.catch(error => {  
console.error("Une erreur s'est produite:", error);

    /* toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: false,
    }); */
});
}, 
 
   async getToken() { 
    const data = JSON.parse(localStorage.getItem('token'));
    if (data[0]) {     
        try {
            this.id_auth = data[0].id;
            this.role = data[0].role;
        } catch (error) {
            console.error('Erreur lors du parsing du token:', error);
        }
    } 
    }
  },
  beforeUnmount() {
    clearInterval(this.interval); // Nettoyer l'intervalle lorsque le composant est détruit
  },
  }

  </script>

  <style>
  chris{
    height: 1px;
    background: var(--border);
    width: 200px;
  }
  #notif{
    position: relative;
    top:0;left:0;
    background-color: #340B0B11;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
.nn{
    overflow-y: scroll;
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    .Certificat {
  position: absolute;
  top: 40px;
  width: auto !important;
  z-index: 55;
  right: 8%;
  height: 32px;
  padding: 0 16px;
  display: flex!important;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0 !important;
  gap: 8px;
  font-size: 12px;
  color: var(--light);
  background: var(--danger);
  svg {
    fill: var(--light);
    width: 16px;
    height: 16px;
  }
  }
}
  .notif{
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 16px;
  }
  .date{
    font-size: 12px;
    color: var(--text);
    margin-top: 24px;
    position: relative;
    width: 70px;
  }
  .nn{
    padding-top: 16px;
  }
  .nn .ding{
    display: none;
  }


  @media screen  and (max-width: 750px) {
    .notif{
        width: 80%;
    }
  }
  @media screen  and (max-width: 550px) {
    .notif{
        width: 90%;
    }
  }
  </style>
