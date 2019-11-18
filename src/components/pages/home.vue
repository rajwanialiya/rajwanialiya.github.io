<template>
  <div>
    <nav-bar></nav-bar>
    <socials></socials>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <intro class="section intro"></intro>
      <project-left class="section">
        <template slot="description">
          <div class="image">
            <router-link to="flashfood-site"><img src="../assets/Website-Mockup.png"></router-link>
          </div>
          <div>
            <div class="intro">
              <p>Web Development & UI/UX</p>
              <h2>Flashfood.com</h2>
            </div>
            <div class="main">
              <div class="blurbContainer">
                <p class="blurb rightSpace">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and the company's CTO to design and implement a scalable updated main website that reflected these changes.</p>
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
              <a href="pages/flashfoodSite.html" class="visit"><img src="../assets/casestudy.svg"></a>
              <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="../assets/globe.svg"></a>
            </div>
          </div>
          <div class="image">
            <a href="pages/counter.html"><img src="../assets/Website-Mockup.png"></a>
          </div>
        </template>
      </project-right>
      <project-left class="section">
        <template slot="description">
          <div class="image">
            <a href="pages/flashfoodSite.html"><img src="../assets/Website-Mockup.png"></a>
          </div>
          <div>
            <div class="intro">
              <p>App Development & UI/UX</p>
              <h2>Nailed It</h2>
            </div>
            <div class="main">
              <p class="blurb">“Nailed It” is a collaboratively developed app that won second place at the TechXplore Healthcare & AI hackathon. The app uses open-source machine learning libraries and Python to perform early-stage diagnosis of anemia, oxygen deprivation illnesses, and various infections by analyzing the colour discrepancy between users' skin and nails.</p>
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