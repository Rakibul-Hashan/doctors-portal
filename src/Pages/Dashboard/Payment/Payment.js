import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation  = useNavigation()
  const { appointmentDate, email, patient, phone, price, slot, treatment } =
    booking;
  console.log(booking);
  if(navigation.state === 'loading'){
    return <Loading></Loading>
  }
  return (
    <div>
      <h3 className="text-3xl ">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for youre appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div class="">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
          booking={booking}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
