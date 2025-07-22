import React, { useState } from 'react'
import imgNew from '../../assets/herobg.png'
import { useNavigate } from 'react-router-dom'
// import {toast } from 'react-toastify';
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();
    const [data,setdata]=useState({
        email:"",
        pass1:"",
        pass2:""
    });
     
    const handlechange =(event)=>{
        const {name,value} = event.target
        setdata((prevdata)=>({
            ...prevdata,
            [name]:value
        }));
    };


    const handlesubmit=(event)=>{
        event.preventDefault();

            const emailcheck = testemail();
            if (!emailcheck) {
                window.alert("Please enter currect format ")
                return
            }
        if(!data.email||!data.pass1||!data.pass2){
            window.alert("Please enter all datails")
            return
        }
        const result =testkey();
        if(!result) return window.alert("Password must be at least 8 characters long, include a number, and a special character.")
        if(data.pass1 !== data.pass2)
        {
            window.alert("Password not match")
        }
        else{
        console.log(data)
        setdata({
            email:"",
            pass1:"",
            pass2:"",
        })
        }
         axios.post("http://localhost:3000/",data,{headers: { "Content-Type": "application/json" }})
         .then((res)=>console.log(res.data.message))
         .catch((err)=>console.log(err));
    };
const testkey=()=>{
    const sample = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return sample.test(data.pass1);
}
const testemail = () =>{
    const sample = /@gmail\.com$/;
    return sample.test(data.email);
}
    return (
        <div className="text-white  h-[100vh] flex items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${imgNew})` }}>
            <div className='w-[400px] bg-neutral-950  border border-slate-600 rounded-md p-8 shadow-lg backdrop-fliter backdrop-blur-lg bg-opacity-30 relative' >
                <h1 className='text-4xl font-bold text-center'>Welcome</h1>
                <form action="">
                    <div className='relative my-4 ' >
                        <input 
                        name="email"
                        required
                        value={data.email}
                        onChange={handlechange}
                        type="email" 
                        className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:text-white focus:border-red-600 peer' 
                        placeholder='Email Address' />
                        {/* <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-show:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6' >Email Address</label>
                     */}
                    </div>
                    <div className='relative '>
                        <input 
                        required
                        name="pass1"
                        value={data.pass1}
                        onChange={handlechange}        
                        type="password" 
                        className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:text-white focus:border-red-600 peer' 
                        placeholder='Password' />
                        {/* <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-show:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6' >Password</label>
                        */}
                    </div>
                    <div className='relative  '>
                        <input type="password"
                        required
                        value={data.pass2}
                        onChange={handlechange}
                        name="pass2"
                        className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:text-white focus:border-red-600 peer pt-6' 
                        placeholder='Confirm Password' />
                        {/* <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-show:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 pt-5' >Confirm  Password</label>
                        */}
                    </div>
                    <div className='pt-6'>
                        <button 
                        type='submit' 
                        className=' w-full mb-4 text-[18px] rounded  py-2 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500  transition-all duration-300 '
                        onClick={handlesubmit} >Sign in</button>
                    </div>
                    <div className='text-center'>
                        <h2 className='pb-4'>OR</h2>
                        <button className='transition-all duration-300 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 w-full  text-[18px] mb-4 py-2 rounded'>Continue with Google</button>
                    </div>
                    <p className='text-center'>Already have an account? <span className='text-red-500 text-lg cursor-pointer hover:text-white transition-all duration-300' onClick={()=>navigate('/login') }>Login</span></p>
                </form>
            </div>
        </div>
    )
}

export default Signin