<template>
    <div :class="{'card' : isOpen}" style=" width: 92%;
    height: auto;
    padding: 8px 4%;
    border-radius: 16px;
    background: var(--light2);
    display: flex;
    flex-direction: column; ">
        <div class="headCard" @click="seep">
            <div v-if="!payement" ref="nnn" :class="this.etat? 'read' : 'unread'">
                <div  v-html="this.etat? this.svgRead : this.svgUnread "></div>
 
             <div class="title">
                 <p>{{ title }}</p>
                 <span>{{ "Il y'a "+ this.calculTime(time) }}</span>
             </div>
            </div>
            <div v-if="payement===true" ref="nnn" class="paye">  
             <div class="title">
                 <p>Payement effectué par l'établissement <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></p>
                 <span>{{ "Il y'a "+ this.calculTime(time2) }}</span>
             </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" :class="{'open' : isOpen}"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000080"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>
        <div :class="{'bodyCard': isOpen}" style="max-height: 0px;">
            <p :class="{'par': isOpen}" style="display: none;">{{ text }} </p><p  :class="{'par': isOpen}" style="display: none;" v-if="role == 'Etablissement'"> Montant Total: {{ this.monts }}$</p>

            <div :class="{'actBtn': isOpen}"  style="display: none;" v-if="role == 'Service_assaini'">
                <button @click="redirect">Voir l'établis.</button>
                <button @click="sendCertificat" :class="{'disabledBtn':this.etat}" :disabled="this.etat">Accepter</button>
            </div>

            <div :class="{'actBtn': isOpen}"  style="display: none;" v-if="role == 'Etablissement'">
                <button @click="redirect">Voir service</button>
                <button @click="openPayement" :class="{'disabledBtn':this.etat}" :disabled="this.etat">Payement</button>
            </div>
        </div>
    </div> 
</template>
<script> 
import axios from 'axios'  

export default {
    name: "NotifCard",
    mounted() { 
        if (this.montant) {
            const mont = this.montant.split(',')
        const sum = mont
  .filter(value => value !== '') // Filtrer les chaînes vides
  .map(Number) // Convertir les chaînes en nombres
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Additionner
 
        this.monts = sum
        }
    },
    props:{
        id: null, 
        title: String,
        time: String,
        time2: String,
        text: String,
        classSvg: String,
        etat: Boolean,
        id_etab: null,
        role: String,
        payement: {type:Boolean, default: false},
        see: {type:Boolean, default: false},
        services: {type:String, default: ""},
        montant: {type:String, default: ""},
    },
    components: {
        
    },
    data() {
        return {
            isOpen: false, 
            show: true,
            svgRead: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000080"><path d="M638-80 468-250l56-56 114 114 226-226 56 56L638-80ZM480-520l320-200H160l320 200Zm0 80L160-640v400h206l80 80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v174l-80 80v-174L480-440Zm0 0Zm0-80Zm0 80Z"/></svg>',
            svgUnread: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000080"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>',
             monts: "",
        }
    }, 
    methods: {
        seep(){
            this.isOpen= !this.isOpen
            if (this.see) {
                axios.post("https://bongisa.dscrdc.com/api/seePayement/"+ this.id)
.then(response => { 
if (response.status === 200) {   
    console.log("Effectuer avec succes")    
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
        },
       openPayement(){ 
        this.$router.push({ name: "modePayement", params: { id: this.id , montant: this.montant } });
       },
        redirect(){
        this.$router.push({ name: "openEt", params: { id: this.id_etab } });
      },
      sendCertificat() { 
            if(!this.etat){
                this.$router.push({ name: "montant", params: { id: this.id, services: this.services } });
            }
        },
        calculTime(time){  // Assurez-vous que value.created_at est une chaîne de date valide
const timestamp = new Date(time).getTime() / 1000; // Convertir la date en timestamp (secondes)
const now = Math.floor(Date.now() / 1000); // Obtenir le timestamp actuel en secondes
const diffSeconds = now - timestamp;
let diffMinutes = Math.floor(diffSeconds / 60);
diffMinutes = diffMinutes - 60

let phrase;

if (diffMinutes >= 525600) {
   return phrase = Math.floor(diffMinutes / 525600) + " ans";
} else if (diffMinutes >= 43200) {
    return phrase = Math.floor(diffMinutes / 43200) + " mois";
} else if (diffMinutes >= 1440) {
    return  phrase = Math.floor(diffMinutes / 1440) + " j";
} else if (diffMinutes > 60) {
    return phrase = Math.floor(diffMinutes / 60) + " h";
} else if (diffMinutes > 0) {
    return phrase = diffMinutes + " min";
} else {
     phrase = "qlqs sec";
    return phrase
} 
        }
    }
}
</script>
<style  >
.card{
    width: 92%;
    height: auto;
    padding: 8px 4%;
    border-radius: 16px;
    background: var(--light)!important;
    display: flex;
    flex-direction: column;
}
.headCard{
    width: 100%;
    height: 56px!important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.headCard .read, .unread,.paye{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
.title{
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: start;
    justify-content: center;
}

.unread  p{
    font-size: 14px;
    color: var(--black);
    font-weight: 600;
}
.paye  p{
    font-size: 14px;
    color: var(--primary);
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%; 
    svg{
    stroke: var(--primary);
    width: 24px;
    height: 24px;
}
}
.unread span{
    font-size: 12px;
    color: var(--text);
}.paye span{
    font-size: 12px;
    color: #1758A288;
}
.read  p{
    font-size: 14px;
    color: var(--text);
    font: 500;
}
.read span{
    font-size: 12px;
    color: var(--border);
}
.actBtn{
    width: 90%;
    display: flex!important;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    gap: 24px;
    margin-top: 24px;
}
.actBtn button{
    max-height: 35px;
    width: auto!important;
    background: var(--prim);
    padding: 0 18px;
    &:first-child{
        background: var(--secondary);
        color: var(--prim);
    }
    &.disabledBtn{
    background: var(--text);
    cursor: not-allowed;
    opacity: 0.6;
}
}
.bodyCard{
    max-height: max-content!important;
    display: flex!important;
    padding: 16px 36px;
    flex-direction: column;
}
.bodyCard .par{
    display: flex!important;
    font-size: 14px;
    color: var(--text);
    text-align: start;
}
.read svg{
    fill: var(--text);
}
.unread svg{
    fill: var(--primary);
}
.open{
    fill: var(--text);
    transform: rotate(-90deg);
}
@media screen  and (max-width: 550px) {
    .bodyCard{
        padding: 16px;
  }
}
</style>
