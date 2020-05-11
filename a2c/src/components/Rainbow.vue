<template>
    <div class="rainbow">
    </div>
</template>

<script>
export default {
    name: "rainbow",
}
</script>

<style scoped>
    .rainbow {
        height: 2px;
        width: 100%;
        background-image: linear-gradient(to right, #6227b5, #0cc, #0c0, #dd0, #c00, #c0c, #6227b5);
    }
</style>