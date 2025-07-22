import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const adminid = localStorage.getItem("user");
  console.log("dashboard : ", adminid);
  const [stats, setStats] = useState({ totalBookings: 0, activeBuses: 0 });
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
       try {
        const {data} = await axios.get(`http://localhost:3105/admin/totalbooking/?adminid=${adminid}`); 
        setStats({
          totalBookings: data.totalbooking_data,
          activeBuses: data.active_buses,
        });
        const bookingdata = await axios.get(`http://localhost:3105/admin/recentbook/?adminid=${adminid}`);
        const bookingArray = Array.isArray(bookingdata.data)
        ? bookingdata.data
        : [];

      setBookings(bookingArray);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl ml-[400px] mt-15 h-screen  bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-red-700">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Total Bookings</h2>
          <p className="text-2xl font-bold">{stats.totalBookings}</p>
        </div>
        {/* <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">${stats.revenue}</p>
        </div> */}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Active Buses</h2>
          <p className="text-2xl font-bold">{stats.activeBuses}</p>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-700">Recent Bookings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Mobile</th>
              <th className="p-2 text-left">Ticket ID</th>
              <th className="p-2 text-left">Seats</th>
              <th className="p-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="p-2">{booking.fullName}</td>
                <td className="p-2">{booking.phone}</td>
                <td className="p-2">{booking.ticketid}</td>
                <td className="p-2">{booking.selectedSeats}</td>
                <td className="p-2"> {booking.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
