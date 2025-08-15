<style>
.montant{
    position: fixed;
    top:0; left:0;
    width: 100%; height: 100%; 
    background: #f2f4f688; 
    display:flex!important;
    align-items:center;justify-content: center; 
    z-index: 55;  
    .containerChoix{ 
      max-width: 280px; 
      height: auto;
      background: var(--white);
      border: 2px solid var(--light);
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
          align-items: center;
          justify-content: center;
          p{
            text-align: center;
            font-size: 15px;
            color: var(--blackk);
            font-weight: 600;
          } 
          span{
            font-size: 11px!important;
            text-align: center;
            margin-top: -16px;
          }
          img{
            width: 60px;
            height: 60px;
            border: 8px solid;
            border-radius: 50%;
          }
          
      }
      .tab{ 
        padding: 16px 0;  
        width: 100%; 
        display: flex;
        flex-direction: column;
        gap: 16px!important; 
      }
      .actionChoix{ 
          display: flex;
          flex-direction: column-reverse;
          gap: 10px;
          button{
            font-size: 12px!important;
            width: 100%!important;
            border-radius: 4px!important;padding: 0 0px!important;
            max-height: 35px;  
            font-weight: 400;
            color: var(--primary)!important;
            &:last-child{
              background: var(--primary)!important;
            color: var(--light2)!important;  
            }
          }
        }
    }
} 

</style>

<template>
<div   class="montant"  >
  <div class="containerChoix" >
    <div class="listeChoix">      
      <img v-if="shTy" :src="type? this.img1 : this.img2" alt="" srcset=""  :style="type? 'color: #1ca2a222;' : 'color: #A0004F22'">
      <p>Veillez inserer le montant du service en $ SVP.</p> 
    </div>
    <div class="tab">  
    <div class="input" v-for="(serv, index) in services"
    :key="index">
      <input type="number" :placeholder="'Montant en $ pour '+ serv ">
    </div>
    <span class="err" style="font-size: 12px;"></span>
    </div>
    <div class="actionChoix">
      <button @click="close">Retour</button>
      <button @click="sendMontant()">Envoyer</button>
    </div>
  </div>
</div> 
</template>


 
<script> 
import axios from 'axios'
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 

export default {
    name: "AddMontant",
    mounted() { 
      this.services = this.service.split(',')
    },  
    computed: {
        id() {
            return this.$route.params.id;
        },
        service() {
          return this.$route.params.services
        }
    },
    data() {
        return {
          type: false,
          shTy: false,
            img1: "../../assets/success.png",
            img2: "../../assets/error.png",
            services: [],
        }
    },
methods: {
close(){
  this.$router.go(-1)
  }
  ,
  redirect(link='../') { 
    this.$router.go(link);
  },
  sendMontant() {
    let input = document.querySelectorAll('.tab input')
    let span = document.querySelector('.err')
    const hasEmptyValue = Array.from(input).some(element => element.value === '');

if (hasEmptyValue) {
      span.textContent = '* Un champ est vide'
    }else{
      span.textContent= ''
      const data  = { montant: '' };
      input.forEach((element) => {
        data['montant'] += element.value + ','
      }); 
       axios.post("https://bongisa.dscrdc.com/api/addMontant/"+ this.id, data)
.then(response => { 
if (response.status === 200) {   
              this.type = true
              this.shTy = true 
               
               toast("Confirmation envoyée! Attente du payement de l'etablissement.", {
                timeout: 3000,
  position: 'bottom-center',
  hideProgressBar: true,
            }) 
} 
else
{ 
              this.type = false
              this.shTy = true
    toast("Impossible d'envoyer la requete, ressayez SVP!", {
                timeout: 3000,
  position: 'bottom-center',
  hideProgressBar: true,
            })
} 
})
.catch(error => {  
    console.log(error)
    this.shTy = true
              this.type = false
    toast("Une erreur s'est produite!", {
                timeout: 3000,
  position: 'bottom-center',
  hideProgressBar: true,
            })
 
});
    }
   
  }
  
}
    }
    
</script> 
