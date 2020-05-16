<template>
    <div class="welcome">
        <div class="background-image"></div>
        <div class="content-left">
            <h1>Amazing<sup>2</sup><br>Conference</h1>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tem tempus, dui eu aliquam lobortis, mi mauris egestas lorem, at placerat orci lectus quis enim.</div>
            <div class="date">Warsaw, May 5 2020</div>
            <div class="button-action">Loading...</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "welcome",
}
</script>

<style scoped>
    .welcome {
        position: relative;
        background-color: #6227b5;
        width: max(100vw, 300px);
        height: calc(100vh - 2px);
        color: white;
    }

    .background-image {
        position: absolute;
        background-image: url("../assets/welcome.jpg");
        background-position: center;
        background-size: cover;
        opacity: 0.7;
        height: 100%;
        width: 100%;
    }

    .date {
        margin-top: 1em;
        font-style: italic;
    }
</style>