<template>
  <div>
    <side-nav></side-nav>
    <socials></socials>
    <project>
      <template slot="img"><img src='../assets/project1-header.svg'></template>
      <template slot="title">Flashfood Main Website</template>
      <template slot="category">
        Web Development & UI/UX
        <br><strong><a href="https://www.flashfood.com/" target="_blank" class="live">View Live &#8594;</a></strong>
      </template>
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
        <h2>Project Goals</h2>
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
        <h2>Requirements</h2>
        <div class="animation">
          <span id="typed"></span>
        </div>
      </template>
      <template slot="other">
        <div class="comp">
          <h2>Competitive Analysis</h2>
          <p>To gain a better sense of what a website that met the above requirements looked like, I researched aspects of existing websites that aimed to meet similar objectives. This included websites that fulfilled the purposes of informing users of a product or service to convert web visitors, and websites of fast-growing companies.</p>
          <div class="row">
            <div class="col-5">
              <p>
                Three similar aspects among these designs that were also incorporated into the redesign are the call-to-action buttons (CTAs) in both the navbar and header, full-screen hero images, and the position of the header text.
              </p>
              <p>
              </p>
            </div>
            <div class="col-7">
              <carousel :items="1" :autoplay="true" :loop="true" :nav="false">
                <img src="../assets/hero.png">
                <img src="../assets/hero2.png">
                <img src="../assets/hero3.png">
              </carousel>
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <p>
                Uber directs its user segments to the appropriate sections of their website at the very beginning of the user’s journey. This is done with clear and concise copy, large header text and bright CTAs. When creating wireframes for the redesign, a similar layout was considered to target the two groups of Flashfood users; Shoppers and Vendors.
              </p>
            </div>
            <div class="col-7">
              <img class="image" src="../assets/uber.png">
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <p>
                Row and column layouts were used to organize information in a digestible manner. A similar structure to the below examples were used in the updated Flashfood website (image, header text, paragraph text, CTA).
              </p>
            </div>
            <div class="col-7">
              <carousel :items="1" :autoplay="true" :loop="true" :nav="false">
                <img src="../assets/column1.png">
                <img src="../assets/column2.png">
              </carousel>
            </div>
          </div>
        </div>
        <div class="planning">
          <h2>Planning</h2>
          <div class="row">
            <div class="col border"><b-button v-b-modal.modal-1 class="light-box">
              <img class="wireframe" src='../assets/wireframe1.png'>
              <div class="go-corner">
                <h4 class="go-arrow">→</h4>
              </div>
            </b-button></div>
            <div class="col border"><b-button v-b-modal.modal-2 class="light-box">
              <img class="wireframe" src='../assets/wireframe2.png'>
              <div class="go-corner">
                <h4 class="go-arrow">→</h4>
              </div>
            </b-button></div>
            <div class="col border"><b-button v-b-modal.modal-3 class="light-box">
              <img class="wireframe" src='../assets/wireframe3.png'>
              <div class="go-corner">
                <h4 class="go-arrow">→</h4>
              </div>
            </b-button></div>
          </div>
          <b-modal id="modal-1" size="lg" hide-footer=true hide-header=true>
            <img class="wireframe" src='../assets/wireframe1.png'>
          </b-modal>
          <b-modal id="modal-2" size="lg" hide-footer=true hide-header=true>
            <img class="wireframe" src='../assets/wireframe2.png'>
          </b-modal>
          <b-modal id="modal-3" size="lg" hide-footer=true hide-header=true>
            <img class="wireframe" src='../assets/wireframe3.png'>
          </b-modal>
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
                  <div class="col four"></div>
                  <div class="col five"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="challenge">
          <h2>Challenge</h2>
          <div class="row">
            <div class="col-7 img">
              <img class="border" src="../assets/challenge.png">
            </div>
            <div class="col">
              <p>A challenge I encountered while working on the contact form, was the limit of 5,000 submissions allowed by the website's hosting platform. To overcome this challenge and offer a more long-term and scalable solution, I intercepted the form submissions and validated the form data before creating an HTTP request via AJAX and returning a status message. The form data was then sent to the company’s customer service platform as a pending ticket, where the customer service team could easily respond to inquiries.</p>
            </div>
          </div>
        </div>
        <div class="results">
          <h2>Results</h2>
          <div class="row">
            <div class="col">
              <div class="top">
                <img src="../assets/improve.png">
                <div>
                  <p class="adj">improved</p>
                  <h4>Brand Alignment</h4>
                </div>
              </div>
              <hr>
              <ul>
                <li>Consulted the marketing and product design teams for feedback and outcome</li>
              </ul>
            </div>
            <div class="col">
              <div class="top">
                <img src="../assets/build.png">
                <div>
                  <p class="adj">built</p>
                  <h4>Scaling Solution</h4>
                </div>
              </div>
              <hr>
              <ul>
                <li>Updates were easily made when Flashfood's partnered with over 100 additional grocery stores shortly after the website launch</li>
              </ul>
            </div>          
          </div>
          <div class="row">
            <div class="col">
              <div class="top">
                <img src="../assets/increase.png">
                <div>
                  <p class="adj">increased</p>
                  <h4>Site Conversion Rate</h4>
                </div>
              </div>
              <hr>
              <ul>
                <li>Email and newsletter subscription rates increased by around 35% after the updated website's launch</li>
              </ul>
            </div>
            <div class="col">
              <div class="top">
                <img src="../assets/increase2.png">
                <div>
                  <p class="adj">increased</p>
                  <h4>Brand Awareness</h4>
                </div>
              </div>
              <hr>
              <ul>
                <li>All key information has been presented in blurbs of less than three sentences</li>
              </ul>
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
import carousel from 'vue-owl-carousel'

