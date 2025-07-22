import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Component1 from './Scomponent/Component1';
import Component2 from './Scomponent/Component2';
import Component3 from './Scomponent/Component3';


const ServicesPage = () => {
  return (
    <>
      <Navbar />

      {/* Show all components by default */}
        <>
          <Component1/>
          <Component2 />
          <Component3 />
        </>
      

      <Footer />
    </>
  );
};

export default ServicesPage;
