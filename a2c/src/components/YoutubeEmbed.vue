<template>
    <div class="container">
        <div class="video">
            <iframe width="640" height="360" v-bind:src="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="content-right">
            <h2>{{ title }}</h2>
            <div class="description"><slot></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "YoutubeEmbed",
    props: ["video", "title"],
}
</script>

<style scoped>
    .video {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
        padding-left: 15%;
        background-size: cover;
        background-position: left;
    }

    .container {
        background-image: url("../assets/svg/1.svg");
        background-repeat: no-repeat;
        background-position: 10% 15%;
    }
</style>