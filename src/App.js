import React, { useState, useEffect } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Here, make an API call to fetch all todos
    // axios.get('/api/todos').then(res => setTodos(res.data));
    // Let's simulate the api call with local data
    const initialTodos = [
      { id: 1, task: "Create react app", completed: false },
      { id: 2, task: "Create API for app", completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>My Todos</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
