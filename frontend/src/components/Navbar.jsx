import React, { useEffect, useState } from 'react'
import Login from './Login';







const Navbar = () => {


  const [sticky,setstyicky]=useState(false);
  const[darkmode,setdarkmode]=useState(false);


  // dark mode 


  useEffect(()=>{

    const html=document.querySelector('html');
    if(darkmode)
    {
      html.classList.add('dark');
    }
    else{
      html.classList.remove('dark');
    }

  },[darkmode]);

 
  const togglethem=()=>{

    setdarkmode(!darkmode);
    
  };

  useEffect(()=>{

    const handlescroll=()=>{

      if(window.scrollY>0)
      {
        setstyicky(true);
      }else{
        setstyicky(false);
      }
    };

    window.addEventListener("scroll",handlescroll);

    return()=>{

      window.removeEventListener('scroll',handlescroll);
    }
  },[]);


   const navitems=(

  <>
    <li><a href='/home'>Home</a></li>
      <li><a href='/courses'>Course</a></li>
      <li><a href='/freecourses'>Freecourses</a></li>
      <li><a href='/'>user</a></li>
      <li><a href="/Aboutus">About us</a> </li>
  </>
 )
  return (
    <div  className={`max-w-screen-2xl container mx-auto md:px-20 px-4  fixed top-0 left-0  ${sticky
  ? "bg-gray-900/90 text-white shadow-md backdrop-blur-md transition-all duration-300 ease-in-out"
  : "bg-transparent" }`}>
      <div className="navbar  shadow-sm">

  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"
        /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {navitems}
      </ul>
    </div>
    <a className="font-bold cursor-pointer cursor text-2xl">Masters model</a>
  </div>
     

  <div className="navbar-end" >

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navitems}
    
    </ul>
  </div>


 {/* dark  mode */}
 
 
  <div className="navbar-end px-4 hidden md:block ">

    <input type="text" placeholder="Type here" className="input"  />
    </div>
    <div className='p-2'> 

<label className="toggle text-base-content p-2">
  <input type="checkbox" value="synthwave" className="theme-controller"  checked={darkmode} onChange={togglethem}/>

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
    </div>
<div>
    {/* <a className="btn bg-black cursor-pointer text-white p-2 rounded-md hover:bg-slate-800 transition duration-300"  onClick={()=>{document.getElementById("my_modal_3").showModel()}}>Login</a> */}

    {/* // login link  */}
    {/* <Login></Login> */}
  </div>

</div>

</div>
    </div>
  );
};

export default Navbar;


