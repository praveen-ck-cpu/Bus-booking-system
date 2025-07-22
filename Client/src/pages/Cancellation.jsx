import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TopLayout from '../layout/toppage/TopLayout';
import RootLayout from '../layout/RootLayout';
import PassengerInvoice from '../pages/ticket/invoice/passengerinvoice/PassengerInvoice';
import CompanyInvoice from '../pages/ticket/invoice/passengerinvoice/company/CompanyInvoice';
import { toast } from 'sonner';
import axios from 'axios';

const Invoice1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location || {};  // Ensure state is not undefined
    const handleCancelClick = async() => {
        const confirmCancel = window.confirm("Are you sure you want to cancel this ticket?");
        if (confirmCancel) {
         await axios.delete(`http://localhost:3105/delticket/?ticketid=${state.ticketid}&phone=${state.phone}`);
            toast.success("Ticket Canceled Successfully!");
            navigate("/");
        } else {
            navigate("/cancel-tickets");
        }
    };

    return (
        <div className="w-full space-y-12 pb-16">
            {/* Top Layout */}
            <TopLayout 
                bgImg="https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
                title="Cancel Your Ticket" 
            />

            <RootLayout className="w-full space-y-12 pb-16">
                {/* Invoice Card */}
                <div className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative">
                    {state ? (
                        <>
                            <PassengerInvoice data={state} />
                            <CompanyInvoice data={state} />
                        </>
                    ) : (
                        <div className="col-span-5 text-center p-6 text-red-500">
                            <p>No Ticket Data Available</p>
                        </div>
                    )}
                </div>

                {/* Cancel Invoice Button */}
                <div className="w-full flex justify-center items-center">
                    <button 
                        onClick={handleCancelClick} 
                        className="w-fit px-8 bg-red-700 text-neutral-50 font-bold text-lg h-14 rounded-lg"
                    >
                        Cancel Invoice
                    </button>
                </div>
            </RootLayout>
        </div>
    );
};

export default Invoice1;
