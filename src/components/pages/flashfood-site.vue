<template>
  <div>
    <side-nav></side-nav>
    <socials></socials>
    <project>
      <template slot="img"><img src='../assets/project1-header.svg'></template>
      <template slot="title">Flashfood Main Website</template>
      <template slot="category">Web Development & UI/UX</template>
      <template slot="description">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and company's CTO to design and implement a scalable updated main website that reflected these changes.</template>
      <template slot="logo"><img src="../assets/flashfood.png"></template>
      <template slot="role">
        <p>UX Developer</p>
        <p>Worked with Design Lead</p>
        <p>Guidance by CTO</p>
      </template>
      <template slot="timeline">
        <p>6 weeks</p>
      </template>
      <template slot="challenge">
        <p>Flashfood.com redesign</p>
      </template>
      <template slot="tools">
        <p>JavaScript CSS</p>
        <p>HTML Webflow</p>
      </template>
      <template slot="goals">
        <div class="row">
          <div class="col">
            <p class="adj">improve</p>
            <h4>Brand Alignment</h4>
            <hr>
            <p>One of the main objectives I aimed to achieve through this project was to ensure that the company’s main website was congruent with other aspects of marketing to ensure a strong, consistent and sustainable brand.</p>
          </div>
          <div class="col">
            <p class="adj">build</p>
            <h4>Scaling Solution</h4>
            <hr>
            <p>It was necessary to build a scalable solution to ensure minor changes can be made quickly and easily as Flashfood grows and it's brand evolves.</p>
          </div>          
        </div>
        <div class="row">
          <div class="col">
            <p class="adj">increase</p>
            <h4>Site Conversion Rate</h4>
            <hr>
            <p>In this case, website conversions in three forms were used to increase action; app downloads, location request submissions, and news subscriptions and notifications.</p>
          </div>
          <div class="col">
            <p class="adj">increase</p>
            <h4>Brand Awareness</h4>
            <hr>
             <p>Flashfood.com serves an informational purpose; educate users about the solution being offered. The updated website was designed to clearly explain the solution by combing eye-catching visual elements with concise copy. </p>
          </div>
        </div>
      </template>
      <template slot="requirements">
        <div class="animation">
          <span id="typed"></span>
        </div>
      </template>
      <template slot="other">
      <div class="comp">
        <h2>Competitive Analysis</h2>
      </div>
      <div class="design">
        <h2>Design</h2>
        <div class="row des">
          <div class="col border-right border-left">
            <h1 class="lg-font">Ab</h1>
            <h5>SF Pro Text</h5>
          </div>
          <div class="col border-right">
            <p>Inactive State</p>
            <button>Button</button>
            <p>Active State</p>
            <button>Button</button>
          </div>
          <div class="col border-right">
            <div class="little-img"></div>
          </div>
          <div class="col border-right">
            <div class="colors">
              <div class="row">
                <div class="col one"></div>
                <div class="col two"></div>
                <div class="col three"></div>
              </div>
              <div class="row">
                <div class="col four"></div>
                <div class="col five"></div>
                <div class="col six"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </template>
    </project>
  </div>
</template>

<script>
import sideNav from '../side-nav'
import project from '../project'
import socials from '../socials'
import Typed from 'typed.js'

export default {
  name: 'flashfood-site',
  data () {
    return {}
  }, 
  components: {
    'side-nav': sideNav,
    'project': project, 
    'socials': socials
  }, 
  mounted: function () {
    this.typed()
  },
  methods: {
    typed: function () {
      var one = "Must be responsive and accessible on multiple screen sizes"
      var two = "Information must be presented in a clear and concise manner"
      var three = "Must be available in both French and English"
      var four = "Must encourage visitors to input their contact information into one of the available fields"
      var five = "Should reflect the company’s culture and commitment to positive global change"
      var six = "Must reduce friction points and provide multiple entry points to all webpages"

      var text = [one, two, three, four, five, six]
      var typed = new Typed("#typed", {
        strings: text,
        typeSpeed: 20,
        backSpeed: 40,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        smartBackspace: true
      });
    }
  }
}
</script>

<style scoped>
.adj {
  margin-bottom: 0;
}

.adj {
  margin-top: 0.7em;
  color: rgba(233, 110, 130, 1)
}

hr {
  margin-top: 0.5em;
}

.comp, .design {
  margin-top: 40px;
  width: 100%;
}

.des {
  height: 150px;
}

.des > div {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lg-font {
  font-size: 5em;
}

button {
  margin-bottom: 20px;
}

.little-img {
  background-image: url('../assets/little-img.svg');
  background-size: contain;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.colors {
  width: 100%;
  height: 100%;
}

.colors > .row {
  height: 50%;
}

.one, .two, .three, .four, .five, .six {
  margin: 10px; 
  border-radius: 50%;
  width: 100%;
}

.one {
  background-color: rgb(66, 144, 66);
}

.two {
  background-color: rgb(51, 51, 51)
}

.three {
  background-color: rgb(204, 58, 45)
}

.four {
  border-color: rgb(100, 100, 100);
  border: solid 1px;
}

.five {
  background-color: rgb(119, 119, 119)
}

.six {
  background-color: rgb(247, 202, 69)
}
</style>