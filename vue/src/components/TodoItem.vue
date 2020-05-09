<template>
    <div class="todo-item" v-bind:class="{'completed':todoItem.completed}">
        <div class="status"><input type="checkbox" v-model="todoItem.completed"/></div>
        <div class="title">{{todoItem.title}}</div>
        <div class="delete" v-on:click="$emit('delete-todo-item', todoItem.id)">[x]</div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todoItem"],
}
</script>

<style scoped>
    .todo-item {
        padding: 10px;
        min-height: 50px;
        border-top: 1px lightgray solid;
        max-width: 100vw;
        margin: 0;
        display: flex;
    }

    .completed {
        color: lightgray;
    }

    .status {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        flex: 8;
        display: flex;
        align-items: center;
    }

    .delete {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color:red;
        cursor: pointer;
    }

    .delete:hover {
        color: black;
    }

    input {
        cursor: pointer;
    }

</style>