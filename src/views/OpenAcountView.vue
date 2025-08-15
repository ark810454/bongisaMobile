<template>
    <div class="container">
        <div class="home ccom">
            <NavBack   title="Compte" color-svg="#04101Eaa"/>
            
           
            <div class="account descent">
                <div class="head">
                    <div class="img"> 
                        <img :src="'../'+photo">
                    </div>
                    <p>{{ this.nomEt }}</p>
                    <span>{{ this.adresse || 'République Démocratique du Congo' }}</span>
                    <div class="accountAction">
                        <button v-if="this.role == 'Service_assaini'" class="modifier" @click="openCont">
                             Solliciter
                        </button>
                        <button v-if="this.role == 'Etablissement'" class="modifier" @click="openCont">
                            Plus
                        </button>
                        <button class="history" @click="openMess">
                            Ecrire
                        </button>
                    </div>
                </div>

               
                <div class="infos"> <span>Autres infos</span>
                    <div class="cardpers">
                        <span><svg fill="#0c2e54" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 482.974 482.974" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M155.504,204.774c4.4,28.6,26.5,65,62.8,77.8c14.9,5.2,31.2,5.3,46.1-0.1c35.7-12.9,58.5-49.2,63-77.7 c4.8-0.4,11.1-7.1,17.9-31.2c9.3-32.9-0.6-37.8-9-37c1.6-4.5,2.8-9.1,3.6-13.5c14.2-85.3-27.8-88.2-27.8-88.2s-7-13.4-25.3-23.5 c-12.3-7.3-29.4-12.9-51.9-11c-7.3,0.3-14.2,1.8-20.7,3.9l0,0c-8.3,2.8-15.9,6.9-22.8,11.7c-8.4,5.3-16.4,11.9-23.4,19.4 c-11.1,11.4-21,26.1-25.3,44.4c-3.6,13.7-2.8,28,0.2,43.4l0,0c0.8,4.5,2,9,3.6,13.5c-8.4-0.8-18.3,4.1-9,37 C144.404,197.674,150.704,204.374,155.504,204.774z"></path> <path d="M406.404,316.674c-51.1-13-92.6-42.2-92.6-42.2l-32.4,102.5l-6.1,19.3l-0.1-0.3l-5.3,16.4l-17.1-48.5 c42-58.6-8.5-58-11.3-57.9c-2.8-0.1-53.3-0.7-11.3,57.9l-17.1,48.5l-5.3-16.4l-0.1,0.3l-6.1-19.3l-32.5-102.5 c0,0-41.5,29.2-92.6,42.2c-38.1,9.7-39.9,53.7-38.4,75.4c0,0,2.2,29.5,4.4,42.5c0,0,74.4,48.3,199,48.4c124.6,0,199-48.4,199-48.4 c2.2-13,4.4-42.5,4.4-42.5C446.304,370.374,444.504,326.374,406.404,316.674z"></path> </g> </g> </g></svg>
                            {{ this.nomRes }} <span>Ceo</span></span>
                    </div>

                    <div class="cardpers">
                        <span> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            {{ this.tel }}</span>
                    </div>

                    <div class="cardpers">
                       <span> 
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="email"> <path id="vector" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path id="vector_2" d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g> </g> </g></svg>                        
                        {{ this.email }}</span>
                    </div>

