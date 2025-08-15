<template>
    <div class="container" id="codePage">
        <input type="number" ref="code" style="position: absolute; opacity:0 " label="" class="thisInput"
            maxlength="6" />
        <form action="">
            <h1>CONFIRMATION</h1>
            <span>Veillez saisir le code à 6 chiffres envoyés dans votre boite email.</span>
            <div class="inputt">
                <div class="code focusCode"></div>
                <div class="code"></div>
                <div class="code"></div>
                <div class="code"></div>
                <div class="code"></div>
                <div class="code"></div>
            </div>
            <span ref="mess" class="messCode messtrue"></span>
            <br>
            <span class="ffg"><button @click="refreshPage" class="a">Renvoyer un nouveau code ?</button> <span
                    id="timer"></span></span>

        </form>
    </div>
    <MyLoader class="myloader" />
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { StatusBar } from '@capacitor/status-bar';
import MyLoader from '@/components/MyLoader.vue';
import axios from 'axios';

export default {
    name: "CodeView",
    components: {
        MyLoader
    },
    mounted() {
        StatusBar.setOverlaysWebView({ overlay: true });
        StatusBar.setStyle({ style: 'dark' });
        let timerInterval;
        let isRunning = false;
        const timerElement = document.getElementById("timer");
        let input = this.$refs.code
        let codes = document.querySelectorAll('.code')
        let mess = document.querySelector('.messCode')
        let tab = []
        let a = document.querySelector('.a')
        this.$nextTick(() => {
            // Met le focus sur l'input après que le DOM soit mis à jour
            input.focus();
            a.disabled = true
            a.style = "opacity:0.4; cursor:not-allowed; "
        });
        document.getElementById('codePage').addEventListener('click', () => {
            input.focus();
        })
        document.getElementById('codePage').addEventListener('mouseover', () => {
            input.focus();
        })
        startTimer(2 * 60)
        setTimeout(() => {
            input.disabled = true
            codes.forEach(code => code.className = '');
            this.errorMess(mess, a)
        }, 120000);



        input.addEventListener('input', () => {
            tab.push(input.value)
            tab.forEach((element, i) => {
                codes[i].textContent = element[element.length - 1]
                if (element.length < 6) {
                    if (codes[i].classList.contains('focusCode')) {
                        codes[i].classList.replace('focusCode', 'activeCode')
                        codes[i + 1].classList.add('focusCode')
                    } else {
                        codes[i].classList.add('activeCode')
                        codes[i + 1].classList.add('focusCode')
                    }
                } else if (element.length === 6) {
                    input.blur()
                    codes[5].classList.add('activeCode')
                    this.errorMess(mess, a, "Veillez patienter SVP !!!", false)
                    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
                    axios.post("https://bongisa.dscrdc.com/api/verifieCode", {
                        code: input.value
                    })
                        .then(response => {
                            if (response.status === 201) {

                                this.saveToken(response.data.token)
                                setTimeout(() => {
                                    document.querySelector('.myloader').style = "visibility: visible!important"
                                }, 1000);
                                setTimeout(() => {
                                    this.redirectToOther()
                                }, 6000);
                            } else if (response.status === 401) {
                                this.errorMess(mess, a, "Erreur : le code inséré est incorrect!")
                            } else {
                                this.errorMess(mess, a, "Une erreur s'est produite, veillez recommencer SVP!")

                            }
                        })
                        .catch(error => {
                            console.error("Une erreur s'est produite:", error);
                            this.errorMess(mess, a, "Une erreur s'est produite!")
                            toast("Une erreur s'est produite!", {
                                timeout: 5000,
                                position: 'bottom-center',
                                hideProgressBar: true,
                            });
                        });



                }
            });

        })


        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
            const secs = (seconds % 60).toString().padStart(2, "0");
            return `${mins}:${secs}`;
        }

        function updateTimer(currentSeconds) {
            timerElement.textContent = formatTime(currentSeconds);
        }

        function startTimer(currentSeconds) {
            if (!isRunning) {
                isRunning = true;
                timerInterval = setInterval(() => {
                    if (currentSeconds > 0) {
                        currentSeconds--;
                        updateTimer(currentSeconds);
                    } else {
                        clearInterval(timerInterval);
                        isRunning = false;

                    }

                }, 1000);
            }
        }


    },
    data() {
        return {
            etat: false,
        }
    },
    methods: {
        refreshPage() {
            this.$router.go(); // Recharge la page actuelle
        },
        redirectToOther(link = '/') {
            // Redirige vers la route '/other'
            this.$router.push(link);
        },
        errorMess(mess, a, cont = "Le timing est écoulé !", error = true) {
            if (!error) {
                if (mess.classList.contains('messtrue')) {
                    mess.classList.replace('messtrue', 'messfalse')
                } else {
                    mess.classList.add('messfalse')
                }
            } else {
                if (mess.classList.contains('messfalse')) {
                    mess.classList.replace('messfalse', 'messtrue')
                } else {
                    mess.classList.add('messtrue')
                }
            }
            mess.textContent = cont
            mess.style.display = "flex"
            a.disabled = false
            a.style = "opacity:1; cursor:not-pointer; "
        },
        saveToken(token) {
            localStorage.setItem('token', JSON.stringify(token));
            console.log('Données sauvegardées !');
        },


    }
}

</script>

<style>
span {
    font-size: 14px;
    color: var(--text);
}

.messtrue {
    display: none;
    font-size: 14px;
    color: var(--white);
    background-color: var(--danger);
    border: 2px solid #A0004F88;
    padding: 24px 32px;
    width: 100%;
}

.messfalse {
    display: none;
    font-size: 14px;
    color: var(--black);
    background-color: var(--secondary);
    border: 2px solid var(--border);
    padding: 24px 32px;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.myloader {

    visibility: hidden !important;
}

.inputt {
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.inputt div {
    width: 35px;
    height: 35px;
    border-radius: 8px;
    border: 2px solid var(--border);
    text-align: center;
    font-size: 16px;
    color: var(--text);
    font-weight: 600;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.inputt .focusCode {
    border: 2px solid transparent;
    background: linear-gradient(var(--white), var(--white)) padding-box, linear-gradient(var(--varPrim), var(--primary)) border-box;
    box-shadow: 0 0 5px var(--primary);
    background: none;
}

.inputt .activeCode {
    border: 2px solid transparent;
    background: linear-gradient(var(--white), var(--white)) padding-box, linear-gradient(var(--varPrim), var(--primary)) border-box;
}

form .a {
    font-size: 13px;
    color: var(--tertiary);
    cursor: pointer;
    background: none !important;
    padding: 0 !important;
}

form .ffg {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    color: var(--text);
}
</style>
