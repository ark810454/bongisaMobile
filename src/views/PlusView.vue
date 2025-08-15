<template>
    <div class="container">
        <div class="home plus">

            <div class="account descent">
                <div class="h1">
                    <h1>Plus</h1>
                </div>
                <router-link to="/compte" class="links">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="12" cy="6" r="4" stroke="" stroke-width="1.5"></circle>
                            <path
                                d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                                stroke="" stroke-width="1.5" stroke-linecap="round"></path>
                        </g>
                    </svg>


                    <span class="span">Compte <span>Ici, vous pouvez gerer vos infos personnelles</span></span>
                </router-link>

                <router-link to="/history" class="links">
                    <div class="notiff" style="position: relative;">
                        <span></span>
                        <svg class="countNotif" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M9.10745 2.67414C9.98414 2.24187 10.9649 2 12 2C15.7274 2 18.7491 5.13623 18.7491 9.00497V9.70957C18.7491 10.5552 18.9903 11.3818 19.4422 12.0854L20.5496 13.8095C21.5612 15.3843 20.789 17.5249 19.0296 18.0229C14.4273 19.3257 9.57274 19.3257 4.97036 18.0229C3.21105 17.5249 2.43882 15.3843 3.45036 13.8095L4.5578 12.0854C5.00972 11.3818 5.25087 10.5552 5.25087 9.70957V9.00497C5.25087 7.93058 5.48391 6.91269 5.90039 6.00277"
                                    stroke="" stroke-width="1.5" stroke-linecap="round"></path>
                                <path
                                    d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C12.2445 22 12.4847 21.9827 12.7192 21.9492M16.5 19C16.2329 19.7126 15.781 20.3428 15.1985 20.8393"
                                    stroke="" stroke-width="1.5" stroke-linecap="round"></path>
                            </g>
                        </svg>
                    </div> <span class="span">Historique Notifs <span>Une listes des toutes vos anciennes activités</span></span>
                </router-link>


<router-link to="/portefeuille" class="links">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 8H10" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 10.5C22 10.4226 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.5774 22 13.5" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="18" cy="12" r="1" fill=""></circle> <path d="M13 4C16.7712 4 18.6569 4 19.8284 5.17157C20.6366 5.97975 20.8873 7.1277 20.965 9M10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15M9 4.00093C5.8857 4.01004 4.23467 4.10848 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C3.82475 19.4816 4.69989 19.7706 6 19.8985" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
    <span class="span">Portefeuille <span>Vos dettes et dépenses dans une liste explicative</span></span>
</router-link>


<router-link to="/about" class="links">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z"
                stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>
    <span class="span">A propos <span>Qui sommes? quelles sont nos itineraires à suivre?</span></span>
</router-link>

<div class="links myn" v-if="noteOn"> 
    <span v-if="role == 'Etablissement'" class="span" style="font-size: 14px; font-weight: 500;"><div class="not"></div>Noter le service : {{ 'Nom_service' }}
        <span style="font-size: 12px; max-width: 80%;">Veillez s'il vous plait noter la qualité du travail réalisé par ce service d'assainissement et rececez un certificat d'assainissement.</span>
       <div class="notes">
        <div class="rating">
    <span class="star" data-value="1">&#9733;</span>
    <span class="star" data-value="2">&#9733;</span>
    <span class="star" data-value="3">&#9733;</span>
    <span class="star" data-value="4">&#9733;</span>
    <span class="star" data-value="5">&#9733;</span>
</div>
       </div>
<p id="rating-value">Note: 0</p>
</span>
    </div>
    <br>
    <button class="logout" @click="redirect('/login')">Supprimer mon compte ?</button>
            </div>
            <br><br><br><br><br>
            <BottomBar link1="route" link2="route" link4="activeLink" link3="route" />
        </div>
    </div>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue';
