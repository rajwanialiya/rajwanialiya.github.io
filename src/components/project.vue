<template>
  <div>
  <div class="page-wrap">
    <div class="header"><slot name="img"></slot></div>
    <div class="page-content">
      <div class="intro">
        <div class="title">
          <h2><slot name="title"></slot></h2>
          <p><slot name="category"></slot></p>
        </div>
        <p><slot name="description"></slot></p>
      </div>
      <div class="logo"><slot name="logo"></slot></div>
      <div class="overview">
        <div class="row">
          <div class="col-md-3">
            <h5 class="black">Role</h5>
            <div class="list"><slot name="role"></slot></div>
          </div>
          <div class="col-md-3">
            <h5 class="black">Timeline</h5>
            <div class="list"><slot name="timeline"></slot></div>
          </div>
          <div class="col-md-3">
            <h5 class="black">Challenge</h5>
            <div class="list"><slot name="challenge"></slot></div>
          </div>
          <div class="col-md-3">
            <h5 class="black">Tools</h5>
            <div class="list"><slot name="tools"></slot></div>
          </div>
          <!-- <p>https://leloi.ca/fr/artistes/detail/baillat/</p>
          <p>https://encry.com/use-cases/</p> --> 
        </div>
      </div>
      <div class="goals">
        <h2>Project Goals</h2>
        <slot name="goals"></slot>
      </div>
      <div class="requirements">
        <h2>Requirements</h2> 
        <slot name="requirements"></slot>
      </div>
      <slot class="other" name="other"></slot>
    </div>
  </div>
    <!-- <div id="display">
      <li class="layer">
        <img id="moon2" src="../assets/circle.svg">
      </li>
      <h1>Hey there</h1>
      <h2>This page is currently under construction</h2>
      <p>To learn more about this project, visit this page on a desktop device or get in touch <a href="mailto:rajwani.aliya@gmail.com">here</a></p>
  </div>

  <div class="WHOLE">
  <div class="darken"></div>
  <a class="back" href="../index.html"><img class="arrow" src="../assets/arrow.svg"></a> -->
  
  <div id="BackToTop"></div>
          <!-- Section 3 -->
          <h2 style="padding-top: 12px">Competitive Analysis</h2>
          <p>In order to gain a better sense of what a website that met the above requirements looked like, I analyzed and compared aspects of existing websites that aimed to meet similar objectives. This included websites that fulfilled the purposes of informing users of a product or service being offered and converting web visitors, and websites of growing companies. The following are some of the successful web elements from which inspiration was drawn. </p>
          <section>
              <div class="module"  id="column">
                  <div class="images">
                    <!-- <div class="image1"><img src="../assets/hero.png"></div>
                    <div class="image2"><img src="../assets/hero4.png"></div> -->
                  </div>
                  <p> Three similar aspects among the above designs that were incorporated into the redesign are the call-to-action buttons (CTAs) in both the navbar and header, the full-screen size of the hero image and the position of the header text.</p> 
              </div>
              <div class="module" id="row">
                  <p class="paragraphLeft"> Uber directs its user segments to the appropriate sections of their website at the very beginning of the user’s journey. This is done with clear and concise copy, large header text and bright CTAs. When creating wireframes for the redesign, a similar layout was considered to target the two groups of Flashfood users; Shoppers and Vendors. </p> 
                  <!-- <div class="image2"><img src="../assets/User Segmentation.png"></div> -->
              </div>
              <div class="module" id="column">
                  <div class="images">
                      <p class="paragraphLeft">Row and column layouts were used to organize information in a digestible manner. A similar structure to the below examples were used in the updated Flashfood website (image, header text, paragraph text, CTA).</p> 
                      <!-- <div class="image2" id="space"><img src="../assets/main2.png"></div> -->
                  </div>
                  <div class="images">
                      <div class="imageStack">
                          <!-- <img src="../assets/main3.png">
                          <img src="../assets/main.png"> -->
                      </div>
                      <!-- <div class="image2"><img src="../assets/main4.png"></div> -->
                  </div>
              </div>
          </section>
          <!-- Section 4 -->
          <h2 style="padding-top: 12px">Design</h2>
          <div class="VisualStyles">
              <div class="letters">
                  <h1>Ab</h1>
                  <h2>SF Pro Text</h2>
              </div>
              <div class="buttons">
                  <container>
                  <p>Inactive State</p>
                  <button class="inactive">Button</button>
                  <p>Active State</p> 
                  <button class="active">Button</button>
                  </container>
              </div>
              <!-- <div class="image"><img src="../assets/visualStyles.svg"/></div> -->
              <div class="colours">
                  <section> 
                      <div class="green"></div>
                      <div class="lightgrey"></div>
                      <div class="darkgrey"></div>
                  </section>
                  <section>
                      <div class="white"></div>
                      <div class="black"></div>
                      <div class="yellow"></div>
                  </section>
              </div>
          </div>
          
          <h4 class="wireframes">Wireframes & Planning</h4>
          <div class="row">
                  <!-- <div class="column" onclick="openTab('b1');">
                      <img src="../assets/wireframe.jpg"> 
                  </div>
                  <div class="column" onclick="openTab('b2');">
                      <img src="../assets/nav.jpg">
                  </div>
                  <div class="column" onclick="openTab('b3');">
                      <img src="../assets/food waste.jpg">
                  </div>
                </div> -->
                
                <!-- Full-width columns: (hidden by default) -->
                <div id="b1" class="containerTab" style="display:none;background: #77777756">
                  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
                  <!-- <img class="open" src="../assets/wireframe.jpg"> -->
                </div>
                
                <div id="b2" class="containerTab" style="display:none;background:#77777756">
                  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
                  <!-- <img class="open" src="../assets/nav.jpg"> -->
                </div>
                
                <div id="b3" class="containerTab" style="display:none;background: #77777756">
                  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
                  <!-- <img class="open" src="../assets/food waste.jpg"> -->
                </div>
                
          <!-- <div class="uploads">
              <div><img src="../assets/wireframe.jpg"></div>
              <div><img src="../assets/nav.jpg"></div>
              <div><img src="../assets/food waste.jpg"></div>
          </div> -->
          <!-- Section 5 -->
          <h2>Unexpected Challenge</h2>
          <!-- <img style="width: 100%" src="../assets/ContactForm.png"> -->
          <p>A challenge I encountered while working on the contact form was the limit on submissions allowed by the platform being used to build and host the main website. The platform allowed for 5,000 form submissions before requiring a plan upgrade, and as a result didn’t offer a long-term or scalable solution to increased website conversion rates. </p>
          <p>To overcome this challenge I intercepted the form submissions and validated the form data before creating an HTTP request via AJAX and returning a success or error message. The form data was then sent to the company’s customer service platform as a pending ticket, where the customer service team could easily respond to inquiries. 
          </p>
          <h2>Result</h2>
          <p>The updated design has been implemented and deployed, and is available at <a class="link" target="_blank" href="https://www.flashfood.com/" style="color: #248f41;">www.flashfood.com</a>. A list of additional features that could further improve users' experiences was drafted as the project's deadline approached and are still being implemented. Overall, through the website redesign all the initial objectives and requirements were met.</p>
          <p><b>Improve Brand Alignment</b>: To deem this goal achieved, I consulted the marketing and product design teams for feedback throughout the course of the project, and made the necessary changes.</p>
          <p><b>Increase Website Conversion Rates</b>: Email and newsletter subscription rates increased after the updated website's launch. This means that website conversion rates successfully increased with the redesign of the site.</p>
          <p><b>Increase Awareness</b>: The app's necessary information was presented in a clear and concise manner - all key information is presented in blurbs of less than three sentences</p>
          <p><b>Build a Scaling Solution</b>: Closer to project's completion, Flashfood's services became available in over 100 additional grocery stores. I was able to simply upload a CSV file to add the necessary details to the Locations page. Additionally, as key features of the app were updated, changes were easily made to the appropriate website pages by members of the marketing team to reflect these modifications.</p>

          <!-- Section 6 -->
          <!-- <h2>Outcome</h2>
          <div class="outcome">
              <div class="vid">
                  <video width="100%" height="auto" autoplay muted loop>
                          <source src="../assets/Before.mp4" type="video/mp4">
                  </video>
              </div>
              <div class="vid">
                  <video width="100%" height="auto" autoplay muted loop>
                          <source src="../assets/After.mp4" type="video/mp4">
                  </video>
              </div>
          </div> -->
          <div class="top" style="width:100%; display:flex; flex-direction:row; justify-content: center">
              <a href="#BackToTop"><button style="width: 20%"> ↑ Back to Top</button></a>
          </div>

      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  name: 'project',
  data () {
    return {}
  }
}
</script>

<style scoped>
.black {
  color: black !important;
}

p, .gray {
  color: #6D6D6D;
}

.page-wrap {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.page-content { 
  width: 90vw;
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 20px 120px;
  margin-top: 50px;
}

.header {
  height: 310px;
  width: 100%;
  overflow: hidden;
  background-color: rgb(66, 144, 66)
}

.intro {
  display: flex;
  max-width: 900px;
}

.intro > p {
  width: 80%;
  margin-left: 20px;
}

.logo {
  overflow: hidden;
  max-width: 100%;
}

.logo > * {
  position: relative;
  top: 50px;
  max-height: 100%;
  max-width: 100%;
}

.overview {
  width: 100%;
  padding: 40px 0 0 0
}

.goals, .requirements {
  margin-top: 40px;
  width: 100%;
}

#typed, .typed-cursor {
  font-size: 20px; 
  line-height: 44px; 
  height: auto;
  width: 100%;
}
</style>