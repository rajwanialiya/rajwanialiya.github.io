<template>
  <b-nav :class="{ hide: hide }" ref="navbar" class="navbar navbar-expand-sm navbar-light bg-none">
    <b-navbar-brand><router-link to="/">Aliya Rajwani</router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item>Work</b-nav-item> -->
        <!-- <b-nav-item>View Rand.</b-nav-item> Squarify? Trinaglify?-->
        <b-nav-item href="https://drive.google.com/file/d/1oyLPo-tcwElkmR5xwdHWPjig_Gju59ka/view?usp=sharing" target="_blank">Resume</b-nav-item>
        <b-nav-item-dropdown right text="Get In Touch" class="dropdown">
          <b-dropdown-item href="mailto:rajwani.aliya@gmail.com">Email</b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item target="_blank" href="https://www.linkedin.com/in/aliya-rajwani-b1466117b/">LinkedIn</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      hide: false, 
      docHeight: ''
    }
  },
  created: function () {
    this.getDocHeight()
    window.addEventListener('scroll', this.toggleNav)
  },
  methods: {
    getDocHeight: function () {
      var D = document;
      var height = Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
      )
      this.docHeight = height
    }, 
    toggleNav: function () {
      var winHeight = window.innerHeight
      var y = window.scrollY
      
      if (y > winHeight/4) {
        this.hide = true
      } else {
        this.hide = false
      }
    }, 
    scrollTo: function (top) {
      console.log('hey')
      window.scrollTo(0, top)
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 40px 40px; 
  display: flex; 
  justify-content: space-between; 
  position: fixed; 
  width: 100%; 
  z-index: 100; 
}

.navbar:has(.show) {
  background-color: white !important;
}

.navbar-brand {
  font-size: 1.4rem;
}

button.navbar-toggler {
  border-color: transparent; 
}

.dropdown-divider {
  border-top: 1px solid rgba(255,255,255, 0.5); 
}

.display {
  visibility: hidden;   
}

.hide{
  display: none; 
}
</style>