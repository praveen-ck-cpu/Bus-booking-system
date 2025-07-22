import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { FaLock, FaCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";

const SecurePayment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, expiryDate, cvv, name } = paymentDetails;

    if (!cardNumber || !expiryDate || !cvv || !name) {
      toast.error("All fields are required!");
      return;
    }

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      toast.error("Invalid card number!");
      return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
      toast.error("Invalid CVV!");
      return;
    }

    toast.success("Payment Successful! 🎉");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-xl mt-10"
    >
      <Toaster position="top-right" richColors />
      
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
        <FaLock className="text-red-500" /> Secure Payment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Card Number */}
        <div>
          <label className="block font-medium text-gray-700">Card Number</label>
          <div className="flex items-center border rounded-lg p-2 bg-gray-100">
            <FaCreditCard className="text-gray-500 mr-2" />
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              placeholder="1234 5678 9012 3456"
              className="w-full bg-transparent outline-none"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Expiry Date & CVV */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              className="w-full p-2 border rounded-lg bg-gray-100 outline-none"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium text-gray-700">CVV</label>
            <input
              type="password"
              name="cvv"
              maxLength="3"
              placeholder="123"
              className="w-full p-2 border rounded-lg bg-gray-100 outline-none"
              value={paymentDetails.cvv}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Cardholder Name */}
        <div>
          <label className="block font-medium text-gray-700">Cardholder Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full p-2 border rounded-lg bg-gray-100 outline-none"
            value={paymentDetails.name}
            onChange={handleChange}
          />
        </div>

        {/* Pay Now Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Pay Securely
        </button>
      </form>
    </motion.div>
  );
};

export default SecurePayment;
