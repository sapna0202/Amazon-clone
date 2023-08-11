import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    
    console.log("the sec>>",clientSecret);

    const PaymentSubmitHandler = async (e) => {
            e.preventDefault();
            setProcessing(true);

            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(async ({ paymentIntent }) => {
                try {
                    // Assuming you have initialized 'db' and 'user' variables
                    await db
                        .collection('users')
                        .doc(user?.uid)
                        .collection('orders')
                        .doc(paymentIntent.id)
                        .set({
                            basket: basket,
                            amount: paymentIntent.amount,
                            created: paymentIntent.created
                        });
                      
                        setSucceeded(true);
                    console.log('Order information stored successfully.');
                } catch (error) {
                    console.error('Error storing order information:', error);
                }
                
                dispatch({
                    type:'EMPTY_BASKET'
                })

                navigate("/orders", { replace: true })
            });      

                

    }

    const paymentChange = e => {
        // Listen for change in cradElememt
        // display error as user enter wromg card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="flex ">
            <div className="flex  flex-col  gap-4 absolute top-[80px]   p-2 w-full ">
                <div className=" text-center font-bold text-2xl">
                    <h1>CHECKOUT (<Link to="/Cart">{basket.length} ITEM </Link>) </h1>
                </div>
                <div className="flex flex-col gap-4 p-4 bg-white">
                    <div className="flex flex-row gap-2 border-b-2 bottom-border-slate-400 ">
                        <div className=" ">
                            <h1 className="font-bold text-lg p-2">Delivery Address</h1>
                        </div>
                        <div className=" w-full ">
                            <p>{user?.email}</p>
                            <p>Minapur Garkha Saran</p>
                            <p>Bihar</p>
                        </div>
                    </div>
                    <div className=" flex flex-row gap-2 border-b-2 bottom-border-slate-400 ">
                        <div className="">
                            <h3 className="font-bold text-lg p-2">Review items and Delivery</h3>
                        </div>
                        <div className=" w-full">
                            {basket.map((item) => (
                                <CartProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 border-b-2 bottom-border-slate-400 ">
                        <div className="  ">
                            <h3 className="font-bold text-lg p-2">Payment Method</h3>
                        </div>
                        <div className=" flex  w-full ">
                            <form className="flex-[0.8] p-2"
                                onSubmit={PaymentSubmitHandler}
                            >
                                <CardElement
                                    onChange={paymentChange}
                                />
                                <div>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total:<strong>{value}</strong></h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <div>
                                    <button className="border-2 border-slate-400 p-1 bg-slate-200 rounded-md" disabled={processing || disabled || succeeded} >
                                        <spam>{processing ? <p>processing</p> : "Buy Now"}</spam>
                                    </button>
                                    </div>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
