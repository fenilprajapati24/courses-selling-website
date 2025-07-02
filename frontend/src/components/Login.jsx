import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const Login = () => {
  const passwordref = useRef();
  const emailref = useRef();
  const navigate = useNavigate(); 

  const handlesingin = async (e) => {
    e.preventDefault();
    const email = emailref.current.value.trim();
    const password = passwordref.current.value.trim();

    
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
      alert('Password must be at least 4 characters');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3019/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert("Login successful");

      navigate('/home'); 
    } catch (err) {
      console.log(err);
      alert('Login failed');
    }
  };

  return (
    <div className='bg-black'>
      <button className="btn bg-black text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>login</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-black text-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <form action="POST" onSubmit={handlesingin}>
            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className='py-2 pl-15'>
              <span>Email</span><br />
              <input
                type="text"
                placeholder='enter your email'
                ref={emailref}
                className='px-3 py-1 w-80 border outline-none rounded-xl'
              /><br />
              <span>Password</span><br />
              <input
                type="password"
                placeholder='enter password'
                ref={passwordref}
                className='px-3 py-1 w-80 border outline-none rounded-xl'
              />
            </div>

            <div className='flex justify-around'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1'>Login</button>
              <p>Not registered? <Link to='/signup' className='underline text-blue-900'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
