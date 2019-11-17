<template>
  <div>
      <ul id="scene">
        <li class="layer" data-depth="0.3">
          <img id="moon" src="./assets/circle.svg">
        </li>
        <li class="layer" data-depth="0.05" id="firstCircle">
          <span class="circle1"></span>
        </li>
        <li class="layer" data-depth="-0.4" id="secondCircle">
          <span class="circle2"></span>
        </li>
        <li class="layer" data-depth="0.8" id="thirdCircle">
          <span class="circle3"></span>
        </li>
        <li class="layer" data-depth="-0.1" id="fourthCircle">
          <span class="circle4"></span>
        </li>
        <li class="layer" data-depth="0.25" id="fifthCircle">
          <span class="circle5"></span>
        </li>
        <li class="layer" data-depth="0" id="sixthCircle">
          <span class="circle6"></span>
        </li>
        <li class="layer" data-depth="-0.2" id="seventhCircle">
          <span class="circle7"></span>
        </li>
        <li class="layer" data-depth="0.1">
          <h1 id="text"> Hi there, it's Aliya</h1>
          <!-- <h2> I'm a Systems Design Engineering student at the University of Waterloo and an aspiring developer. I'm interested in</h2> -->
          <span id="typed"></span>   
        </li>
      </ul>  
    </div> 
</template>


<script>
import Typed from 'typed.js'

export default {
  name: 'intro',
  data () {
    return {
    }
  }, 
  mounted: function () {
    this.parallax()
    this.typed()
  }, 
  methods: {
    parallax: function () {
      var scene = document.getElementById('scene');
      var parallax = new Parallax(scene);
    }, 
    typed: function () {
      var start = "I'm a Systems Design Engineering student at the University of Waterloo and an aspiring developer. I'm interested in "
      var one = start + "using technology to address global issues"; 
      var two = start + "developing an interdisciplinary skillset"; 
    // var three = "improving our relationship with technology"; 
      var four = start + "producing strong responsive and interactive design"; 
      var five = start + "exploring the use of technology to develop holistic solutions"

    var text = [one, two, four, five]

    var typed = new Typed("#typed", {
        strings: text,
        typeSpeed: 20,
        backSpeed: 15,
        backDelay: 2500,
        startDelay: 1000,
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

<style> 
#scene {
  overflow: hidden; 
  height: 100vh; 
  background-color: #d6e2f5; 
  width: 100vw;
}

li {
  list-style: none; 
}

#moon {
  position: relative; 
  left: 30%; 
  overflow-y: hidden; 
  width: 75%; 
  height: 100% !important; 
  opacity: 0.8; 
}

[data-depth="0.2"], [data-depth="0.1"] {
  top: 42% !important; 
  left: 44% !important; 
  margin-right: 8%; 
}

.layer h1 h2 {
    color:rgb(52, 42, 145); 
    font-family: "SF Pro Text";      
}

.layer h1 {
    font-size: 30px; 
    font-weight: 400; 
    line-height: 45px; 
}

.layer h2 {
    font-size: 26px; 
    font-weight: 300;
    line-height: 44px;  
    margin-bottom: -1px; 
}

.circle1 {
  height: 310px;
  width: 310px;
  background-color: rgb(150, 232, 226);
  border-radius: 50%;
  display: inline-block; 
}

#firstCircle {
    top: 54% !important; 
    left: 16% !important; 
}

.circle2 {
    height: 250px;
    width: 250px;
    background-color: #eaf1fa;
    border-radius: 50%;
    display: inline-block; 
}

#secondCircle {
    top: -15% !important; 
    left: 22% !important; 
}

.circle3 {
    height: 70px;
    width: 70px;
    background-color: rgb(202, 233, 162);
    border-radius: 50%;
    display: inline-block; 
}

#thirdCircle {
    top: 15% !important; 
    left: 88% !important; 
}

.circle4 {
    height: 120px;
    width: 120px;
    background-color: rgb(191, 227, 217);
    border-radius: 50%;
    display: inline-block; 
}

#fourthCircle {
    top: 25% !important; 
    left: 90% !important; 
}

.circle5 {
    height: 200px;
    width: 200px;
    background-color: rgba(239, 205, 215, 0.8); 
    border-radius: 50%;
    display: inline-block; 
}

#fifthCircle {
    top: 22% !important; 
    left: 6% !important; 
}

.circle6 {
    height: 180px;
    width: 180px;
    background-color: rgb(159, 198, 229);
    border-radius: 50%;
    display: inline-block; 
}

#sixthCircle {
    /* top:  !important;  */
    left: 50% !important; 
}

/* .circle7 {
    height: 350px;
    width: 350px;
    background-color: rgb(202, 233, 162);
    border-radius: 50%;
    display: inline-block; 
 } 

#seventhCircle{
    top: 80% !important; 
    left: 70% !important; 
} */


#typed, .typed-cursor {
  font-size: 26px; 
  line-height: 44px; 
  font-weight: 300; 
}

.text { 
  font-size: 16px;
  font-weight: 300;
  transform: rotate(-90deg);
  text-transform: uppercase;
  width: 10%; 
  top: 35px; 
  width: 3%; 
  margin-top: 15%; 
}
</style>