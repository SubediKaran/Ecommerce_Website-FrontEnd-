import React, { useState } from 'react';
import {  FaMoneyBillAlt } from 'react-icons/fa';
import './paymentpage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Add your logic for processing the payment based on the selected payment method
    if (paymentMethod === 'esewa') {
      // Process eSewa payment
      console.log('Processing eSewa payment...');
    } else if (paymentMethod === 'khalti') {
      // Process Khalti payment
      console.log('Processing Khalti payment...');
    } else if (paymentMethod === 'cod') {
      // Process cash on delivery
      console.log('Processing cash on delivery...');
    } else {
      // No payment method selected
      console.log('Please select a payment method');
    }
  };

  return (
    <div className="payment-page">
      <h1 className="titlepayment">Payment Via</h1>
      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="esewa"
              checked={paymentMethod === 'esewa'}
              onChange={handlePaymentMethodChange}
            />
            <span className="payment-icon">
              <img src="images/esewa.webp" alt="eSewa"
              className="payimage" />
            </span>
          </label>
        </div>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="khalti"
              checked={paymentMethod === 'khalti'}
              onChange={handlePaymentMethodChange}
            />
            <span className="payment-icon">
              <img src="images/khalti.png" alt="Khalti"
              className="payimage" />
            </span>
          </label>
        </div>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={handlePaymentMethodChange}
            />
            <span className="payment-icon">
              <h4>Cash-On-Delivery</h4>
            </span>
          </label>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default PaymentPage;
