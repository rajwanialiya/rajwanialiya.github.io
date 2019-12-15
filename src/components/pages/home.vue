<template>
  <div>
    <canvas id="canvas"></canvas>
    <nav-bar></nav-bar>
    <socials></socials>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <intro class="section intro"></intro>
      <project-right class="section">
        <template slot="description">
          <div>
            <div class="intro">
              <p>Machine Learning & Web Development</p>
              <h2>Exstrahlen</h2>
            </div>
            <div class="main">
              <div>
                <a href="https://github.com/rajwanialiya/Exstrahlen/blob/master/README.md" target="_blank" class="code two"><img src="../assets/code.png"></a>
              </div>
              <p class="blurb project-4">Exstrahlen is a web application with the goal of reducing patient wait times by helping radiologists perform diagnostics more efficiently. The app achieves this through a convolutional neural network to identify and analyze abnormalities in chest scans.</p>
            </div>
            <ul class="skills second">
                <li>Machine Learning</li>
                <li>Node.js</li>
                <li>Vue</li>
                <li>GCP</li>
            </ul>
            <div class="nextMobile">
              <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
              <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
            </div>
          </div>
          <div class="image">
            <a href="https://github.com/rajwanialiya/Exstrahlen/blob/master/README.md" target="_blank"><img src="../assets/exstrahlen-mockup.svg"></a>
          </div>
        </template>
      </project-right>
      <project-left class="section">
        <template slot="description">
          <div class="image">
            <router-link to="flashfood-site"><img src="../assets/flashfood-site-mockup.svg"></router-link>
          </div>
          <div>
            <div class="intro">
              <p>Web Development & UI/UX</p>
              <h2>Flashfood.com</h2>
            </div>
            <div class="main">
              <div class="blurbContainer">
                <p class="blurb project-3">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and the company's CTO to design and implement a scalable updated main website that reflected these changes.</p>
              </div>
              <div>
                <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
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
                <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
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
                <a href="pages/flashfoodSite.html" class="visit two"><img src="../assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit two"><img src="../assets/globe.svg"></a>
              </div>
              <p class="blurb project-2">This real-time counter displays the amount of food waste diverted from landfills by Flashfood users. To build this feature I connected the counter to the Flashfood database, created an API endpoint to embed the counter, and designed and animated the count-up to increase interactivity.</p>
            </div>
            <ul class="skills second">
                <li>Javascript</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>Node.js</li>
                <li>Git</li>
            </ul>
            <div class="nextMobile">
              <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
              <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
            </div>
          </div>
          <div class="image">
            <router-link to="flashfood-counter"><img src="../assets/flashfood-counter-mockup.svg"></router-link>
          </div>
        </template>
      </project-right>
      <project-left class="section">
        <template slot="description">
          <div class="image">
            <a href="pages/flashfoodSite.html"><img src="../assets/nailed-it-mockup.svg"></a>
          </div>
          <div>
            <div class="intro">
              <p>App Development & UI/UX</p>
              <h2>Nailed It</h2>
            </div>
            <div class="main">
              <p class="blurb project-1">“Nailed It” is a collaboratively developed app that won second place at the TechXplore Healthcare & AI hackathon. The app uses open-source machine learning libraries and Python to perform early-stage diagnosis of anemia, oxygen deprivation illnesses, and various infections by analyzing the colour discrepancy between users' skin and nails.</p>
              <div>
                <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
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
                <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
              </div>
            </div>
        </template>
      </project-left>
    </full-page>
  </div>
</template>

<script>
import nav from '../nav'
import socials from '../socials'
import intro from '../intro'
import projectLeft from '../project-left'
import projectRight from '../project-right'

export default {
  name: 'app',
  data() {
    return {
      options: {
        licenseKey: 'aNCq80A^r0',
        menu: '#menu',
        scrollingSpeed: 1100,
      },
    }
  },
  components: { 
    'nav-bar': nav, 
    'socials': socials,
    'intro': intro, 
    'project-left': projectLeft, 
    'project-right': projectRight
  }, 
}
</script>

<style>
#canvas {
  position: fixed;
  width: 100vw; 
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-color: rgba(87, 28, 28, 0.4) */
}

.project-4 {
  background-color: rgba(243, 247, 253, 0.9);
}

.project-3 {
  background-color: rgba(251, 210, 92, 0.2);
}
</style>