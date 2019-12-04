<template>
  <div id="sidebar" class="col-sm-1">
    <div class="top">
      <b-navbar-brand><router-link to="/">Aliya Rajwani</router-link></b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#work">Work</b-nav-item>
        <b-nav-item href="https://drive.google.com/file/d/1hV2jvH8frgEkRwzt3V2eXakpKQDCh5tD/view?usp=sharing" target="_blank">Resume</b-nav-item>
        <b-nav-item class="talk" href="mailto:rajwani.aliya@gmail.com">
          <div></div>
         <!-- Let's Talk -->
        </b-nav-item>
      </b-navbar-nav>
    </div>
    <!-- <div class="project-name">
      <slot name="project-name">Flashfood</slot>
    </div> --> 
  </div>
</template>

<script>
export default {
  name: 'side-nav',
  data() {
    return {}
  }
}
</script>

<style>
#sidebar {
  padding: 40px 40px; 
  display: flex; 
  flex-direction: column;
  justify-content: space-between; 
  align-items: space-between;
  position: fixed; 
  width: 100%; 
  z-index: 100; 
  height: 100%;
}

.navbar-brand {
  font-size: 1.4rem;
  padding-bottom: 1rem; 
}

.nav-link, .nav-link:hover {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
  padding: 0;
}

.talk a {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.talk div {
  background-image: url('./assets/talk.png');
  background-repeat: no-repeat; 
  background-size: contain; 
  background-position: center;
  height: 30px;
  width: 30px;
  opacity: 0.4;
  margin-right: 5px;
}

/*
.project-name {
  font-size: 70px;
  transform: rotate(-90deg);
  position: relative;
  bottom: -40px;
} */
</style>