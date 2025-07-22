import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { GiCharging, GiWaterBottle } from 'react-icons/gi';
import { IoTv } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const TopSearchCard = ({ routeFrom, routeTo, timeDuration, price,finaldata }) => {
  return (
    <div className='w-full rounded-xl p-5 border-2 border-neutral-300 space-y-10'>
      {/* Route Section */}
      <div className='space-y-3.5 w-full'>
        <div className='space-y-0'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-xs text-neutral-400 font-normal'>From</p>
            <p className='text-xs text-neutral-400 font-normal'>To</p>
          </div>
          <div className='w-full flex items-center justify-between gap-x-3'>
            {/* From Location */}
            <h1 className='text-xl text-neutral-600 font-semibold'>
              {routeFrom}
            </h1>
            {/* Time Duration */}
            <div className='flex-1 border-dashed border border-neutral-400 relative'>
              <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400">
                {timeDuration}km
              </p>
            </div>
            {/* To Location */}
            <h1 className='text-xl text-neutral-600 font-semibold'>
              {routeTo}
            </h1>
          </div>
        </div>




        {/* Facilities Section */}

        <div className='w-full flex items-center gap-3 flex-wrap'>
                {/* Facility 1 - Internet */}
                <div className='flex items-center gap-x-1'>
                  <FaWifi className='w-3 h-3 text-neutral-500' />
                  <p className='text-xs text-neutral-600 font-normal'>Internet</p>
                </div>
                {/* Facility 2 - Snacks */}
                <div className='flex items-center gap-x-1'>
                  <GiWaterBottle className='w-3 h-3 text-neutral-500' />
                  <p className='text-xs text-neutral-600 font-normal'>Snacks</p>
                </div>
                {/* Facility 3 - TV */}
                <div className='flex items-center gap-x-1'>
                  <IoTv className='w-3 h-3 text-neutral-500' />
                  <p className='text-xs text-neutral-600 font-normal'>TV</p>
                </div>
                {/* Facility 4 - Charging */}
                <div className='flex items-center gap-x-1'>
                  <GiCharging className='w-3 h-3 text-neutral-500' />
                  <p className='text-xs text-neutral-600 font-normal'>Mobile Charging</p>
                </div>
              </div>
      </div>

      {/* Footer Section - Price & Reserve Button */}
      <div className='w-full flex items-center justify-between'>
        {/* Price */}
        <h1 className="text-xl text-neutral-700 font-semibold">
          Rs. {price}
        </h1>

        {/* Reserve Button */}
        <Link to= "/bus-tickets" state={[finaldata]} className="w-fit px-5 p-1.5 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-500 ease-in-out duration-300">
          Reserve seat
        </Link>
      </div>
    </div>
    
  );
};

export default TopSearchCard;


