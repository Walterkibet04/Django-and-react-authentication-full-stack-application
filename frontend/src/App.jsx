
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import About from './components/About'
import { Routes, Route, useLocation } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'
import PasswordResetRequest from './components/PasswordResetRequest'

function App() {
  const location = useLocation()
  const noNavbar = location.pathname === "/register" || location.pathname === "/"  || location.pathname === "/request/password_reset"

  return (
    <>
        {
          noNavbar ?
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/request/password_reset" element={<PasswordResetRequest/>}/>
          </Routes>
          :
          <Navbar 
            content = {
               <Routes>
                  <Route element={<ProtectedRoute/>}>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                  </Route>
              </Routes>
            }
          />
        }
    </>
  )
}

export default App
