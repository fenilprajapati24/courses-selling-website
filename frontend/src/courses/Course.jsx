import React from 'react'
import Navbar from '../components/Navbar'
import Coursepaid from '../components/Coursepaid'
import Footer from '../components/Footer'

const course = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen '>
        <Coursepaid></Coursepaid>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default course
