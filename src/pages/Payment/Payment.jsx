import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <h2 className="text-center font-Sora font-semibold text-2xl text-violet-800 mt-6 mb-8">Pay Here!</h2>
            <p className="text-center font-Sora font-semibold text-2xl text-slate-600  mb-8 mt-7">Want to pay through card? Give following Information</p>
            <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            
        </div>
    );
};

export default Payment;