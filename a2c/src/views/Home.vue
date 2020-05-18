<template>
  <div class="home">
    <Welcome/>
    <Rainbow/>
    <RightImage title="About" :image="require('../assets/about.jpg')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, dui eu aliquam lobortis, mi mauris egestas lorem, at placerat orci lectus quis enim. Sed eget sagittis ligula. Vivamus vestibulum quis elit in ornare. Aras a diam fermentum, dictum eros nec, gravida purus. Vivamus rhoncus.<br><br><strong>Cras a diam fermentum, dictum eros nec, gravida purus. Vivamus rhoncus.</strong></RightImage>
    <YoutubeEmbed title="A2C 2020" video="https://www.youtube-nocookie.com/embed/fK2MCX9Gq7g"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, dui eu aliquam lobortis, mi mauris egestas lorem, at placerat orci lectus quis enim.</p></YoutubeEmbed>
    <!-- <ThreeInRow></ThreeInRow> -->
    <Footer/>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome";
import Rainbow from "@/components/Rainbow";
import RightImage from "@/components/RightImage";
import YoutubeEmbed from "@/components/YoutubeEmbed";
// import ThreeInRow from "@/components/ThreeInRow";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Welcome,
    Rainbow,
    RightImage,
    YoutubeEmbed,
    // ThreeInRow,
    Footer,
  }
}
</script>

<style scoped>

</style>