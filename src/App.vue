<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png"/>
      MAN VS NCOV 
    </div>
    <Home></Home>
    <Rate />
    <Hospital />
    <!-- <City /> -->
  </div>
</template>

<script>
import Rate from "./components/Rate.vue";
import Home from "./components/home";
import Hospital from "./components/Hospital";
// import City from "./components/city/City";

export default {
  name: "app",
  components: {
    Home,
    Rate,
    Hospital,
    // City,
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
.logo {
  font-size: 150px;
  font-weight: bolder; 
}
</style>
