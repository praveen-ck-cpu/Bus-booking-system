import React from 'react';
import TicketCard from '../../../../components/topsearch/ticket/TicketCard';
import { FaBus } from 'react-icons/fa';
import { GrRefresh } from 'react-icons/gr';

const Searchresult = ({id}) => {
 const datasets = id;
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>
      {datasets?.length ? (
        <div className='space-y-6'>
          {datasets.map((value) => (
            <TicketCard
              icon={FaBus}
              key={value._id}
              busName={value.final?.busname}
              routeFrom={value.source}
              routeTo={value.destination}
              arrivalTime={value.final?.fromtime}
              departureTime={value.final?.totime}
              price={value.final?.amount}
              availableSeats={value.final?.totalseats}
              type={value.final?.bustype}
              km={value.totalkm}
              busid={value.final?.busid}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-500">No buses available.</p>
      )}
      {datasets?.length ? (
        <div className='w-full flex items-center justify-center'>
          <button 
          className="w-fit px-8 py-3 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-500 ease-in-out duration-300"
          >
            <GrRefresh />
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Searchresult;