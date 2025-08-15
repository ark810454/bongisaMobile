<template>
    <div
      :class="classMess"
    > 
        <div class="cardMess">
            
        <p class="">
           {{ mess }}  
        </p>
        </div>
        <span style="font-size: 12px;">{{time}}</span>
    </div>
  </template>
  
<script>
export default {
    name: "CardMess",
    props: {
        classMess: String,
        mess: String,
        time: String
    }
}
</script>

<style>
.leftCard{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
    justify-content: start;
    .cardMess{
        background: var(--light);
        p{
            color: var(--black);
        }
    }
}
.rightCard{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: end;
    justify-content: end;
    .cardMess{
        background: var(--prim);
        p{
            color: var(--light);
        }
    }
}
.cardMess{
    max-width: 70%;
    height: max-content;
    padding: 12px 18px;
    box-shadow: 1px 1px 3px var(--border);
    border-radius: 16px;
    margin-top: 16px;

 p{
    font-size: 15px; 
}}
</style>