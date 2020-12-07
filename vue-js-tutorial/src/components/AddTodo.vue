<template>
    <div>
        <form v-on:submit="addTodoItem">
            <input type="text" name="title" v-model="title" placeholder="Add todo..."/>
            <input type="submit" value="Submit" class="btn"/>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            title: "",
        }
    },
    methods: {
        addTodoItem(e) {
            e.preventDefault();
            if (this.title.trim() == "") return;
            const newTodoItem = {
                title: this.title,
                completed: false,
            }
            this.$emit("add-todo-item", newTodoItem);
            this.title = "";
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        border: none;
        padding: 10px;
    }

    input[type="submit"] {
        flex: 2;
    }

    .btn {
        color: white;
        display: inline-block;
        border: none;
        background-color: #333;
        cursor: pointer;
    }
</style>