import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import useAuth from "../../context/AuthContext";

const Navbar = () => {
  const { logout, currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    {currentUser ? <div className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/grades">Grades</Link>
        <Link to="/notes">Notes</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div> : null}
    </>
  )
}

export default Navbar