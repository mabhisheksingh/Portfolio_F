import React from 'react'
import './HomeLayout.css'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home/Home'
function HomeLayout() {
  return (
    <>
    <div className='margin-auto home-layout  '>
        
    {/* <Home/> */}
    <Outlet/>
    </div>
    </>
  )
}

export default HomeLayout