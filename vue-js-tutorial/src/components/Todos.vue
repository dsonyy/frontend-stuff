<template>
    <div>
        <div v-for="(todoItem, idx) in todoItems" v-bind:key="idx">
            <TodoItem v-bind:todoItem="todoItem" v-on:delete-todo-item="$emit('delete-todo-item', todoItem.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from "../components/TodoItem";

export default {
    name: "Todos",
    props: ["todoItems"],
    components: {
        TodoItem,
    }
}
</script>

<style scoped>

</style>