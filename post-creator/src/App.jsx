import AddPost from "./components/AddPost/AddPost";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <AddPost />
      </div>
      <div className="post_content"></div>
      <Card />
    </div>
  );
}

export default App;
