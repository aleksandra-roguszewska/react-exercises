import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TodoItem todoText="Wyrzuć śmieci"></TodoItem>
      <div></div>
    </div>
  );
}

export default App;
