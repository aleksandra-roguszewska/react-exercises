import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  //Useeffect takes function as an argument and runs this function every time
  //the objects passed in the array in the second argument of useEffect change

  //When to use states?
  //any type of data that you want to have rerender your component when it changes, you wanna put this inside your state
  //for example when you change your input or when you change todos array

  //anytime you want to make sure you are using current value you have to set it as a function using an additional argument that represents this currentValue
  // Otherwise you can pass it as it is shown below in input onChange event(there it doesnt matter what the previous valu was you just want new value)

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // Mogłoby  być tez tak:
  // function toggleTodo(id) {
  //   setTodos((currentTodos) => {
  //     return currentTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       }
  //       return todo;
  //     });
  //   });
  // }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
