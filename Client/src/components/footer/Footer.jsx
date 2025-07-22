import React from 'react';
import RootLayout from '../../layout/RootLayout';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import MasterCradImg from "../../assets/mastercard.png";
import PaypalImg from "../../assets/paypal.png";
import CreditCradImg from "../../assets/creditcard.png";

const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-950 px-5 py-12'>
      <RootLayout className="space-y-10">
        {/* Footer other content */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className="lg:col-span-2 space-y-8 md:pr-10 pr-0">
            <div className='space-y-3'>
              {/* Logo */}
              <Link to="/" className="text-6xl text-red-500 font-bold">
                Bus
              </Link>
              {/* Some description */}
              <p className='text-sm text-neutral-500 font-normal'>
                Bus is all about booking tickets online to make travel more comfortable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore nesciunt delectus debitis iusto magnam minima commodi ex nisi possimus!
              </p>
            </div>
            {/* Social links */}
            <div className='w-full flex items-center gap-x-5'>
              {[FaInstagram, FaFacebookF, FaYoutube, FaXTwitter].map((Icon, index) => (
                <div key={index} className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-red-700 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                  <Icon className='w-5 h-5 text-neutral-50' />
                </div>
              ))}
            </div>
          </div>

          {["Quick Links", "Top Reserved Routes", "Support Links"].map((title, idx) => (
            <div key={idx} className="space-y-5">
              <h1 className='text-lg text-neutral-100 font-semibold'>{title}</h1>
              <div className='space-y-2'>
                {[
                  title === "Quick Links" && ["About Us", "My Account", "Reserve your tickets", "Create your account"],
                  title === "Top Reserved Routes" && ["Chennai-Coimbatore", "Chennai-Kanniyakumari", "Chennai-Bangalore", "Coimbatore-Bangalore"],
                  title === "Support Links" && ["Privacy Policy", "Terms & Conditions", "Help & Support", "FAQs"]
                ][idx].map((text, i) => (
                  <Link key={i} to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>{text}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-neutral-800/50"></div>
        {/* Copyright */}
        <div className="w-full pt-2 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className='text-sm text-neutral-600 font-normal'>
            Copyright &copy; 2025, All rights reserved.
          </p>
          <div className="flex items-center gap-x-2 mt-4 md:mt-0">
            {[MasterCradImg, PaypalImg, CreditCradImg].map((img, i) => (
              <img key={i} src={img} alt="" className="w-fit h-9 object-contain object-center" />
            ))}
          </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default Footer;
