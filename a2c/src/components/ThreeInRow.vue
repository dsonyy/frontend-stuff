<template>
    <div class="container">
        <div class="content"> </div>
    </div>
</template>

<script>
export default {
    name: "ThreeInRow",
}
</script>

<style scoped>
    .content {
        position: relative;
        background-color: blueviolet;
        width: 100%;
        height: 70%;
        top: 50%;
		transform: translateY(-50%);
    }
</style>