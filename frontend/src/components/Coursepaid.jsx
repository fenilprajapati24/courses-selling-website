import React from 'react'
// import list from '../../data/list'   // import from frontend 
import Card from '../components/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'    // import from backend 
const Coursepaid = () => {

    const [book,setbook]=useState([]);

    useEffect(()=>{


      const getbook = async()=>{

        try{
                const res= await axios.get('http://localhost:3019/booksrouter');
                console.log(res);
                setbook(res.data);
        }catch(err)
        {
              console.log(err);
        }
      };
      getbook();
    },[])
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto  px-4  border  md:px-20 px-4' >
       <div className='mt-28 items-center justify-center text-center'>
              <h2  className='text-2xl font-extrabold md:text-4xl'>some paid course </h2>
       </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
      {book.map((item)=>(    
        <Card  key={item.id} item={item} ></Card>       
      ))}
    </div>
    </div>  
    </>
  )
}

export default Coursepaid
