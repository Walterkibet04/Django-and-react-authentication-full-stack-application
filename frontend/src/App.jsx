import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import About from './components/About'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const noNavbar = location.pathname === "/register" || location.pathname === "/"

  return (
    <>


        {
          noNavbar ?
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
          :
          <Navbar 
            content = {
               <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/about" element={<About/>}/>
            </Routes>
            }
          />
        }

      
      
    </>
  )
}

export default App
