import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/grades">Grades</Link>
      </nav>
    </div>
  );
};
