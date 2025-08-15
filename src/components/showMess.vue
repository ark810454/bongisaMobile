<style>
.showMess{
    position: fixed;
    top:0; left:0;
    width: 100%; height: 100%; 
    background: #f2f4f688; 
    display:flex;
    align-items:center;justify-content: center; 
    z-index: 550000; 
    visibility: visible!important;
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
        margin: 16px 0;
        padding: 16px 0;
        border: 1px solid var(--border);
        display: flex;
        width: 100%;
        flex-direction: column;
        border-radius: 4px;
        .tab1, .tab2, .tab3{
          width: calc(100% - 16px);
          margin: 0px 8px;
          padding: 12px 0;
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
          span{
            font-size: 11px;
          }
          p{
            font-size: 12px;
            color: var(--blackk)!important;
            font-weight: 600;
          }
        }
        .tab1{
          flex-direction: row;
          align-items: start;
          justify-content: space-between!important;
          border-top: none;
          .t1{
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 4px;
            &:last-child p{
              color: #119989!important;
            }
          }

        }
        .tab2, .tab3{
          gap: 8px;
          .MM{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            span:last-child{
              font-weight: 600;
              color: var(--blackk);
            }
          }
          .gg{
            display: flex;
            flex-direction: column;
            gap: 4px;
            span{
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              font-weight: 600;
              color: var(--blackk);
              span{
                width: auto;
                font-weight: 300;
                color: var(--text);
              }
            }
          }
        }
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
            &:last-child{
            color: var(--light2)!important;  
            }
          }
        }
    }
} 

</style>

<template>
<div   :class="{'showMess' : show}" 
style="visibility: hidden;" >
  <div class="containerChoix" >
    <div class="listeChoix">
      <img :src="type? this.img1 : this.img2" alt="" srcset=""  :style="type? 'color: #1ca2a222;' : 'color: #A0004F22'">
      <p>{{ mess }}</p>
      <span v-if="type">Merci pour le payement. Le service d'hygiène à bel et bien recu le payement.</span>
      <span style="padding-bottom: 8px;" v-if="!type">Désolé mais nous n'avons pas pu effectuer votre, veillez ressayer SVP.</span>
    </div>
    <div class="tab" v-if="type">
      <div class="tab1">
        <div class="t1">
          <span>Date Pay</span>
          <p>{{ this.date}}</p>
        </div> 
        <div class="t1">
          <span>Numero pay.</span>
          <p>AJKHYY7484BCV</p>
        </div> 
        <div class="t1">
          <span>Status Pay.</span>
          <p>Reussi</p>
        </div>
      </div>
      <div class="tab2">
        <span>MOTIF DE PAYEMENT</span>
        <div class="MM"><span>Frais d'assainissement</span> <span>$500.00</span></div>
      </div>
      <div class="tab3">
        <span>Price</span>
        <div class="gg">
          <span v-for="(dd, index) in services" 
          :key="index"
          >Prix {{dd}}<span>${{monts[index]}}</span></span> 
          <span>Total <span>${{ mont }}</span></span>
        </div>
      </div>
    </div>
    <div class="actionChoix">
      <button :style="type? 'color: #1ca2a2;' : 'color: #A0004F'" @click="close">Fermer</button>
      <button :style="type? 'background: #1ca2a2;' : 'background: #A0004F' " @click="redirect(link)">D'accord</button>
    </div>
  </div>
</div> 
</template>


 
<script> 

export default {
    name: "ShowMess",
    mounted() { 
      const mont = this.montant.split(',')
        const sum = mont
  .filter(value => value !== '') // Filtrer les chaînes vides
  .map(Number) // Convertir les chaînes en nombres
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Additionner
 
        this.mont = sum
        this.monts = mont 
   

    }, 
    props: {
      type: {
        type: Boolean,
        required: true
      },
      show: Boolean,
      mess: String,
      link: String,
      montant: String,
      services: [],
      date: String,
    },
    data() {
        return {
            img1: "../../../assets/success.png",
            img2: "../../../assets/error.png",
            monts: [],
            mont: '', 
        }
    },
methods: {
close(){
  this.$router.go(-1);

  }
  ,
  redirect(link=-1) { 
    this.$router.go(link);
  },
  
}
    }
    
</script> 
