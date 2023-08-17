// import'dotenv/config'
import './App.css'

import PublicRoutes from './Utils/PublicRoutes';
import NavBar from './Components/Navbar/NavBar';



function App() {
  // console.log("Home Environment ", import.meta.env)
  return (
    <>
    <NavBar />
    <PublicRoutes />
     </>
  )
}

export default App
