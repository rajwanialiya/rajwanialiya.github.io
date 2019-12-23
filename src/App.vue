<template>
  <div id="app">
    <router-view></router-view>
    <div class="circle"></div>
  </div>
</template>


<script>
// https://www.kirupa.com/canvas/follow_mouse_cursor.htm
export default {
  name: 'app',
  data() {
    return {}
  }, 
  mounted: function () {
    document.addEventListener('mousemove', (ev) => this.cursorMove(ev))
  }, 
  methods: {
    cursorMove: function (ev) {
      let circle = document.querySelector('.circle');
      let posY = ev.clientY;
      let posX = ev.clientX;
      // var elements = document.getElementsByTagName('a')

      
      // for (var el in elements) {
      //   if (ev.target.children.contains(el)) {
      //     document.querySelector('.circle').style.width = '25px'
      //     document.querySelector('.circle').style.height = '25px'
      //   }
      // }

      // if (ev.target.classList.includes('hover'))
      if (ev.target.tagName === 'A' || ev.target.tagName === 'IMG') {
        document.querySelector('.circle').style.width = '25px'
        document.querySelector('.circle').style.height = '25px'
      } else {
        document.querySelector('.circle').style.width = ''
        document.querySelector('.circle').style.height = ''
      }

      circle.style.top = posY + 'px';
      circle.style.left = posX + 'px';
    }
  }
}
</script>

<style>
#app { 
  cursor: none; 
}

body {
  line-height: 1.7em;
}

.fp-tableCell {
  display: flex;
  justify-content: center;
  align-items: center; 
}

.view-wrap {
  width: 100vw;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
}

.view-content {
  max-width: 1050px;
  margin: 0 0; 
  overflow: hidden;
}

.section {
  width: 100vw; 
  height: 100vh; 
}

h2, h3, h4, h5, h6, p, a {
  margin-bottom: 0.5em; 
}

router-link, a, a:hover {
  text-decoration: none;
  color: black
}

.circle {
  position: fixed;
  border-radius: 50%;
  z-index: 4000;
  height: 15px;
  width: 15px;
  pointer-events: none;
  transition:
    background ease-in 10ms,
    box-shadow ease-in 150ms,
    transform ease-in 150ms;
  transform: translate3d(0, 0, 0);
  background-color: transparent;
  aborder: 2px solid black;
  box-shadow: 0 0 0 2px black;
}

/* .hover {
  width: 25px;
  height: 25px;
} */ 

/* a:hover {
  cursor: none;
} */ 

</style>
