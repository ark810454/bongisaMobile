<style>
.paycardz{
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    top:0; left:0;
    width: 100%; height: 90vh; 
    padding: 0 0 5vh 0;
    background: var(--white); 
    display:flex;
    flex-direction: column;
    justify-content: start;  
    align-items: center;
    .formPay{ 
    margin-top: 70px;
      max-width: 500px!important;
      min-width: 400px;
      height: 90%; 
      border-radius: 8px;
      padding: 24px 0;
      display: flex;
      flex-direction: column; 
      justify-content: space-between;
      position: relative; 
        .listeChoix{ 
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          p{
            padding: 0 50px 0 0;
            font-size: 16px;
            color: var(--black);
            font-weight: 700;
          }
          .listes{
            display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
             .input{
              margin-top: 0!important;
              input{
                background: linear-gradient(var(--white), var(--white)) padding-box, linear-gradient(45deg, var(--secondary), var(--secondary)) border-box!important;
              }
             } 
           .conf{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background: var(--light);
            border-radius: 5px;
            padding: 12px;
            gap: 12px;
            svg{
              width: 20px;
              height: 20px;
              stroke: var(--primary);
            }
            span{
              font-size: 12px!important;
              color: var(--text);
              text-align: left!important;
              span{
                color: var(--primary);
              }
            }
           } 
           
          }
          }
           
      }
      .actionChoix{ 
        width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between!important; 
         
          button{ 
            border-radius: 4px!important;
             padding: 0 24px!important;
            max-height: 35px; 
            font-weight: 500;
            font-size: 13!important; 
            color: var(--light)!important; 
            background: var(--primary)!important; 
            
          }
        }
    }
.mont{
  padding: 20px 5%;
  background-color: var(--secondary);
  border-radius: 4px;
  p{
    font-size: 14px!important;
    font-weight: 300!important;
    span{
      font-weight: 500!important;
      color: var(--primary)
    }
  }
} 
.popup{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;bottom: 0;right: 0; left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;

    .bk{
        width: max-content;
        max-width: 80%;
        padding: 16px;
        display: flex;
        flex-direction: column;
        background: #b9d4f4;
        gap: 10px;

        p{
            font-size: 14px!important;
            color: var(--black)!important;
        }
        button{
            background-color: var(--secondary)!important;
            color: var(--primary)!important;
            width: max-content!important;
            padding: 8px 14px!important;
            border-radius: 24px!important;
            height: auto!important;
        }
    }
}
@media screen and (max-width: 551px) {
  .formPay{
    max-width: 400px!important;
      min-width: 350px;
  }
}
@media screen and (max-width: 450px) {
  .formPay{
    min-width: 90%!important;
    max-width: 90%!important;
  }
}
</style>

<template>
<div   class="paycardz" >
  <NavBack title="PAYEMENT" /> 

  <form class="formPay" id="formPay">
    <div class="listeChoix">
      <p>Payement par {{ modePay }}</p>
      <div class="listes"> 
      <div class="conf">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V11" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill=""></circle> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        <span>Vous devez avoir au moins (<span>${{ montant }}</span> + frais de transaction) dans votre compte {{ modePay }}</span>
      </div>
        <InputForm type="tel" id="tell" max="9" :label="'Numéro télephone ' + modePay"></InputForm> 
    </div>
      
      </div>
    <div class="actionChoix"> 
      <button>Payer Maintenant</button>
    </div>
  </form>
</div> 
<showMess v-if="show" :type="type" :mess="mess"  :link="type? -3 : -1" :show="show" :montant="this.montant"  :date="this.dateUp"/>
<div class="popup" v-if="etatPay == 'success'">
    <div class="bk">
        <p>{{ message }}</p>
    <button @click="verifPay">Fait</button>
    </div>
</div>

</template>


 
<script>
import axios from 'axios';
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
import InputForm from '../components/InputForm.vue';
import showMess from './showMess.vue';
import NavBack from './NavBack.vue';

