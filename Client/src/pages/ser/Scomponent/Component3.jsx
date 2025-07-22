import React from 'react';

const Component3 = () => {
  return (
    <div className="w-full bg-gray-50">
      
      {/* Hero Section */}
      <div className="w-full bg-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">📞 24/7 Customer Support</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our dedicated support team is available around the clock to assist you with any queries or concerns.
        </p>
      </div>

      {/* Contact Options */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-800 mb-6">📬 How to Reach Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📞 Phone Support</h3>
            <p>Call us anytime at <strong>+1 800 123 456</strong> for immediate assistance.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💬 Live Chat</h3>
            <p>Chat with our agents instantly using the live chat feature on our website.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📧 Email Support</h3>
            <p>Send us an email at <strong>support@example.com</strong> and receive a response within 24 hours.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🔍 Help Center</h3>
            <p>Visit our <a href="#" className="text-red-800 font-bold">Help Center</a> for FAQs, troubleshooting guides, and more.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Our Support? */}
      <div className="w-full bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">🌟 Why Choose Our Support?</h2>
        <ul className="list-disc text-gray-700 text-lg max-w-4xl mx-auto text-left space-y-3 pl-6">
          <li>✔️ **24/7 availability** – Assistance whenever you need it.</li>
          <li>✔️ **Multi-language support** – Help available in multiple languages.</li>
          <li>✔️ **Fast response times** – Most queries are resolved within minutes.</li>
          <li>✔️ **Friendly & professional team** – Experts ready to help.</li>
          <li>✔️ **Multiple communication channels** – Choose what works best for you.</li>
        </ul>
      </div>

   

    

    </div>
  );
};

export default Component3;
