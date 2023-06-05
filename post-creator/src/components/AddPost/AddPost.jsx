import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/postsSlice";
import styles from "./AddPost.module.css";

const AddPost = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      title: e.target.post_title.value,
      content: e.target.post_content.value,
    };

    dispatch(addPost(newPost));

    e.target.reset();
  };

  return (
    <>
      <h2 className={styles.heading}>Create new post</h2>
      <form onSubmit={handleSubmit} className={styles.posts_form}>
        <input
          type="text"
          name="post_title"
          id="post_title"
          placeholder="Give your next post a name"
          required
        />
        <textarea
          name="post_content"
          id="post_content"
          placeholder="What's on your mind?"
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </>
  );
};

export default AddPost;