export default {
    name: "PayForm", 
    mounted() { 
      let formPay = document.getElementById('formPay'); 
            let input = formPay.querySelector('input') 
            let etatInput = false
            let name = input 
                name.addEventListener('change', ()=>{
                    if(this.verifieNum(name)){
                        etatInput = true
                    }else{
                        etatInput = false
                    }  
            }); 
 
  
    
      formPay.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        if(this.checkEmpty(input)){
                        etatInput = true
                    }else{
                        etatInput = false
                    }  

                    if(this.verifieNum(name)){
                        etatInput = true
                    }else{
                        etatInput = false
                    }  
            let span= document.createElement('span')
            span.classList.add('errorMess')
            const existingSpan = input.parentElement.parentElement.querySelector(".errorMess");
                   if(etatInput===true)
                   {
                 if (existingSpan) {
                  input.parentElement.parentElement.removeChild(existingSpan)
                 }
                 
                 span.textContent = "Veillez patientez SVP"
           if (existingSpan) {
            existingSpan.textContent = "Veillez patientez SVP"
           }else{
            input.parentElement.parentElement.appendChild(span)
           }
           

           const myHeaders = new Headers(); 

const formdata = new FormData();
formdata.append("request", "bongisaPaie");
formdata.append("montantpayer", this.montant);
formdata.append("devise", "USD");
formdata.append("telephone", `243${input.value}`);
this.nume = `243${input.value}`;

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("https://integralsolutionsrdc.com//apiTaxeLoc/public/api/", requestOptions)
.then((response) => response.json())
.then((result) => { 
      span.textContent = "" 
                if (result.etat == 'success') {
                  this.etatPay = result.etat
    this.message = result.message
    this.transact = result.transact
                }else{
                  toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: false,
    });
                }
})
.catch((error) => 

{
  span.textContent = "" 
    toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: false,
    });
   console.error("There was an error :", error);
});


      } else{
       span.textContent = "" 
        toast("Assurez vous que tous les champs sont rempli correctement", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: false,
    });
                   
                    
                   }
      })

    }, 
    components: {
      InputForm,
      showMess,
      NavBack,
    },
    props: {
     /*  id: {
        type: String,
        required: true
      },
      nomEt: String, */
    },
    data() {
        return {  
            link4: '../assets/visa.png',
            type: false,
            show: false,
            mess: '',
            dateUp: null,
            etatPay: '',
            message:'',
            transact: '',
            nume: null,
        }
    }, computed: {
        id_p() {
            return this.$route.params.id;
        },
        modePay() {
            return this.$route.params.modePayement;
        },
        montant() {
            return this.$route.params.montant;
        }
    },
methods: {
    verifPay() {
        const myHeaders = new Headers();

const formdata = new FormData();
formdata.append("request", "bongisaVerif");
formdata.append("transact", this.transact);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("https://integralsolutionsrdc.com//apiTaxeLoc/public/api/", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.etat == 'success') {
        const formFata = {
                    montant: this.montant,
                    idUser: this.id_p,
                    num: this.nume, 
                 } 
               axios.post("https://bongisa.dscrdc.com/api/addPay/"+ this.id_p, 
   formFata
 )
 .then(response => {
    if (response.status === 201) { 
         this.type= true
            this.show = true
            this.mess = "Payement éffectué avec succès !  " 
            let fg = response.data.payement.created_at      
            const formatDateFrench = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}; 
let gg= new Date(fg)  
this.dateUp = formatDateFrench(gg);                    
    }else
    {
      this.verifPay()   
}
 })
 .catch(error => {
 
   console.error("There was an error :", error);
   this.verifPay()   
 });
    }else{
        this.etatPay="dddd"
        this.type= false
            this.show = true
            this.mess = "Le payement à échoué !" 
    }
  })
  .catch((error) => {
    toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: false,
    });
   console.error("There was an error :", error);
  });
    },
  verifieNum(input) {
        let tel = input.value.replace(/\D/g,'') 
     
        input.value = tel.trim(); 
     if (input.value.length === 9) {
        input.blur() 
        return true;
      } else {
        let span= document.createElement('span')
            span.classList.add('errorMess')
            const existingSpan = input.parentElement.parentElement.querySelector(".errorMess");

            span.textContent = "* Entrer un numero de téléphone valide à 9 chiffres Ex: 890 000 000!!"
           if (existingSpan) {
            existingSpan.textContent = "* Entrer un numero de téléphone valide à 9 chiffres Ex: 890 000 000!!"
           }else{
             input.parentElement.parentElement.appendChild(span)
           } 
        return false
    }
},
    checkEmpty(input){
            let span= document.createElement('span')
            span.classList.add('errorMess')
            const existingSpan = input.parentElement.parentElement.querySelector(".errorMess");
        if (input.value ==="") {
            span.textContent = "* Ce champ est vide!"
           if (existingSpan) {
            existingSpan.textContent = "* Ce champ est vide!"
           }else{
             input.parentElement.parentElement.appendChild(span)
           }
            return false
        }else{
    if (existingSpan) { 
        input.parentElement.parentElement.removeChild(existingSpan);
    }
                    return true
        }
    }, 
 
  
}
    }
    
</script> 
