<template>
  <div id="app">
    <nav-bar></nav-bar>
    <socials></socials>
    <intro class="section"></intro>
    <project-left class="section"></project-left>
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
  width: 100vw;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
}

.view-content {
  max-width: 1200px;
  margin: 0 0; 
  overflow: hidden;
}

.section {
  width: 100vw; 
  height: 100vh; 
}
</style>
