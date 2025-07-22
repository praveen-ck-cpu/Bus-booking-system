import React from 'react';

const Component1 = () => {
  return (
    <div className="w-full bg-gray-50">
      
      {/* Hero Section */}
      <div className="w-full bg-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">🔒 Secure Payment</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our secure payment system ensures all transactions are encrypted, safe, and seamless for our customers.
        </p>
      </div>

      {/* Secure Features Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-800 mb-6">💳 Key Security Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">✅ End-to-End Encryption</h3>
            <p>All transactions are encrypted to prevent unauthorized access and fraud.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💳 Multiple Payment Options</h3>
            <p>We support credit cards, digital wallets, UPI, and more for flexible payments.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🔐 3D Secure Authentication</h3>
            <p>Extra security layer to verify payments through OTP and biometrics.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📜 Transparent Refund Policies</h3>
            <p>Clear refund rules with quick processing to ensure customer satisfaction.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🛡️ Real-time Fraud Detection</h3>
            <p>Advanced AI-powered fraud detection system for instant alerts.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">⚡ Instant Payment Confirmation</h3>
            <p>Receive confirmation messages immediately after payment completion.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">🛠️ How Our Payment System Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">1️⃣ Choose Payment Method</h3>
            <p>Select your preferred payment method from the available options.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">2️⃣ Enter Secure Details</h3>
            <p>Input your payment details, which are encrypted for security.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">3️⃣ Receive Instant Confirmation</h3>
            <p>You’ll get a confirmation message and receipt immediately.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-800 mb-6">🌟 Why Choose Our Secure Payment System?</h2>
        <ul className="list-disc text-gray-700 text-lg space-y-3 pl-6">
          <li>✔️ Zero hidden fees & transparent pricing</li>
          <li>✔️ 24/7 customer support for any issues</li>
          <li>✔️ Instant refunds on eligible transactions</li>
          <li>✔️ Trusted by thousands of satisfied customers</li>
          <li>✔️ PCI-DSS compliant for industry-leading security</li>
        </ul>
      </div>

     

    

    </div>
  );
};

export default Component1;
