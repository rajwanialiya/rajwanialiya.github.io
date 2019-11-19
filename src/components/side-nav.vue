<template>
  <div id="sidebar" class="col-sm-1">
    <b-button variant="link" class="menu text-decoration-none">
      <div class="hamburger"></div>
      <p>menu</p>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'side-nav',
  data () {
    return {}
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
  justify-content: center;
  align-items: center;
}

.menu, .menu:hover{
  color: black;
}

.hamburger {
  background: url('./assets/menu.svg');
  background-repeat: no-repeat; 
  background-size: contain; 
  width: 40px; 
  height: 40px; 
}
</style>