<style >
  .loader {
    min-width: 170px;
    border-radius: 16px; 
    height: 150px;
    padding: 20px; 
    display: flex;
    flex-direction: row; 
    align-items: end;
    justify-content: space-between;
    background-color: #ebeef211; 
  border-radius: 1rem; 
    overflow: hidden;
    position: relative;
  }

  .loader:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(110deg, #ebeef200 0%, #ebeef200 40%, #ebeef222 50%, #ebeef211 60%, #ebeef211 100%);
    animation: gradient-animation_2 1.2s linear infinite;
  }

  .loader .wrapper { 
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .loader .wrapper > div {
    background-color: #ebeef222;
  }

  .loader .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    background-color: #ebeef222; 
  }

  .loader .button {
    display: inline-block;
    height: 32px;
    width: 75px;
  }

  .loader .line-1 {
    position: absolute;
    top: 11px;
    left: 58px;
    height: 10px;
    width: 100px;
  }

  .loader .line-2 {
    position: absolute;
    top: 34px;
    left: 58px;
    height: 10px;
    width: 150px;
  }

  .loader .line-3 { 
    height: 24px;
    width: 130px;
  }

  .loader .line-4 { 
    height: 15px;
    width: 92%;
  }.loader .line-5 { 
    height: 15px;
    width: 82%;
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
  <div class="loader">
    <div class="wrapper">
      <div class="line-3"></div>
      <div class="line-4"></div>
      <div class="line-5"></div>
    </div>
      <div class="circle"></div> 
  </div>
</template>
