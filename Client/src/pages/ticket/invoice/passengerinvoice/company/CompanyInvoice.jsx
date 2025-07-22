import React from 'react'
import { FaPhone } from 'react-icons/fa6'

const CompanyInvoice = (props) => {
    const {data} = props
  return (
    <div className='w-full col-span-1 border-dashed border-1 border-neutral-400 relative'>
        <div className='w-full bg-red-700 px-4 py-5 tounded-tr-3xl'>
            <h1 className= 'text-2xl text-neutral-50 font-bold text-center '> 
                Bus Tickets
            </h1>
        </div>

        <div className='w-full px-4 py-7 '>
            <p className='text-sm text-neutral-600 font-normal'>
                Bill No.: {data.payID}
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                Date: 2025-04-04
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                Name: {data.fullName}
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                From: {data.source} <span className='text-xs'></span>
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                To: {data.destination} <span className='text-xs'></span>
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                Dept. Time: {data.fromtime}            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                Seat No: {data?.selectedSeats}
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
               Total Passengers: {data?.selectedSeats?.length}
            </p>
            <p className='text-sm text-neutral-600 font-normal'>
                Total Price: {data.amount}
            </p>
        </div>

        {/*right Bottom Selection */}
            <div className='w-full bg-red-700 absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5'>
                 
                    <div className='flex items-center gap-x-2'>
                        <FaPhone className='w-3 h-3 text-neutral-100'/>
                        <p className='text-sm text-neutral-100 font-light'>
                            +91 63818 67047
                    </p>
                    </div>
                </div>

    </div>
  )
}

export default CompanyInvoice