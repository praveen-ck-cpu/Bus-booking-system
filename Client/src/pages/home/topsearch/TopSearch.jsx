import React, { useEffect, useState } from 'react'
import RootLayout from '../../../layout/RootLayout'
import TopSearchCard from '../../../components/topsearch/TopSearchCard'
import axios from 'axios'
import { Toaster,toast } from 'sonner'

const TopSearches = (props) => {
  return (
    <TopSearchCard 
    busid={props.busid} 
    finaldata={props.final} 
    routeFrom={props.source} 
    routeTo={props.destination} 
    timeDuration={props.totalkm} 
    price={props.date}/> 
  )
};

const TopSearch = () =>{
  const [data,setdata] = useState([]);
  const Getdata = async() =>{
    try {
      const getdata = await axios.get("http://localhost:3105/user/get/");
      const finaldata = getdata.data;
      finaldata.length == 0 ? <h3>Loading data</h3> : setdata(finaldata);
   } catch (error) {
     toast.error("Server Error");
   }
  }
  useEffect(()=>{Getdata()},[]);
  return (
    <RootLayout className="space-y-12">
    <div className='w-full flex items-center justify-center text-center'>
        <h1 className="text-3xl text-neutral-800 font-bold">
        Top Search <span className="text-red-900 ">Routes </span>
        </h1>
        </div>
    <div className='w-full pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>{
    data.map((value)=>(
      <TopSearches 
      key={value._id}
      source={value.source}
      destination={value.destination}
      totalkm={value.totalkm}
      date= {value.final?.amount}
      type={value.bustype}
      busid={value.busid}
      final={value}
      />
    ))}
    </div>
    </RootLayout>
  )
}

export default TopSearch;