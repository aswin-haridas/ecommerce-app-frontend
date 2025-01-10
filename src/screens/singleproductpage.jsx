import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/products';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
   
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    margin-left: 20px;
    margin-right: auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 450px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
`;

const Sizes = styled.div`
    margin-bottom: 20px;
`;

const SizeButton = styled.button`
    padding: 10px 15px;
    margin: 0 5px;
    font-size: 1rem;
    color: #333;
    background-color: #f1f1f1;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
        background-color: #ddd;
        border-color: #999;
    }

    &.selected {
        background-color: #007bff;
        color: #fff;
        border-color: #007bff;
    }
`;

const SizeInput = styled.input`
    padding: 10px;
    margin: 0 5px;
    font-size: 1rem;
    color: #333;
    background-color: #f1f1f1;
    border: 2px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const Price = styled.p`
    font-size: 1.5rem;
    color: #e60023;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const standardSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const SingleProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        const foundProduct = products.find((product) => product.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart({ ...product, selectedSize });
        } else {
            alert('Please select a size.');
        }
    };

    return (
        <Container>
            <Content>
                <Image src={`../src/assets/images/${product.file_path}`} alt={product.name} />
                <Details>
                <Title>{product.product_name}</Title>
                    <Description>{product.description}</Description>
                    <Sizes>
                        <span>Select Size: </span>
                        {standardSizes.map((size) => (
                            <SizeButton
                                key={size}
                                className={selectedSize === size ? 'selected' : ''}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </SizeButton>
                        ))}
                    </Sizes>
                    <Price>Price: ₹ {product.price}</Price>
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                </Details>
            </Content>
        </Container>
    );
};

export default SingleProductPage;