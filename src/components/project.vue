<template>
  <div class="page-wrap">
    <div id="header" class="header"><slot name="img"></slot></div>
    <div class="page-content">
      <div class="intro">
        <div class="title">
          <h2><slot name="title"></slot></h2>
          <p><slot name="category"></slot></p>
        </div>
        <p><slot name="description"></slot></p>
      </div>
      <div class="border-bottom logo"><slot name="logo"></slot></div>
      <div class="overview">
        <div class="row">
          <div class="col">
            <h5 class="black">Role</h5>
            <div class="list"><slot name="role"></slot></div>
          </div>
          <div class="col">
            <h5 class="black">Timeline</h5>
            <div class="list"><slot name="timeline"></slot></div>
          </div>
          <div class="col">
            <h5 class="black">Challenge</h5>
            <div class="list"><slot name="challenge"></slot></div>
          </div>
          <div class="col">
            <h5 class="black">Tools</h5>
            <div class="list"><slot name="tools"></slot></div>
          </div>
          <!-- <p>https://leloi.ca/fr/artistes/detail/baillat/</p>
          <p>https://encry.com/use-cases/</p> --> 
        </div>
      </div>
      <div class="goals">
        <slot name="goals"></slot>
      </div>
      <div class="requirements">
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
</template>

<script>
import Typed from 'typed.js'

export default {
  name: 'project',
  data () {
    return {}
  }, 
  created: function () {
    window.addEventListener('scroll', this.colorChange)
  }, 
  methods: {
    colorChange: function () {
      var header = document.querySelector('.header')
      var navItems = document.querySelectorAll('.nav-item')

      for (var i = 0; i < navItems.length; i++) {
        if (header.getBoundingClientRect().bottom + 20 > navItems[i].getBoundingClientRect().bottom) {
          navItems[i].classList.add('invert')
        } else if (header.getBoundingClientRect().bottom - 20 < navItems[i].getBoundingClientRect().bottom) {
          navItems[i].classList.remove('invert')
        }
      }
    }
  }
}
</script>

<style scoped>
.black {
  color: black !important;
}

p, .gray, li, span {
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
  background-color: rgb(66, 144, 66);
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
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.logo > * {
  position: relative;
  top: 20px;
  max-height: 100%;
  max-width: 550px;
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
  font-size: 22px; 
  line-height: 44px; 
  height: auto;
  width: 100%;
}
</style>