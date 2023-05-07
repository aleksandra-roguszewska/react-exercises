import { useSelector, useDispatch } from "react-redux";
import { addPost } from "./postSlice";

export function PostInput() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          onBlur={(event) => dispatch(addPost(event.target.value))}
        ></input>
        {posts.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}
