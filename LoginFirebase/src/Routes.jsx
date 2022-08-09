import react from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Page1 from './pages/Page1'
import NotFound from './pages/NotFound'

import { useAuthentication } from './hooks/useAuthentication'
import { useAuthValue } from './context/AuthContext'

const RoutesApp = () => {
  const { user } = useAuthValue(useAuthentication)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={!user ? <Home /> : <Navigate to="/page1" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/page1" />} />
        <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/page1" />} />
        <Route path="/page1" element={user ? <Page1 /> : <Navigate to="/register" />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default RoutesApp