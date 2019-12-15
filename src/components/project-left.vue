<template>
  <div class="view-wrap">
    <div class="view-content">
      <div class="portfolio">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'project-left',
  data () {
    return {}
  }
}
</script>

<style>
.portfolio {
  text-align: right;
  display: flex; 
}

.intro {
  display: block
}

.main {
  display: flex;
  justify-content: flex-end; 
  margin: 20px 0;
  position: relative;
}

.blurb { 
  padding: 20px 30px; 
  width: 350px;
}

.rightSpace {
  right: 4vw;
}

.image img:hover{ 
  opacity: 0.4; 
}

.image a{
  width: 100%; 
  height: 100%; 
}

.image img{
  width: 100%; 
  position: relative; 
}

.visit{
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  width: 30px; 
  margin-left: 20px; 
}

.visit img {
  margin-bottom: 5px;
  width: 100%; 
}

.visit img:hover {
  opacity: 0.5;
}

.nextMobile{
  display: none; 
}

.skills{
  display: flex; 
  flex-direction: row; 
  list-style-type: none;
  justify-content: flex-end; 
}

.skills li {
  margin-right: 0.7em; 
}

</style>