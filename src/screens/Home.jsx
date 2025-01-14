import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Promo from "../components/Promo";

function HomePage() {

  const handleMouseLeave = () => {
    setMegaMenuOpen(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Header/>
      <Promo/>
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
