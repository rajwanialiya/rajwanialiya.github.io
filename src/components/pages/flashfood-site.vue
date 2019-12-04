<template>
  <div>
    <side-nav></side-nav>
    <socials opacity="opacity"></socials>
    <project>
      <template slot="img"><img src='../assets/project1-header.svg'></template>
      <template slot="title">Flashfood Main Website</template>
      <template slot="category">Web Development & UI/UX</template>
      <template slot="description">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and company's CTO to design and implement a scalable updated main website that reflected these changes.</template>
      <template slot="logo"><img src="../assets/flashfood.png"></template>
    </project>
    <div class="fill"></div>
  </div>
</template>

<script>
import sideNav from '../side-nav'
import project from '../project'
import socials from '../socials'

export default {
  name: 'flashfood-site',
  data () {
    return {}
  }, 
  components: {
    'side-nav': sideNav,
    'project': project, 
    'socials': socials
  }
}
</script>

<style scoped>

</style>