import axios from 'axios'
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';  
//import echo from '@/plugins/echo';
export default {
    name: "PlusView",
    mounted() {
        this.getToken()
        if (this.role == "Etablissement") { 
         this.getNotifE(); 
         this.interval = setInterval(this.getNotifE, 30000);
        }
        else {
            //echo.channel('assainissement')
      //.listen('.task.completed', (event) => {
        //console.log('chargement...', event);});
           
        this.getNotif();
        this.interval = setInterval(this.getNotif, 30000);
        }

    },
    data() {
        return {
            id_auth: null,
            role: null,
            noteOn: false,
            id_ais: null,
        }
    },
    components: {
        BottomBar
    }
    , methods: {
        addNotes() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value'); 
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');

            // Mettre à jour les étoiles
            stars.forEach(s => {
                s.classList.remove('active'); // Retirer la classe active
            });
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('active'); // Ajouter la classe active aux étoiles sélectionnées
            }

            // Afficher la note
            ratingValue.textContent = `Note: ${value}`;

            // Envoyer la note après un court délai
            toast("enregistrement de la note... Veillez patientez SVP!", {
                            timeout: 5000,
                            position: 'bottom-center',
                            hideProgressBar: true,
                        });
                axios.post("https://bongisa.dscrdc.com/api/addNotes/" + this.id_ais, { notes: value })
                .then(response => { 
                    if (response.status === 200) {   
               
                        console.log("Effectué avec succès"); 
                        toast("La note a été enregistrée avec succès", {
                            timeout: 5000,
                            position: 'bottom-center',
                            hideProgressBar: true,
                        });   

                    } else { 
                        console.log("Impossible d'envoyer la requête, réessayez SVP!");
                        toast("Impossible d'enregistrer la note", {
                            timeout: 5000,
                            position: 'bottom-center',
                            hideProgressBar: true,
                        });
                    } 
                })
                .catch(error => {  
                    console.log(error);
                    toast("Une erreur s'est produite!", {
                        timeout: 5000,
                        position: 'bottom-center',
                        hideProgressBar: true,
                    });
                });
            
        });
    });
},
        async getToken() {
            const data = JSON.parse(localStorage.getItem('token'));
            if (data[0]) {
                try {
                    this.id_auth = data[0].id;
                    this.role = data[0].role;
                } catch (error) {
                    console.error('Erreur lors du parsing du token:', error);
                }
            }
        },
        async getNotifE() { 
            await axios.get("https://bongisa.dscrdc.com/api/getNotifE/" + this.id_auth)
                .then(response => {
                    if (response.status === 200) {

                        let count = response.data.notifs.filter(nn => nn.montant != null && !nn.payement);
                        let ff = document.querySelectorAll('.countNotif')
                        if (count.length > 0) { 
                            ff.forEach(element => {
                                let countNotif = element.parentElement.querySelector("span")
                                countNotif.classList.add('ssspp')
                                countNotif.textContent = count.length
                            });
                        }

                        let count2 = response.data.notifs.filter(nn => nn.validation_inspecteur && !nn.seeCertificat);
                        if (count2.length > 0) {
                            ff.forEach(element => {
                                let countNotif = element.parentElement.querySelector("span")
                                countNotif.classList.add('ssspp')
                                countNotif.textContent = count2.length
                            });
                        }

                        let count3 = response.data.notifs.filter(nn => nn.validation_service && !nn.validation_etab);
                       
                        if (count3.length > 0) {
                            this.noteOn = true
                            this.id_ais = count3[0].id
                            setTimeout(() => {
                                this.addNotes()
                            }, 500);
                        } 

                    }
                    else {
                        console.log("Impossible de recuperer les notifs !"+ response)
                    }
                })

                .catch(error => {
                    console.error("Une erreur s'est produite:", error);
                });
        },
        async getNotif() {
            await axios.get("https://bongisa.dscrdc.com/api/getNotif/" + this.id_auth)
                .then(response => {
                    if (response.status === 200) {
                        let count = response.data.notifs.filter(nn => nn.montant == null || nn.seepayement);
                        let ff = document.querySelectorAll('.countNotif')
                        if (count.length > 0) {
                            ff.forEach(element => {
                                let countNotif = element.parentElement.querySelector("span")
                                countNotif.classList.add('notifspan')
                                countNotif.textContent = count.length
                            });
                        }
                    }
                    else {
                        console.log("Impossible de recuperer les notifs !")
                    }
                })
                .catch(error => {
                    console.error("There was an error:", error);
                });
        },
        redirect(link){
            this.$router.push(link)
        }
    }
}
</script>

<style>
.account {
    width: 100%;
    height: 100%;
}

.plus {
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;

    .account {
        width: 90%;
        padding: 16px 5%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 40px !important;
    }

    h1 {
        color: var(--black);
    }

    .links {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 32px;

        svg {
            min-width: 44px;
            min-height: 44px;
            max-width: 44px;
            max-height: 44px;
            stroke: var(--prim) !important;
        }

     .notes{ 
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center; 
  height: 40px; 
  p{
    font-size: 13px;
    font-weight: 600;
  }
}
.rating { 
      /* Pour que les étoiles soient cliquables de droite à gauche */
}

.star {
    padding-left: 5px;
    font-size: 30px!important;
    cursor: pointer;
    color: var(--secondary); /* Couleur par défaut des étoiles */
}

/* .star:hover,
.star:hover ~ .star {
    color: var(--primary); 
} */


.active {
    color: var(--primary)!important; /* Couleur des étoiles actives */
}

        .span {
            color: var(--black);
            font-size: 16px;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            

            span {
                font-size: 14px;
                font-weight: 400;
                color: var(--text);
            }
        }
    }
}
.logout{
    width: max-content!important;
    font-size: 12px!important;
  color: var(--light)!important;
  background: var(--danger)!important;
  padding: 0 24px!important;
  border-radius: 2px!important;
}
</style>