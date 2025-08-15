<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/> <!--  html, body 
      background: transparent
      padding-bottom: env(safe-area-inset-bottom) -->
</template>

<style lang="stylus">
#app 
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale 
  height 100%


  .container
        position: relative
        top:0;left:0
        background-color: var(--white)
        width: 100%
        height: 100vh
        overflow-x: hidden
        overflow-y: hidden
        scroll-behavior: smooth
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center

  .home
    overflow-y: scroll
    scroll-behavior: smooth
    width: 100%
    height: 100%
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    justify-content: start
  

.notifspan
    background: var(--danger);
    width: 20px;
    height: 20px; 
    color: #f2f4f6;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    font-style: italic;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: 0px;
</style>
 <style>
 /* toast.css */

 .Toastify__toast-container--bottom-center {
    bottom: 60px!important;
    left: 50%;
    transform: translateX(-50%);
}
.Toastify__toast {
  border-radius: 24px!important; /* Coins arrondis */
  background-color: var(--light)!important; /* Couleur de fond */
  color: white; /* Couleur du texte */
  max-height: 40px!important;
  box-shadow: 0 4px 8px var(--secondary)!important;
  border: 2px solid var(--white)!important;
  button{
    max-width: 30px!important;
  }
}

.Toastify__toast--success {
  background-color: var(--varPrim); /* Couleur de fond pour le succès */
}

.Toastify__toast-body {
  width: 100%!important;  /* Couleur de fond pour l'info */
  font-size: 14px!important;
}

/* Ajoutez d'autres styles selon vos besoins */
 h1{
    font-size: 24px;
    color: var(--black);
}

form{
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    text-align: center; 
}
button{
    border: none;
    outline: none;
    height: 48px; 
    color: var(--white);
    font-weight: 500;
    border-radius: 8px;
    width: 100%;
    cursor:pointer;
}
#login{
    color: var(--white);
    background: linear-gradient(45deg, var(--varPrim), var(--primary));
}
#login:hover{
    box-shadow: 0 0 10px var(--secVariant);
    background: linear-gradient(45deg, var(--primary), var(--varPrim));
}
.myn{
    position: relative; 
     
}.myn .not{
        background: var(--danger);
    min-width: 10px;
    min-height: 10px; 
    max-width: 10px;
    max-height: 10px; 
    color: #f2f4f6;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    font-style: italic;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: 0px;
    }

 
@media screen  and (max-width: 400px) {
    form{
        width: 300px;
    }
}

@media screen  and (max-width: 330px) {
    form{
        width: 250px;
    } 
}
</style>


<script>  
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import axios from 'axios' 
export default {
  name: 'App',
  created() {
    this.setupBackButtonHandler();
  },
  mounted() {   
    //localStorage.removeItem("token")
   this.getToken() 
if (this.token == null) {
  this.$router.push('/login')
}
document.addEventListener('deviceready', this.startBackgroundFetch);
//this.getNotif()

if (Capacitor.isNativePlatform()) {
  const setNavigationBarColor = async () => {
    try {
      await Capacitor.Plugins.App.addListener('appStateChange', async (state) => {
        if (state.isActive) { 
            // Appel Java natif via Capacitor pour la barre de navigation
            Capacitor.Plugins.ModifySystemUI?.setNavigationBarColor({ color: '00000022' });
          
        }
      });
    } catch (error) {
      console.error("Erreur en configurant la barre de navigation :", error);
    }
  };

  document.addEventListener('DOMContentLoaded', setNavigationBarColor);
}

  }, data() {
        return { 
            token: null,
            id_auth: null,
        }
    },
  methods: { 
    startBackgroundFetch() {
      // Configurer le Background Fetch
      window.BackgroundFetch.configure({ minimumFetchInterval: 15 }, async (taskId) => {
        this.status = 'Tâche exécutée';

        // Insérez votre logique pour gérer les données ici
        console.log('Background fetch task executed:', taskId);

        // Terminez la tâche
        window.BackgroundFetch.finish(taskId);
      }, (error) => {
        console.error('Échec du démarrage du Background Fetch:', error);
      });

      // Optionnel : Écoutez les événements de récupération
      window.BackgroundFetch.on('fetch', (taskId) => {
        console.log('Background fetch event received:', taskId);
        // Terminez la tâche
        window.BackgroundFetch.finish(taskId);
      });
    },
    setupBackButtonHandler() {
      App.addListener('backButton', () => {
        // Logique pour gérer le bouton retour
        if (this.shouldGoBack()) {
          this.$router.back(); // Naviguer vers la page précédente
        } else {
          App.exitApp(); // Fermer l'application
        }
      });
    },
    shouldGoBack() {
      // Ajoutez votre logique pour déterminer si vous devez revenir en arrière
      // Par exemple, vérifier l'historique de navigation
      return this.$router.currentRoute.path != '/'; // Exemple : ne pas revenir si on est déjà sur la page d'accueil
    },
   async getToken() { 
    const data = JSON.parse(localStorage.getItem('token'));
    if (data[0]) {     
        try {
            this.token = data[0].email;
            this.id_auth = data[0].id;
        } catch (error) {
            console.error('Erreur lors du parsing du token:', error);
        }
    }  
},
async  getNotif(){ 
await axios.get("http://127.0.0.1:8000/api/getNotif/"+ this.id_auth)
.then(response => { 
if (response.status === 200) {  
  let count = response.data.notifs.filter(nn => nn.readed);  
  let ff = document.querySelectorAll('.countNotif') 
  if (count.length > 0) {
    ff.forEach(element => {
      let countNotif = element.parentElement.querySelector("span")
      countNotif.classList.add('notifspan')
      countNotif.textContent = count.length
    }); 
  }
} 
else
{ 
    console.log("Impossible de recuperer les notifs !" )
} 
})
.catch(error => {  
console.error("There was an error:", error);
});
},
  },
  beforeUnmount() {
    // Nettoyer l'écouteur lorsque le composant est détruit
    App.removeAllListeners();
  }
}
</script>
 