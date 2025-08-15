<template>
    <div
      class="cardd"
    > 
        <div class="df">
            <h1 class=" ">{{ title }}</h1>
        <p class="">
           {{ desc }}
        </p>  
        </div>
  
      <button @click="redirect({ name: 'service', params: { serv: title } })"> 
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#f2f4f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
    </div>
  </template>
  
<script>
export default {
    name: "MyCard",
    props: {
      title: String,
      desc : String
    },
    methods : {
      redirect(link){
        this.$router.push(link)
      }
    }
}
</script>

<style>
.cardd{
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
}
.cardd .df{
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: calc(100% - 48px);
}
.cardd h1{
    color: var(--white);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.cardd button{
    background: #e3e8ef22!important;
    padding: 8px;
    border-radius: 50%;
    width: auto!important;
    height: max-content!important;
}
.cardd svg{
    width: 24px;
    height: 24px;
    opacity: 0.6;
}
.cardd p{
    font-size: 15px;
    color: var(--lightText);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>