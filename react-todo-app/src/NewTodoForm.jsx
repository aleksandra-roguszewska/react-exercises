import { useState } from "react";

//Jak przekazywac rzeczy zależace od stanów między komponentami? -> przez propsy

//Props allow you to pass information down to custom components

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("Add new todo here...");

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
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
  );
}
