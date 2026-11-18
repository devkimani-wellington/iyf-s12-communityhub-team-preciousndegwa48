import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build CommunityHub"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h2>My Todos</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
