import React from 'react'
import * as C from './styles'

const Button = ({ Text, onClick, Type = "submit", backgroundColor, color}) => {

  return (
    <>
      <C.Button type={Type} onClick={onClick} backgroundColor={backgroundColor} color={color} >
        {Text}
      </C.Button>
    </>
  )
}

export default Button