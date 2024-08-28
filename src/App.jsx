import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Help from './pages/Help'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Locator from './pages/Locator'
import Navbar from './components/Navbar'
import SubMenu from './components/SubMenu'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Router>
       <Navbar/>
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