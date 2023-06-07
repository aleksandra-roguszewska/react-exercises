import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { Students } from "./components/Students";
import { Notes } from "./components/Notes";
import { Grades } from "./components/Grades";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/*" element="Nie znaleziono strony" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
