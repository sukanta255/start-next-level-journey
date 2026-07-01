"use client";

import { useEffect, useState } from "react";
import api from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await api.get("/todos-new-app");
    setTodos(res.data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    await api.post("/todos-new-app", { title });
    fetchTodos();
  }

  const deleteTodo = async (id) => {
    await api.delete(`/todos-new-app/${id}`);
    fetchTodos();
  }

  const toggleTodo = async (todo) => {
    await api.put(`/todos-new-app/${todo._id}`, {
      completed: !todo.completed
    });
    fetchTodos();
  }

  return (

    <div style={{
      width: "500px",
      margin: "50px auto"
    }}>

      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />

      {
        todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))
      }

    </div>

  )

}