import { Link, Navigate } from "react-router-dom";
import styles from "./Authentication.module.css";
import useAuth from "../../context/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login, currentUser } = useAuth();

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();

    const email = formEvent.target?.email.value;
    const password = formEvent.target?.password.value;

    try {
      await login(email, password);
      toast.success("Logged in succesfully")
    } catch (error) {
      toast.error("An error occurred")
    }

  }

  return (
    <>
    {!currentUser ? <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="">email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="">password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Log In</button>
        <p>You do not have an account yet? <Link to="/register">Register now!</Link></p>
      </form>
    </div> : <Navigate to="/" />}
    </>
  )
}

export default Login