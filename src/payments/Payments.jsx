// importing react and other modules.
import React from "react";
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
function Payments() {

    const item = {
        price: 'price_1NIrykCd2C2lo3rla7xGG9ic',
        quantity: 1
    }

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }

    const redirectToCheckoutPage = async () => {
        const stripe = await getStripePromise();
        const {error} = await stripe.redirectToCheckout(checkoutOptions);
        console.log("stripe error", error)
    }

	return (
		<>
			<button onClick={redirectToCheckoutPage}>checkout</button>
		</>
	);
}

// exporting payments module.
export default Payments;
