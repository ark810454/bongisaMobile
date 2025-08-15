<template>
     <div class="top">
      <div class="nav">
        <h3>Bongisa</h3>
        <div class="notifff">
          <span></span>
          <svg class="countNotif" viewBox="0 0 24 24" @click="redirect('/notif')" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.10745 2.67414C9.98414 2.24187 10.9649 2 12 2C15.7274 2 18.7491 5.13623 18.7491 9.00497V9.70957C18.7491 10.5552 18.9903 11.3818 19.4422 12.0854L20.5496 13.8095C21.5612 15.3843 20.789 17.5249 19.0296 18.0229C14.4273 19.3257 9.57274 19.3257 4.97036 18.0229C3.21105 17.5249 2.43882 15.3843 3.45036 13.8095L4.5578 12.0854C5.00972 11.3818 5.25087 10.5552 5.25087 9.70957V9.00497C5.25087 7.93058 5.48391 6.91269 5.90039 6.00277" stroke="#f2f4f6" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C12.2445 22 12.4847 21.9827 12.7192 21.9492M16.5 19C16.2329 19.7126 15.781 20.3428 15.1985 20.8393" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </div>
      </div>
      <div class="h1">
        <h1>{{ title }} </h1>
        <button :class="btnStyle" @click="redirect('/service')" >Explorer</button>
      </div>
     </div>
</template>

<script>
import { StatusBar } from '@capacitor/status-bar';
import axios from 'axios'
//import echo from '@/plugins/echo';
export default {
    name: "NavTop",
    mounted() {
      this.getToken()
      if (this.role == "Service_assaini") {
      //  echo.channel('assainissement')
      //.listen('.task.completed', (event) => {
        //console.log('Mise à jour des assainissements', event); });
        this.getNotif();
        this.interval = setInterval(this.getNotif, 30000);
      }
      if (this.role == "Etablissement") {
        //echo.channel('assainissement')
      //.listen('.task.completed', (event) => {
       // console.log('Mise à jour des assainissements', event); });
        this.getNotifE();
        this.interval = setInterval(this.getNotifE, 30000);
      }
       StatusBar.setOverlaysWebView({ overlay: true });
       StatusBar.setStyle({ style: 'light' }); 
    },
    data() {
      return {
        id_auth: null,
        role: null
      }
    },
    props: {
     title: String,
     btnStyle: String
    },
    methods: {
  redirect(link) { 
    this.$router.push(link);
  }, 
  async  getNotifE(){
await axios.get("https://bongisa.dscrdc.com/api/getNotifE/"+ this.id_auth)
.then(response => { 
if (response.status === 200) {  
  
  let count = response.data.notifs.filter(nn => nn.montant != null && !nn.payement );  
  let ff = document.querySelectorAll('.countNotif') 
  if (count.length > 0) {
    ff.forEach(element => {
      let countNotif = element.parentElement.querySelector("span")
      countNotif.classList.add('ssspp')
      countNotif.textContent = count.length
    }); 
  }

  let count2 = response.data.notifs.filter(nn => nn.validation_inspecteur && !nn.seeCertificat );  
  if (count2.length > 0) { 
    ff.forEach(element => {
      let countNotif = element.parentElement.querySelector("span")
      countNotif.classList.add('ssspp')
      countNotif.textContent = count2.length
    }); 
  }

  let count3 = response.data.notifs.filter(nn => nn.validation_service && !nn.validation_etab);
                       
                       if (count3.length > 0) {
                        localStorage.setItem('noteOn', JSON.stringify(true)); 
                         
                       }else{
                        localStorage.setItem('noteOn', JSON.stringify(false)); 

                       }
 
} 
else
{ 
    console.log("Impossible de recuperer les notifs !" )
} 
})
 
.catch(error => {  
console.error("Une erreur s'est produite:", error.status); 
});
}, 
  async  getNotif(){ 
await axios.get("https://bongisa.dscrdc.com/api/getNotif/"+ this.id_auth)
.then(response => { 
if (response.status === 200) {  
  let count = response.data.notifs.filter(nn => nn.montant== null || nn.seepayement);  
  let ff = document.querySelectorAll('.countNotif') 
  if (count.length > 0) {
    ff.forEach(element => {
      let countNotif = element.parentElement.querySelector("span")
      countNotif.classList.add('ssspp')
      countNotif.textContent = count.length
    }); 
  }
} 
else
{ 
    console.log("Impossible de recuperer les notifs !" )
} 
})
.catch(error => {  
console.error("There was an error:", error.status);
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
},
}

}
</script>

<style  >
  .ssspp{
    background: var(--danger);
    width: 10px;
    height: 10px; 
    color: #f2f4f6;
    border-radius: 50%;
    font-size: 7px;
    font-weight: 600;
    font-style: italic;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: 0px;
  }
.top{
  width: 90%; 
  padding: 60px 5% 5px 5%; 
  height: 180px;
  display: flex;
  flex-direction: column;
}
.see{visibility: visible;}
.dontSee{visibility: hidden;}
.nav{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;  
}
.nav h3{
  font-size: 24px;
  color: var(--white);
  font-family: var(--neoda);
}

 
.notifff{width: 20px!important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
}
.notifff svg{ 
  cursor: pointer;
  min-width: 20px;
  min-height: 20px;
}
.link svg:last-child{
  width: 16px;
  height: 16px;
  background-color: var(--green);
  padding: 5px;
  border-radius: 5px;
  fill: var(--white)!important;
}
.h1{
  padding: 30px 0 20px 0;
}
.h1 h1{
  font-size: 30px;
  color: var(--white);
  opacity: 0.8;
}
.h1 button{
  background: var(--border);
  font-size: 14px;
  color: var(--white);
  opacity: 0.6;
  width: auto!important;
  padding: 0 24px;
  height: 35px;
  margin-top: 16px;
}
@media screen  and (max-width: 700px) {
   .nav h3{
      font-size: 20px;
    }
}
@media screen  and (max-width: 550px) {
   .nav h3{
       font-size: 16px;
    }

}
</style>
 

