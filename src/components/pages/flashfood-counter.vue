<template>
  <div>
    <side-nav></side-nav>
    <socials></socials>
    <project>
      <template slot="img"><img src='../assets/project2-header.svg'></template>
      <template slot="title">Food Waste Counter</template>
      <template slot="category">Web Development & Back-End</template>
      <template slot="description">My task was to create a count-up to display the amount of food waste diverted from landfills by Flashfood users, in real-time. This project involved pulling statistics from the Flashfood database to constantly update the counter, creating an API endpoint to reference when embedding the feature, and designing animating the count-up to increase interactivity.</template>
      <template slot="logo"><img src="../assets/flashfood.png"></template>
      <template slot="role">
        <p>Full-Stack Developer</p>
        <p>Worked with Dev Team</p>
        <p>Guidance by CTO</p>
      </template>
      <template slot="timeline">
        <p>1 week</p>
      </template>
      <template slot="challenge">
        <p>Live Food Waste Count-up</p>
      </template>
      <template slot="tools">
        <p>JavaScript SQL</p>
        <p>HTML CSS Vue</p>
      </template>
      <template slot="other">
      <div class="steps">
        <h2>Next Steps</h2>
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

  export default {
    name: 'flashfood-counter',
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

<style>
.steps {
  margin-top: 40px;
}
</style>