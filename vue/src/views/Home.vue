<template>
  <div class="home">
    <Header />
    <AddTodo  v-on:add-todo-item="addTodoItem"/>
    <Todos v-bind:todoItems="todoItems" v-on:delete-todo-item="deleteTodoItem"/>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import Header from "../components/layout/Header";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    Header,
    AddTodo,
  },
  methods: {
    deleteTodoItem(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => this.todoItems = this.todoItems.filter(todoItem => todoItem.id != id))
        .catch(err => console.error(err));
    },
    addTodoItem(newTodoItem) {
      const { title, completed } = newTodoItem;
      axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed })
        .then(res => this.todoItems = [...this.todoItems, res.data])
        .catch(err => console.error(err));
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.todoItems = res.data)
      .catch(err => console.error(err));
  },
  data() {
    return {
      todoItems: []
    }
  }

}
</script>
