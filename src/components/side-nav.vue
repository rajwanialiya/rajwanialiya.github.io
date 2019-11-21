<template>
  <div id="sidebar">
    <div class="side col-sm-1">
      <div></div>
      <b-button variant="link" class="menu text-decoration-none" @click="clicked = !clicked; toggleMenu()">
        <div v-if="!clicked"class="hamburger"></div>
        <p v-if="!clicked">menu</p>
        <div v-else class="close"></div>
      </b-button>
      <div class="buttons">
        <a class="prev" href=""></a>
        <a class="next" href=""></a>
      </div>
    </div>
    <div class="open" :class="{'show': clicked}">
      <h1>HEY</h1>
      <h3>what's up</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-nav',
  data () {
    return {
      clicked: false
    }
  }, 
  methods: {
    toggleMenu: function () {
      var sidebar = document.getElementById('sidebar'); 
      console.log('clicked')

      if (this.clicked) {
        sidebar.style.width = '50%';
      } else {
        sidebar.style.width = 'auto';
      }
    }
  }
//   mounted: function () {
//     var menu = document.getElementById('menu');
//     var overlay = document.getElementById('overlay');
//     var arrow = document.querySelector('.arrow');

//     //Create function for mouseenter on menu hover

//     menu.addEventListener('click', function () {
//         overlay.animate([
//             {transform: 'translatex(-100%)'},
//             {transform: 'translatex(0%)'}
//           ], { 
//               // timing options
//               duration: 150,
//               iterations: 1
//             });
      
//       if (overlay.style.display === "block") {
//               overlay.style.display = "none";
//           } else {
//               overlay.style.display = "block";
//           } 
      
//       arrow.classList.toggle('rotate');

//     });

//     overlay.addEventListener('click', function () {
      
//       overlay.style.display = "none";
//       arrow.classList.remove('rotate');
// });
//   }
}
</script>

<style>
#sidebar{
  height: 100vh; 
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 1s; 
}

.menu, .menu:hover{
  color: black;
}

.hamburger {
  background: url('./assets/menu.png');
  background-repeat: no-repeat; 
  background-size: contain; 
  background-position: center;
  height: 30px;
}

.close {
  background: url('./assets/close.svg'); 
  background-repeat: no-repeat; 
  background-size: contain; 
  background-position: center;
  height: 30px;
  width: 30px;
  opacity: 1 !important;
}

.open {
  display: none;
  background-color: green; 
}

.show {
  display: flex;
}

</style>