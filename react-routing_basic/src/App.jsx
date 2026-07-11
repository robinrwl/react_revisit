import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contactus from './pages/Contactus'
import Navbar from './components/Navbar'
import Product from './pages/Product'
const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/about' element={<About />} />
        <Route path='/contactus' element = {<Contactus />} />
        <Route path='/product' element={ <Product/> } />
      </Routes>
    </div>
  )
}

export default App
