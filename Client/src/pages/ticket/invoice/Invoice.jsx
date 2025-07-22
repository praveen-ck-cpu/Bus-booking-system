import React, { useRef } from 'react'
import TopLayout from '../../../layout/toppage/TopLayout'
import RootLayout from '../../../layout/RootLayout'

import PassengerInvoice from './passengerinvoice/PassengerInvoice';
import CompanyInvoice from './passengerinvoice/company/CompanyInvoice';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { useLocation, useNavigate } from 'react-router-dom';



const Invoice = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    const invoiceRef = useRef(null);

    const handleDownload = async ()=>{
        if (invoiceRef.current === null) return;

        try{
            //convert the invoice car to an image
            const dataUrl = await toPng(invoiceRef.current);
            //download the image
            download(dataUrl, "g-tech-invoice-report.png");
            navigate("/");
        } catch (error){
            console.error("Error while downloading the invoice",error)
        }
    }

  return (
    <div className='w-full space-y-12 pb-16'>
    {/*Top layout */}
<TopLayout
    bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
    title={"Collect Your Invoice"}/>
<RootLayout className="w-full space-y-12  pb-16">
  
    
    {/*invoice card */}
    <div 
    ref={invoiceRef} //refere to the invoice card
    className='w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative'>

    {/*Left side (for Passenger) */}
        <PassengerInvoice data={state}/>
    {/*Right side (for company) */}
        <CompanyInvoice data={state}/>
    {/*Cut circle */}
    <div className='absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50'>
</div>
    <div className='absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50'>

    </div>

    
  </div>
  
  
    {/*Download invoice card button */}
    <div className='w-full flex justify-center items-center'>
       <button onClick={handleDownload} className='w-fit px-8 bg-red-700 text-neutral-50 font-bold text-lg h-14 rounded-lg'>
        Download Invoice
       </button>
    </div>
</RootLayout>
</div>
  )
}

export default Invoice