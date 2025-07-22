import React from 'react'
import TopLayout from '../../layout/toppage/TopLayout'
import RootLayout from '../../layout/RootLayout';
import { motion } from 'framer-motion';
import Search from '../home/hero/search/Search';
import Filter from './filter/Filter';
import Searchresult from './filter/searchresul/Searchresult';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Tickets = () => {
  const location = useLocation();
  const datasets = location.state;
  return (
    <>
    <Navbar/>
    <div className='w-full space-y-12 pb-16'>
        {/*Top layout */}

        <TopLayout 
        bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
        title={"Reserve your tickets"}/>
        <RootLayout className="space-y-12 relative">
            {/*search  section */}
            {/*fixing this section on the top to be sticy so that we can easily change the route  */}
            <div className='space-y-5 w-full bg-neutral-50 flex py-4 
            items-center justify-center flex-col sticky top-0 z-30'>
            <motion.div
               initial={{ opacity: 0, y: -800 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -800 }}
               transition={{ duration: 1.35, ease: "easeOut" }}
               className=" text-neutral-700 font-semibold capitalize"
             >
                <div className='w-full h-auto grid grid-cols-4 gap-16 relative'>
            {/*filter section  */}
            <div className='col-span-1'>
                <Filter id={datasets} className="space-y-4 sticky z-20"/>
            </div>
            {/*search tickets */}
            <Searchresult id={datasets} />
             </div>
             </motion.div>
            </div>
            
        </RootLayout>

    </div>
    <Footer/>
    </>
  )
}

export default Tickets;