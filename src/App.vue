<template>
  <div id="app">
    <nav-bar></nav-bar>
    <socials></socials>
    <intro class="section"></intro>
    <project-left class="section">
      <template slot="description">
        <div class="image">
          <a href="pages/flashfoodSite.html"><img src="./components/assets/Website-Mockup.png"></a>
        </div>
        <div>
          <div class="intro">
            <p>Web Development & UI/UX</p>
            <h2>Flashfood.com</h2>
          </div>
          <div class="main">
            <p class="blurb">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and the company's CTO to design and implement a scalable updated main website that reflected these changes.</p>
            <div>
              <a href="pages/flashfoodSite.html" class="visit"><img src="./components/assets/casestudy.svg"></a>
              <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="./components/assets/globe.svg"></a>
            </div>
            </div>
            <ul class="skills">
                <li>Responsive</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>AJAX</li>
            </ul>
            <div class="nextMobile">
              <a href="pages/flashfoodSite.html" class="visit"><img src="assets/casestudy.svg"></a>
              <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="assets/globe.svg"></a>
            </div>
            <div class="empty"></div>
          </div>
      </template>
    </project-left>
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
  max-width: 1000px;
  margin: 0 0; 
  overflow: hidden;
}

.section {
  width: 100vw; 
  height: 100vh; 
}

h2, h3, h4, h5, h6, p, a {
  margin-bottom: 0.5em; 
}
</style>
