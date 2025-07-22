import React, { useState } from 'react';



const PassengerData = ({userdata,setuserdata}) => {
  const handlechange = (event) => {
    const { name, value } = event.target;
    setuserdata((prevdata) => ({
      ...prevdata,
      [name]: value
    }));
  };
  return (
    <div className='w-full col-span-4 py-4 space-y-6'>
      <h1 className='text-xl text-neutral-700 font-semibold'>
        Passenger Information
      </h1>
      <div className='space-y-7'>
        <div className='w-full space-y-2'>
          <label htmlFor='fullname' className='text-sm text-neutral-500 font-medium'>
            Full Name
          </label>
          <input 
            type="text"
            placeholder='e.g Ram'
            className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl'
            onChange={handlechange}
            value={userdata.fullName}
            name='fullName'
            autoComplete='off'
            required
          />
        </div>
        <div className='flex gap-[50px] items-center'>
          <div className='space-y-2'>
            <label htmlFor='gender' className='text-sm text-neutral-500 font-medium'>Gender</label>
            <div className='flex items-center gap-4'>
              {['male', 'female', 'others'].map((option) => (
                <label key={option} className='flex items-center gap-2 cursor-pointer'>
                  <input 
                    type='radio'
                    name='gender'
                    value={option}
                    checked={userdata.gender === option}
                    className='accent-blue-500'
                    onChange={handlechange}
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div className='w-full space-y-2'>
            <label htmlFor='age' className='text-sm text-neutral-500 font-medium'>Age</label>
            <input 
              type="number"
              placeholder='20'
              className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl'
              name='age'
              onChange={handlechange}
              value={userdata.age}
              autoComplete='off'
              required
            />
          </div>
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor='email' className='text-sm text-neutral-500 font-medium'>Email Address</label>
          <input 
            type="email"
            placeholder='e.g Ram@example.com'
            className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl'
            value={userdata.email}
            onChange={handlechange}
            name='email'
            autoComplete='off'
            required
          />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor='phone' className='text-sm text-neutral-500 font-medium'>Phone</label>
          <input 
            type="number"
            placeholder='e.g +91 86543 92349'
            className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl'
            value={userdata.phone}
            name='phone'
            onChange={handlechange}
            autoComplete='off'
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PassengerData;