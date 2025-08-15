<style>
.paycardz{
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    top:0; left:0;
    width: 100%; height: 90vh; 
    padding: 5vh 0;
    background: var(--white); 
    display:flex;
    justify-content: center;  
    align-items: start;
    .formPay{
      width: max-content;
      max-width: 90%;
      min-width: 40%;
      height: 80%; 
      border-radius: 8px;
      padding: 24px 16px;
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
          div{
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 2%;
            align-items: center;
            justify-content: space-between; 
          }
           
            span{
              font-size: 13px;
              color: var(--prim);
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 8px;
            }
           
          }
          }
           
      }
      .actionChoix{ 
        width: 100%!important;
          display: flex;
          flex-direction: row;
          justify-content: end!important; 
          gap: 30px; 
          button{ 
            border-radius: 4px!important;
             padding: 0 24px!important;
            max-height: 35px; 
            font-weight: 500;
            font-size: 13!important;
            &:last-child{
            color: var(--light)!important; 
            background: var(--primary)!important; 
            }
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
@media screen and (max-width: 991px) {
  .formPay{
    min-width: 500px!important;
  }
  
}@media screen and (max-width: 751px) {
  .formPay{
    min-width: 400px!important;
  }
}
@media screen and (max-width: 450px) {
  .formPay{
    min-width: 90%!important;
  }
}
</style>

<template>
<div   class="paycardz" >
  <form class="formPay" id="formPay">
    <div class="listeChoix">
      <p>Payement par Carte Visa</p>

      <div class="listes"> 
        <InputForm type="text" id="name" label="Nom sur la carte"></InputForm>
        <InputForm type="text" max="19" id="numero" label="Numéro sur la carte: 0000 0000 0000 0000"></InputForm>
         <div>
          <InputForm type="text" max="5" id="date" label="Date d'expi: MM/AA"></InputForm>
          <InputForm type="text" max="4" id="cvv" label="CVC/CVV"></InputForm>
         </div>
      
      </div>
 

    

    </div>
    <div class="actionChoix"> 
      <button>Payer Maintenant</button>
    </div>
  </form>
</div> 
  <showMess :type="type" :mess="mess"  link="../../../../" :show="show" :montant="this.montant" :services="this.services"  :date="this.dateUp"/>
</template>


 
<script>
import axios from 'axios';
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
import InputForm from '../components/InputForm.vue';
import showMess from './showMess.vue';

export default {
    name: "PayForm",
    mounted() {
      
      this.getToken() ;
      let formPay = document.getElementById('formPay');
      let inputs = formPay.querySelectorAll('input')
      let etatInput = new Array(inputs.length).fill(false)
      
     
      inputs[1].addEventListener('change', ()=>{
        let input = inputs[1]
        let span= document.createElement('span')
            span.classList.add('errorMess')
            const existingSpan = input.parentElement.parentElement.querySelector(".errorMess");
        if (input.value.length > 19 || input.value.length < 19) {
        span.textContent = "* Numero invalide!"
           if (existingSpan) {
            existingSpan.textContent = "* Numero invalide!"
           }else{
             input.parentElement.parentElement.appendChild(span)
           }
           etatInput[1]=false
      }else{
        if (existingSpan) { 
        input.parentElement.parentElement.removeChild(existingSpan);
    }
    etatInput[1] = true 
      }
      })
 
      inputs[1].addEventListener('input', ()=>{
        if (this.checkNumCard(inputs[1])) {
          etatInput[1]=true
        }else{
          etatInput[1]= false
        }
      })
      inputs[2].addEventListener('input', ()=>{
        if(this.formatExpiryDate(inputs[2])) {
          etatInput[2]=true
        }else{
          etatInput[2]= false
        }
      })
      inputs[3].addEventListener('input', ()=>{
        if(this.formatCVC(inputs[3])) {
          etatInput[3]=true
        }else{
          etatInput[3]= false
        }
      })
      inputs[0].addEventListener('change', ()=>{
         if (this.checkEmpty(inputs[0])) {
          etatInput[0]=true
        }else{
          etatInput[0]= false
        }
        }); 
      formPay.addEventListener('submit', (event)=>{
        event.preventDefault();
        inputs.forEach((input, i) => {
         if (this.checkEmpty(input)) {
          etatInput[i]=true
        }else{
          etatInput[i]= false
        }
        }); 
        if (this.checkNumCard(inputs[1])) {
          etatInput[1]=true
        }else{
          etatInput[1]= false
        }
        if(this.formatExpiryDate(inputs[2])) {
          etatInput[2]=true
        }else{
          etatInput[2]= false
        } 
        if(this.formatCVC(inputs[3])) {
          etatInput[3]=true
        }else{
          etatInput[3]= false
        } 
 
        if(etatInput[0]===true &&etatInput[1]===true &&etatInput[2]===true &&etatInput[3]===true )
                   { 
                 const formFata = {
                    id_p: this.id_p,
                    nom: inputs[0].value.trim(),
                    num: inputs[1].value.trim(), 
                    date: inputs[2].value.trim(),
                    cvc: inputs[3].value.trim(), 
                 } 
 
                 axios.post("https://bongisa.dscrdc.com/api/addPay/"+ this.id_p, {
   formFata
 })
 .then(response => {
    if (response.status === 201) {
         this.type= true
            this.show = true
            this.mess = "Payement reussi ! Un compteur de 90 jour debutera au jour du "+ response.data.date  
             const serv = response.data.services                  
      this.services= serv.split(',')
      let fg = response.data.date_update      
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
      this.type= false
            this.show = true
            this.mess = "Le payement à échoué !"    
}
 })
 .catch(error => {
  toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
   console.error("There was an error :", error);
 });
      } else{
        toast("Assurez vous que tous les champs sont rempli correctement", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
                   
                    
                   }
      })

    }, 
    components: {
      InputForm,
      showMess
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
            id_auth: null,
            link4: '../../assets/visa.png',
            type: false,
            show: false,
            mess: '', 
            services: "",
            dateUp: "", 
        }
    }, computed: {
        id_p() {
            return this.$route.params.id;
        },
        montant() {
            return this.$route.params.montant;
        },
    },
methods: {
  formatCVC(input) {
            let value = input.value;
            let span= document.createElement('span')
            span.classList.add('errorMess')
            const existingSpan = input.parentElement.parentElement.querySelector(".errorMess");

            // Retire tous les caractères non numériques
            value = value.replace(/\D/g, '');

            // Validation de la longueur
            if (value.length < 3 || value.length > 4) { 
                span.textContent = "* Le CVC doit avoir entre 3 et 4 chiffres."
           if (existingSpan) {
            existingSpan.textContent = "* Le CVC doit avoir entre 3 et 4 chiffres."
           }else{
             input.parentElement.parentElement.appendChild(span)
           }  // Limite à 4 chiffres
                
              return false;
            }

            if (value.length === 3 || value.length === 4) {
              if (existingSpan) { 
        input.parentElement.parentElement.removeChild(existingSpan);
    }
            }

          
            // Met à jour la valeur de l'input
            input.value = value;
            return true;
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
    checkNumCard(input){
      let ff= ''
      let value = input.value.replace(/\D/g,'') 
      for (let i = 0; i < value.length; i+=4) {
         ff += value.substring(i, i+4)+' ';
        
      }
      input.value = ff.trim(); 
     if (input.value.length === 19) {
        input.blur() 
        return true;
      }
     
    },
    formatExpiryDate(input) {
    let value = input.value;
    let span = document.createElement('span');
    span.classList.add('errorMess');
    
    // Vérifiez si un message d'erreur existe déjà
    const existingSpan = input.parentElement.parentElement.querySelector(".errorMess");
    
    // Retire tous les caractères non numériques
    value = value.replace(/\D/g, '');

    // Ajoute un '/' après les 2 premiers chiffres
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    // Validation du mois et de l'année
    if (value.length == 5) {
        const month = parseInt(value.substring(0, 2), 10);
        const year = parseInt(value.substring(3, 5), 10);
        
        if (month < 1 || month > 12) {
            span.textContent = "* Le mois doit être entre 01 et 12.";
            if (existingSpan) {
                existingSpan.textContent = span.textContent;
            } else {
                input.parentElement.parentElement.appendChild(span);
            }
            input.value = value.substring(0, 3); // Retire le dernier caractère
            return false;
        }
        
        if (year < 25) {
            span.textContent = "* L'année doit être égale ou supérieure à 25.";
            if (existingSpan) {
                existingSpan.textContent = span.textContent;
            } else {
                input.parentElement.parentElement.appendChild(span);
            }
            input.value = value.substring(0, 3); // Retire le dernier caractère
            return false;
        }

        // Si tout est valide, retire le message d'erreur
        if (existingSpan) { 
            input.parentElement.parentElement.removeChild(existingSpan);
        }
        return true;
    }
    
    // Met à jour la valeur de l'input
    input.value = value;
},
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
