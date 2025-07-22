import { useState, useEffect } from "react";
import axios from "axios";

const Booking = () => {
  const adminid = localStorage.getItem("user");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch passenger data
  const getdata = async () => {
    if (!adminid) {
      window.alert("Admin ID not found");
      return;
    }

    setLoading(true);
    try {
      const book = await axios.get(
        `http://localhost:3105/admin/passengerlist/?adminid=${adminid}`
      );
      if (!book) return window.alert("Something went wrong");

      const finaldata = book.data;
      setBookings(finaldata);
    } catch (error) {
      window.alert("Server Error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // Log bookings when updated
  useEffect(() => {
    console.log("Updated bookings:", bookings);
  }, [bookings]);

  // Group bookings by bus name
  const groupedBookings = bookings.reduce((acc, booking) => {
    if (!acc[booking.busname]) {
      acc[booking.busname] = [];
    }
    acc[booking.busname].push(booking);
    return acc;
  }, {});

  // Loading screen
  if (loading) {
    return (
      <div className="ml-[300px] mt-10 p-5 w-3/4 text-center text-xl text-red-500">
        Loading passenger list...
      </div>
    );
  }

  return (
    <div className="ml-[300px] mt-10 p-5 w-3/4">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
        Passenger List
      </h2>
      <div className="space-y-6">
        {Object.keys(groupedBookings).map((busname) => (
          <div key={busname} className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              {busname}
            </h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border border-gray-300 text-left">
                    Passenger
                  </th>
                  <th className="p-3 border border-gray-300 text-left">Phone</th>
                  <th className="p-3 border border-gray-300 text-left">
                    Seat Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupedBookings[busname].map((booking) => (
                  <tr key={booking.ticketid} className="border-b border-gray-300">
                    <td className="p-3 border border-gray-300">
                      {booking.fullName}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {booking.phone}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {booking.selectedSeats}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
