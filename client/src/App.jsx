import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Product from './pages/Product'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import QrScanner from './pages/Qrscanner.jsx'
import Scan from './pages/Scan.jsx'
const App = () => {
  return <>
  
      

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/:product' element = {<Product/>} />
        <Route path='/Qrscanner' element = {<QrScanner/>} />
        <Route path='/Login' element = {<Login/>} />
        <Route path='/Scan' element = {<Scan/>} />
      </Routes>
  
  </>
}

export default App