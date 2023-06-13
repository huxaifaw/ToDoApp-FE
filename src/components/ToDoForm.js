import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function ToDoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      // Here is where you would make the API call to save the new todo
      // axios.post('/api/todos', todo)

      // For now, let's simulate the api call
      const savedTodo = { ...todo, id: uuidv4() };
      addTodo(savedTodo);
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ToDoForm;
