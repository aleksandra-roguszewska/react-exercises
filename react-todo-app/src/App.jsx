import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("Add new todo here...");
  const [todos, setTodos] = useState([]);

  //any type of data that you want to have rerender your component when it changes, you wanna put this inside your state
  //for example when you change your input or when you change todos array

  function handleSubmit(event) {
    event.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem("");
  }
  console.log(todos);

  //anytime you want to make sure you are using current value you have to set it as a function using an additional argument that represents this currentValue
  // Otherwise you can pass it as it is shown below in input onChange event(there it doesnt matter what the previous valu was you just want new value)

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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={(event) => setNewItem(() => event.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                ></input>
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
