import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";

const paystack_secret_key = import.meta.env.VITE_PAYSTACK_TEST_KEY;

const Payment = ({ email }) => {
  const { userCartSummary } = useSelector((state) => state.cart);

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: userCartSummary.totalAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: paystack_secret_key,
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  function handlePaystackPayment() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // check if total cart amout is less than 1000
    if (userCartSummary.totalCartAmount < 1000) {
      return alert("Please you cant order items less than 1000");
    }

    // check if user entered a valid email address
    if (emailRegex.test(email) === false) {
      return alert("please enter a valid email");
    }
    console.log("heelo world");

    // use paystack here
    console.log(config);

    initializePayment(onSuccess, onClose);
  }

  return (
    <div>
      <button
        className="bg-sky-700 text-white p-2 rounded-md w-full hover:opacity-60 font-semibold"
        onClick={handlePaystackPayment}
      >
        Pay now!
      </button>
    </div>
  );
};

export default Payment;
