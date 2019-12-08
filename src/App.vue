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
  }
}
</script>

<style>
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

router-link, a, a:hover {
  text-decoration: none;
  color: black
}
</style>
