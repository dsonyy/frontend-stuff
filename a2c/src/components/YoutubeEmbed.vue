<template>
    <section>
        <div class="left">
            <div v-bind:videoWidth="videoWidth" v-bind:videoHeight="videoHeight" class="video">
                <iframe :width="videoWidth" :height="videoHeight" v-bind:src="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="right">
            <h2>{{ title }}</h2>
            <div class="description"><slot></slot></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "YoutubeEmbed",
    props: ["video", "title"],
    data() {
        return {videoWidth: 100, videoHeight: 100};
    },
    methods: {
        onResize() {
            if (window.innerWidth > 800) this.videoWidth = document.body.clientWidth * 0.35;
            else this.videoWidth = document.body.clientWidth;
            this.videoHeight = this.videoWidth * 9 / 16;   
        }
    },
    created() {
        window.addEventListener("resize", this.onResize);
        this.onResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.onResize);
    }
}
</script>

<style scoped>
    .container {
        background-image: url("../assets/svg/1.svg");
        background-repeat: no-repeat;
        background-position: 10% 15%;
    }

    section {
        background-image: url("../assets/svg/1.svg");
        background-repeat: no-repeat;
        background-position: 7% 20%;
    }

    @media only screen and (max-width: 800px) {
        section {
            flex-direction: column-reverse;
            background-image: none;
        }

        .left {
            padding-left: 0;
            padding-right: 0;
            width: 100%;
        }
    }
</style>