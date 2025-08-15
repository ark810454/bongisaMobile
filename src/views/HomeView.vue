<template>
  <div class="container"> 
      <div class="home hhh">
     <NavTop :title="nomEt" btnStitle="dontSee"/> 
      <div class="content">
        <div class="popular">
          <div class="pp">
            <p>Types Services</p> 
         </div>   
         <div class="cards">
              <MyCard title="Dératisation" desc="Ici une petite description sur le service"/>
              <MyCard title="Désinfection" desc="Ici une petite description sur le service"/>
              <MyCard title="Vidage" desc="Ici une petite description sur le service"/> 
              <MyCard title="Désinsectis." desc="Ici une petite description sur le service"/>
            </div>
            <div class="cards">
              <LoaderCard/>
              <LoaderCard/>
              <LoaderCard/>
              <LoaderCard/>
            </div>
            
        </div>

        <div class="popular">
          <div class="pp">
            <p>{{ etTitle }}</p>
            <button @click="redirect('/service')" >Plus <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#f2f4f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
         </div>   
         <div class="cards nomInc">
              <MyCard2
              v-for="(etab, index) in etablissements"
        :key="index"
        :title="etab.nomEt" 
        :id="etab.id"
        :logo="etab.logo"
        text=""
        :detail=false
        :notes="notes"
        :show="etab.role == 'Etablissement'? false : true"
              />  
            </div>
            <div class="cards">
              <LoaderCard2 :detail="false" />  
              <LoaderCard2 :detail="false" />  
              <LoaderCard2 :detail=false />  
              <LoaderCard2 :detail=false />  
              <LoaderCard2 :detail=false />  
              <LoaderCard2 :detail=false />  
              <LoaderCard2 :detail=false />  
              <LoaderCard2 :detail=false />  
              <LoaderCard2 :detail=false />  

            </div>
          <br><br><br><br><br><br>
        </div>
      </div>

    </div> 
    
    <BottomBar 
            link3="route" 
            link2="route" 
            link1="activeLink" 
            link4="route" 
            />
  </div>
  
  <DateDecompte :role="role" :id="id_auth"/>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue';
import NavTop from '@/components/NavTop.vue';
import MyCard from '@/components/MyCard.vue';
import LoaderCard from '@/components/LoaderCard.vue';
import LoaderCard2 from '@/components/LoaderCard2.vue';
import MyCard2 from '@/components/MyCard2.vue';
import axios from 'axios'
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import DateDecompte from '@/components/DateDecompte.vue'; 
//import echo from '@/plugins/echo'; 

export default {
  name: "HomeView",
  mounted() { 
    this.getRole() 

    let cards = document.querySelectorAll('.cards')
    cards[0].style="display:none"
    cards[2].style="display:none" 
    //echo.channel('assainissement')
     // .listen('.task.completed', (event) => {
        //console.log('Mise à jour des assainissements', event);});
          this.getAssaini() 
  },
  data() {
      return { 
          etTitle: '',
          role: null,
          nomEt: '',
    show: false,
    etablissements: [] , 
    id_auth: null,
    notes: [],
      }
  }, 
  components:{
      BottomBar,
      NavTop,
      MyCard,
      MyCard2,
    LoaderCard,
    LoaderCard2,
    DateDecompte,
  },
  methods: { 
  redirect(link){
    this.$router.push(link)
  },

  async getRole() { 
    const data = JSON.parse(localStorage.getItem('token'));
    if (data[0]) {    
        try {
            this.role = data[0].role; 
            this.id_auth = data[0].id;  
            this.nomEt = data[0].nomEt; 
            if (this.role == 'Service_assaini') {
              this.etTitle = "Etablissements"
            }else if(this.role == "Etablissement"){
              this.etTitle = "Service d'Assainissement"
            }
        } catch (error) {
            console.error('Erreur lors du parsing du token:', error);
        }
    }  
},

async  getAssaini(){  
await axios.get("https://bongisa.dscrdc.com/api/getNotifAll")
.then(response => { 
if (response.status === 200) { 
  this.notes = response.data.notifs.filter(nn => nn.notes > 0);   
  this.getEtablis()  
} 
})
.catch(error => {  
console.error("There was an error:", error.status);
});
},
  getEtablis(){
    axios.get("https://bongisa.dscrdc.com/api/getEtablis")
 .then(response => { 
    if (response.status === 200) {  
      this.etablissements = response.data.users.filter(user => user.role !== this.role);
    this.etablissements = this.etablissements.sort(() => Math.random() - 0.5); 
    this.etablissements = this.etablissements.slice(0, 9)
    let cards = document.querySelectorAll('.cards')
    cards[3].style="display:none"
    cards[2].style="display:flex"    

    
    cards[1].style="display:none"
        cards[0].style="display:flex" 

    } else
    { 

    toast("Impossible d'afficher les établissements", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
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

}
}

</script>

<style   >
chris{
  height: 1px;
  background: var(--border);
  width: 200px;
}
.spanError{
  font-size: 12px;
  text-align: center;
  width: 100%;
  color: var(--light);
  opacity: 0.8;
}
.hhh .space{opacity: 0;}
.hhh{
  width: 100%;
  height: 100%!important;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--primary) 10%, var(--blackkk) 80%);
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth; 
}
.content{ 
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
}
.popular{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.popular .pp{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%; 
  margin-top: 24px;
}
.cards{
  width: 94%;
  margin: 0 3%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden; 
  scroll-behavior: smooth;
  gap: 12px;
  padding: 16px!important;
}
.popular ::-webkit-scrollbar{
    height: 8px;
    background: none;
}
.popular  ::-webkit-scrollbar-corner{
    height: 8px;
    background: none;
}
.popular ::-webkit-scrollbar-thumb{
    height: 8px;
    background: none;
}
.pp p{
  font-size: 16px;
  color: var(--white);
  font-weight: 600;
  opacity: 0.8;
}
.popular button{
  background: none;
  font-size: 13px;
  color: var(--light);
  height: auto!important;
  width: auto!important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
button svg{
  width: 20px;
  height: 20px; 
}
.popular svg{
  fill: var(--primary)!important;
}
 
@media screen  and (max-width: 991px) {
  .illus{
  width: 40%;
  height: auto;
}
}
@media screen  and (max-width: 700px) {
  .illus{
  width: 60%;
  height: auto;
}
}
@media screen  and (max-width: 500px) {
  .illus{
  width: 80%;
  height: auto;
}
}
@media screen  and (max-width: 330px) {
   .illus{
    width: 50%;
   }
   .imgbottom{
    width: 100px!important;
    right: -30px;
   }
   .imgtop{
    width: 100px;
    left: -20px;
   }
}
</style>
