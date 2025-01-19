import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CartPage from "./screens/Cart";
import HomePage from "./screens/Home";
import { Successfullpayment } from "./screens/Successfullpayment";
import ProductList from "./screens/ProductList";
import Product from "./screens/Product";
import { useAuth } from "./context/AuthContext";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Wishlist from "./screens/Wishlist";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      {user ? (
        <>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<Successfullpayment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </>
      ) : (
        <>
          <Route path="/cart" element={<Navigate to="/login" />} />
          <Route path="/success" element={<Navigate to="/login" />} />
          <Route path="/profile" element={<Navigate to="/login" />} />
          <Route path="/wishlist" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
}
export default App;