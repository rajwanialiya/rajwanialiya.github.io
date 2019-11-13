<template>
  <div id="app">
    <nav-bar></nav-bar>
    <socials></socials>
    <intro class="section"></intro>
    <div class="body">
      <project-left class="section">
        <template slot="description">
          <div class="image">
            <router-link to="/pages/flashfood-site.vue"><img src="./components/assets/Website-Mockup.png"></router-link>
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
            </div>
        </template>
      </project-left>
      <project-right class="section">
        <template slot="description">
          <div>
            <div class="intro">
              <p>Web Development & Back-End</p>
              <h2>Food Waste Counter</h2>
            </div>
            <div class="main">
              <div>
                <a href="pages/flashfoodSite.html" class="visit two"><img src="./components/assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit two"><img src="./components/assets/globe.svg"></a>
              </div>
              <p class="blurb">My task was to create a count-up to display the amount of food waste diverted from landfills by Flashfood users, in real-time. This project involved pulling statistics from the Flashfood database to update the counter regularly, creating an API endpoint to reference when embedding the counter, and animating the count-up to increase interactivity.</p>
            </div>
            <ul class="skills second">
                <li>Javascript</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>Node.js</li>
                <li>Git</li>
            </ul>
            <div class="nextMobile">
              <a href="pages/flashfoodSite.html" class="visit"><img src="assets/casestudy.svg"></a>
              <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="assets/globe.svg"></a>
            </div>
          </div>
          <div class="image">
            <a href="pages/counter.html"><img src="./components/assets/Website-Mockup.png"></a>
          </div>
        </template>
      </project-right>
      <project-left class="section">
        <template slot="description">
          <div class="image">
            <a href="pages/flashfoodSite.html"><img src="./components/assets/Website-Mockup.png"></a>
          </div>
          <div>
            <div class="intro">
              <p>App Development & UI/UX</p>
              <h2>Nailed It</h2>
            </div>
            <div class="main">
              <p class="blurb">“Nailed It” is a collaboratively developed app that won second place at the TechXplore Healthcare & AI hackathon. The app uses open-source machine learning libraries and Python to perform early-stage diagnosis of anemia, oxygen deprivation illnesses, and various infections by analyzing the colour discrepancy between users' skin and nails.</p>
              <div>
                <a href="pages/flashfoodSite.html" class="visit"><img src="./components/assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="./components/assets/globe.svg"></a>
              </div>
              </div>
              <ul class="skills">
                  <li>Python</li>
                  <li>TensorFlow</li>
                  <li>UI</li>
                  <li>UX</li>
                  <li>Figma</li>
              </ul>
              <div class="nextMobile">
                <a href="pages/flashfoodSite.html" class="visit"><img src="assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="assets/globe.svg"></a>
              </div>
            </div>
        </template>
      </project-left>
    </div>
  </div>
</template>

<script>
import nav from './components/nav'
import intro from './components/intro'
import socials from './components/socials'
import projectLeft from './components/project-left'
import projectRight from './components/project-right'

export default {
  name: 'app',
  data () {
    return {}
  }, 
  components: {
    'nav-bar': nav, 
    'intro': intro, 
    'socials': socials, 
    'project-left': projectLeft, 
    'project-right': projectRight
  }, 
  methods: {
      //https://codepen.io/chrisdoble/pen/WQLLVp
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
