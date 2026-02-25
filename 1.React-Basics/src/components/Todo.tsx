// import React from 'react'

import { useState,useEffect } from "react"
import type {Todo} from "../types/todo.ts"
function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});
  const [input, setInput] = useState<string>("");

  function addTodo() {
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    setInput("");
    
   console.log(todos)
  }

  function toggleTodo(id: number) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
  <div className="todo-container">
    <h2 className="todo-title">Todo List</h2>

    <div className="todo-input-group">
      <input
        className="todo-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task..."
      />

      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>

    <div className="todo-list">
      {todos.map(todo => (
        <div className="todo-item" key={todo.id}>
          <span
            className={`todo-text ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>

          <button
            className="delete-btn"
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  </div>
);

}

export default TodoApp;