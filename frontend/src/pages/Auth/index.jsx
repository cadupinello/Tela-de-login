import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import TechLogo from '../../assets/tech-logo.png'

const AuthLayout = ({ children }) => {
  return (
    <C.Container>
      <C.FormSection>
        <h1>SHODWE TECHNOLOGY</h1>
        {children}
      </C.FormSection>
      <C.VisualSection>
        <C.PlanetImage src={TechLogo} alt="TechLogo" />
      </C.VisualSection>
    </C.Container>
  )
}

export default AuthLayout