import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Error_404 from './pages/Error_404'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Coursedettemp from './pages/Coursedettemp'


const App = () => {
  return (
    <div>
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/courses' element={<Courses />} />
<Route path='/courses/:courseID' element={ <Coursedettemp /> } />
<Route path='/product' element={<Product />} > 
<Route path='/product/men' element={<Men />} />
<Route path='/product/women' element={<Women />} />
<Route path='/product/kids' element={<Kids />} />
</Route>
<Route path='*' element={<Error_404 />} />
</Routes>
<Footer />
    </div>
  )
}

export default App
