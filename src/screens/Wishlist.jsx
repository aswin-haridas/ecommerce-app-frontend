import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ProductName = styled.div`
  font-size: 16px;
`;

const WishlistButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ isWishlisted }) => (isWishlisted ? "red" : "#555")};
  font-size: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const Wishlist = () => {
  const [products, setProducts] = useState([]); // Mock product list
  const [wishlist, setWishlist] = useState([]);

  // Fetch products (mocked for now)
  useEffect(() => {
    const fetchProducts = async () => {
      const mockProducts = [
        { _id: "1", name: "Product 1" },
        { _id: "2", name: "Product 2" },
        { _id: "3", name: "Product 3" },
      ];
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  // Fetch wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("/wishlist");
        setWishlist(response.data.products || []);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const toggleWishlist = async (productId) => {
    try {
      await axios.post("/wishlist", { productId });
      setWishlist((prevWishlist) =>
        prevWishlist.includes(productId)
          ? prevWishlist.filter((id) => id !== productId)
          : [...prevWishlist, productId]
      );
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  return (
    <Container>
      <h1>Wishlist</h1>
      {products.map((product) => (
        <ProductCard key={product._id}>
          <ProductName>{product.name}</ProductName>
          <WishlistButton
            isWishlisted={isWishlisted(product._id)}
            onClick={() => toggleWishlist(product._id)}
          >
            {isWishlisted(product._id) ? <Favorite /> : <FavoriteBorder />}
          </WishlistButton>
        </ProductCard>
      ))}
    </Container>
  );
};

export default Wishlist;
