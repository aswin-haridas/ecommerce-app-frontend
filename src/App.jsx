import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/Home';
import Explore from './screens/Explore';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Admin from './screens/Admin';
import Auth from './screens/Auth';
import SingleProductPage from './screens/singleproductpage';
import Wishlist from './screens/Wishlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
