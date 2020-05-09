<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
}

</style>
