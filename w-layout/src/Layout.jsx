import Navigation from "./components/Navigation/Navigation.jsx";
import Article from "./components/Article/Article.jsx";
import Aside from "./components/Aside/Aside.jsx";
import "./Layout.css";
import logo from "./assets/images/logo.svg";
import heroImage from "./assets/images/image-web-3-desktop.jpg";

function Layout() {
  return (
    <div className="Layout">
      <Navigation className="navigation" imageSrc={logo} />
      <div className="site_content">
        <Article className="article" imageSrc={heroImage} />
        <Aside className="aside" />
        <div className="footer">SAasAS</div>
      </div>
    </div>
  );
}

export default Layout;
