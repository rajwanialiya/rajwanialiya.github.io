<template>
  <div>
    <side-nav></side-nav>
    <socials></socials>
    <project>
      <template slot="img"><img class="header-img" src='../assets/project2-header.svg'></template>
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
          <div class="step">
            <div class="top">
              <div class="num"><h5>1</h5></div>
              <div>
                <p class="adj">pull from database</p>
                <h4>Real-time statistics</h4>
              </div>
            </div>
            <hr>
            <p>A record of order bag weights is stored in the Flashfood database, which updates every 30 minutes. This equates to the total amount of food waste diverted from landfills by the app's users.</p>
          </div>
          <div class="step">
            <div class="top">
              <div class="num"><h5>2</h5></div>
              <div>
                <p class="adj">design and build</p>
                <h4>Count-up animation</h4>
              </div>
            </div>
            <hr>
            <p>To create an animated counter while displaying accurate statistics, I subtracted a value from the total weight diverted, and increased this value by smaller increments over a given time, until the value displayed was the total weight diverted.</p>
            <table>
              <tr>
                <td class="first-col">Unique user experience</td>
                <td>
                  <ul>
                    <li>By subtracting a random value between 700 and 1000 from the total weight diverted, I ensured that a unique start number is displayed everytime the page is loaded</li>
                    <li>To display the data in a more interesting way, for every increase interval (1.2s), I added a random value between 10 and 20 until the start value matched the total weight diverted</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="first-col">Digestible change</td>
                <td>
                  <ul>
                    <li>To display the data in a way that was easy to understand, the values shown were rounded to two decimal places</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="first-col">Noticeable animations</td>
                <td>
                  <ul>
                    <li>To ensure the counter displayed the data in a way that resonated with the user, I created a 1s delay before the start of the animation, and incremented the values every 120s. These values were chosen based on the average amount of time spent on the website page and common user movement.</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <div class="step">
            <div class="top">
              <div class="num"><h5>3</h5></div>
              <div>
                <p class="adj">implement in the Flashfood API</p>
                <h4>An endpoint to embed the count-up</h4>
              </div>
            </div>
            <hr>
            <p>To access the statistics required from Flashfood's database from the main website, an additional endpoint in Flashfood’s API was required. This was created using Node.JS. An unexpected error that I came across while completing this task was a Cross-Origin Resource Sharing (CORS) error. This is because the response request was missing an Access-Control-Allow-Origin header and as a result the Flashfood database couldn't be accessed by the main website. The following code was used to overcome this issue:</p>
<pre>
  <code> 
    module.exports = function(app, events) {
        var cors = require('cors')
        const whitelist = ['https://www.flashfood.com/'];
        var corsOptions = {
            origin: function (origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
                } else {
                callback(new Error('Not allowed by CORS'))
                }
            }
        }
    }
  </code>
</pre>
          </div>
        </div>
        <div class="next">
          <h2>Next Steps</h2>
          <p>Overall, the counter met the objectives it was meant to achieve. After demonstrating the feature to the Flashfood team and implementing their suggestions, I was able to display a counter with the optimal count-up and delay speeds. The following are steps that can be taken to further improve this feature in the future:</p>
          <ul>
            <li>The report's loading time can sometimes take longer than expected. If this time were reduced, the feature would be more effective.</li>
            <li>The counter currently displays the amount of food waste diverted from landfills. However, on the Flashfood app, there is an "Impact" section that displays this statistic along with the amount of CO₂ diverted and money saved. To maintain consistency, it may be beneficial to display these statistics in a similar counter on the main website as well.</li>
          </ul>
        </div>
      </template>
      <template slot="prev-proj">
        <router-link to='/flashfood-site'><div class="prev-proj"></div></router-link>
      </template>
      <template slot="next-proj">
        <router-link to='/tb-email-preferences'><div class="next-proj"></div></router-link>
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

<style scoped>

.header-img {
  position:relative;
  top: -200px;
  width: 100%;
}

.breakdown, .next {
  margin-top: 40px;
  width: 100%;
}

.adj {
  margin-bottom: 0; 
  margin-top: 0.7em;
  color: rgba(238, 117, 47, 1)
}

hr {
  margin-top: 0.5em;
}

.top {
  display: flex;
  align-items: center;
}

.num {
  border: black solid 2px;
  border-radius: 500px; 
  margin-right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.num > * {
  margin: 0;
}

table {
  margin: 30px 0;
}

table > tr {
  vertical-align: top;
  color: #6D6D6D;
}

.first-col {
  width: 20%;
  margin-right: 20px;
  padding: 0;
}

pre {
  width: 100%;
  display: flex;
  justify-content: center;
}

.prev-proj, .next-proj {
  width: 100%;
  height: 100%;
}
</style>