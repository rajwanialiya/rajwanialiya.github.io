<template>
  <div id="app">
    <router-view></router-view>
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
    this.update()
    canvas.addEventListener("mousemove", setMousePosition, false)
  }, 
  methods: {
    update: function () {
      var canvas = document.querySelector("#canvas");
      var ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.arc(50, 50, 5, 0, 2 * Math.PI, false);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();

      canvas.addEventListener("mousemove", setMousePosition, false);
    }, 
    setMousePosition: function (e) {
      mouseX = e.clientX - canvasPos.x;
      mouseY = e.clientY - canvasPos.y;
     
      context.clearRect(0, 0, canvas.width, canvas.height);
     
      context.beginPath();
      context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
      context.fillStyle = "#FF6A6A";
      context.fill();
    }
  }
}
</script>

<style>
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
  max-width: 1000px;
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
</style>
