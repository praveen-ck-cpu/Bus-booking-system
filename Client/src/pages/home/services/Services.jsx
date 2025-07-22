import React from 'react';
import RootLayout from '../../../layout/RootLayout';
import ServiceCrad from '../../../components/service/ServiceCrad';
import { RiRadio2Line, RiSecurePaymentLine } from 'react-icons/ri';
import { PiHeadsetFill } from 'react-icons/pi';

const Services = () => {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Our <span className="text-red-900">Services</span>
        </h1>
      </div>
      <div className="w-full pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCrad icon={RiSecurePaymentLine} title={"Secure Payment"} desc={"Integrate secure payment for users to pay their tickets"} />
        <ServiceCrad icon={RiRadio2Line} title={"Refund Policy"} desc={"Offer option for users to purchase refundable tickets with clear terms"} />
        <ServiceCrad icon={PiHeadsetFill} title={"24/7 Support"} desc={"Get assistance anytime through chat, email, or phone"} />
      </div>
    </RootLayout>
  );
};

export default Services;
