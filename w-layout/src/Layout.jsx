import Navigation from "./components/Navigation/Navigation.jsx";
import Article from "./components/Article/Article.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./Layout.css";
import logo from "./assets/images/logo.svg";
import heroImage from "./assets/images/image-web-3-desktop.jpg";
import footerImageUrl1 from "./assets/images/image-retro-pcs.jpg";
import footerImageUrl2 from "./assets/images/image-top-laptops.jpg";
import footerImageUrl3 from "./assets/images/image-gaming-growth.jpg";

const footerArticlesArray = [
  {
    src: footerImageUrl1,
    heading1Text: "01",
    heading2Text: "Reviving Retro PCs",
    paragraphText: "What happens when old PCs are given modern upgrades?",
  },
  {
    src: footerImageUrl2,
    heading1Text: "02",
    heading2Text: "Top 10 Laptops of 2022",
    paragraphText: "Our best picks for various needs and budgets.",
  },
  {
    src: footerImageUrl3,
    heading1Text: "03",
    heading2Text: "The growth of gaming",
    paragraphText: "How the pandemic has sparked fresh opportunities.",
  },
];

function Layout() {
  return (
    <div className="Layout">
      <Navigation className="navigation" imageSrc={logo} />
      <div className="site_content">
        <Article className="article" imageSrc={heroImage} />
        <Aside className="aside" />
        <Footer footerArticlesArray={footerArticlesArray} className="footer" />
      </div>
    </div>
  );
}

export default Layout;