<div class="cardpers">
   <span> 
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.44" d="M7.33008 14.4898L9.71008 11.3998C10.0501 10.9598 10.6801 10.8798 11.1201 11.2198L12.9501 12.6598C13.3901 12.9998 14.0201 12.9198 14.3601 12.4898L16.6701 9.50977" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    {{ this.type_activity}}</span>
</div>

                    <div class="cardpers">
                        <span>
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> </g></svg>                            
                            {{ this.adresse || 'République Démocratique du Congo' }}  <svg @click="openMap" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#0c2e54" stroke="#0c2e54"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_resize_20_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_resize_20_regular" fill="#0c2e54" fill-rule="nonzero"> <path d="M2.5,11 C2.77614,11 3,11.2239 3,11.5 L3,15 C3,16.1046 3.89543,17 5,17 L8.5,17 C8.77614,17 9,17.2239 9,17.5 C9,17.7761 8.77614,18 8.5,18 L5,18 C3.34315,18 2,16.6569 2,15 L2,11.5 C2,11.2239 2.22386,11 2.5,11 Z M17.5,11 C17.7454222,11 17.9496,11.1769086 17.9919429,11.4101355 L18,11.5 L18,15 C18,16.597725 16.7511226,17.903664 15.1762773,17.9949075 L15,18 L11.5,18 C11.2239,18 11,17.7761 11,17.5 C11,17.2545778 11.1769086,17.0504 11.4101355,17.0080571 L11.5,17 L15,17 C16.0543909,17 16.9181678,16.18415 16.9945144,15.1492661 L17,15 L17,11.5 C17,11.2239 17.2239,11 17.5,11 Z M8.5,2 C8.77614,2 9,2.22386 9,2.5 C9,2.74545778 8.82312296,2.9496079 8.58987501,2.99194425 L8.5,3 L5,3 C3.94563773,3 3.08183483,3.81587733 3.00548573,4.85073759 L3,5 L3,8.5 C3,8.77614 2.77614,9 2.5,9 C2.25454222,9 2.0503921,8.82312296 2.00805575,8.58987501 L2,8.5 L2,5 C2,3.40232321 3.24892392,2.09633941 4.82372764,2.00509271 L5,2 L8.5,2 Z M15,2 C16.597725,2 17.903664,3.24892392 17.9949075,4.82372764 L18,5 L18,8.5 C18,8.77614 17.7761,9 17.5,9 C17.2545778,9 17.0504,8.82312296 17.0080571,8.58987501 L17,8.5 L17,5 C17,3.94563773 16.18415,3.08183483 15.1492661,3.00548573 L15,3 L11.5,3 C11.2239,3 11,2.77614 11,2.5 C11,2.25454222 11.1769086,2.0503921 11.4101355,2.00805575 L11.5,2 L15,2 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                        </span>
                    </div>
                    <div class="map">
                    <UserMap :showNav="false" :adr="this.adresse? this.adresse : 'république démocratique du congo kinshasa'" />
                    </div>
                   
                    <div class="cardpers">
                        <span>Numéro RCCM ******</span>
                    </div>

                    <div class="cardpers">
                        <span>Id. National ******</span>
                    </div>
                </div>
            </div>
            <br><br><br><br><br>
            <BottomBar 
            link1="route" 
            link4="route" 
            link2="activeLink" 
            link3="route" 
            />
        </div>
    </div>
    <ChoixService :id="this.myId" :nomEt="this.nomEt" />
</template>

<script>
import BottomBar from '@/components/BottomBar.vue';  
import NavBack from '@/components/NavBack.vue';
import ChoixService from '@/components/ChoixService.vue';
import UserMap from '@/components/UserMap.vue'; 
import axios from 'axios';
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: "OpenAcountView",
    mounted() {
        this.getEtablis()

    },
    computed: {
        myId() {
            return this.$route.params.id;
        }
    },
    data() {
        return {
            nomEt: '',
            nomRes: '',
            adresse: '',
            email: '',
            tel: '',
            role: '', 
            photo: 'assets/account.png', 
            resize: false,
        }
    },
    components: {
        BottomBar,
     NavBack,
     ChoixService,
     UserMap,
    },

    methods: {
      async  getEtablis(){
   await axios.get("https://bongisa.dscrdc.com/api/getEtablis")
 .then(response => { 
    if (response.status === 200) {  
      let et = response.data.users.filter(user => user.id == this.myId); 
      this.nomEt = et[0].nomEt;
      this.nomRes = et[0].nomRes;
      this.adresse = et[0].adresse;
      this.tel = et[0].tel;
      this.email = et[0].email;
      this.photo = et[0].logo; 
      this.role = et[0].role;
    }  else{
        toast("Impossible d'afficher l'établissement", {
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
  openMess(){
        this.$router.push({ name: "readMessage", params: { id: this.myId } });
      },
  openMap(){
        this.$router.push({ name: "map", params: { adresse: this.adresse? this.adresse : 'république démocratique du congo kinshasa' } });
      },
      openCont() {  
  document.querySelector('.choix').style="display: flex!important"

  }
    }
}
</script>

<style>
 .map{
    width: 96%;
    height: 100px;
    position: relative;
    z-index: 1; 
 }

</style>