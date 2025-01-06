import React from 'react';

const SingleProductPage = ({ product, addToCart }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-product-page">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default SingleProductPage;