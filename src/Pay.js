import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51MMAUeSH2LrEIBY6ydpvRrqpcwNHsJI0Zt5jfFw7QxsIlLpy2smowFhF3mV6Y5LX1M3flqcnaQhiAaX5tF1yQveS00mLEAVClX"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useNavigate()

    //when token is created
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(   //sending request to backend using axios with token id and amount as $20 
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000
                    }
                )
                console.log(res.data);
                history("/success ")
            } catch (err) {
                console.log(err);
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, history]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (<span>Processing. Please Wait...</span>) :
                <StripeCheckout     //below are from stripe npm docs
                    name='Fitzy'
                    image='https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg?w=2000'
                    billingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount={2000}   //stripe works in cents
                    token={onToken}
                    stripeKey={KEY}

                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            }
        </div>
    )
}

export default Pay