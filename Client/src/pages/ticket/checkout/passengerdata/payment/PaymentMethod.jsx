import React, { useState } from 'react'
import PaymentCrad from '../../../../../components/payment/PaymentCrad';
import MastercardImg from "../../../../../assets/mastercard.png"
import CreditcardImg from "../../../../../assets/creditcard.png"
import { FaPlus } from 'react-icons/fa';

 

const PaymentMethod = () => {

  const [seletedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value)
  }

  return (
    <div className='w-full space-y-3 '>
      <h6 className='text-sm text-neutral-500 font-medium'>
        Select Payment Method
      </h6>
      <div className='w-full grid grid-cols-2 gap-10'>
      <PaymentCrad 
        selectedPayment={seletedPaymentMethod}
        value={"mastercard"}
        onChange={handleChange}
        cardholderName={'Ram Bdr Ghale'}
        cardNumber={"8888"}
        cardImage={MastercardImg}
      />
      <PaymentCrad 
        selectedPayment={seletedPaymentMethod}
        value={"creditcard"}
        onChange={handleChange}
        cardholderName={'Ram Bdr Ghale'}
        cardNumber={"8989"}
        cardImage={CreditcardImg}
      />
      </div>
      <div className='w-full flex justify-end'>
        <div className='w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-red-700'>
          <FaPlus/>
          <p className='capitalize'>Add New card</p>

        </div>
      </div>
    </div>
  )
}

export default PaymentMethod