import React, { useEffect, useState } from 'react'

const ErrorMessage = ({message}) => {
    const [isVisible, SetIsVisible] = useState(true);
    const [countdown, setCountdown] = useState(10)

    useEffect(()=>{

        if (countdown > 0){
        const timer = setInterval(() =>{
            setCountdown(prev =>prev - 1);
        }, 1000);
        return ()=> clearInterval(timer);
    }else{
        SetIsVisible(false)
    }
},[countdown]);

if(!isVisible){
    return null;
};

return(
    <div className='fixed top-58 p-4 right-4 mb-4 text-sm text-neutral-50 bg-red-700 rounded-xl shadow-lg transition-transform transform-gpu animate-slide-in'>
        <div className='flex items-center justify-between'>
            <span>{message}</span>
            <span className='ml-4 font-bold'>{countdown}</span>

        </div>
    </div>
)
}
export default ErrorMessage