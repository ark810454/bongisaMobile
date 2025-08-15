<template>
    <div class="container" id="form">
        <form id="formEmail"> 
        <h1>LOGIN</h1>
        <span>Confirmer votre adresse email pour vous connecter</span>
        <InputForm type="email" id="email" label="Email"></InputForm>
        <button @click="redirectToOther" id="login">Confirmer</button>
    </form>
    </div>
</template>

<script>
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { StatusBar } from '@capacitor/status-bar';
import InputForm from '../components/InputForm.vue';
import axios from 'axios';
export default {
    name: "LoginView",
    mounted() {
       StatusBar.setOverlaysWebView({ overlay: true });
       StatusBar.setStyle({ style: 'light' }); 
      let formEmail = document.getElementById('formEmail')
      let input = formEmail.querySelector('input')
      formEmail.addEventListener('submit', (e)=>{
        e.preventDefault()
        if (input.value !== "") {
          this.redirectToOther(input.value)
        }
      })

    },
    data() {
        return {
            imgPath: '/assets/top.png',
            imgPath2: '/assets/bottom.png',
            imgPath3: '/assets/logo.jpg',
            inputValue: '',
      isFocused: false,
        }
    },
    components:{
        InputForm
    },
    methods: {
    redirectToOther(em) {
 
       
      axios.post("https://bongisa.dscrdc.com/api/getEmail", {
        email:  em
      })
      .then(response => { 
        console.log(response)
      })
      .catch(error => {
        console.error("Une erreur s'est produite:", error);

    toast("Une erreur s'est produite!", {
      timeout: 5000,
      position: 'bottom-center',
      hideProgressBar: true,
    });
      });
      /* this.$router.push('/code'); */
    }
}
}
</script>

<style>

</style>
