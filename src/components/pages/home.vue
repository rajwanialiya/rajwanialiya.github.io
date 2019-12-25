<template>
  <div>
    <canvas id="canvas"></canvas>
    <nav-bar></nav-bar>
    <socials></socials>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <intro ref="home" class="section intro"></intro>
      <project-right class="section fp-auto-height">
        <template id="work" slot="description">
          <div class="writing">
            <div class="intro">
              <p>Machine Learning & Web Development</p>
              <h2>Exstrahlen</h2>
            </div>
            <div class="main">
              <div>
                <a href="https://github.com/rajwanialiya/Exstrahlen/blob/master/README.md" target="_blank" class="code two"><img src="../assets/code.png"></a>
              </div>
              <p class="blurb project-1">Exstrahlen is a web application that aims to reduce patient wait times by helping radiologists perform diagnostics more efficiently. The app achieves this through a convolutional neural network to identify and analyze abnormalities in chest scans.</p>
            </div>
            <ul class="skills second">
              <li>Machine Learning</li>
              <li>Node.js</li>
              <li>Vue</li>
              <li>GCP</li>
            </ul>
          </div>
          <div class="image">
            <a href="https://github.com/rajwanialiya/Exstrahlen/blob/master/README.md" target="_blank"><img src="../assets/exstrahlen-mockup.svg"></a>
          </div>
        </template>
      </project-right>
      <project-left class="section fp-auto-height">
        <template slot="description">
          <div class="image">
            <router-link to="flashfood-site"><img src="../assets/flashfood-site-mockup.svg"></router-link>
          </div>
          <div class="writing">
            <div class="intro">
              <p>Web Development & UI/UX</p>
              <h2>Flashfood.com</h2>
            </div>
            <div class="main">
              <p class="blurb">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and the company's CTO to design and implement a scalable updated main website that reflected these changes.</p>
              <div>
                <router-link to="flashfood-site" class="visit"><img src="../assets/casestudy.svg"></router-link>
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
            </div>
        </template>
      </project-left>
      <project-right class="section fp-auto-height">
        <template slot="description">
          <div class="writing">
            <div class="intro">
              <p>Web Development & Back-End</p>
              <h2>Food Waste Counter</h2>
            </div>
            <div class="main">
              <div>
                <router-link to="flashfood-counter" class="visit two"><img src="../assets/casestudy.svg"></router-link>
                <a href="https://www.flashfood.com/" target="_blank" class="visit two"><img src="../assets/globe.svg"></a>
              </div>
              <p class="blurb">This real-time counter displays the amount of food waste diverted from landfills by Flashfood users. To build this feature I connected the counter to the Flashfood database, created an API endpoint to embed the counter, and designed and animated the count-up to increase interactivity.</p>
            </div>
            <ul class="skills second">
              <li>Javascript</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </div>
          <div class="image">
            <router-link to="flashfood-counter"><img src="../assets/flashfood-counter-mockup.svg"></router-link>
          </div>
        </template>
      </project-right>
      <project-left class="section fp-auto-height">
        <template slot="description">
          <div class="image">
            <a href="https://github.com/rajwanialiya/hackxplore"><img src="../assets/nailed-it-mockup.svg"></a>
          </div>
          <div class="writing">
            <div class="intro">
              <p>App Development & UI/UX</p>
              <h2>Nailed It</h2>
            </div>
            <div class="main">
              <p class="blurb">“Nailed It” is a collaboratively developed app that uses open-source machine learning libraries and Python to perform early-stage diagnosis of anemia, oxygen deprivation illnesses, and various infections by analyzing the colour discrepancy between users' skin and nails.</p>
              <div>
                <a href="https://github.com/rajwanialiya/hackxplore" target="_blank" class="code two"><img src="../assets/code.png"></a>
              </div>
              </div>
              <ul class="skills">
                <li>Python</li>
                <li>TensorFlow</li>
                <li>UI</li>
                <li>UX</li>
                <li>Figma</li>
              </ul>
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
        onLeave: this.clear,
        responsiveWidth: 480,
        afterResponsive: function(isResponsive){}
      },
      mouseX: 0, 
      mouseY: 0, 
      empty: true
    }
  },
  // computed: {
  //   classList: function () {
  //     return document.body.classList.item(0)
  //   }
  // }, 
  // watch: {
  //   classList: function () {
  //     // this.clear()
  //     console.log('change')
  //   }
  // },
  components: { 
    'nav-bar': nav, 
    'socials': socials,
    'intro': intro, 
    'project-left': projectLeft, 
    'project-right': projectRight
  },
  mounted: function () {
    this.canvasInit()
    window.addEventListener('mousemove', this.setMousePosition)
    setInterval(this.clear, 8000)
  },
  methods: {
    canvasInit: function () {
      var canvas = document.querySelector('#canvas')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    },
    update: function () {
      var canvas = document.querySelector('#canvas')
      var context = canvas.getContext('2d')
      context.beginPath()
      context.arc(this.mouseX, this.mouseY, 110, 0, 2 * Math.PI, true)
      context.fill()
    }, 
    setMousePosition: function (event) {
      var canvas = document.querySelector('#canvas')
      var context = canvas.getContext('2d')
      context.fillStyle = '#f4f7fc'
      // console.log(this.classList)
      if (document.body.classList.contains('fp-viewing-0')) {
        context.clearRect(0, 0, canvas.width, canvas.height)
      } else if (document.body.classList.contains('fp-viewing-1')) {
        context.fillStyle = "#B5FFEB"
      } else if (document.body.classList.contains('fp-viewing-2')) {
        context.fillStyle = "#e5c8ff"
      } else if (document.body.classList.contains('fp-viewing-3')) {
        context.fillStyle = "#FFAFD1"
      } else if (document.body.classList.contains('fp-viewing-4')) {
        context.fillStyle = "#FFFBA9"
      }
      
      this.mouseX = event.clientX
      this.mouseY = event.clientY
      window.requestAnimationFrame(this.update)
    },
    clear: function () {
      var canvas = document.querySelector('#canvas')
      var context = canvas.getContext("2d")
      context.clearRect(0, 0, canvas.width, canvas.height)
      // var screenData = context.getImageData(0, 0, canvas.width, canvas.height)
      // var globalAlpha = 10
      // for (let i = 3; i < screenData.data.length; i+=4) {
      //   while (screenData.data[i] > 1) {
      //     setTimeout (function () {
      //       screenData.data[i] -= globalAlpha //delta-Alpha
      //     }, 100)
      //   }
      // }
      // context.putImageData(screenData, 0, 0)
      // console.log('hey')

      // console.log('clear')
      // var canvas = document.querySelector('#canvas')
      // var context = canvas.getContext("2d")
      // // context.clearRect(0, 0, canvas.width, canvas.height)  
      // var alpha = 1.0
      // while (alpha > 0) {
      //   context.globalAlpha = alpha
      //   alpha += -0.01
      //   console.log('hey')
      // }
      // context.clearRect(0,0, canvas.width, canvas.height)
      // requestAnimationFrame(clear)
    
      // context.drawImage(img, 10, 10) 
    }, 
    test: function () {
      console.log('test')
    }
  }
}
</script>

<style>
#canvas {
  position: fixed;
}

.project-4 {
  background-color: rgba(243, 247, 253, 0.9);
}

.project-3 {
  background-color: rgba(106, 223, 112, 0.2);
}

.portfolio {
  margin: 0 24px;
}

@media screen and (max-width: 950px) {
  .portfolio {
    flex-direction: column;
    max-width: 700px;
  }

  .image {
    width: 100%;
    order: 1;
  }

  .image img {
    position: static !important;
  }

  .writing {
    order: 2;
  }

  .blurb {
    width: 100% !important;
    background-color: rgb(250, 250, 250);
  }

  .intro p {
    margin-bottom: 0;
    margin-top: 0.7em;
  }
}
</style>