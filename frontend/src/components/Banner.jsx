import React from 'react'
// import { banner }  from  '../assets/banner.jpg'

 
const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row banner'>       

      
      <div className=' order-2  w-full  md:w-1/2  md:order-1  w-1/2 mt-12 md:mt-32'>
      
      <div className='space-y-12'>

      <h1 className='text-4xl font-bold'>Hello ,welcome to {" "} <span className='text-pink-400'> Masters model</span></h1>

<p className='text-xl'>
  Welcome to our platform -we are prvoide courses  From web development to data structures, we provide high-quality content crafted by experts to help you learn, upskill, and succeed in the tech world.
</p>
      </div>

      <div className='p-4 gap-1.5 flex '>
        <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>            
{/* <div className="validator-hint hidden">Enter valid email address</div> */}
<button className="btn btn-accent">subscribe</button>
      
      </div>
      </div>
      <div className='border  w-full  md:w-1/2   h-auto order 1 md:order-2'>
      
      <img src="banner.jpg" alt=""  className=' border-none' />

  
      
      
      </div>
                    
    </div>

 
 )

}

export default Banner

 