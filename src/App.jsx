// import'dotenv/config'
import './App.css'

import NavBar from './Components/Navbar/NavBar';
import PublicRoutes from './Routers/PublicRoutes';
import Footer from './pages/Footer/Footer';



function App() {
  // console.log("Home Environment ", import.meta.env)
  return (
    <div className='bg-color-dark'>
    <NavBar />
    <PublicRoutes />
    <Footer/>
     </div>
  )
}

export default App
