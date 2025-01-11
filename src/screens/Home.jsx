import Header from "../components/Header";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import MegaMenu from "../components/MegaMenu"; // Import MegaMenu
import { useState } from "react"; // Import useState
import Explore from "../components/Explore";

function HomePage() {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMegaMenuOpen(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Header onMouseEnter={handleMouseEnter} />
      <MegaMenu isOpen={isMegaMenuOpen} />
      <Promo />
      <Explore />
      {/* <Featured /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
