<template>
  <div class="scroll" :class="opacity">
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
    return {}
  }, 
  props: ['opacity']
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
  width: 30px;
  height: 30px;
  margin-bottom: 12px;
  background-size: cover;
}

.github {
  background-image: url('./assets/github.png');
  width: 35px;
  height: 35px;
}

.linkedin {
  background-image: url('./assets/linkedin.png');
  width: 35px;
  height: 35px;
}

.mouse {
  background-image: url('./assets/mouse.png');
  margin-bottom: 25px
}

.email {
  background-image: url('./assets/mail.png');
}

.line line {
  stroke-width: 2px; 
  stroke: black; 
}

.opacity {
  opacity: 0.6;
}
</style>