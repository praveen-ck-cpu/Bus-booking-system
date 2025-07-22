import React, { useState,createContext } from 'react';
import { FaFilter } from 'react-icons/fa';
import PriceRangeSlider from '../../../components/pricerange/PriceRange';

export const FilterContext = createContext();

const Filter = ({ className, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const datasets = id;
  const amount = datasets.map((value) => value.final.amount);
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });

  const handleRangeChange = (values) => {
    setRangeValues({ ...values });
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Icon for mobile and tablet view */}
      <div className='sm:flex md:flex lg:hidden w-full justify-end'>
        <button onClick={() => setIsOpen(true)} className='p-3 bg-red-500 text-white rounded-md'>
          <FaFilter size={20} />
        </button>
      </div>

      {/* Filter Drawer for small and medium devices */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50'>
          <div className='bg-white w-full md:w-2/3 lg:hidden p-6 rounded-t-lg'>
            <h1 className='text-xl text-neutral-700 font-semibold'>Apply Filters</h1>
            <div className='w-full border border-neutral-300 rounded-xl p-4 space-y-1'>
              <h1 className='text-lg text-neutral-700 font-medium'>Price Range</h1>
              <PriceRangeSlider min={300} max={2000} onChange={handleRangeChange} />
            </div>
            <FilterSection title='Bus Types' options={busTypes} />
            <FilterSection title='Bus Companies' options={busCompanies} />
            <FilterSection title='Bus Amenities' options={busAmenities} />
            <button
              onClick={() => setIsOpen(false)}
              className='w-full mt-4 bg-red-500 text-white py-2 rounded-md'
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Default Filter for Large Screens */}
      <div className='hidden lg:block'>
        <h1 className='text-xl text-neutral-700 font-semibold'>Apply Filters</h1>
        <div className='w-full border border-neutral-300 rounded-xl p-4 space-y-1'>
          <h1 className='text-lg text-neutral-700 font-medium'>Price Range</h1>
          <PriceRangeSlider min={300} max={2000} onChange={handleRangeChange} />
        </div>
        <FilterSection title='Bus Types' options={busTypes} />
        <FilterSection title='Bus Companies' options={busCompanies} />
        <FilterSection title='Bus Amenities' options={busAmenities} />
      </div>
    </div>
  );
};

const FilterSection = ({ title, options }) => (
  <div className='w-full border border-neutral-300 rounded-xl p-4 space-y-3'>
    <h1 className='text-lg text-neutral-600 font-medium'>{title}</h1>
    <div className='space-y-2.5'>
      {options.map((option) => (
        <div key={option.id} className='w-full flex items-center gap-2'>
          <input
            type='checkbox'
            id={option.id}
            className='h-3.5 w-3.5 border-neutral-300 cursor-pointer'
          />
          <label htmlFor={option.id} className='text-sm text-neutral-600 font-normal cursor-pointer'>
            {option.label} <span className='text-xs text-neutral-600'>(10)</span>
          </label>
        </div>
      ))}
    </div>
  </div>
);

const busTypes = [
  { id: 'ac-deluxe', label: 'AC Deluxe' },
  { id: 'tourist-ac-deluxe', label: 'Tourist AC Deluxe' },
  { id: 'air-suspension', label: 'Air Suspension' },
  { id: 'luxury-ac-deluxe', label: 'Luxury AC Deluxe' }
];

const busCompanies = [
  { id: 'swargadwari', label: 'Swargadwari' },
  { id: 'pokhara-deluxe', label: 'Pokhara Deluxe' },
  { id: 'mustang-deluxe', label: 'Mustang Deluxe' },
  { id: 'lumbini-deluxe', label: 'Lumbini Deluxe' }
];

const busAmenities = [
  { id: 'wifi', label: 'Internet & Wifi' },
  { id: 'ac-suspension', label: 'AC & Suspension' },
  { id: 'water-bottles', label: 'Water Bottles' },
  { id: 'charging-port', label: 'Charging Port' },
  { id: 'fan', label: 'Fan' },
  { id: 'super-ac', label: 'Super AC' }
];

export default Filter;
