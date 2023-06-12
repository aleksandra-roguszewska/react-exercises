import { auth } from "./api/firebase";
import { Route, Routes, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Auth from "./components/Auth";
import ForgotPassword from "./components/ForgotPAssword";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";

console.log(auth);

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/auth">Panel klienta</Link>
        <Link to="/auth/register">Register</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/forgot-password">Odzywskiwanie hasła</Link>
        <Link to="/admin">Panel administratora</Link>
      </nav>

      <h1>Hello, Firebase Auth!</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};
