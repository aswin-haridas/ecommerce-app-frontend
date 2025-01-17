import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./screens/Cart";
import CheckoutPage from "./screens/Checkout";
import HomePage from "./screens/Home";
import { Successfullpayment } from "./screens/Successfullpayment";
import ProductList from "./screens/ProductList";
function App() {

  const user = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<Successfullpayment />} />
      </Routes>
    </Router>
  );
}

export default App;
