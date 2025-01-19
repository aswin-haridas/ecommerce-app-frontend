import React, { createContext, startTransition, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();


  // Load initial state from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const cartData = localStorage.getItem('cart');
    const ordersData = localStorage.getItem('orders');
    const wishlistData = localStorage.getItem('wishlist');

    if (userData) setUser(JSON.parse(userData));
    if (cartData) setCart(JSON.parse(cartData));
    if (ordersData) setOrders(JSON.parse(ordersData));
    if (wishlistData) setWishlist(JSON.parse(wishlistData));
  }, []);

  const login = useCallback((userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
    console.log(localStorage)
    startTransition(() => {
      setUser(userData);
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('userData');
    localStorage.removeItem('cart');
    localStorage.removeItem('wishlist');
    startTransition(() => {
      setUser(null);
      setCart([]);
      setWishlist([]);
      navigate("/");
    });
  }, [navigate]);

  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === productId);
      if (index === -1) return prevCart;
      const updatedCart = [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    localStorage.removeItem('cart');
    setCart([]);
  }, []);

  const addToWishlist = useCallback((product) => {
    setWishlist(prevWishlist => {
      const updatedWishlist = [...prevWishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setWishlist(prevWishlist => {
      const index = prevWishlist.findIndex(item => item.id === productId);
      if (index === -1) return prevWishlist;
      const updatedWishlist = [...prevWishlist.slice(0, index), ...prevWishlist.slice(index + 1)];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  }, []);

  const clearWishlist = useCallback(() => {
    localStorage.removeItem('wishlist');
    setWishlist([]);
  }, []);

  const addOrder = useCallback((order) => {
    setOrders(prevOrders => {
      const updatedOrders = [...prevOrders, { ...order, date: new Date().toISOString() }];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  }, []);

  const calculateCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      orders,
      addOrder,
      calculateCartTotal
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);