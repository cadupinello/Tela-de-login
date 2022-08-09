import React from 'react'
import * as C from './styles'

const Input = ({ type, value, placeholder, onChange }) => {

  return (
    <>
      <C.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}

export default Input