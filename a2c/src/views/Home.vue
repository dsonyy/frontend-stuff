<template>
  <div class="home">
    <Welcome/>
    <Rainbow/>
    <About/>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Welcome from "@/components/Welcome";
import Rainbow from "@/components/Rainbow";
import About from "@/components/About";

export default {
  name: 'Home',
  components: {
    Welcome,
    Rainbow,
    About,
  }
}
</script>
