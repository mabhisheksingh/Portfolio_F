// import'dotenv/config'
import './App.css'
import NavBar from './components/Navbar/NavBar';

import PublicRoutes from './Utils/PublicRoutes';



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
