<template>
    <header class="header">
        <h1>Todo List</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
    .header {
        background-color: #222;
        padding: 10px;
        text-align: center;
        color: white;
    }

    .header a {
        color: white;
        text-decoration: none;   
    }

    .header a:hover {
        color: gray;
    }
</style>