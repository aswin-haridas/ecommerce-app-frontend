import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Checkout = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const KEY =
    "pk_test_51QhvWdG6MURsBmOTtsys8gHQRsi5zEh0VspJkpXAaAUqUrIxSuu5o1LhZSe1AdjZEAHQrzioqQZP8hEL0JioHfZQ00YTqgP2lV";

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http:/localhost:3000/api/checkout", {
          tokenId: stripeToken.tokenId,
          amount:2000
        });

      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest
  }, [stripeToken]);
  return (
    <StripeCheckout
      name="attire shop"
      billingAddress
      shippingAddress
      description="your total is 50"
      amount={2000}
      token={onToken}
      stripeKey={KEY}
    >
      <button>Checkout</button>
    </StripeCheckout>
  );
};
export default Checkout;
