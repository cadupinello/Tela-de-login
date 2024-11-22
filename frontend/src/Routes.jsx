import react from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Signin from './pages/Auth/Signin'
import Register from './pages/Auth/Register'
import AuthLayout from './pages/Auth'
import Page1 from './pages/Page1'
import NotFound from './pages/NotFound'

import { useAuthentication } from './hooks/useAuthentication'
import { useAuthValue } from './context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthValue()

  if (!user) {
    return <Navigate to="/signin" />
  }

  return children
}

const PublicRoute = ({ children }) => {
  const { user } = useAuthValue(useAuthentication)

  if (user) {
    return <Navigate to="/page1" />
  }

  return children
}

const RoutesApp = () => {

  return (
    <>
      <Routes>
        {/* Rotas Publicas */}
        <Route path='/signin' element={
          <PublicRoute>
            <AuthLayout>
              <Signin />
            </AuthLayout>
          </PublicRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <AuthLayout>
              <Register />
            </AuthLayout>
          </PublicRoute>
        }
        />
        {/* Rotas Privadas */}
        <Route path='/page1' element={
          <ProtectedRoute>
            <Page1 />
          </ProtectedRoute>
        }
        />

        {/* Rotas de página não encontrada */}
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </>
  )
}

export default RoutesApp