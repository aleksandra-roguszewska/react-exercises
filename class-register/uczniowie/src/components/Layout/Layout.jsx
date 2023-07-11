import { Navbar, Footer } from "../index";
import styles from "../../App.module.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useAuth from "../../context/AuthContext";

const Layout = () => {
  const { currentUser } = useAuth();
  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.page_content}>
        <Toaster />
        <Outlet />
      </div>
      {currentUser ? <div className={styles.footer}>
        <Footer />
      </div> : null}
    </div>
  )
}

export default Layout