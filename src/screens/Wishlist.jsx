import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('/api/wishlist');
                setWishlist(response.data);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchWishlist();
    }, []);

    return (
        <div>
            <h1>My Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlist.map((item) => (
                        <li key={item._id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;