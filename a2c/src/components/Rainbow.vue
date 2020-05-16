<template>
    <div class="rainbow">
    </div>
</template>

<script>
export default {
    name: "Rainbow",
}
</script>

<style scoped>
    .rainbow {
        height: 2px;
        width: max(100vw, 300px);
        background-image: linear-gradient(to right, #6227b5, #0cc, #0c0, #dd0, #c00, #c0c, #6227b5);
    }
</style>