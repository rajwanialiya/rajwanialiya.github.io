<template>
  <div>
    <ul id="scene">
      <li class="layer" data-depth="0.3" id="big-circle-holder"></li>
      <li class="layer" data-depth="0.3" id="intro-blurb">
        <div>
          <h1 id="text">Hi there, it's Aliya</h1>
          <br />
          <span id="typed"
            >I'm a software engineer focused on making complex systems feel
            simple through seamless technology. I’m currently at Level, where
            we’re simplifying access to insurance and benefits, all easily
            managed with a card.
          </span>
        </div>
      </li>
      <li
        v-for="(circle, index) in circles"
        :key="index"
        class="layer"
        :data-depth="circle.depth"
        :id="circle.id"
      >
        <span :class="circle.class"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "intro",
  data() {
    return {
      circles: [
        { id: "firstCircle", class: "circle1", depth: 0.05 },
        { id: "secondCircle", class: "circle2", depth: -0.4 },
        { id: "eighthCircle", class: "circle8", depth: 0.05 },
        { id: "thirdCircle", class: "circle3", depth: 0.8 },
        { id: "fourthCircle", class: "circle4", depth: -0.1 },
        { id: "fifthCircle", class: "circle5", depth: 0.25 },
        { id: "sixthCircle", class: "circle6", depth: 0 },
        { id: "seventhCircle", class: "circle7", depth: -0.2 }
      ]
    };
  },
  mounted: function() {
    this.parallax();
    this.typed();
  },
  methods: {
    parallax: function() {
      var scene = document.getElementById("scene");
      var parallax = new Parallax(scene);
    }
    // typed: function() {
    //   var start =
    //     "I'm an engineering student at the University of Waterloo and a software developer. I'm passionate about ";
    //   var one =
    //     start +
    //     "applying the valuable skills I've gained, while continuing to learn how to leverage new technology";
    //   var two = start + "using technology to positively impact day-to-day life";
    //   // var three = "improving our relationship with technology";
    //   var four =
    //     start +
    //     "developing an interdisciplinary skillset; my current interest is in machine learning/AI.";

    //   var text = [one, two, four];

    //   var typed = new Typed("#typed", {
    //     strings: text,
    //     typeSpeed: 20,
    //     backSpeed: 15,
    //     backDelay: 2500,
    //     startDelay: 1000,
    //     loop: true,
    //     showCursor: true,
    //     cursorChar: "_",
    //     autoInsertCss: true,
    //     smartBackspace: true
    //   });
    // }
  }
};
</script>

<style>
#big-circle-holder {
  width: 1200px; /* Width of the circle */
  height: 1200px; /* Height of the circle */
  background-color: rgba(
    250,
    250,
    250,
    0.5
  ); /* Background color of the circle */
  border-radius: 50%; /* Makes the shape a circle */
  top: 0% !important;
  left: 28% !important;
}

#intro-blurb {
  display: flex !important; /* Enables flexbox */
  flex-direction: column;
  align-items: center; /* Centers items vertically */
  justify-content: center; /* Centers items horizontally */
  height: 100vh !important;
  top: 5% !important;
  left: 28% !important;
  padding-left: 15%;
  padding-right: 8%;
}

#scene {
  overflow: hidden;
  height: 100vh;
  background-color: rgb(235, 235, 235);
  width: 100vw;
}

li {
  list-style: none;
}

[data-depth="0.1"] {
  top: 43% !important;
  left: 50% !important;
  margin-right: 8%;
}

[data-depth="0.2"] {
  top: 42% !important;
  left: 44% !important;
  margin-right: 8%;
}

.layer h1 h2 {
  color: rgb(52, 42, 145);
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
  height: 250px;
  width: 250px;
  /* background-color: rgb(224, 163, 176); */
  background-color: rgb(109, 136, 233);
  border: 1px black;
  /* background-color: rgb(150, 232, 226); */
  border-radius: 50%;
  display: inline-block;
}

#firstCircle {
  top: 60% !important;
  left: 16% !important;
}

.circle2 {
  height: 250px;
  width: 250px;
  /* background-color: #eaf1fa; */
  /* background-color: rgb(233, 255, 60); */

  background-color: rgb(255, 74, 98);
  border-radius: 50%;
  display: inline-block;
}

#secondCircle {
  top: -15% !important;
  left: 22% !important;
}

.circle8 {
  height: 80px;
  width: 80px;
  background-color: rgba(255, 74, 98, 0.6);
  border-radius: 50%;
  display: inline-block;
}

#eighthCircle {
  top: 17% !important;
  left: 25% !important;
}

.circle3 {
  height: 70px;
  width: 70px;
  background-color: rgb(24, 36, 70);
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
  /* background-color: rgb(191, 227, 217); */
  background-color: rgb(233, 255, 60);

  /* background-color: rgb(24, 36, 70); */
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
  /* background-color: rgba(239, 205, 215, 0.8); */
  background-color: rgb(255, 186, 207);
  border-radius: 50%;
  display: inline-block;
}

#fifthCircle {
  top: 12% !important;
  left: 5% !important;
}

.circle6 {
  height: 180px;
  width: 180px;
  background-color: rgb(167, 188, 248);

  /* background-color: rgb(159, 198, 229); */
  border-radius: 50%;
  display: inline-block;
}

#sixthCircle {
  /* top:  !important;  */
  left: 50% !important;
}

#typed,
.typed-cursor {
  font-size: 1.5rem;
  line-height: 2.8rem;
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

@media screen and (max-width: 576px) {
  #fifthCircle {
    display: none !important;
  }
}

@media screen and (max-width: 950px) {
  #firstCircle,
  #secondCircle {
    display: none !important;
  }

  .layer h1 {
    font-size: 20px !important;
  }

  .layer span {
    font-size: 18px !important;
  }

  [data-depth="0.3"] {
    left: 33% !important;
    top: 50% !important;
  }

  #typed,
  .typed_cursor,
  .typed-cursor--blink {
    line-height: 30px !important;
    max-width: 200px;
  }

  #big-circle-holder {
    top: 20vh !important;
    left: -30vw !important;
    width: 70vh !important;
    height: 70vh !important;
  }

  #intro-blurb {
    top: 50vh;
    left: 0 !important;
  }
}
</style>
