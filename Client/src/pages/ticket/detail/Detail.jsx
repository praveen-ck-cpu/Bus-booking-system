import React from 'react';
import RootLayout from '../../../layout/RootLayout';
import TopLayout from '../../../layout/toppage/TopLayout';
import WarningAlert from '../../../components/alertmessage/WarningAlert';
import { Link, useLocation } from 'react-router-dom';
import BusSeat from './seat/busseat/BusSeat';
import ToggleBtn from '../../../components/topsearch/togglebtn/ToggleBtn';
import Amenities from './amenities/Amenities';
import ReservationPolicy from './reservationpolicy/ReservationPolicy';
import BusImage from './busimage/BusImage';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import Sleeper from './seat/busseat/Sleeper';

const Details = () => {
  const { state: { busid: finaldata, type: bustype } } = useLocation();
  const message = (
    <>
      One individual can only book 10 seats. If you want to book more than 10 seats, please
      <Link to="/support-team" className="text-yellow-700 font-medium"> contact our support team.</Link>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="w-full space-y-12 pb-16">
        <TopLayout
          bgImg="https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
          title="Bus Details"
        />
        <RootLayout className="w-full max-w-screen-xl mx-auto space-y-12 pb-16 px-4 sm:px-6">
          <div className="w-full space-y-8">
            <WarningAlert message={message} />
            {bustype === "A/C Sleeper" || bustype === "NON-A/C Sleeper"
              ? <Sleeper data={finaldata} />
              : <BusSeat data={finaldata} />
            }
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 text-center">
            <p className="text-sm sm:text-base text-neutral-800 font-normal text-left sm:text-center">
              This is sample text Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, modi laborum? 
              <span className="text-base sm:text-lg text-neutral-600 font-medium ml-2"> Want to see more about the bus?</span>
            </p>
            <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6 ">
              <ToggleBtn
                buttonText="See Bus Details"
                buttonTextHidden="Hide Bus Details"
              >
                <div className="w-full space-y-10">
                  <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-10">
                    <Amenities />
                    <ReservationPolicy />
                  </div>
                  <BusImage />
                </div>
              </ToggleBtn>
            </div>
          </div>
        </RootLayout>
      </div>
      <Footer />
    </>
  );
};

export default Details;
