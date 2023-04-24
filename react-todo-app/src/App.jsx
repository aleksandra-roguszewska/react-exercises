import { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput.jsx";
import TodoItem from "./components/TodoItem/TodoItem1.jsx";
import TodoList from "./components/TodoList/TodoList1.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TodoInput />
      <TodoItem todoText="Blabla" />
      <TodoList />
    </div>
  );
}

export default App;
