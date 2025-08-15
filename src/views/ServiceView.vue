<template>
    <div class="container ggg serv">
        <div class="home hhh">
            <NavBack class="navBack" title="Services d'Hygiène" color-svg="#e5eaf0"/>
            <div class="h1 descent" >
                <h1>{{ etTitle }}</h1>
                <span>{{ etDesc }}</span>
                <form class="search" id="search">
                  <input type="search" name="search" placeholder="Recherche...">
                  <button><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="" fill-rule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg></button>
                </form>  <p class="nbrSearch" ref="nbrS"></p>
                
            </div>
            <BottomBar 
            link1="route" 
            link3="route" 
            link2="activeLink" 
            link4="route" 
            />
            <div class="cardsds opop">
                <MyCard2
              v-for="(etab, index) in etablissements"
        :key="index"
        :title="etab.nomEt" 
        :id="etab.id"
        :logo="etab.logo"
        :detail=true
        :text="etab.email"
        :notes="notes"
        :show="etab.role == 'Etablissement'? false : true"
              />  
            </div>
            <div class="cardsds loadd"> 
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
              <LoaderCard2 :detail=true />  
            </div>
            <br><br><br><br><br><br><br>
        </div>
    </div>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue';  
import NavBack from '@/components/NavBack.vue'; 
import LoaderCard2 from '@/components/LoaderCard2.vue';
import MyCard2 from '@/components/MyCard2.vue';
import axios from 'axios'
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
/* import echo from '@/plugins/echo'; */

export default {
    name: "ServiceView",
    mounted() { 
    let cards = document.querySelectorAll('.cardsds')
    cards[0].style="display:none" 
      
       /* echo.channel('assainissement')
      .listen('.task.completed', (event) => {
        console.log('Mise à jour des assainissements', event);
        
      }); */
     this.getAssaini() 
    this.getRole()

    let formSearch = document.getElementById('search')
    let searchh = formSearch.querySelector('input')
    formSearch.addEventListener('submit', (e)=>{
      e.preventDefault()
      this.search(searchh.value)
    })

    searchh.addEventListener('input', ()=>{
      this.search(searchh.value)
    })
    
  },
  data() {
      return {
    etablissements: [] ,
    ett: [],
          etTitle: '',
          etDesc: '',
          role: null,
          notes: [],
      }
  }, 
  components:{
      BottomBar,
      NavBack, 
      MyCard2, 
    LoaderCard2,
  }, 
  computed: {
    serv() {
      return this.$route.params.serv
    }
  },
  methods: { 
    search(value){ 
      let ets = this.ett
      this.etablissements = []
      ets.forEach(et => {
        let nom = et.nomEt
        nom = nom.toLowerCase()
        if (nom.includes(value.toLowerCase())) { 
          this.etablissements.push(et) 
        }
      });
      if (value === "") {
      this.$refs.nbrS.textContent = ""
      }
      else{
      this.$refs.nbrS.textContent = `Resultats trouvés: ${this.etablissements.length}`
      }
    },
    filterByServ(value){ 
      let ets = this.ett 
      this.etablissements = []
      ets.forEach(et => {
        let servs = et.services
        servs = servs.toLowerCase()
        if (servs.includes(value.toLowerCase())) { 
          this.etablissements.push(et)
        }
      });
    },
    async getRole() { 
    const data = JSON.parse(localStorage.getItem('token'));
    if (data[0]) {    
        try {
            this.role = data[0].role;
            if (this.role == 'Service_assaini') {
              this.etTitle = "Etablissements"
              this.etDesc = "Parcourez cette liste des établissements qui pourront avoir besoin de vos services."
            }else if(this.role == "Etablissement"){
              this.etTitle = "Services d'Assainissement"
              this.etDesc = "Découvrez les services d'hygiène adaptés à votre établissemnt...  "
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
    this.ett = this.etablissements
    if (this.serv) {
      this.filterByServ(this.serv)
    } 
    let cards = document.querySelectorAll('.cardsds')
    cards[1].style="display:none"
    cards[0].style="display:flex"
 
    }else
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
  }
}
}
</script>

<style>
.serv .hhh{
  justify-content: start!important;
}
.cardsds{
    max-width: 80%!important; 
    width: 80%!important; 
    height: max-content!important; 
    margin: 0!important; 
    display: flex;
    flex-wrap: wrap;
    align-items: start!important;
    justify-content: center!important;
    flex-basis: 1; 
    gap: 8px;
    .notess span{
      font-size: 24px!important;
    }  
}
.navBack h3{
    color: var(--light);
}
.ggg .h1{
    padding: 20px 0 0 0!important;
    width: 80%;
    text-align: start;  
    span{
      font-size: 14px;
      color:  var(--lightText); 
    }
} 
.cardsds .carddd{
       min-width: 220px!important;
       height: 170px!important;
       padding: 24px!important;
    }
    .cardsds .carddd button{
    width: 40px!important;
    height: 40px!important;
 }
 .cardsds .carddd img{
    width: 50px!important;
    height: 50px!important;
 }
 .cardsds .carddd h1{
    font-size: 20px!important; 
 }
 .nbrSearch{
  color: var(--danger);
  margin-top: 16px;
 }
 .search{ 
  margin-top: 24px;
  min-width: 350px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0!important;
  background: #ebeef222;
  border-radius: 8px;
  input{
    height: 100%;
    width: 80%;
    padding: 0 16px;
    background: none;
    outline: none!important;
    border: none; 
    color: var(--light)!important;
    &::placeholder{
      color: var(--lightText);
    }
  }
  button{
    background:none!important; 
    border: 0px!important;
    border-left: 2px solid var(--lightText);
    height: 80%;
    width: 15%!important;
    margin: auto!important;
    padding: 0!important;
    svg{
      width: 20px;
      height: 20px;
      fill: var(--light)!important;
    }
  }
 }
@media screen and (max-width: 750px) {
    .cardsds { 
    max-width: 94%!important;
    width: 94%!important;
}
    .cardsds .carddd{
       width: 210px!important;
    padding: 24px!important;
    }
}
@media screen and (max-width: 600px) { 
  .ggg .h1{ 
    width: 92%!important; 
}
    .cardsds .carddd{
       min-width: 45%!important;
       width: 45%!important;
       padding: 2%!important;
    }
}
@media screen and (max-width: 500px) { 
   .cardsds .carddd{
       min-width: 42%!important;
       width: 42%!important;
    } 
    .search{
      width: 100%;
      min-width: 100%!important;
    }
    .cardsds { 
    max-width: 98%!important;
    width: 98%!important;
}
}
@media screen and (max-width: 350px) {
    .cardsds .carddd{
       min-width: 80%!important;
       width: 80%!important; 
    }
  }
@media screen and (max-width: 330px) {
    .cardsds .carddd{
       min-width: 90%!important;
       width: 90%!important; 
    }
  
}
</style>

