<template>
    <section>
        <div class="left">
            <h2>{{ title }}</h2>
            <div class="description"><slot></slot></div>
        </div>
        <div class="right">
            <div class="image" :style="style"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "RightImage",
    props: ["title", "image"],
    computed: {
        style() {
            return "background-image: url('" + this.image + "')";
        }
    },
}
</script>

<style scoped>
    strong {
        font-weight: 600;
    }

    .right {
        padding-right: 0;
    }

    .image {
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 16% 100%);
    }

    section {
        background-image: url("../assets/svg/1.svg");
        background-repeat: no-repeat;
        background-position: 100% 50%;
    }

    @media only screen and (max-width: 800px) {
        .image {
            clip-path: none;
            width: 100%;
        }

        .right {
            padding-left: 0;
            padding-right: 0;
            width: 100%;
        }

        section {
            background-image: none;
        }
    }
</style>