<style>
.paycard{
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    top:0; left:0;
    width: 100%; height: 100vh; 
    background: var(--white); 
    display:flex;
    justify-content: center;  
    .containerChoix{
      width: max-content;
      max-width: 90%;
      height: auto; 
      border-radius: 8px;
      padding: 24px 16px;
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
            font-size: 16px;
            color: var(--black);
            font-weight: 700;
          }
          .listes{
            display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
          div{
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 2%;
            align-items: center;
            justify-content: space-evenly; 
            label{
              display: flex;
              flex-direction: row;
              gap: 8px;
              align-items: center;
              width: 100%;
              border: 1px solid var(--secondary);
              height: 40px;
              justify-content: center;
              position: relative;
              border-radius: 4px;
              img{
                width: 20px;
                height: 20px;
                object-fit: cover;
                border-radius: 4px;
              }
            }  input{ 
              position: absolute;
              opacity: 0;
            }
             input:checked + label{
    border: 2px solid var(--primary)!important; 
    box-shadow: 0 0 2px var(--primary);
  }
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
          display: flex;
          flex-direction: row;
          justify-content: end;
          gap: 30px;
          margin-top: 40px;
          button{
            width: auto!important;
            border-radius: 4px!important;
             padding: 0 24px!important;
            max-height: 35px;
            color: var(--prim)!important; 
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

</style>

<template>
<div   class="paycard" >
  <div class="containerChoix" >
    <div class="listeChoix">
      <p>Payement Service</p>

      <div class="listes">
         <span>Choisir un mode payement</span>
         <div class="localRx">
            <input type="radio" id="mpesa" name="mode_payement" value="mpesa">
          <label for="mpesa"  class="checknox">
            <span><img :src="link" width=30 height=30 alt=""> Mpesa</span>
          </label>
            <input type="radio" id="Orange" name="mode_payement" value="Orange">
          <label for="Orange"  class="checknox">
            <span><img :src="link2" width=30 height=30 alt=""> Orange M</span>
          </label>
            <input type="radio" id="Airtel" name="mode_payement" value="Airtel">
          <label for="Airtel"  class="checknox">
            <span><img :src="link3" width=30 height=30 alt=""> Airtel M</span>
          </label>
         </div>

         <span style="font-size: 12px; font-weight: 500; text-align: center!important;display: block!important;">Ou encore</span>

         <div class="interCard">
            <input type="radio" id="visa" name="mode_payement" value="visa">
          <label for="visa"  class="checknox">
            <span><img :src="link4" width=30 height=30 alt=""> Visa</span>
          </label> 
         </div>
      
      </div>

      <div class="mont" style="width: 90%; display: flex; flex-direction: column; gap: 30px;">
        <div class="montt" style="width: 100%; display: flex; flex-direction: row; justify-content: space-between;">
          <span style="font-weight: 600;">Montant Total: </span>
          <span>{{ this.monts }}$</span>
        </div>
        <p>En procédant au paiement, vous acceptez nos <span>Conditions d'utilisation</span>  et confirmez que vous avez lu notre <span>Politique de confidentialité</span> . Vous pouvez annuler les paiements récurrents à tout moment.</p>
      </div>

    

    </div>
    <div class="actionChoix">
      <button @click="close">Annuler</button>
      <button @click="payement">Suivant</button>
    </div>
    <br><br><br>
  </div>
</div> 
</template>


 
<script>
/* import axios from 'axios';*/
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 

export default {
    name: "PayCard",
    mounted() {
      this.getToken() 

      const mont = this.montant.split(',')
        const sum = mont
  .filter(value => value !== '') // Filtrer les chaînes vides
  .map(Number) // Convertir les chaînes en nombres
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Additionner
 
        this.monts = sum

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
            link: '../../assets/mpsa.png',
            link2: '../../assets/orange.png',
            link3: '../../assets/airtel.png',
            link4: '../../assets/visa.png',
            monts: "",
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
 payement(){
  const selectedValue = document.querySelector('input[name="mode_payement"]:checked');
    if (selectedValue) {
      this.$router.push({ name: "PayForm", params: { id: this.id_p, modePayement: selectedValue.value, montant: this.monts } });
    } else {
      toast('Aucun mode de payement séléctionné', {
                timeout: 3000,
  position: 'bottom-center',
  hideProgressBar: true,
            })
    }
 },
 
close(){
  this.$router.go('-1');

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
