<template>
  <div id="app">
    <Home></Home>
    <Rate />
    <Hospital />
  </div>
</template>

<script>
import Rate from "./components/Rate.vue";
import Home from "./components/home";
import Hospital from "./components/Hospital";

export default {
  name: "app",
  components: {
    Home,
    Rate,
    Hospital
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
