<template>
    <div class="container">
        <div class="image" :style="style"></div>
        <div class="content-left">
            <h2>{{ title }}</h2>
            <div class="description"><slot></slot></div>
        </div>
    </div>
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

    .image {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
        right: 0;
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        width: 45vw;
        height: 60%;
    }

    .container {
        background-image: url("../assets/svg/1.svg");
        background-repeat: no-repeat;
        background-position: 80% -20%;
    }
</style>