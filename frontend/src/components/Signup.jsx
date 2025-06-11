import React from 'react'
import { useRef } from 'react';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

axios.defaults.withCredentials = true;
const Signup =  ()=> {

  //  const [ans ,addans]=useState([]);

  const nameref=useRef();
  const emailref=useRef();
  const passwordref=useRef();

   const handlesignup=async (e)=>{


    e.preventDefault();
    const name=nameref.current.value;
    const email=emailref.current.value;
    const password=passwordref.current.value;

  if (email === '') {
      alert('Email is required');
      return;
    } else if (!email.includes('@') || !email.includes('.')) {
      alert('Enter a valid email');
      return;
    }

    if (password === '') {
      alert('Password is required');
      return;
    } else if (password.length < 4) {
      alert('Password must be at least 6 characters');
      return;
    }
    
    try{
        await axios.post('http://localhost:3019/api/users/register', { name, email, password });
         alert("Signup successful");
        //  navigate('/');
    }catch(err)
    {
       console.log(err);
          alert("signed fail ");
    }


   };

  return (
    <div className='min-h-screen flex justify-center items-center bg-white p-8n'>
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}

      <div id="my_modal_3" className="bg-white ">
        <div className=" bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form method="dialog">
            <div className="flex justify-end">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost text-white">✕</Link>
        </div>
          </form>

          <h3 className="font-bold text-lg text-center">signup</h3>

          <form action="POST" onSubmit={handlesignup}>
            
          <div className='py-2'>
            <label>Name</label>
            <input type="text" placeholder='enter your name' className='px-3 py-1 w-full border outline-none rounded-xl mb-2'  ref={nameref} />

            <label>Email</label>
            <input type="text"  ref={emailref}placeholder='enter your email' className='px-3 py-1 w-full border outline-none rounded-xl mb-2' />

            <label>Password</label>
            <input type="password" ref={passwordref}placeholder='enter password'  className='px-3 py-1 w-full border outline-none rounded-xl mb-2' />
          </div>

          <div className='flex justify-around pt-2'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1'  >Signup</button>
            <p>Registered? <Link to={'/login'} className='underline text-blue-900 cursor-pointer' >Login</Link></p>
          </div>

            </form>

        </div>
      </div>
    </div>
  )
}

export default Signup
