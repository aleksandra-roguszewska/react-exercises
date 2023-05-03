import { useReducer } from "react";
import "./App.css";

const ACTIONS = {};

function reducer(state, action) {}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <form>
        <input type="text" value={name}></input>
        <input type="text" value={name}></input>
        <input type="text" value={name}></input>
      </form>
    </>
  );
}

export default App;

//gdzieś prrzy dziwiątej minucie przerwa
