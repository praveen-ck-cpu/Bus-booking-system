import React from 'react'
import { FaCircleCheck, FaPhone } from 'react-icons/fa6'
import { IoCloseCircle } from 'react-icons/io5'
import BusImg from "../../../../assets/bus.png"
import QurImg from "../../../../assets/qrcode.jpg"

const PassengerInvoice = (props) => {
    const {data} = props
  return (
    <div className='w-full col-span-4 rounded-3xl relative'>
        {/* Top Bus Details */}
        <div className='w-full flex items-center justify-between bg-red-700 px-6 py-3 rounded-tl-3xl'>
            <div className='flex items-center gap-x-3'>
                <img src={BusImg} alt='Bus Img' className='w-auto h-12 object-cover object-center'/>
                <h1 className='text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1'>
                    {data?.busname}
                </h1>
            </div>

            <div className='flex items-center gap-x-2 '>
                <p className='text-xl text-neutral-50 font-bold'>
                {data?.ticketid}
                </p>

            </div>

        </div>

        <div className='w-full grid grid-cols-5 gap-8 items-center px-5 py-6 mb-1'>
            <div className='col-span-4 space-y-3.5'>

           
        {/*Billno,per seat and date */}
        <div className='w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3'>
            <p className='text-base text-neutral-500 font-normal'>
                Bill No :  {data?.payID}
            </p>
            <p className='text-base text-neutral-500 font-normal'>
              Amount : {data?.amount / data?.selectedSeats?.length} <span className='text-xs'>/seat</span>
            </p>
            <p className='text-base text-neutral-500 font-normal'>
                Date: 2024-04-04
            </p>
        </div>
            {/*Passenger detail */}
            <div className='w-full flex items-center justify-between'>
                <div className='space-y-1.5'> 
                <p className='text-base text-neutral-600 font-normal'>
                Name of Passenger:{data?.fullName}
                </p>
                <p className='text-base text-neutral-600 font-normal'>
                Total Seat No: {data?.selectedSeats}
                </p>
                <p className='text-base text-neutral-600 font-normal'>
                Total No. of Passengers : {data?.selectedSeats?.length}
                </p>
                <p className='text-base text-neutral-600 font-normal'>
                Pickup Station: {data?.source}
                </p>
                </div>
                <div className='space-y-4 flex items-center justify-center flex-col'>
                    <div className='space-y-1 text-center'>
                    <p className='text-base text-neutral-600 font-normal'>
                Total Price:
                </p>
                <h1 className='text-xl text-neutral-600 font-bold'>
                {data?.amount}
                </h1>
                    </div>
                    <div className='w-fit px-3 py-1 rounded-full bg-green-500/50 border border-green-600 text-green-600 text-sm font-medium flex items-center justify-center gap-2'>
                        <FaCircleCheck size={16}/><span>Bill Paid</span>
                    </div>
                    {/* <div className='w-fit px-3 py-1 rounded-full bg-red-700/5 border border-red-700 text-red-700 text-sm font-medium flex items-center justify-center gap-2'>
                        <IoCloseCircle size={16}/><span>Pending</span>
                    </div> */}
                </div>
            </div>
           
            {/*Route detail */}
            <div className='w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pb-3'>
                <p className='text-base text-neutral-600 font-normal'>
                        {data?.source}<span className='text-neutral-400 px-2'>-----------</span>{data.destination}
                </p>
                <p className='text-base text-neutral-600 font-normal'>
                       Arrive at {data?.fromtime}
                </p>
                <p className='text-base text-neutral-600 font-normal'>
                       Departure at {data?.totime}
                </p>
               
            </div>
        </div>
        <div className='col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1'>
            <img src={QurImg} alt='' className='w-full aspect-square object-cover object-center rounded-xl'/>

        </div>
        </div>
        {/*left bottom section */}
        <div className='w-full bg-red-700 absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between px-5 py-1.5'>
            <p className='text-sm text-neutral-100 font-light'>
                Note: 40% charge for cancellation price 24 hours of programme
            </p>
            <div className='flex items-center gap-x-2'>
                <FaPhone className='w-3 h-3 text-neutral-100'/>
                <p className='text-sm text-neutral-100 font-light'>
                    {data.phone}
            </p>
            </div>
        </div>
    
    </div>
    
  )
}

export default PassengerInvoice