<style >
  .loader2 { 
    flex-direction: column;   
    overflow: hidden;
    position: relative;
  }

  .loader2:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(110deg, #ebeef200 0%, #ebeef200 40%, #ebeef222 50%, #ebeef211 60%, #ebeef211 100%);
    animation: gradient-animation_2 1.2s linear infinite;
  }

  .loader2 .wrapper {  
    width: 100%!important;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between; 
  }

  .loader2 .wrapper > div {
    background-color: #ebeef222;
  }

  .loader2 .circle {
    width: 32px;
    height: 32px;
    border-radius: 50%; 
    background-color: #ebeef222; 
  }

  .loader2 .button {
    display: inline-block;
    height: 32px;
    width: 75px;
  } 

  .loader2 .line-3 {  
    height: 20px;
    width: 80%;
    background-color: #ebeef222;
  }  .loader2 .line-4 { 
    height: 13px;
    width: 60%;
    background-color: #ebeef222;
  }  .loader2 .line-1  span{  
   color: #ebeef244!important; 
  }  .loader2 .line-2 { 
    height: 12px;
    width: 30%;
    background-color: #ebeef222;
  } 

  @keyframes gradient-animation_2 {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
</style>

<template>
  <div class="loader2 carddd"> 
    <div class="wrapper">
      <div class="circle"></div> 
      <div class="circle"></div>
    </div>
      <div class="line-3"></div> 
      <div v-if="detail" class="line-4"></div> 
      <div class="line-1 notess"> 
        <span data-value="1">&#9733;</span>
    <span data-value="2">&#9733;</span>
    <span data-value="3">&#9733;</span>
    <span data-value="4">&#9733;</span>
    <span data-value="5">&#9733;</span>
      </div> 
      <div class="line-2"></div> 
  </div>
</template>
<script>
export default {
    name: "LoaderCard2",
    props: {
      detail: {
        type: Boolean,
        default: false
      }, 
  },
    
}
</script>