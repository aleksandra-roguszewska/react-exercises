import React, { useState } from "react";

const TodoInput = () => {
  const [inputText, setInputText] = useState("");
  const changeInput = (event) => {
    setInputText(() => event.target.value);
  };
  return <input onBlur={changeInput} />;
};

export default TodoInput;
