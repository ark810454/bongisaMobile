<template>
    <div class="nav2">
          <div class="hjj"  @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" :stroke="colorSvg" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g></svg>      </div>
       <h3   @click="goBack">Retour</h3>

     </div>
</template>

<script>
export default {
   name: "NavBack",
   props: {
        title: String,
        colorSvg: String
   },
   methods: {

 goBack() {
   // Redirige vers la route '/other'
   this.$router.go(-1);
 },
}

}
</script>

<style   >
.nav2{
 width: 90%;
 padding: 0 5%;
 height: 64px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: start; 
 position: absolute;
 top: 30px; 
}
.descent{
  margin-top: 84px!important;
}
.nav2 h3{
 font-size: 24px;
 color: var(--black);
 padding-left: 8px;
}

.link{
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 8px;
}
.hjj{height: 24px!important;}
.hjj svg{
    background: none!important;
    width: 24px!important;
    height: 24px!important;
 fill: var(--text)!important;
 cursor: pointer;
}

@media screen  and (max-width: 700px) {
  .nav2 h3{
     font-size: 20px;
   }
}
@media screen  and (max-width: 450px) {
  .nav2 h3{
      font-size: 16px;
   }
}
</style>
