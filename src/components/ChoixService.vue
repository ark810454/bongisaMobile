<style>
.choix{
  position: absolute;
  bottom: 0; 
  width: 99%;
  height: 70%; 
  max-height: 70%;
    background: var(--light);
    border: 2px solid var(--light);
    border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column; 
  z-index: 55;
  visibility: visible !important;
      
    .close { 
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        width: 60%;
        height: 3px;
        background-color: var(--border);
      } 
    }
  .containerChoix {
  overflow-y: scroll;
    width: 94%;
    max-width: 94%;
    max-height: 98%;
    height: auto;
    padding: 0 3% 24px 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
        .listeChoix{
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          p{
            padding: 0 50px 0 0;
            font-size: 14px;
            color: var(--black);
            font-weight: 600;
          }
          .listes{
            display: flex;
          flex-direction: column;
          gap: 4px;
          .checknox{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            padding: 16px 8px;
            cursor: pointer;
            &:hover{
              background: var(--secondary);
            }
            span{
              font-size: 14px;
              color: var(--prim);
            }
            input{
              width: 16px;
              height: 16px; 
            }
          }
          }
          .date{
            display: flex;
            flex-direction: column;
            gap: 24px;
            width:100%;
            label span{
              color: var(--black)!important;
            }
            input{
              height: 40px;
              width: 100%;
              border: 1px solid var(--secondary);
              background: none;
              color: var(--black)!important;
              &:focus{
                outline: 2px solid var(--secondary)!important;
              }
            }
          }
      }
      .actionChoix{ 
          display: flex;
          flex-direction: column-reverse;
          gap: 16px;
          button{
            font-size: 13px!important;
            width: 100%!important;
            border-radius: 4px!important;padding: 0 0px!important;
            max-height: 35px;
            color: var(--primary)!important; 
            font-weight: 400;
            &:last-child{
            color: var(--light2)!important; 
            background: var(--primary)!important;
            }
          }
        }
    }
} 

</style>

<template>
<div   class="choix" style="display: none!important;">
      <div class="close"  @click="close">
      <div></div>
      </div>
  <div class="containerChoix" >
    <div class="listeChoix">
      <p>Choisir le type de Service <br> qu'il vous faut</p>

      <div class="listes">
        <label v-for="(serv , index) in services"
        :key="index"
        :for="serv" class="checknox">
          <input type="checkbox" :id="serv" :value="serv">
          <span>{{ serv }}</span>
        </label>
      
      </div>

      <div class="date">
        <label for="date">
          <span style="width: 100%; text-align: left;">Pour quand aurez vous besoin <br> de ces services ?</span>
        </label>
        <input type="date" ref="date" name="date" id="date" placeholder="00/00/0000">
      <span></span>
      </div>

    

    </div>
    <div class="actionChoix">
      <button @click="close">Annuler</button>
      <button @click="addAss">Confirmer</button>
    </div> 
  <br><br><br><br><br>
  </div>
</div> 
</template>


 
<script>
import axios from 'axios';
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "ChoixService",
    mounted() {
      this.getToken()
        this.getEtablis()

    }, 
    props: {
      id: {
        type: String,
        required: true
      },
      nomEt: String,
    },
    data() {
        return {
            services: [], 
            id_auth: null
        }
    },
methods: {
  async  getEtablis(){
await axios.get("https://bongisa.dscrdc.com/api/getEtablis")
.then(response => { 
if (response.status === 200) {  
  let et = response.data.users.filter(user => user.id == this.id); 
  this.services = et[0].services.split(',');  
}  
})
.catch(error => {  
  console.error("Une erreur s'est produite:", error);

toast("Une erreur s'est produite!", {
  timeout: 5000,
  position: 'bottom-center',
  hideProgressBar: true,
});
});
},
async  addAss(){
  let checkboxes = document.querySelectorAll('.checknox input')
  let atLeastOneChecked = false;
  let date = this.$refs.date
  let dateEtat = false
  let vvv = [];
// Afficher le résultat
const result = date.parentElement.querySelector('span')
// Vérifier si au moins une checkbox est cochée
checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      vvv.push(checkbox.value)
        atLeastOneChecked = true;
    }
});
if (date.value === '') {
  dateEtat = false
  result.textContent = '* Veillez entrer la date SVP';
}else{
  dateEtat = true
}


if (!atLeastOneChecked) {
    result.textContent = '* Veillez séléctionner au moins un service';
} 

if (dateEtat === true && atLeastOneChecked === true) {
 let servs = vvv.join(',')
  const datas = {
    id_etab: this.id_auth,
    id_serv: this.id,
    services: servs,
    jour: date.value,
    sujet: "Demande d'assainissement",
    contenu: "Demande d'assainissement par l'établissement "+ this.nomEt +" pour les service "+ servs+ ". Au jour du "+ date.value
  } 
await axios.post("https://bongisa.dscrdc.com/api/addAss",
datas
)
.then(response => { 
if (response.status === 201) {   
  toast("Demande Envoyé avec succès! Une confirmation vous sera envoyé ultérieurement", {
      timeout: 5000,
      position: 'bottom-center', 
      hideProgressBar: true,
    });
} else if (response.status === 401) {  
  toast("Echec de l'execution de la demande, veillez reesayer SVP !", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
}else
{ 
  toast("Echec de l'execution de la demande, veillez reesayer SVP !", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
} 
})
.catch(error => {  
  console.error("Une erreur s'est produite:", error);

    toast("Erreur du serveur", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
});
}else{ 
    toast("Impossible d'envoyer la demande", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
}
},
close(){
  document.querySelector('.choix').style="display:none!important"

  },
  stop(e) {
    e.stopPropagation()
  document.querySelector('.choix').style="display:none!important"

  }
  ,
   async getToken() { 
    const data = JSON.parse(localStorage.getItem('token'));
    if (data[0]) {     
        try {
            this.id_auth = data[0].id;
        } catch (error) {
            console.error('Erreur lors du parsing du token:', error);
        }
    }  
}
}
    }
    
</script> 
