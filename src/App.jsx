import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Help from './pages/Help'
import Home from './pages/Home'

import Search from './pages/Search'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Locator from './pages/Locator'
import Navbar from './components/Navbar'
import SubMenu from './components/SubMenu'
import Footer from './components/Footer'




const App = () => {
  const [isLoginVisible, setLoginVisible] = useState(false)

  const handleLoginClick = () =>{
    setLoginVisible(true)

  }

  const handleCloseLogin = () =>{
    setLoginVisible(false)
  }
  return (
    <div>
      <Router>
       <Navbar onLoginClick ={handleLoginClick}/>
       <Login isVisible={isLoginVisible} onClose = {handleCloseLogin}/>
       <SubMenu/>
        <Routes>
        <Route path='/help' element={<Help/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/locator' element={<Locator/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App