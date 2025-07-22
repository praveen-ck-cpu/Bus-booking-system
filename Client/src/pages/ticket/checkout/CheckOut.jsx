import React, { useState } from 'react'
import TopLayout from '../../../layout/toppage/TopLayout'
import RootLayout from '../../../layout/RootLayout'
import PassengerData from './passengerdata/PassengerData'
import BookingStatus from './bookingstatus/BookingStatus'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { useLocation } from 'react-router-dom'

const data = {
  fullName: "",
  age: "",
  phone: "",
  email: "",
  gender: ""
};

const CheckOut = () => {
  const getdata1 = useLocation();
  const {amount,...getdata} = getdata1
  const [userdata, setuserdata] = useState(data);

  return (
    <>
      <Navbar />
      <div className='w-full space-y-12 pb-16'>
        <TopLayout
          bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
          title={"Check Out"} />
        <RootLayout className="w-full space-y-12  pb-16">
          <div className='w-full grid grid-cols-7 items-start gap-44 relative'>
            <PassengerData userdata={userdata} setuserdata={setuserdata} />
            <BookingStatus data={getdata.state} userdata={userdata} />
          </div>
        </RootLayout>
      </div>
      <Footer />
    </>
  )
}

export default CheckOut