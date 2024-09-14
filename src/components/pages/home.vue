<template>
  <div>
    <canvas id="canvas"></canvas>
    <nav-bar></nav-bar>
    <socials></socials>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <intro ref="home" class="section intro"></intro>
      <project-display
        :ref="project"
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :isImageFirst="index % 2 === 0"
        class="section"
      />
    </full-page>
  </div>
</template>

<script>
import nav from "../nav";
import socials from "../socials";
import intro from "../intro";
import projectDisplay from "../project-display";

export default {
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "aNCq80A^r0",
        menu: "#menu",
        scrollingSpeed: 1100,
        onLeave: this.clear,
        responsiveWidth: 950,
        navigation: true,
        afterResponsive: function(isResponsive) {}
      },
      mouseX: 0,
      mouseY: 0,
      empty: true,
      projects: [
        {
          id: 1,
          title: "PharmaBox",
          category: "",
          description: `Prescription pickup solution that automates patient notification, payment and pickup, so pharmacists can use their expertise where it's needed most. Backed by Velocity incubator, funding from Quantum Valley Investments Problem Pitch & UW Cornerstone`,
          imageSrc: require("../assets/pharmabox-mockup.svg"),
          links: [
            {
              type: "external",
              url: "https://www.medgobox.ca/",
              icon: require("../assets/globe.png")
            },
            {
              type: "external",
              url: "https://youtu.be/IwGOYfg51iM?t=4169",
              icon: require("../assets/info.png")
            }
          ],
          skills: []
        },
        {
          id: 2,
          title: "Vaccine Notifications",
          category: "Databases & Web/Mobile Development",
          description: `Developed a mobile app and website to send targetted notifications
            about COVID-19 vaccine appointments based on users' age/eligibility groups
            and location. Endorsed by the University of Toronto and University Health Network.`,
          imageSrc: require("../assets/vax-notifs-mockup.svg"),
          links: [
            {
              type: "external",
              url: "https://vaccinenotifications.org/",
              icon: require("../assets/globe.png")
            }
          ],
          skills: ["Firestore", "Database Architecture", "React Native"]
        },
        {
          id: 3,
          title: "ChowTime",
          category: "Machine Learning & Mobile App Development",
          description: `Developed a mobile app in React Native that recommends healthy recipes
            cooked with ingredients users have on hand. Applied natural language processing
            techniques, optical character recognition, and object detection to identify food
            items in user-uploaded images.`,
          imageSrc: require("../assets/chowtime-mockup.svg"),
          links: [
            {
              type: "external",
              url:
                "https://play.google.com/store/apps/details?id=com.yourcompany.chowtime",
              icon: require("../assets/playstore-icon.png")
            },
            {
              type: "external",
              url: "https://apps.apple.com/ca/app/chowtime/id1530682514",
              icon: require("../assets/appstore-icon.png")
            },
            {
              type: "external",
              url: "https://github.com/rajwanialiya/Chowtime-App",
              icon: require("../assets/code.png")
            }
          ],
          skills: ["TensorFlow", "Google Vision", "React Native"]
        },
        {
          id: 4,
          title: "Email Preferences Centre",
          category: "Web Development",
          description: `Developed an email preferences centre to offer an intuitive and simple
            method for TunnelBear users to opt in and out of emails. On the front-end, the
            solution offers an interactive experience and leverages methods provided by
            Mailgun's API to fit the feature's needs.`,
          imageSrc: require("../assets/tunnelbear-mockup.svg"),
          links: [
            {
              type: "internal",
              url: "tb-email-preferences",
              icon: require("../assets/info.png")
            },
            {
              type: "external",
              url: "https://www.tunnelbear.com/email-preferences",
              icon: require("../assets/globe.png")
            }
          ],
          skills: ["Vue", "Node.js", "REST API", "UX"]
        },
        {
          id: 5,
          title: "Exstrahlen",
          category: "Machine Learning & Web Development",
          description: `Designed and developed a web application that aims to reduce patient
            wait times by helping radiologists perform diagnostics more efficiently. The app
            uses an object detection model to identify and analyze abnormalities in chest scans.`,
          imageSrc: require("../assets/exstrahlen-mockup.svg"),
          links: [
            {
              type: "external",
              url:
                "https://github.com/rajwanialiya/Exstrahlen/blob/master/README.md",
              icon: require("../assets/code.png")
            }
          ],
          skills: ["Object Detection", "Node.js", "Vue", "GCP"]
        },
        {
          id: 6,
          title: "Flashfood.com",
          category: "Web Development & UI/UX",
          description: `Designed and developed a scalable and responsive main website to
            reflect Flashfood's evolving brand.`,
          imageSrc: require("../assets/flashfood-site-mockup.svg"),
          links: [
            {
              type: "internal",
              url: "flashfood-site",
              icon: require("../assets/info.png")
            },
            {
              type: "external",
              url: "https://www.flashfood.com/",
              icon: require("../assets/globe.png")
            }
          ],
          skills: ["Responsive", "JavaScript", "HTML", "CSS", "AJAX"]
        },
        {
          id: 7,
          title: "Food Waste Counter",
          category: "Web Development & Back-End",
          description: `Built a real-time counter to display the amount of food waste
            diverted from landfills by Flashfood users. Retrieved relevant information
            from Flashfood's database, created an API endpoint to embed the counter,
            and animated the count-up to increase interactivity.`,
          imageSrc: require("../assets/flashfood-counter-mockup.svg"),
          links: [
            {
              type: "internal",
              url: "flashfood-counter",
              icon: require("../assets/info.png")
            },
            {
              type: "external",
              url: "https://www.flashfood.com/",
              icon: require("../assets/globe.png")
            }
          ],
          skills: ["JavaScript", "SQL", "HTML", "Node.js", "Git"]
        },
        {
          id: 8,
          title: "Nailed It",
          category: "App Development & UI/UX",
          description: `“Nailed It” is a collaboratively developed app that uses
            open-source machine learning libraries and Python to perform
            early-stage diagnosis of anemia, oxygen deprivation illnesses,
            and various infections by analyzing the colour discrepancy
            between users' skin and nails.`,
          imageSrc: require("../assets/nailed-it-mockup.svg"),
          links: [
            {
              type: "external",
              url: "https://github.com/rajwanialiya/hackxplore",
              icon: require("../assets/code.png")
            }
          ],
          skills: ["Python", "TensorFlow", "UI", "UX", "Figma"]
        }
      ]
    };
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
    "nav-bar": nav,
    socials: socials,
    intro: intro,
    "project-display": projectDisplay
  },
  mounted: function() {
    this.canvasInit();
    window.addEventListener("mousemove", this.setMousePosition);
    setInterval(this.clear, 8000);
  },
  methods: {
    canvasInit: function() {
      var canvas = document.querySelector("#canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    update: function() {
      var canvas = document.querySelector("#canvas");
      var context = canvas.getContext("2d");
      context.beginPath();
      context.arc(this.mouseX, this.mouseY, 110, 0, 2 * Math.PI, true);
      context.fill();
    },
    setMousePosition: function(event) {
      var canvas = document.querySelector("#canvas");
      var context = canvas.getContext("2d");
      context.fillStyle = "#f4f7fc";
      if (document.body.classList.contains("fp-viewing-0")) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      } else if (document.body.classList.contains("fp-viewing-1")) {
        context.fillStyle = "#fcd6d4";
      } else if (document.body.classList.contains("fp-viewing-2")) {
        context.fillStyle = "#e6eefc";
      } else if (document.body.classList.contains("fp-viewing-3")) {
        context.fillStyle = "#c5e3d6";
      } else if (document.body.classList.contains("fp-viewing-4")) {
        context.fillStyle = "#f0cca1";
      } else if (document.body.classList.contains("fp-viewing-5")) {
        context.fillStyle = "#d6e2f5";
      } else if (document.body.classList.contains("fp-viewing-6")) {
        context.fillStyle = "#dfdaed";
      } else if (document.body.classList.contains("fp-viewing-7")) {
        context.fillStyle = "#ffc4c4";
      } else if (document.body.classList.contains("fp-viewing-8")) {
        context.fillStyle = "#f7cf8b";
      }

      this.mouseX = event.clientX;
      // this.mouseY = event.clientY
      this.mouseY = event.clientY;

      window.requestAnimationFrame(this.update);
    },
    clear: function() {
      var canvas = document.querySelector("#canvas");
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
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
    test: function() {
      console.log("test");
    }
  }
};
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

.column {
  display: flex;
  flex-direction: column;
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
