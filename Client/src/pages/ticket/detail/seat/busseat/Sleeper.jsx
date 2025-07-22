import React, { useEffect, useState } from 'react'
import { GiSteeringWheel } from 'react-icons/gi'
import { LuRectangleVertical } from "react-icons/lu";
import axios from 'axios';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../../../../components/alertmessage/error/ErrorMessage';
import { toast, Toaster } from 'sonner';

const busSeatData1 = [
    { id: "A1", status: "available" }, { id: "A2", status: "available" }, { id: "A3", status: "available" },
    { id: "A4", status: "available" }, { id: "A5", status: "available" }, { id: "A6", status: "available" },
    { id: "B1", status: "available" }, { id: "B2", status: "available" }, { id: "B3", status: "available" },
    { id: "B4", status: "available" }, { id: "B5", status: "available" }, { id: "B6", status: "available" },
    { id: "C1", status: "available" }, { id: "C2", status: "available" }, { id: "C3", status: "available" },
    { id: "C4", status: "available" }, { id: "C5", status: "available" }, { id: "C6", status: "available" },
    { id: "X1", status: "available" }, { id: "X2", status: "available" }, { id: "X3", status: "available" },
    { id: "X4", status: "available" }, { id: "X5", status: "available" }, { id: "X6", status: "available" },
    { id: "Y1", status: "available" }, { id: "Y2", status: "available" }, { id: "Y3", status: "available" },
    { id: "Y4", status: "available" }, { id: "Y5", status: "available" }, { id: "Y6", status: "available" },
    { id: "Z1", status: "available" }, { id: "Z2", status: "available" }, { id: "Z3", status: "available" },
    { id: "Z4", status: "available" }, { id: "Z5", status: "available" }, { id: "Z6", status: "available" }
];

