import React from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Page1 = () => {
  const { signup } = useAuthentication()
  return (
    <>
    <h1>Page1</h1>
    <button onClick={() => signup()}>Signup</button>
    </>
  )
}

export default Page1