import Navigation from "./components/Navigation/Navigation.jsx";
import "./Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="site_content">
        <div className="article">SAasSA</div>
        <div className="aside">saSs</div>
        <div className="footer">SAasAS</div>
      </div>
    </div>
  );
}

export default Layout;
