<template>
  <div id="app">
    <Rate />
  </div>
</template>

<script>
import Rate from "./components/Rate.vue";


export default {
  name: "app",
  components: {
    Rate,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
