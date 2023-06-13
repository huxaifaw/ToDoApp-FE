import React from "react";

function ToDo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
    // Here, make an API call to update the completion status of the todo
    // axios.patch(`/api/todos/${todo.id}`, {completed: !todo.completed});
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
    // Here, make an API call to delete the todo
    // axios.delete(`/api/todos/${todo.id}`);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default ToDo;
