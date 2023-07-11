import Navigation from "./components/Navigation/Navigation";
import OrderSection from "./components/OrderSection/OrderSection";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductPresentation from "./components/ProductPresentation/ProductPresentation";
import styles from "./App.module.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className={styles.app_container}>
      <div>
        <Toaster />
      </div>
      <nav className={styles.navigation}>
        <Navigation />
      </nav>
      <header className={styles.product_presentation}>
        <ProductPresentation />
      </header>
      <section className={styles.product_info}>
        <ProductInfo />
      </section>
      <section className={styles.order_section}>
        <OrderSection />
      </section>
    </div>
  );
}

export default App;
