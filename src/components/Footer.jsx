import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Ecommerce App. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;