<template>
  <div class="scroll">
    <div class="socials linkedin"><a href="https://www.linkedin.com/in/aliya-rajwani-b1466117b/" target="_blank" class="linkedin"></a></div>
    <div class="socials github"><a href="https://github.com/rajwanialiya" target="_blank" class="github"></a></div>
    <div class="socials email"><a href="mailto:rajwani.aliya@gmail.com" class="email"></a></div>
    <div class="socials mouse"></div>
    <!-- <p class="text">Scrolldown</p> -->
    <svg version="1.1" class="line" height="110" width="40">
      <line x1="20" y1="0" x2="20" y2="110"/>
      <line x1="20" y1="110" x2="13" y2="102"/>
      <line x1="20" y1="110" x2="27" y2="102"/>                
    </svg>
  </div>
</template> 

<script>
export default {
  name: 'socials',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.scroll {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  position: fixed; 
  bottom: 40px; 
  left: 40px; 
  z-index: 1; 
}

.socials {
  background-image: url('./assets/social_icons@2x.png');
  background-size: 167px 40px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}

.github {
  background-position: -1px;
}

.linkedin {
  background-position: -41px; 
}

.mouse {
  background-position: -84px; 
}

.email {
  background-position: -125px;
}

.line line {
    stroke-width: 2px; 
    stroke: black; 
}
</style>