export default {
  name: 'flashfood-site',
  data () {
    return {}
  }, 
  components: {
    'side-nav': sideNav,
    'project': project, 
    'socials': socials,
    'carousel': carousel
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
        smartBackspace: true, 
      });
    }
  }
}
</script>

<style scoped>
.adj{
  margin-bottom: 0;
  margin-top: 0.7em;
  color: rgba(233, 110, 130, 1);
}

.live:hover {
  font-size: 17px;
}
.comp, .design, .results, .planning {
  margin-top: 40px;
  width: 100%;
}

.design h2, .planning h2, .challenge h2 {
  margin-bottom: 0.9em;
}

.planning .col {
  padding: 0;
  margin: 0 15px;
  overflow: hidden;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
}

.go-arrow {
  margin-top: 5px;
  margin-right: 15px;
  color: white;
  font-family: courier, sans;
  z-index: 10;
}

.wireframe {
  width: 100%;
}

.light-box {
  margin-bottom: 0;
}

.light-box:before {
  content: "";
  position: absolute;
  z-index: 3;
  top: -16px;
  right: -16px;
  background: rgba(233, 110, 130, 0.9);
  height: 45px;
  width: 45px;
  border-radius: 45px;
  transform: scale(2);
  transform-origin: 50% 50%;
  transition: transform 0.15s ease-out;
}

.light-box:hover:before {
  transform: scale(4.5);
}

.challenge {
  margin-top: 80px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.colors > .row {
  height: 100%;
  padding: 0 20px;
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
  background-color: rgb(119, 119, 119)
}

.five {
  background-color: rgb(247, 202, 69)
}

.challenge > .row {
  display: flex; 
  align-items: center;
}

.img img {
  width: 100%;
  height: 100%;
}

.top {
  display: flex;
  align-items: center;
}

.top > img {
  max-width: 50px;
  max-height: 50px;
  margin-right: 20px;
}

.light-box, .light-box:hover, .light-box.active.focus, .light-box.active:focus,
.light-box.focus, .light-box:active.focus, 
.light-box:active:focus, .light-box:focus{
  background-color: transparent;
  padding: 0;
  border: none;
}

.owl-carousel .owl-item img {
  display: flex
}

.image {
  width: 100%
}

.comp .row {
  padding: 30px 0;
}
 </style>