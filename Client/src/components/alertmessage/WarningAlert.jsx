import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6';

const WarningAlert = ({message}) => {
    const [isVisible, setIsVisible] = useState(true);
    const handleclose = ()=>{
        setIsVisible(false);
    }
    if (!isVisible){
        return null;
    }
  return (

    <div className='flex items-center justify-between p-4 text-sm text-yellow-600 bg-yellow-100 rounded-xl' role='alert'>
        <span>{message}</span>
        <button 
        onClick={handleclose}
        className='ml-4 text-red-700 hover:text-red-700/90'
        aria-label='Close'
        >
        <FaX className='w-3 h-3 cursor-pointer'/>
        </button>
    </div>
  )
}

export default WarningAlert