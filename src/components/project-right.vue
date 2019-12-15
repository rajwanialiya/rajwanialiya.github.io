<template>
  <div class="view-wrap">
    <div class="view-content">
      <div class="portfolio left">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'project-right',
  data () {
    return {}
  }
}
</script>

<style scoped>
.left {
  text-align: left;
  padding-left: 0;
}

.main {
  justify-content: flex-start; 
}

.image img:hover{ 
    opacity: 0.4; 
}

.image a{
    width: 100%; 
    height: 100%; 
}

.two{
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0; 
    margin-right: 20px; 
}

.visit img {
    margin-bottom: 5px;
    width: 100%; 
}

.visit img:hover, .code img:hover {
    opacity: 0.5;
}

.code img{
  width: 40px;
  height: 40px;
  margin-left: -5px;
  margin-right: -10px;
  margin-top: -4px;
}

.nextMobile{
    display: none; 
}

.second{
    justify-content: flex-start; 
    padding-left: 0; 
}

.skills li {
    margin-right: 0.7em; 
}

</style>