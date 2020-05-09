<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header,
  }
}
</script>

<style>
  * {
    margin: 0;
  }

  body {
    margin: 0;
  }

  #app {
    color: #2c3e50;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
</style>
