import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import * as C from './styles'

const Home = () => {
  return (
    <>
      <C.Container>
        <C.Label>
          REACT WITH FIREBASE - AUTHENTICATION
        </C.Label>
        <C.Content>
          <ul>
              <Link to='/register'>Faça sua conta</Link>
              <Link to='/signin'>Faça seu login</Link> 
          </ul>
        </C.Content>
      </C.Container>
      
    </>
  )
}

export default Home