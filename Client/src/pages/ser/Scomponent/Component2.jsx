import React from 'react';

const Component2 = () => {
  return (
    <div className="w-full  bg-gray-50">
      
      {/* Hero Section */}
      <div className="w-full bg-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">🔄 Refund Policy</h1>
        <p className="text-lg max-w-3xl mx-auto">
          We offer users the option to purchase refundable tickets with clear and transparent terms.
        </p>
      </div>

      {/* Refund Policy Details */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-800 mb-6">📜 Our Refund Policy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">✅ Full Refunds</h3>
            <p>Available within 24 hours of purchase, no questions asked.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🕒 Partial Refunds</h3>
            <p>For cancellations made at least 48 hours before departure.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">❌ No Refunds</h3>
            <p>For last-minute cancellations (less than 24 hours before departure).</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">⏳ Refund Processing Time</h3>
            <p>Refunds take 5-7 business days to be processed.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💳 Refund to Original Payment Method</h3>
            <p>Refunds will be credited back to the original payment source.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🔍 Transparent Terms</h3>
            <p>Clear policies with no hidden fees or unexpected deductions.</p>
          </div>
        </div>
      </div>

      {/* How Refunds Work Section */}
      <div className="w-full bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">🛠️ How Our Refund Process Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">1️⃣ Request a Refund</h3>
            <p>Log into your account and request a refund under "My Bookings."</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">2️⃣ Refund Approval</h3>
            <p>Our system will verify your request based on eligibility.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">3️⃣ Refund Processed</h3>
            <p>The refund is credited back to your original payment method.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Our Refund Policy? */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-800 mb-6">🌟 Why Choose Our Refund Policy?</h2>
        <ul className="list-disc text-gray-700 text-lg space-y-3 pl-6">
          <li>✔️ No hidden charges & fully transparent terms</li>
          <li>✔️ Fast and hassle-free refund process</li>
          <li>✔️ 24/7 customer support for refund-related queries</li>
          <li>✔️ Refunds processed directly to your payment source</li>
          <li>✔️ Trusted by thousands of satisfied users</li>
        </ul>
      </div>

     

     

    </div>
  );
};

export default Component2;
