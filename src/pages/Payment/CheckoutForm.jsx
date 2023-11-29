import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const price=40;
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous email',
                    name: user?.displayName || 'Anonymous user'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user.email,
                price: price,
                transactionId: paymentIntent.id,
                paymentTime : moment().format('YYYY-MM-DD'),
                role:'pro-user'
                
            }
            const res = await axiosSecure.post('/payment', payment);
                console.log('payyyyy', res.data);
              
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    axiosSecure.patch(`/updatePayment/${user.email}`)}}
                   
          

                }
    
    return (
        <div className="max-w-4xl mx-auto bg-slate-200 p-6 rounded-xl">
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#484d7a',
                            '::placeholder': {
                                color: '#484d7a',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-lg btn-success my-4" type="submit"   disabled={!stripe || !clientSecret} >
                Pay
            </button>
            <p className="text-red-600 text-center">{error}</p>
            {transactionId && <p className="text-green-600 text-center"> Your transaction id: {transactionId}</p>}
        </form>
            
        </div>
    );
};

export default CheckoutForm;