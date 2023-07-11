import styles from "./Authentication.module.css";
import useAuth from '../../context/AuthContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();

    const email = formEvent.target?.email.value
    const password = formEvent.target?.password.value
    const password_confirm = formEvent.target?.password_confirm.value

    if(password !== password_confirm) {
      toast.error("password are not the same")
    } else {
      try {
        await register(email, password);
        navigate("/");
        toast.success("Register successfully")
      } catch (error) {
        toast.error(error.code);
      }

      formEvent.target.reset();
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password_confirm">confirm password</label>
        <input type="password" name="password_confirm" id="password_confirm" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register