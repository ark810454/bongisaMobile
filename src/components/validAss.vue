<style>
.validAss{
  position: relative;
  top: 100px;  
  display: flex;
  align-items: center;
  justify-content: center;  
  .containerChoix {
    width: max-content;
    max-width: 320px;
    height: auto;
    background: var(--white);
    border: 2px solid var(--light);
    border-radius: 8px;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .close {
      position: absolute;
      top: 24px;
      right: 16px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .listeChoix {
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      p {
        padding: 0 50px 0 0;
        font-size: 14px;
        color: var(--black);
        font-weight: 600;
    .voirp{
      width: auto!important;
      background: none!important;
    width: auto!important;
    height: auto!important;
    color: var(--primary)!important;
    font-size: 13px!important;
    }
      }
      span {
        font-size: 13px !important;
      }
      .listes {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    }
    .dec {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 12px;
    }
    .dec p {
      font-size: 24px;
      font-weight: 700;
      color: var(--danger);
    }
  }
  .actionChoix {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  button {
    width: auto !important;
    border-radius: 4px !important;
    padding: 0 16px !important;
    max-height: 32px;
    color: var(--prim) !important;
    font-weight: 500;
    color: var(--light) !important;
    background: var(--danger) !important;
    font-size: 13px !important;
  }
}
.decop {
  position: absolute;
  top: 55px;
  width: auto !important;
  z-index: 55;
  right: 15%;
  height: 32px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0 !important;
  gap: 8px;
  font-size: 12px;
  color: var(--light);
  background: var(--danger);
  svg {
    stroke: var(--light);
    width: 16px;
    height: 16px;
  }
}
</style>

<template>
<div   class="validAss"  >
  <div class="containerChoix">
      <div class="close" @click="redirect('../../')">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="#0c2e54"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
              stroke="#0c2e54"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
      </div>
      <div class="listeChoix">
        <p class="dfff">Confirmation des travaux faits</p>
        <span
          >Veillez svp confirmer que vous avez bel et bien realiser vos travaux
          d'assainissement une fois fait.
        </span>
        <p>Pour l'établissement: {{ et.nomEt }}  <button class="voirp" @click="redirect({name:'openEt', params: {id: et.id}})">Voir plus</button></p>

        <div class="dec" style="max-width: 70%">
        <InputForm type="text" id="site" label="Entrez les sites asainis"/>
          <button ref="confirm">Confirmer</button>
        </div>
      </div>
      <div class="actionChoix">
        <button @click="redirect('../../')">Fermer</button>
      </div>
    </div>
</div> 
</template>


 
<script> 
import axios from 'axios'
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
import InputForm from './InputForm.vue';

export default {
    name: "validAss",
    components: {
      InputForm
    },
    mounted() {   
      this.getEtablis()
            
            let btn = this.$refs.confirm;
            let input = document.getElementById('site')
            if (btn) {
              btn.addEventListener("click", () => {

             if (input.value !=='') {
              axios
                .post("https://bongisa.dscrdc.com/api/validerService/" + this.id, {sites: input.value})
                .then((response) => {
                  if (response.status === 201 || response.status === 200) {
                    document.querySelector('.dfff').innerHTML = 'Félicitation pour le travail realisé 😊, <br> maintenant l\'inspecteur d\'assainissement devra valider un Certificat d\'assainissement.'
                    document.querySelector('.dfff').style="color: #1ca2a2";
                    btn.style="opacity: 0.3!important"
                    btn.disabled= true
                    
                    
                  } else {
                    console.log("Impossible de valider !");
                    toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
                  }
                })
                .catch((error) => {
                  console.error("There was an error:", error);
                  toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
                });
             }
             else{
              toast("Veillez SVP saisir les sites asainis!!! Ex: Bureau et Entrepots.", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
             }
            });
          }
    },  
    computed: {
      id() {
            return this.$route.params.id;
        }, 
        id_p() {
            return this.$route.params.id_p;
        }, 
    },
    data() {
        return { 
          et:{},
          
        }
    },
methods: {
close(){
  this.$router.go(-1)
  }
  ,
  redirect(link='../') { 
    this.$router.push(link);
  },

  getEtablis(){
    axios.get("https://bongisa.dscrdc.com/api/getEtablis")
 .then(response => { 
    if (response.status === 200) {  
      this.et = response.data.users.filter(user => user.id == this.id_p);  
      this.et = this.et[0]
    } else
    { 

   console.log('erreur')
} 
 })
 .catch(error => { 
  console.error("Une erreur s'est produite:", error);  
 });
  },
 
   
  }
  
}
    
    
</script> 
