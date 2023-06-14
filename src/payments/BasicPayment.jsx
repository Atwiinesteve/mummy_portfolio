// importing react and other modules.
import React, { useState } from "react";
import {loadStripe} from '@stripe/stripe-js';


// stripe promise
let stripePromise;

// get stripe promise
const getStripePromise = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
    }
    return stripePromise;
}


// payments model
function BasicPackagePayment() {

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const basic = {
        price: 'price_1NItOGCd2C2lo3rl0AOmNYk1',
        quantity: 1
    }

    const checkoutOptions = {
        lineItems: [basic],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }

    const redirectToCheckoutPage = async () => {
        setIsLoading(true)
        const stripe = await getStripePromise();
        const {error} = await stripe.redirectToCheckout(checkoutOptions);
        if(error) setStripeError(error.message);
        setIsLoading(false)
    }

    if(stripeError) alert(stripeError);

	return (
		<>
			<button onClick={redirectToCheckoutPage} disabled={isLoading}>{ isLoading ? "Loading Payment.." : "buy package" }</button>
		</>
	);
}

// exporting payments module.
export default BasicPackagePayment;
