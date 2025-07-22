import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate

const initdata = {
  ticketid: "",
  phone: ""
};

const CancelTicket = () => {
  const [data, setdata] = useState(initdata);
  const navigate = useNavigate();  // ✅ Initialize navigate function

  const handlechange = (event) => {
    const { name, value } = event.target;
    setdata((prevdata) => ({
      ...prevdata,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ticketid, phone } = data;
      if (!ticketid || !phone) {
        toast.info("Please enter all values");
        return;
      }

      const response = await axios.get(
        `http://localhost:3105/user/showticket/?ticketid=${ticketid}&phone=${phone}`,
        { headers: { "Content-Type": "application/json" } }
      );

      if (!response?.data) {
        toast.error("Oops, Server Error");
        return;
      }
      if (response.data.message) {
        toast.error(response.data.message);
        return;
      }

      toast.success("Ticket Verified! Redirecting...");
      
      // ✅ Navigate to new page with data
      navigate("/cancel", { state: response.data });

    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-30 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-2">CANCEL TICKET</h2>
          <p className="text-center text-gray-600 mb-6">
            Verify your details, and <span className="text-red-500">Cancel</span> your tickets
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">TICKET NUMBER</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🎫</span>
                <input
                  type="text"
                  value={data.ticketid}
                  name="ticketid"
                  onChange={handlechange}
                  placeholder="Enter your ticket number"
                  className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">MOBILE NUMBER</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your Number"
                value={data.phone}
                onChange={handlechange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CancelTicket;
