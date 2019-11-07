<template>
  <div id="app">
    <nav-bar></nav-bar>
    <socials></socials>
    <intro></intro>
    <project-left></project-left>
  </div>
</template>

<script>
import nav from './components/nav'
import firstView from './components/firstView'
import socials from './components/socials'
import projectLeft from './components/project-left'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  components: {
    'nav-bar': nav, 
    'intro': firstView, 
    'socials': socials, 
    'project-left': projectLeft
  }
}
</script>

<style>
.view-wrap {
  max-width: 1200px;
  margin: 0 0; 
  overflow: hidden;
}
</style>
