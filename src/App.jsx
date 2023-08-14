// import'dotenv/config'
import { useState } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Store/Slices/UserSlice';
import NavBar from './Components/Navbar/NavBar';

import PublicRoutes from './Utils/PublicRoutes';



function App() {

  console.log("Home Environment ", import.meta.env)
  return (
    <>
    <NavBar />
    <PublicRoutes />

     </>
  )
}

export default App
