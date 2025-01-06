import React from 'react';

const SingleProductPage = ({ product }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-product-page">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default SingleProductPage;