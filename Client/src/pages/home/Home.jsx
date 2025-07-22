import React from 'react'
import Hero from './hero/Hero'
import Services from './services/Services'
import TopSearch from './topsearch/TopSearch'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='space-y-16 w-full min-h-screen pb-16'>
      <Navbar />
      <Hero />
      <Services />
      <TopSearch />
      <Footer />
    </div>
  )
}

export default Home