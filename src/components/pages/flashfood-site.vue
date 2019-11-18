<template>
  <side-nav></side-nav>
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