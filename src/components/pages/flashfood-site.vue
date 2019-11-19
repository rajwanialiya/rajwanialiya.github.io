<template>
  <div>
    <side-nav></side-nav>
    <div class="fill"></div>
  </div>
</template>

<script>
import sideNav from '../side-nav'

export default {
  name: 'flashfood-site',
  data () {
    return {}
  }, 
  components: {
    'side-nav': sideNav
  }
}
</script>

<style scoped>
  .fill {
    min-height: 1200px;
    width: 100%;
    background-color: red; 
  }
</style>