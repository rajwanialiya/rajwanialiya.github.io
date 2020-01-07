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
      <div class="logo"><slot name="logo"></slot></div>
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
    <div class="bottom-nav">
      <h3 class="bgd-text">more</h3>
      <div class="prev-proj">
        <slot name="prev-proj"><router-link to='/'></router-link></slot>
      </div>
      <div class="next-proj">
        <slot name="next-proj"><router-link to='/'></router-link></slot>
      </div>
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

hr {
  margin-top: 0.5em;
}

.page-wrap {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.page-content { 
  width: 85vw;
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

.logo > * {
  max-height: 100%;
  max-width: 550px;
  margin: 50px 0 20px;
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

.bottom-nav {
  height: 200px;
  width: 100%;
  display: flex;
  position: relative;
}

.prev-proj{
  height: 100%;
  width: 100%;
}

.next-proj{
  height: 100%;
  width: 100%;
}

.bgd-text {
  opacity: 0.2;
  position: absolute; 
  top: 40%;
  left: 50%;
}
</style>