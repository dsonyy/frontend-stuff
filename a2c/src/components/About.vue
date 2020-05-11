<template>
    <div class="about">
        <div class="content">
            <header>About</header>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, dui eu aliquam lobortis, mi mauris egestas lorem, at placerat orci lectus quis enim. Sed eget sagittis ligula. Vivamus vestibulum quis elit in ornare. Aras a diam fermentum, dictum eros nec, gravida purus. Vivamus rhoncus.<br><br><strong>Cras a diam fermentum, dictum eros nec, gravida purus. Vivamus rhoncus.</strong></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
}
</script>

<style scoped>
    .content {
        color: #250b47;
    }

    header {
        font-size: 4vw;
        font-weight: 800;
        line-height: 100%;
        user-select: none;
        margin-bottom: 35px;
    }

    .about {
        width: 100%;
        height: 80vh;
    }

    .description {
        width: 450px;
    }

    strong {
        font-weight: 600;
    }
</style>