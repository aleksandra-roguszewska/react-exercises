const TodoItem = ({ todoText }) => {
  return (
    <div>
      <span>{todoText}</span>
      <button>X</button>
      <input type="checkbox" />
    </div>
  );
};

export default TodoItem;
