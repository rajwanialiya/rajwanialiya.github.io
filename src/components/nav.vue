<template>
  <b-navbar toggleable="lg" class="nav-wrapper">
    <b-container class="header-container">
      <b-navbar-brand href="#home">Aliya Rajwani</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto left-nav">
          <!-- <b-nav-item href="" @click="triggerProjectScroll"
            >Projects</b-nav-item
          > -->
          <b-nav-item
            target="_blank"
            href="https://drive.google.com/file/d/1VCrjXPVA6mN3mkSdrnpstfSxIZk0NoUH/view?usp=sharing"
            >Resume</b-nav-item
          >
          <b-nav-item-dropdown text="Let's Talk" right>
            <b-dropdown-item
              target="_blank"
              href="https://www.linkedin.com/in/aliya-rajwani-b1466117b/"
              >Linkedin</b-dropdown-item
            >
            <b-dropdown-item href="mailto:rajwani.aliya@gmail.com"
              >Email</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      hide: false,
      docHeight: ""
    };
  },
  created: function() {
    this.getDocHeight();
    window.addEventListener("scroll", this.toggleNav);
  },
  methods: {
    getDocHeight: function() {
      var D = document;
      var height = Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
      );
      this.docHeight = height;
    },
    toggleNav: function() {
      var winHeight = window.innerHeight;
      var y = window.scrollY;

      if (y > winHeight / 4) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    },
    triggerProjectScroll: function() {
      this.$emit("trigger-project-scroll");
    },
    scrollTo: function(top) {
      window.scrollTo(0, top);
    }
  }
};
</script>

<style scoped>
.fixed-top {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1030;
}

.left-nav {
  width: 100% !important;
  justify-content: flex-end !important;
}

.nav-wrapper {
  position: fixed;
  width: 100vw;
  background-color: transparent !important;
}

.header-container {
  max-width: 100% !important;
  border: solid 0.08rem black;
  border-radius: 3rem;
  margin: 2rem;
  padding: 0.7rem 3rem;
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* Semi-transparent white background */
  backdrop-filter: blur(15px); /* Blurs the background behind the navbar */
  -webkit-backdrop-filter: blur(7px); /* Safari support */
}

.fixed-top {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1030;
}

.navbar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.nav-item > a,
.dropdown-toggle {
  margin-bottom: 0 !important;
}

.nav-link.dropdown-toggle {
  margin-bottom: 0 !important;
}
</style>
