import { useSelector } from "react-redux";
// import styles from "./Card.module.css";

const Card = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  return (
    <div>
      {posts.map((item) => {
        <h2>{item.title}</h2>;
      })}
    </div>
  );
};

export default Card;
