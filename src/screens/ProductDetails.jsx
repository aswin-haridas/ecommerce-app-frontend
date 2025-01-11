import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../utils/products';

const Container = styled.div`
    padding: 20px;
`;

const ProductWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
`;

const ProductImage = styled.img`
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SizeButton = styled.button`
    padding: 10px;
    margin: 0 5px;
    background-color: ${({ selected }) => (selected ? '#007bff' : '#f1f1f1')};
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
    border: 2px solid;
    border-color: ${({ selected }) => (selected ? '#007bff' : '#ccc')};
    border-radius: 5px;
    cursor: pointer;
`;

const Price = styled.p`
    font-size: 1.2rem;
    color: #e60023;
`;

const AddToCartButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const SingleProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    useEffect(() => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart({ ...product, selectedSize });
        } else {
            alert('Please select a size.');
        }
    };

    return (
        <Container>
            <ProductWrapper>
                <ProductImage
                    src={`../src/assets/images/${product.file_path}`}
                    alt={product.name}
                />
                <div>
                    <h1>{product.product_name}</h1>
                    <p>{product.description}</p>
                    <div style={{ marginBottom: '20px' }}>
                        <span>Select Size: </span>
                        {sizes.map((size) => (
                            <SizeButton
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                selected={selectedSize === size}
                            >
                                {size}
                            </SizeButton>
                        ))}
                    </div>
                    <Price>Price: ₹ {product.price}</Price>
                    <AddToCartButton onClick={handleAddToCart}>
                        Add to Cart
                    </AddToCartButton>
                </div>
            </ProductWrapper>
        </Container>
    );
};

export default SingleProductPage;