const Sleeper = ({ data: busId }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showError, setShowError] = useState(false);
    const [dataset, setDataset] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const [busSeatData, setBusSeatData] = useState([]);
    if (!busId) {
        window.alert("Please Select Your Bus");
    }
    useEffect(() => {
        if (!busId) return;
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3105/user/details/?busid=${busId}`);
                setDataset(data);
                axios.get(`http://localhost:3105/user/getsleeper/?busid=${busId}`).then((value) => {
                    setBusSeatData(value.data.data);
                    console.log(value.data.data);
                }).catch(setBusSeatData(busSeatData1));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [busId]);
    const handleSeatClick = (seatId) => {
        const selectedSeat = busSeatData.find((seat) => seat.id === seatId);
        if (selectedSeat.status === 'booked') {
            return;
        };
        setSelectedSeats((prevSelectedSeats) => {
            let updatedSeats;
            if (prevSelectedSeats.includes(seatId)) {
                updatedSeats = prevSelectedSeats.filter((seat) => seat !== seatId);
                setAmount((prevAmount) => prevAmount - dataset[0]?.busdata?.amount);
                return prevSelectedSeats.filter((seat) => seat !== seatId);
            } else {
                if (prevSelectedSeats.length >= 10) {
                    setShowError(true);
                    return prevSelectedSeats;
                } setAmount((prevAmount) => prevAmount + dataset[0]?.busdata?.amount);
                return [...prevSelectedSeats, seatId];
            }
        });
    };
    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setShowError(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [showError])
    const getSeatName = (seat) => {
        if (seat.status === 'booked') {
            return 'text-neutral-500 cursor-not-allowed'
        } if (selectedSeats.includes(seat.id)) {
            return 'text-yellow-700 cursor-pointer'
        }
        return 'text-green-900  cursor-pointer'
    }
    if (loading) return <p>Loading data...</p>;
    if (!dataset) return <ErrorMessage message="No data found." />;
    const calculateTotalAmount = () => {
        return selectedSeats.reduce((total, seatId) => {
          const seat = busSeatData.find((busSeat) => busSeat.id === seatId);
          return total + (seat ? dataset[0]?.busdata?.amount : 0);
        }, 0);
      };
    return (

        <>
        <Toaster position="top-right" richColors />
        <div className='w-full grid grid-cols-5 gap-10'>

            <div className='col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200'>
                <div className="w-full space-y-3">
                    <p className='text-base text-neutral-600 font-medium text-center'>
                        Click on available seats to reserve your seat
                    </p>
                    <div className='text-base text-neutral-600 font-medium flex justify-center gap-2'>
                        <p>
                            Lower : A,B,C
                        </p>
                        <p>
                            Upper : X,Y,Z
                        </p>
                    </div>
                    <div className='w-full flex items-stretch gap-x-1.5'>
                        <div className="w-10 h-fit">
                            <GiSteeringWheel className='text-3xl mt-7 text-red-700 -rotate-90' />
                        </div>
                        <div className='flex flex-col items-center border-1-2 border-dashed border-neutral-300 pl-7'>

                            <div className='flex-1'>
                                <div className='w-full h-auto grid grid-cols-6 gap-x-6  justify-end'>
                                    {busSeatData?.slice(0, 6).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className='flex items-center gap-x-0 '
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className='text-base text-neutral-600 font-bold'>{seat.id}</h6>
                                            <LuRectangleVertical className={`text-5xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full h-auto grid grid-cols-6 gap-x-6 justify-end'>
                                    {busSeatData?.slice(6, 12).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className='flex items-center gap-x-0'
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className='text-base text-neutral-600 font-bold'>{seat.id}</h6>
                                            <LuRectangleVertical className={`text-5xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full h-auto grid grid-cols-6 gap-x-6 justify-end pt-5'>
                                    {busSeatData?.slice(12, 18).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className='flex items-center gap-x-0'
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className='text-base text-neutral-600 font-bold'>{seat.id}</h6>
                                            <LuRectangleVertical className={`text-5xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='border-t border-neutral-500 '>

                                </div>
                                <div className='w-full h-auto grid grid-cols-6 gap-x-6 justify-end '>
                                    {busSeatData?.slice(18, 24).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className='flex items-center gap-x-0'
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className='text-base text-neutral-600 font-bold'>{seat.id}</h6>
                                            <LuRectangleVertical className={`text-5xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full h-auto grid grid-cols-6 gap-x-6 justify-end pt-0'>
                                    {busSeatData?.slice(24, 30).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className='flex items-center gap-x-0'
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className='text-base text-neutral-600 font-bold'>{seat.id}</h6>
                                            <LuRectangleVertical className={`text-5xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full h-auto grid grid-cols-6 gap-x-6 justify-end pt-5'>
                                    {busSeatData?.slice(30, 36).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className='flex items-center gap-x-0'
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className='text-base text-neutral-600 font-bold'>{seat.id}</h6>
                                            <LuRectangleVertical className={`text-5xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-2'>
                        <div className='flex items-center gap-x-2'>
                            <LuRectangleVertical className='text-5xl text-red-700  -rotate-90' />
                            <p className='text-sm text-neutral-500 font-medium'>Available</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <LuRectangleVertical className='text-5xl text-neutral-500 -rotate-90' />
                            <p className='text-sm text-neutral-500 font-medium'>Booked</p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <LuRectangleVertical className='text-5xl text-yellow-700 -rotate-90' />
                            <p className='text-sm text-neutral-500 font-medium'>Selected</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">
                <div className='w-full space-y-2'>
                    <div className='w-full flex items-center justify-between '>
                        <h1 className='text-lg text-neutral-600 font-medium'>
                            Your Destination
                        </h1>
                        <Link to={"/bus-tickets"} className='text-sm text-red-700 font-normal '>
                            Change Route
                        </Link>
                    </div>

                    <div className='space-y-0.5 w-full'>
                        <div className='w-full flex items-center justify-between gap-x-5'>
                            <p className="text-sm text-neutral-400 font-normal">
                                From : {dataset[0]?.busdata?.fromtime}
                            </p>
                            <p className="text-sm text-neutral-400 font-normal">
                                To : {dataset[0]?.busdata?.totime}
                            </p>
                        </div>
                        <div className='w-full flex items-center justify-between gap-x-4'>
                            <h1 className='text-sm text-neutral-600 font-normal'>
                                {dataset[0]?.source}
                            </h1>
                            <div className='flex-1 border-dashed border border-neutral-300' />
                            <h1 className='text-sm text-neutral-600 font-normal'>
                                {dataset[0]?.destination}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='w-full space-y-2'>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-lg text-neutral-600 font-medium'>
                            Selected Seats
                        </h1>
                        <div className='bg-red-700/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase '>
                            Non refundable
                        </div>

                    </div>
                </div>
                {
                    selectedSeats.length > 0
                        ?
                        <div className='w-full flex items-center gap-x-3'>
                            {selectedSeats.map((seatId) => {
                                return (
                                    <div key={seatId} className='w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold'>
                                        {seatId}
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='w-full flex items-center gap-x-3' >
                            <p className='text-sm text-neutral-500 font-normal'>No seats Selected</p>
                        </div>
                }

                <div className='w-full space-y-2'>
                    <h1 className='text-lg text-neutral-600 font-medium'>
                        Fare Details
                    </h1>
                    <div className='w-full flex items-center justify-between border-dashed border-[1.5px] border-neutral-400 pl-2'>
                        <h3 className='text-sm text-neutral-500 font-medium'>Basic Fare</h3>
                        <p className='text-sm text-neutral-600 font-medium'>{dataset[0]?.busdata?.amount}</p>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <div className='flex gap-y-0.5 flex-col'>
                            <h3 className='text-base text-neutral-500 font-medium'>Total Price:</h3>
                            <span className='text-xs text-neutral-500 font-normal'>  (Including all taxes)</span>
                        </div>
                        <p className='text-base text-neutral-600 font-semibold'>
                            Rs.{calculateTotalAmount()}
                           
                        </p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    {
                        selectedSeats.length > 0
                            ?
                            <Link
                                to="/bus-tickets/checkout"
                                className='w-full bg-red-700 hover:bg-red-700/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition'
                                state={{ selectedSeats, amount:calculateTotalAmount(), dataset, busId }}
                            >
                                Processed Checkout
                            </Link>
                            :
                            <div className='w-full space-y-0.5'>
                                <button 
                                onClick={()=>toast.info("Please Select Atleast One Seat")} 
                                 className='w-full bg-red-700 hover:bg-red-700/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition cursor-pointer'>
                                    Processed Checkout
                                </button>
                                <small className='text-xs text-neutral-600 font-normal px-1'>
                                    Please select at least one seat to proceed to checkout page.
                                </small>
                            </div>
                    }
                </div>
            </div>
            {showError && <ErrorMessage message={"you can't select more than 10 seats."} />}
        </div>
        </>
        
    )
}

export default Sleeper