import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleForm = () => setIsLogin(!isLogin);

const handleSubmit = async (e) => {
  e.preventDefault();

  const email = emailRef.current.value.trim();
  const password = passwordRef.current.value.trim();
  const name = nameRef.current?.value?.trim();

  if (!email || !email.includes('@')) {
    return alert('Enter a valid email');
  }

  if (!password || password.length < 4) {
    return alert('Password must be at least 4 characters');
  }

  try {
    let res;             

    if (isLogin) {
      // Login logic
      res = await axios.post('http://localhost:3019/api/users/login', { email, password });
      alert("Login successful");
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    }
     else {
      // Signup logic
      if (!name) return alert('Name is required');
      await axios.post('http://localhost:3019/api/users/register', { name, email, password });
      alert("Signup successful. Please login now.");

      // Switch to login form after successful signup
      setIsLogin(true);

      // Optionally clear input fields
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
    }

  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Something went wrong');
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-black p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? 'Login' : 'Signup'}
        </h2>

        <form  method="post"onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label>Name</label>
              <input
                type="text"
                ref={nameRef}
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 outline-none"
              />
            </div>
          )}

          <div>
            <label>Email</label>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 outline-none"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button className="text-blue-400 underline" onClick={toggleForm}>
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
