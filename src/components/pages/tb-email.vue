<template>
  <div>
    <side-nav></side-nav>
    <socials></socials>
    <project>
      <template slot="img"><div class="grey"><img class="header-img" src='../assets/tb-header.svg'></div></template>
      <template slot="title">Email Preferences Centre</template>
      <template slot="category">
        Web Development & API Interaction
        <br><strong><a href="https://www.tunnelbear.com/email-preferences" target="_blank" class="live">View Live <span class="arrow">&#8594;</span></a></strong>
      </template>
      <template slot="description">This email preferences centre offers an intuitive and simple method for TunnelBear users to opt in and out of emails. The solution uses logic implemented on the front-end and interaction with the back-end to personalize the methods provided by Mailgun's API to fit the feature's needs.</template>
      <template slot="logo"><img src="../assets/tunnelbear-logo.png"></template>
      <template slot="role">
        <p>Web Developer</p>
        <p>Consulted Design team</p>
        <p>Worked with Back-end</p>
      </template>
      <template slot="timeline">
        <p>3 weeks</p>
      </template>
      <template slot="challenge">
        <p>Develop TunnelBear's email preferences centre</p>
      </template>
      <template slot="tools">
        <p>Vue.js</p>
      </template>
      <template slot="goals">
        <h2>Project Goals</h2>
        <div class="row">
          <div class="col">
            <p class="adj">maintain</p>
            <h4>Mailing Lists</h4>
            <hr>
            <p>To retain email recipients a centre was developed where users could opt in and out of product information emails and educational content. By separating marketing emails into sub-categories users are less likely to unsubscribe from all future TunnelBear emails. This solution allowed us to maintain mailing lists while meeting legal requirements.</p>
          </div>
          <div class="col">
            <p class="adj">improve</p>
            <h4>Brand Alignment</h4>
            <hr>
            <p>Previously the 'Unsubscribe' button in the footer of all TunnelBear's marketing emails led users to a default confirmation page hosted by MailGun (the platform used to manage TunnelBear's mailing lists). One of the main objectives of this project was to ensure that the email preferences centre is congruent with the company's user-friendly and intuitive product.</p>
          </div>
        </div>
      </template>
      <template slot="other">
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
          <b-modal id="modal-1" size="lg" hide-footer="true" hide-header="true">
            <img class="wireframe" src='../assets/wireframe1.png'>
          </b-modal>
          <b-modal id="modal-2" size="lg" hide-footer=true hide-header=true>
            <img class="wireframe" src='../assets/wireframe2.png'>
          </b-modal>
          <b-modal id="modal-3" size="lg" hide-footer=true hide-header=true>
            <img class="wireframe" src='../assets/wireframe3.png'>
          </b-modal>
        </div>
        <div class="iterations">
          <h2>Iterations</h2>
          <p>The design and implementation process involved developing my ideas, consulting the design team and web team leads for feedback, and returning to the development stage. This resulted in many itertaions of the preferences centre, of which the most notable one is included below.</p>
           <img class="iteration-img" src="../assets/iteration.png">
           <p>TunnelBear's committment to being user-friendly and transparent dictated the necessity for an intuitive and confusion-free user experience. The following iteration is where I encountered a challenge. The toggle switches beside the email subcategories allow users to opt in, however by checking the 'Unsubscribed all' option, the user is opting out of all emails. The discrepency in the meaning of ON, could introduce confusion. Furthermore, toggling the 'Unsubscribe all' button ON,turns the other subcategory option OFF. Toggling it OFF, resubscibes user's to all emails. This means the button text is misleading.</p>
        </div>
        <div class="challenges">
          <h2>Code Challenges</h2>
          <div class="step">
            <div class="top">
              <div class="num"><h5>1</h5></div>
              <div>
                <p class="adj">vue lifecycle</p>
                <h4>Variable Updates</h4>
              </div>
            </div>
            <hr>
            <p><strong>Challenge: </strong>The Vue v-model method is updated after any function calls on the element, however I needed the updated variable to be used in the function call; I wanted the v-model method to be executed before the function call.<br>
            <strong>Solution: </strong>To resolve this I used the nextTick method on the function to ensure that it was called after the DOM had been updated (and the v-model method had been executed).</p>
          </div>
          <div class="step">
            <div class="top">
              <div class="num"><h5>1</h5></div>
              <div>
                <p class="adj">mailgun API</p>
                <h4>Opting into categories</h4>
              </div>
            </div>
            <hr>
            <p><strong>Challenge: </strong>If a user is unsubscribed to all emails, in Mailgun their preferences include a '*' tag. If this user would like to re-subscribe to one or more of the email subcategories, they are unable to do so.<br>
            <strong>Solution: </strong>To work around the obstacle imposed by Mailgun's API, if a user's preferences included the '*' tag, upon submitting the updated form, a preliminary call was made to resubscribe the user to all emails, followed by a secondary call made to unsubcribe users from the specific email tags they had chosen. While this wasn't the most elegant solution, the work around was necessary to overcome the Mailgun obstacle, and achieved its purpose.</p>
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
    name: 'tb-email',
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
.grey {
  background-color: rgb(92, 138, 219);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-left: 10vw ;
}

.header-img{
  width: 85%;
}

.arrow {
  color: black;
}

.live:hover .arrow{
  margin-left: 5px;
}

.adj{
  margin-bottom: 0;
  margin-top: 0.7em;
  color: rgb(237, 172, 0);
}

.planning, .iterations, .challenges{
  margin-top: 40px;
  width: 100%;
}

.planning h2 {
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
  background: rgba(245, 190, 56, 0.8);
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

.light-box, .light-box:hover, .light-box.active.focus, .light-box.active:focus,
.light-box.focus, .light-box:active.focus, 
.light-box:active:focus, .light-box:focus{
  background-color: transparent;
  padding: 0;
  border: none;
}

.iteration-img {
  width: 100%;
  margin-bottom: 25px;
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
</style>
