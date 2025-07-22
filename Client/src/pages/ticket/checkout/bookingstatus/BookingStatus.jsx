import axios from 'axios';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const BookingStatus = ({ data, userdata }) => {
  const navigate = useNavigate();
  const { selectedSeats = [], amount, dataset = [], busId } = data;
  const busdata = dataset?.[0] || {};
  const Bustype = busdata?.busdata?.bustype;
  const finaldata = { amount, selectedSeats, busId, ...busdata, userdata };
  const send = async (payID) => {
    try {
      if (!userdata?.fullName || !userdata?.email || !busId || !selectedSeats?.length) {
        console.error("Invalid data for API call.");
        return;
      }
      
      await axios.post('http://localhost:3105/user/userdata', userdata);
      const seatdata = { busId, selectedSeats };

      if (Bustype === 'A/C Sleeper' || Bustype === 'NON-A/C Sleeper') {
        await axios.post('http://localhost:3105/sleeperdata', seatdata);
      } else {
        await axios.post('http://localhost:3105/seatdata', seatdata);
      }

      const finaldata2 = { payID, ...finaldata };
      const ticketdata = await axios.post('http://localhost:3105/user/ticket', finaldata2);

      if (ticketdata?.status === 200) {
        navigate('/bus-tickets/payment',{state:ticketdata.data});
      } else {
        alert('Ticket generation failed. Please try again.');
      }
    } catch (error) {
      console.error("Payment Error:", error.message || error);
    }
  };

  const handlepayment = () => {
    if (!amount) {
      alert('Refresh the page');
      return;
    }

    const options = {
      key: 'rzp_test_OD1jxoajc81hjS',
      amount: amount * 100,
      currency: 'INR',
      name: 'BUS BOOKING SYSTEM',
      description: 'For testing purpose',
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        alert(`Payment successful! Payment ID: ${paymentId}`);
        send(paymentId);
      },
      prefill: {
        name: userdata?.fullName,
        email: userdata?.email,
        contact: userdata?.phone,
      },
      notes: { address: 'Razorpay corporate office' },
      theme: { color: '#3399cc' },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className='w-full col-span-3 sticky top-20 space-y-7'>
      <div className='w-full bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm space-y-5'>
        <h1 className='text-lg text-neutral-700 font-bold text-center border-b border-neutral-200 pb-4'>
          Your Ticket Report Status
        </h1>

        <div className='space-y-5'>
          {/* Destination Info */}
          <div className='space-y-2 w-full'>
            <h1 className='text-base text-neutral-700 font-medium'>Your Destination</h1>
            <div className='space-y-0.5 w-full'>
              <div className='w-full flex items-center justify-between gap-x-5'>
                <p className='text-sm text-neutral-400 font-normal'>From</p>
                <p className='text-sm text-neutral-400 font-normal'>To</p>
              </div>
              <div className='w-full flex items-center justify-between gap-x-4'>
                <h1 className='text-sm text-neutral-600 font-normal'>
                  {busdata?.source} <span className='text-sm font-medium'>({busdata?.busdata?.fromtime})</span>
                </h1>
                <div className='flex-1 border-dashed border border-neutral-300' />
                <h1 className='text-sm text-neutral-600 font-normal'>
                  {busdata?.destination} <span className='text-sm font-medium'>({busdata?.busdata?.totime})</span>
                </h1>
              </div>
              <div className='w-full flex items-center justify-between gap-x-4 !mt-1.5'>
                <h1 className='text-sm text-neutral-600 font-normal'>Bus Name</h1>
                <h1 className='text-base text-neutral-700 font-medium'>{busdata?.busdata?.busname}</h1>
              </div>
            </div>
          </div>

          {/* Seat Info */}
          <div className='space-y-2 w-full'>
            <h1 className='text-base text-neutral-700 font-medium'>Your Seats</h1>
            <div className='w-full flex items-center gap-x-3'>
              {selectedSeats.map((seatId) => (
                <div key={seatId} className='w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold'>
                  {seatId}
                </div>
              ))}
            </div>
          </div>

          {/* Total Fare */}
          <div className='space-y-2 w-full'>
            <h1 className='text-base text-neutral-700 font-medium'>Total Fare Price</h1>
            <div className='flex items-center justify-between gap-x-4'>
              <div className='flex gap-y-0.5 flex-col'>
                <h3 className='text-base text-neutral-500 font-medium'>Total Price:</h3>
                <span className='text-xs text-neutral-500 font-normal'>(Including all taxes)</span>
              </div>
              <p className='text-base text-neutral-600 font-semibold'> {amount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className='w-full px-1.5'>
        <button
          className='w-full bg-red-700 hover:bg-red-700/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition'
          onClick={handlepayment}
        >
          Process to Pay
          <FaArrowRightLong className='ml-2'/>
        </button>
      </div>
    </div>
  );
};

export default BookingStatus;
