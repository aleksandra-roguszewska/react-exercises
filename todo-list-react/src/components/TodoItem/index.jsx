const TodoItem = ({ todoText }) => {
  return (
    <div>
      <div>{todoText}</div>;<button>+</button>;<button>-</button>;
    </div>
  );
};

export default TodoItem;
