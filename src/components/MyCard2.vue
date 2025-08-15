<template>
    <div
      class="carddd"
    > 
    
        <div class="df">  
        <div class="cardTete"><button @click="redirect()"> 
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#f2f4f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
      </button>  
      <img :src="'../'+logo">
        </div>
            <div class="tttt">
              <h1 class=" ">{{ title }}</h1>  
            <span v-if="detail"> {{ text }} </span>
            <div class="notess" v-if="show">
        <div  ref="rating">
    <span data-value="1">&#9733;</span>
    <span data-value="2">&#9733;</span>
    <span data-value="3">&#9733;</span>
    <span data-value="4">&#9733;</span>
    <span data-value="5">&#9733;</span>
</div>
       </div>
<span style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;">
  <span style="width: auto;" v-if="show">Note: {{ notess }}</span>
  <span style="width: auto;"  v-if="show">{{ nbr }} Fois</span>
</span>
            </div>
        </div>
  
    </div>
  </template>
  
<script> 
export default {
    name: "MyCard2",
    mounted() {       
     if (this.show) {
       this.getAssaini() 
     }
    },
    props: {
      detail: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
      title: {
      type: String,
      required: true,
      default: '' // Valeur par défaut
    },
    text: {
      type: String,
      required: true,
      default: '' // Valeur par défaut
    },
    id: {
      type: Number, // Utilisez Number pour les entiers
      required: true,
      validator: function(value) {
        return Number.isInteger(value); // Validation pour s'assurer que c'est un entier
      }
    },
    logo: {
      type: String,
      required: true,
      default: 'assets/logo.png'
    },
    notes: Array,
  },
  data() {
    return{ 
      notess: "0/5",
      nbr: 0,
    }
  },
    methods: {
      redirect(){
        this.$router.push({ name: "openEt", params: { id: this.id } });
      },
      async  getAssaini(){  
    let sum =0; 
  const starss = this.$refs.rating.querySelectorAll('span'); 
            // Afficher la note
  if (this.notes.length > 0) { 
    let nn = this.notes.filter(n => n.id_serv === this.id)    
    this.nbr = nn.length
    nn.forEach(element => {
      sum += element.notes
    }); 
    let m = sum/(5* nn.length) 
    let moyenne = m * 5
       this.notess = `${moyenne}/5`
            for (let i = 0; i < moyenne; i++) {
                starss[i].classList.add('active'); // Ajouter la classe active aux étoiles sélectionnées
            }
        
  } 
 
},
    }
}
</script>

<style>
.carddd{
    min-width: 160px;
    width: 160px;
    border-radius: 16px; 
    height: 120px;
    padding: 10px; 
    display: flex;  
    align-items: start;
    justify-content: space-between;
    background-color: #ebeef222; 
overflow: hidden;
  border-radius: 1rem; 
}
.carddd .df{
    display: flex;
    flex-direction: column;
    justify-content: space-between!important;
    align-items: start;
    gap: 4px;
    width: 100%;
    height: 100%;
}
.carddd .cardTete{
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
}
.carddd .tttt{
    display: flex;
    flex-direction: column;
    gap: 8px; 
    overflow: hidden;
    width: 100%;
}
.carddd .df img{
  width: 30px;
  height: 30px;
  object-fit: contain;
}
.carddd h1{
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.carddd span{
    font-size: 13px;
    color: var(--lightText);
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
    width: 95%;
}
 .carddd button{
    background: #e3e8ef22!important;
    padding: 8px;
    border-radius: 50%;
    width: 32px!important;height: 32px!important;
}
.carddd svg{
    width: 16px;
    height: 16px;
    opacity: 0.6;
}
.notess span {
    padding-left: 5px;
    font-size: 16px!important;
    cursor: pointer;  /* Couleur par défaut des étoiles */ 
}

/* .star:hover,
.star:hover ~ .star {
    color: var(--primary); 
} */

.active {
    color: gold!important; /* Couleur des étoiles actives */
}
</style>