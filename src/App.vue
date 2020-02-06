<template>
  <div id="app">
    <Home></Home>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Rate />
  </div>
</template>

<script>
import Rate from "./components/Rate.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/home";

export default {
  name: "app",
  components: {
    // HelloWorld
    Home,
    Rate
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
