import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem1";

const TodoList = ({ todoText }) => {
  const [todos, setTodos] = useState([1, 2, 3]);
  return (
    <div className="todoList">
      {todos.map((item) => (
        <TodoItem todoText="Blabla" />
      ))}
    </div>
  );
};

export default TodoList;
