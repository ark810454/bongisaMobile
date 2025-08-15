<template>
    <div class="container">
        <div class="home mess">            
           
            <div class="account descent">
                <NavBack ></NavBack>
                <div class="h1"><h1>Messages</h1></div>
                <router-link :to="{ name: 'readMessage', params: { id: 1 } }" class="links">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>


        <span class="span">Nom du destinateur <hour>13:56</hour> <span>Lorem ipsum sit aquamectur</span></span>
    </router-link> 


    <router-link :to="{ name: 'readMessage', params: { id: 2 } }" class="links">
        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>
        <span class="span">Nom du destinateur <hour>13:56</hour> <span>Lorem ipsum sit aquamectur</span></span>
    </router-link>

    <router-link :to="{ name: 'readMessage', params: { id: 3 } }" class="links">
        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>
        <span class="span">Nom du destinateur <hour>13:56</hour> <span>Lorem ipsum sit aquamectur</span></span>
    </router-link>
            </div>
            <br><br><br><br><br>
            <BottomBar 
            link1="route" 
            link2="route" 
            link3="activeLink" 
            link4="route" 
            />
        </div>
    </div>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue'; 
import NavBack from '@/components/NavBack.vue'; 
export default {
    name: "MessageView",
    components: {
        BottomBar, NavBack
    }
}
</script>

<style>

.account{
    width: 100%;
    height: 100%;
}
.mess{
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth; 
    .account{
        width: 96%;
    padding: 16px 2%;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
        fill: var(--prim);
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