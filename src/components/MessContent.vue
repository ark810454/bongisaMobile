<template>
    <div class="container">
        <div class="home mess">            
           
            <div class="account descent">
                <div class="nav2">
          <div class="hjj"  @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="#0c2e54" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g></svg>      </div>
            <div class="cardpers" @click="goUser">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#0c2e54" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>
                          <span>   Matete Clean {{ userId }} </span>
                    </div>

     </div> 
                <div class="containerMess">
                    <CardMess
                     mess="Ici sera affiché le contenu du message envoyé"
                    class-mess="leftCard"
                    time="il y'a 2 jours"
                     />
                     <CardMess
                     mess="Ici sera affiché le contenu du message envoyé"
                    class-mess="rightCard"
                    time="il y'a 2 min"
                     />
                     <CardMess
        v-for="(msg, index) in messages"
        :key="index"
        :mess="msg.mess"
        :class-mess="msg.classMess"
        :time="msg.time"
      />
                </div>

                <div class="ecrire">
                    <label for="textMess" class="ecr">
                        <textarea name="message" id="textMess" placeholder="Envoyer un message à MAT..."></textarea>
                        <svg viewBox="0 0 24 24" @click="onSubmit" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </label>
                </div> 
        </div>
    </div>
    </div> 
</template>
<script> 
import CardMess from './CardMess.vue';
//import {toast} from 'vue3-toastify';
//import 'vue3-toastify/dist/index.css';
export default {
    name: "MessContent",
    computed: {
        userId() {
            return this.$route.params.id;
        }
    },
    data() {
        return {
            messages: [],
        };
    },
    methods: {
        goBack() {
            // Redirige vers la route '/other'
            this.$router.go(-1);
        },
        goUser() {
            this.$router.push("/compte");
        },
        onSubmit() {
            let textMess = document.getElementById('textMess');
            if (textMess.value !== "") {
                this.messages.push({
                    classMess: "rightCard",
                    time: "Il y a un instant",
                    mess: textMess.value,
                });
                textMess.value = '';              
                textMess.nextElementSibling.style = "background: #0c2e5422; stroke: #0c2e54;";  

            }
        }
    },
    components: {
        CardMess, 
    },
    mounted() { 
        let textMess = document.getElementById('textMess');
        let btn = textMess.nextElementSibling;
        textMess.addEventListener('input', () => {
            if (textMess.value === "") {
                btn.style = "background: #0c2e5422; stroke: #0c2e54;"; 
            } else { 
                btn.style = "stroke: #f2f4f6!important; background: #1758A2;"; 
            }
        });
    },
    /* render() {
        return (
            <div>
                <div class="containerMess">
                    {this.messages.map((msg, index) => (
                        <CardMess key={index} classMess={msg.classMess} time={msg.time} mess={msg.mess} />
                    ))}
                </div>
                <input type="text" id="textMess" placeholder="Écris un message" />
                <button onClick={this.onSubmit}>Envoyer</button>
            </div>
        );
    } */
}
</script>
<style>

.account{
    width: 100%;
    height: 100%;
}
.mess{
    overflow-y: hidden;
    overflow-x: hidden;
    .account{
        width: 96%;
    padding: 16px 2%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .nav2{
        .cardpers{
            display: flex;
            flex-direction: row!important;
            align-items: center!important;
            gap: 8px;
            margin-left: 8px;
            span{
            font-weight: 600;
            font-size: 18px;
            color: var(--black)!important;
        }}
        svg{
            width: 40px;
            height: 40px;
        }
    }
    .containerMess{
        width: 100%;
        height: 96%;  
        padding-top: 50px;
        overflow-y: scroll;
        overflow-x: hidden;
    scroll-behavior: smooth;  
    }
    .ecrire{
        width: 100%;
        height: 164px; 
        .ecr{
            display: flex; flex-direction: row;
        align-items: start;
        padding: 5%;
        justify-content: center;
        width: 90%;
        height: 90px; 
        background: #1758A212;
        border-radius: 16px;
        gap: 16px;
        textarea{
            width: 80%;
            resize: none;
            height: 60%; 
            border: none;
            background: none;  
            font-size: 15px;
            outline: none;
            color: var(--prim);
            &::placeholder{
                color: #0c2e5488;
            }
            &:focus{
                outline: none;
                color: var(--prim);
                font-size: 15px;
                font-weight: 500;
            }
        }
        svg{
            width: 20px;
            height: 20px;
            padding: 13px;
            border-radius: 50%;
            background: #0c2e5422;
            stroke: #0c2e54;
        }
        }
    }

    }
 h1{
    color: var(--black);
 }
.links{
   width: 92%;
   padding: 8px 4%;
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 8%; 
   position: relative;
   cursor: pointer;
    &:hover{
        background: var(--secondary);
    }
    svg{
        width: 44px;
        height: 44px;
    }
    .span{
        color: var(--black);
        font-size: 16px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        span{
            font-size: 14px;
            font-weight: 400;
            color: var(--text);
        }
        hour{
            position: absolute;
            right: 5%;
            top: 12px;
            font-size: 11px;
            font-weight: 500;
        }
    }
}
 }
 
  


</style>