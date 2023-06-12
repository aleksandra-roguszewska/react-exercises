import { useState, useEffect } from "react";
import { auth } from "./api/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Admin from "./components/Admin";
import Auth from "./components/Auth";
import ForgotPassword from "./components/ForgotPAssword";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";

console.log(auth);

export const App = () => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth status changed", user);
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, []);

  if (isAuth === null) {
    return <h1>Traw ładowanie aplikacji</h1>;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Panel klienta</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/forgot-password">Odzywskiwanie hasła</Link>
          </li>
          <li>
            <Link to="/admin">Panel administratora</Link>
          </li>
          <li
            onClick={() => {
              signOut(auth);
              console.log("Wylogowano");
            }}
          >
            Wyloguj się
          </li>
        </ul>
      </nav>

      <h1>Hello, Firebase Auth!</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route
          path="/admin"
          element={!isAuth ? <Navigate to="/" /> : <Admin />}
        />
      </Routes>
    </>
  );
};
