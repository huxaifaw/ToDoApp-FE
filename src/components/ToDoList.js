import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
