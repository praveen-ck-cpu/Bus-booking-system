import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      
      {/* Page Container */}
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6  md:p-10 ">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-900 mb-6 mt-15">About Us</h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 max-w-3xl text-center mb-8">
          Welcome to our Bus Booking platform! We provide a hassle-free and convenient way to book bus tickets online. Whether you're traveling for work or leisure, we ensure a smooth experience with top-notch services.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full px-4">
          {[
            { title: "🚌 Wide Coverage", desc: "We operate in multiple cities and routes, offering a wide network for seamless travel." },
            { title: "💳 Secure Payments", desc: "Book your tickets with confidence using our encrypted and secure payment system." },
            { title: "📅 Flexible Booking", desc: "Easily modify or cancel your bookings with our flexible policies." },
            { title: "🔍 Real-Time Tracking", desc: "Track your bus in real time and plan your journey with ease." },
            { title: "🎟️ E-Tickets", desc: "Say goodbye to paper tickets! Get instant e-tickets on your phone." },
            { title: "👨‍💼 24/7 Customer Support", desc: "Our team is available round the clock to assist you with your travel needs." }
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-red-800">{feature.title}</h2>
              <p className="text-gray-600 mt-3">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-10">
          <button 
            className="px-6 py-3 bg-red-800 text-white text-lg rounded-lg hover:bg-red-900 transition-all"
            onClick={() => navigate('/')}
          >
            Book a Ticket Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
