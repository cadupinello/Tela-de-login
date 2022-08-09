import React from 'react'
import * as C from './styles'
import { NavLink } from 'react-router-dom'
import Button from '../Button'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'

const Navbar = () => {
  const { user } = useAuthValue(useAuthentication)
  const { signup } = useAuthentication()
  
  return (
    <>
      <C.Navbar>
        {!user && (
          <>
            <NavLink to='/home'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/register'>
              <li>Registre-se</li>
            </NavLink>
            <NavLink to='/signin'>
              <li>Login</li>
            </NavLink>
          </>
        )}
        {user && (
          <>
            <li>
              <Button color="fff" onClick={signup} backgroundColor={262626} Text='Sair'/>
            </li>
          </>
        )}
      </C.Navbar>
    </>
  )
}

export default Navbar