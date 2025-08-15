<template>
  <div class="container" id="ab">
      <div class="home ab">
     <NavBack title="A propos" color-svg="#04101Eaa" />
     <div class="about descent">
      <!-- <h2>Lorem ipsum sit doloret?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae enim facere asperiores, esse labore placeat expedita praesentium cupiditate quo quae cumque, suscipit sit <br>
        fugiat in maxime animi molestias consectetur optio, corrupti blanditiis harum quaerat obcaecati accusamus. Mollitia cupiditate soluta similique perferendis deserunt tempora excepturi sint, sapiente est modi consectetur, qui porro vitae odit voluptas quam corporis. Alias quod cupiditate quis quas ratione, explicabo</p>
        <h2>Lorem ipsum sit doloret?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae enim facere asperiores, esse labore placeat expedita praesentium cupiditate quo quae cumque, suscipit sit <br>
        fugiat in maxime animi molestias consectetur optio, corrupti blanditiis harum quaerat obcaecati accusamus. Mollitia cupiditate</p>
     <br><br><br> -->
     <div class="h1"><h1>A propos de cette App</h1></div>
      </div>
    </div>
    <BottomBar 
            link1="route" 
            link3="route" 
            link4="activeLink" 
            link2="route" 
            />
  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue';
import BottomBar from '@/components/BottomBar.vue';
export default {
  name: "AboutView",
  data() {
      return {
          imgPath: '/assets/top.png',
          imgPath2: '/assets/bottom.png',
      }
  },
  components:{
      NavBack, BottomBar
  }
}

</script>

<style  >
chris{
  height: 1px;
  background: var(--border);
  width: 200px;
}
#ab{
  position: relative;
}


.ab{
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow-y: scroll; 
  scroll-behavior: smooth; 
  h1{
    color: var(--black);
  }
}

.about{
  width: 80%;
  padding: 0 10%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about h2{
  font-size: 30px;
  color: var(--black);
}
.about p{
  color: var(text);
  text-align: start;
}

.imgtop{
  width: 300px;
  height: auto;
  position: absolute;
  left: -100px;
  top: 0;
}
.imgbottom{
  width: 300px;
  height: auto;
  position: absolute;
  right: -100px;
  bottom: 0;
}
@media screen  and (max-width: 550px) {
    .about{
        width: 80%;
    }
  .about h2{
     font-size: 18px;
   }
   .about p{
    font-size: 14px;
   }
}
</style>
