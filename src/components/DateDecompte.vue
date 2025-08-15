<style>
.decompte {
  position: absolute;
  bottom: -100px; 
  width: 99%;
  height: 70%;
  max-height: 70%;
    background: var(--light);
    border: 2px solid var(--light);
    border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 55;
  visibility: visible !important;
    .close { 
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        width: 60%;
        height: 3px;
        background-color: var(--border);
      } 
    }
  .containerChoix {
  overflow-y: scroll;
    width: 94%;
    max-width: 94%;
    height: auto;
    padding: 0 3% 24px 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .listeChoix {
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      p {
        padding: 0 50px 0 0;
        font-size: 14px;
        color: var(--black);
        font-weight: 600;
      }
      span {
        font-size: 13px !important;
      }
      .listes {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    }
    .dec {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
    .dec p {
      font-size: 24px;
      font-weight: 700;
      color: var(--danger);
    }
  }
  .actionChoix {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  button {
    width: auto !important;
    border-radius: 4px !important;
    padding: 0 16px !important;
    max-height: 32px;
    color: var(--prim) !important;
    font-weight: 500;
    color: var(--light) !important;
    background: var(--danger) !important;
    font-size: 13px !important;
    svg{
      fill: var(--light);
    }
  }
}
.Certificat{
  display: flex!important;
}
.decop {
  position: absolute;
  top: 55px;
  width: auto !important;
  z-index: 55;
  right: 15%;
  height: 32px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0 !important;
  gap: 8px;
  font-size: 12px;
  color: var(--light);
  background: var(--danger);
  svg {
    fill: var(--light);
    width: 16px;
    height: 16px;
  }
}.decop2 {
  position: absolute;
  top: 55px;
  width: auto !important;
  z-index: 55;
  right: 15%;
  height: max-content;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 0 !important;
  gap: 8px;
  font-size: 12px;
  color: var(--light);
  background: var(--danger);
  span{
    max-height: 16px;
  }
  button{
    background: none!important;
    width: auto!important;
    height: auto!important;
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0 !important;
  font-size: 12px!important;
  gap: 8px;
  }
  svg {
    fill: var(--light)!important;
    width: 16px;
    height: 16px;
    transform: rotate(270deg)!important;
  }
}
</style>

<template>
  <button
    v-if="role == 'Etablissement'"
    :style="hide"
    @click="show = !show"
    class="decop"
  >
    {{ diff }} jours restant
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke=""
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
          fill=""
        ></path>
      </g>
    </svg>
  </button>
  <div class="servRappel"></div>
    
  <div
    :class="{ decompte: show }"
    v-if="role == 'Etablissement'"
    style="visibility: hidden; position: absolute"
  >
      <div class="close" @click="close"> 
        <div></div>
      </div>
    <div class="containerChoix">
      <div class="listeChoix">
        <button @click="downloadFile"  :class="{'Certificat' : showCertificat}" style="max-height: 55px!important; font-size: 12px!important; display:  none; align-items: center; justify-content: center; gap: 8px;">Télecharger le certificat <br> de votre précedent assainissement  
          <svg v-if="showCertificat" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/></svg>
        </button>
        <p>
          Decompte pour la date du prochain <br />
          assainissement
        </p>

        <div class="listes">
          <div class="depart">
            <span
              >Date départ: <span>{{ jour }}</span></span
            >
          </div>
          <div class="depart">
            <span
              >Date fin: <span>{{ fin_jour }}</span></span
            >
          </div>
        </div>

        <div class="dec">
          <span>Il reste: </span>
          <p>{{ diff }} jours</p>
        </div>
      </div>
      <div class="actionChoix"> 
      </div>
      <br><br><br><br><br>
    </div>
  </div>

  <div
    :class="{ decompte: show }"
    v-if="role == 'Service_assaini'"
    style="visibility: hidden; position: absolute"
  >
   
  </div>
</template>

<script> 
/* import { Filesystem, Directory } from '@capacitor/filesystem'; */
/* import { Http } from '@capacitor-community/http'; */
import axios from "axios"; 
//import echo from "@/plugins/echo";
export default {
  name: "DateDecompte",
  mounted() {
 
       // echo.channel('assainissement')
      //.listen('.task.completed', (event) => {
       // console.log('Mise à jour des assainissements', event);});
      
        this.getDate();
  },
  props: {
    id: Number,
    role: String,
  },
  data() {
    return {
      ff: [],
      ff2: [],
      id_auth: null,
      show: false,
      jour: null,
      fin_jour: null,
      jour2: [],
      fin_jour2: [],
      diff: null,
      diff2: [],
      currentJour: null,
      hide: "display: none",
      hide2: "display: none",
      showCertificat: false,
            path_certificat: '',
            id_certif: null,
    };
  },
  methods: {
   /*  async downloadFile() {
    try {
        const fileUrl = `https://bongisa.dscrdc.com/api/download/${this.path_certificat}`;
        const customName = 'Mon_certificat_d_assainissement.pdf';

        // Télécharger le fichier avec axios
        const response = await axios.get(fileUrl, { responseType: 'blob' });

        // Afficher les en-têtes pour vérifier le Content-Type
        console.log('En-têtes de la réponse :', response.headers);

        // Vérifier que le fichier est bien un PDF
        const contentType = response.headers['content-type'];
        console.log('Type MIME du fichier :', contentType);

        // Si le type MIME n'est pas défini, ignorer la vérification
        if (!contentType || contentType !== 'application/pdf') {
            throw new Error('Le fichier téléchargé n\'est pas un PDF.');
        }

        // Convertir le Blob en ArrayBuffer (binaire)
        const buffer = await response.data.arrayBuffer();

        // Sauvegarder le fichier directement en binaire
        await Filesystem.writeFile({
            path: `certificats/${customName}`,
            data: new Uint8Array(buffer),
            directory: Directory.Documents
        });

        console.log('Téléchargement terminé avec succès !');

        // Envoyer la requête d'accusé de réception
        await axios.post(`https://bongisa.dscrdc.com/api/seeCertificat/${this.id_certif}`);
        this.showCertificat = false;
    } catch (error) {
        console.error('Erreur lors du téléchargement :', error);
    }
}, */

downloadFile() {
            try { 
  
  // Obtenir l'URL du fichier PDF
  const fileUrl = `https://bongisa.dscrdc.com/api/download/${this.path_certificat}`;
  const customName = 'Mon_certificat_d_assainissement.pdf'; 
  // Rediriger vers l'URL pour télécharger le fichier
   let ff = location.href = fileUrl + '?download=true&' + `customName=${encodeURIComponent(customName)}`; 
        
// Créer un lien temporaire pour le téléchargement
/* const link = document.createElement('a');
link.href = fileUrl;
link.setAttribute('download', customName); // Nom personnalisé du fichier
document.body.appendChild(link);
link.click(); // Simuler le clic pour déclencher le téléchargement
        let ff =  link.parentNode.removeChild(link); // Nettoyer le DOM */
        if (ff) {
          axios.post("https://bongisa.dscrdc.com/api/seeCertificat/"+ this.id_certif)
.then(response => {  
if (response.status === 200) {   
    console.log("Effectuer avec succes")   
    this.showCertificat = false 
} 
else
{ 
    console.log("Impossible d'envoyer la requete, ressayez SVP!")
} 
})
.catch(error => {  
    console.log(error)
 
});
        }  
 
            } catch (error) {
                console.error('Erreur lors du téléchargement :', error);
            }
        },
    
    async sendRappel() { 
      if (this.role == "Etablissement") {
        if (this.diff >= 1 && this.diff <= 90) {
          this.hide = "display:flex";
        } else { 
          this.hide = "display:none";
        }
      } else {
       if (this.ff2.length > 0) { 
        let servRappel = document.querySelector('.servRappel')
            let div = document.createElement('div')
            div.classList.add('decop2')
       
    
    this.ff2.forEach((el, i) => {
      
          if (this.diff2[i] >= 1 && this.diff2[i] <= 90) { 
            let button = document.createElement('button')
            let svg = `<svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke=""
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
          fill=""
        ></path>
      </g>
    </svg> `
    let spanSvg = document.createElement('span')
    spanSvg.innerHTML= svg 
            button.textContent = "Rappel d'Assainis. !!!"
    button.appendChild(spanSvg) 
            button.addEventListener('click', ()=>{ 
              this.$router.push({ name: "validAss", params: { id: el.id, id_p: el.id_etab } })
            })
            this.hide2 = "display:flex";
            div.appendChild(button) 
        }else{
          let button = document.createElement('button') 
            button.textContent = `Jour d'ass. -${this.diff2[i] - 90}`  
            this.hide2 = "display:flex";
            div.appendChild(button) 
        } 
        });
        servRappel.appendChild(div)
       }
      }
    },
    async getDate() {
      await axios
        .get("https://bongisa.dscrdc.com/api/getNotifAll")
        .then((response) => { 
          if (response.status === 200) {
            response.data.notifs.filter(nn =>{

    if (this.id == nn.id_etab) {
      if (nn.validation_service && nn.validation_inspecteur && nn.validation_etab && !nn.seeCertificat) { 
          this.showCertificat = true
          this.path_certificat = nn.path_certificat
          this.id_certif = nn.id
        } 
    }
   }) 

            this.ff2 = response.data.notifs.filter(
              (nn) =>
                (nn.id_etab == this.id || nn.id_serv == this.id) &&
                nn.payement &&
                !nn.validation_service &&
                nn.type == "auto"
            );
            this.ff = response.data.notifs.filter(
              (nn) =>
                (nn.id_etab == this.id || nn.id_serv == this.id) &&
                nn.payement &&
                nn.validation_service &&
                nn.validation_inspecteur 
            );
            if (this.ff.length > 0) {
              this.jour = this.ff[0].update_valid_insp; 
            // Ajouter 90 jours
            const daysToAdd = 90;
            const resultDate = new Date(this.jour);

            // Utiliser setDate pour ajouter les jours
            resultDate.setDate(resultDate.getDate() + daysToAdd);

            // Fonction pour formater la date au format français (d/m/y)
            const formatDateFrench = (date) => {
              const day = String(date.getDate()).padStart(2, "0"); // Ajoute un zéro devant si nécessaire
              const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
              const year = date.getFullYear();
              return `${day}/${month}/${year}`;
            };

            this.fin_jour = formatDateFrench(resultDate); // Format français

            const currentDate = new Date();
            this.currentJour = formatDateFrench(currentDate);
            const gg = new Date(this.jour);
            // Calculer la différence en millisecondes
            const diffInMilliseconds = resultDate - currentDate;

            // Convertir la différence en jours
            const diffInDays = Math.ceil(
              diffInMilliseconds / (1000 * 60 * 60 * 24)
            );
            this.jour = formatDateFrench(gg);
            this.diff = diffInDays;
            }

           if (this.ff2.length > 0) {
            this.ff2.forEach(el => {  
            // Ajouter 90 jours
            const daysToAdd = 90;
            const resultDate = new Date(el.jour);

            // Utiliser setDate pour ajouter les jours
            resultDate.setDate(resultDate.getDate() + daysToAdd);

            // Fonction pour formater la date au format français (d/m/y)
            const formatDateFrench = (date) => {
              const day = String(date.getDate()).padStart(2, "0"); // Ajoute un zéro devant si nécessaire
              const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
              const year = date.getFullYear();
              return `${day}/${month}/${year}`;
            };

            this.fin_jour2.push(formatDateFrench(resultDate)); // Format français
            const currentDate = new Date();
            this.currentJour = formatDateFrench(currentDate);
            const gg = new Date(el.jour);


            const diffInMilliseconds = resultDate - currentDate;

// Convertir la différence en jours
const diffInDays = Math.ceil(
  diffInMilliseconds / (1000 * 60 * 60 * 24)
); 
this.diff2.push(diffInDays);
            
            this.jour2.push(formatDateFrench(gg)); 
            });
           }


            this.sendRappel();
          } else {
            console.log("Impossible de recuperer les notifs !");
          }
        })
        .catch((error) => {
          console.error("There was an error:", error);
        });
    },
    close() {
      this.show = false;
    },
    startBackgroundFetch() {
      // Configurer le Background Fetch
      window.BackgroundFetch.configure(
        { minimumFetchInterval: 15 },
        async (taskId) => {
          this.status = "Tâche exécutée";

          // Insérez votre logique pour gérer les données ici

          console.log("Background fetch task executed:", taskId);

          // Terminez la tâche
          window.BackgroundFetch.finish(taskId);
        },
        (error) => {
          console.error("Échec du démarrage du Background Fetch:", error);
        }
      );
      // Optionnel : Écoutez les événements de récupération
      window.BackgroundFetch.on("fetch", (taskId) => {
        console.log("Background fetch event received:", taskId);
        // Terminez la tâche
        window.BackgroundFetch.finish(taskId);
      });
    },
  },
};
</script>
