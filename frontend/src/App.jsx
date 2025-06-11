import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Courses from './components/Courses'
import Home from './components/home/Home'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Course from './courses/Course'
import Signup from './components/Signup'
import Login from './components/Login'
import LoginSignup from './components/Loginsignup'
import Cart from './components/Cart'
import Freeproducts from './components/Freeproducts'
import Aboutus from './components/Aboutus'


const router=createBrowserRouter([

  {

    path:'/',
    element:
    <div>
    {/* <Signup></Signup> */}
    <LoginSignup></LoginSignup>
    </div>
  },


  {
     path:'/login',
     element:  <div>

      <Login></Login>
     </div>
  },
   {
     path:'/home',
     element:  <div>

      <Home></Home>
     </div>
  },

  {

    path:'/courses',
    element: 
    <div>
 <Course></Course>
    </div>
  },{
    path:'/signup',
    element:
    <Signup></Signup>
  },
  {
    path:'/Aboutus',
    element:
      <Aboutus></Aboutus>
  },
  {

    path:'/freecourses',
    element:  <div>
   
    {/* <Cart></Cart>
    < */}
    {/* <Courses></Courses>
     */}
     <Freeproducts></Freeproducts>
    </div>
  }

])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <div className='dark'> 
      <RouterProvider router={router}>
        {/* <Home></Home> */}
      </RouterProvider>
    </div>
   

 

    </>
  )
}

export default App
