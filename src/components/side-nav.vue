<template>
  <div> 
    <div id="overlay">
      <div id="menu-text">
        <div class="menu-items">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <ul>
                <li class="menu-one"><h1><a href="#">Home</a></h1></li>
                <li class="menu-two"><h1><a href="#">About</a></h1></li>
                <li class="menu-three"><h1><a href="#">Work</a></h1></li>
                <li class="menu-four"><h1><a href="#">Contact</a></h1></li>
              </ul>
            </div>
          </div>
      </div>
      </div>
    </div>

    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12 d-flex justify-content-start">
          <div id="menu" class="my-4">
            <ul>
              <li>Menu</li>
              <li class="arrow"><i class="fa fa-arrow-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container"> 
      <div class="row">
        <div id="landing" class="col-12 d-flex align-items-center justify-content-center text-center">
          <h1>Menu Overlay Exercise</h1>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'side-nav',
  data () {
    return {}
  }, 
  mounted: function () {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');
    var arrow = document.querySelector('.arrow');

    //Create function for mouseenter on menu hover

    menu.addEventListener('click', function () {
        overlay.animate([
            {transform: 'translatex(-100%)'},
            {transform: 'translatex(0%)'}
          ], { 
              // timing options
              duration: 150,
              iterations: 1
            });
      
      if (overlay.style.display === "block") {
              overlay.style.display = "none";
          } else {
              overlay.style.display = "block";
          } 
      
      arrow.classList.toggle('rotate');

    });

    overlay.addEventListener('click', function () {
      
      overlay.style.display = "none";
      arrow.classList.remove('rotate');
});
  }
}
</script>

<style>
#overlay {
    position: fixed;
    display: none;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .95;
    background-color:  #9198e5;
    z-index: 2;
    cursor: pointer;
  
    &:hover {
    cursor: pointer;
  }
}

#menu-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  font-size: 50px;
  color: white;
}

#menu {
  z-index: 2;
  transform: rotate(-90deg);
  color: black;

  ul {
    
    
    li {
      display: inline-block;  
    }
  }
  
  &:hover {
    cursor: pointer;
  }
}

ul {
  list-style-type: none;
  
  li {
    transition: .5s;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  
  a {
    font-size: 1.5em;
    color: black;
    transition: .2s;
    
    &:hover {
    color: white;
    text-decoration: none;
    }
  }
}

.arrow {
  transform: rotate(90deg);
}


.rotate {
  transform: rotate(-90deg);
}
</style>