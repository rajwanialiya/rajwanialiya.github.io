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
        <div class="breakdown">
          <h2>Project Breakdown</h2>
          <div class="row">
            <div class="col">
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
.steps, .breakdown {
  margin-top: 40px;
  width: 100%;
}

</style>