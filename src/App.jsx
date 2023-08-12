// import'dotenv/config'
import { useState } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Store/Slices/UserSlice';
import NavBar from './Components/Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import PublicRoutes from './Components/Router/PublicRouter';
import Card from './Components/Card/Card';
import navBarImg from './assets/MyNvbar.png'
import Carousel from './Components/Carousel/Carousel';



function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const data   = useSelector( state =>{
    return state.users
  } );

  console.log("Environment ", import.meta.env.VITE_SITE_NAME)

  const addNewUser = (payload)=>{
    console.log(payload)
    dispatch( addUser(payload) )
  }

  return (
    <>
    <NavBar />

    <Carousel/>
    
    
    {/* <Card  heading={"This is heading"} content={"This is content."} img={navBarImg} />
    <Card  heading={"This is heading"} content={"This is content."} img={navBarImg} /> */}
    {/* <Card/> */}
    {/* <Card width={"80px"} height={"100px"}/> */}
    {/* <Card/> */}
    {/* <PublicRoutes /> */}
    
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=> addNewUser("Abhishek") }>Abhishek</button>
        <li>
          {data.length != 0 && data.map( (user, id)=>{
            return <ul id={id} >{user}</ul>
          })}
        </li>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

     </>
  )
}

export default App
