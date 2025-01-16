import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../utils/products'; 

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <div style={styles.loading}>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, selectedSize });
      alert(`Added ${product.product_name} (Size: ${selectedSize}) to the cart!`);
    } else {
      alert('Please select a size.');
    }
  };

  const handleAddToWishlist = () => {
    setIsInWishlist((prevState) => !prevState);
    alert(
      `${product.product_name} has been ${
        isInWishlist ? 'removed from' : 'added to'
      } your wishlist!`
    );
  };

  const renderSizeButtons = () =>
    product.sizes.map((size) => (
      <button
        key={size}
        style={{
          ...styles.sizeButton,
          backgroundColor: selectedSize === size ? '#000' : '#fff',
          color: selectedSize === size ? '#fff' : '#000',
        }}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    ));

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={require(`../assets/images/${product.file_path}`).default}
          alt={product.product_name}
          style={styles.image}
        />
      </div>
      <div style={styles.detailsContainer}>
        <h1>{product.product_name}</h1>
        <p style={styles.price}>Price: ₹{product.price}</p>
        <p>{product.description}</p>
        <div>
          <h3>Select Size:</h3>
          {renderSizeButtons()}
        </div>
        <button style={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button style={styles.wishlistButton} onClick={handleAddToWishlist}>
          {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  imageContainer: {
    flex: 1,
    margin: '50px 20px 0 100px',
  },
  image: {
    width: '95%',
    borderRadius: '8px',
    minHeight: '400px',
  },
  detailsContainer: {
    flex: 2,
    marginTop: '50px',
  },
  price: {
    fontSize: '20px',
    color: '#333',
  },
  sizeButton: {
    margin: '5px',
    padding: '10px 15px',
    border: '1px solid #000',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  addToCartButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'darkgreen',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    marginRight: '20px',
    transition: 'background-color 0.3s ease',
  },
  wishlistButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: 'brown',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    marginLeft: '20px',
    transition: 'background-color 0.3s ease',
  },
  loading: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default ProductPage;
