<template>
    <div class="parentInput">
        <div class="input">
        <input :type="type" :id="id" :maxlength="max"  v-model="inputValue" @focus="isFocused = true"  @blur="isFocused = inputValue !== ''">
        <label :class="{ 'active': isFocused || inputValue }" :for="id"><span>{{label}}</span></label>
    </div>
    </div>
</template>
<style>
    .parentInput{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column!important;
        gap: 8px!important;
        align-items: start!important;
    }
    .parentInput span{
        font-size: 12px;
        color: var(--black);
    }
    .input{
    height: 40px;
    width: 100%;
    display: flex;
    position: relative;
}
.input:first-child{
    margin-top: 40px;
}
.input input{
    width: 90%;
    padding: 0 5%;
    height: 100%;
    border-radius: 8px;
    border: 2px solid transparent;
    background: linear-gradient(var(--white), var(--white)) padding-box, linear-gradient(45deg, var(--primary),var(--varPrim)) border-box;
    color: var(-black);
    font-family: 14px;
}
/* Pour les navigateurs Chrome, Safari et Edge */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Pour Firefox */
input[type="number"] {
  -moz-appearance: textfield; /* Supprime les flèches */
}
.input input:hover{
    box-shadow: 0 0 8px var(--tertiary);
}
.input input:focus{
    border: 2px solid transparent;
    outline: none;
    background: linear-gradient(var(--white),var(--white)) padding-box, linear-gradient(125deg, var(--varPrim), var(--primary)) border-box;
    box-shadow: 0 0 5px var(--primary);background: none;
}

.input label{
    position: absolute;
    left: 5%;
    cursor: text;
    top: 9px;
    background-color: var(--white);
    padding: 2px 8px;
   max-width: 98%!important;
}
button{
    cursor: pointer;
}
.input label span{
    font-size: 14px;
    color: var(--text);
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
    max-width: 98%!important;
}
.active{
        transform: translateY(-22px);
    }
</style>

<script>
export default {
    name: "InputForm",
    props:{
        type:String,
        id: String,
        label: String,
        max: null,
    },
    data() {
        return {
            inputValue: '',
      isFocused: false,
        }
    },
 }


</script>
