import React, {useState, useEffect} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as C from './styles'

// router
import {Link} from 'react-router-dom'

// Hooks
import { useAuthentication } from '../../hooks/useAuthentication'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading} = useAuthentication()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = { 
      email,
      password
    }

    const res = await login(user)
    console.log(res)

  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  },[authError])


  return (
    <>
       <form onSubmit={handleSubmit}>
      <C.Container>
        <C.Label>REACT WITH FIREBASE - AUTHENTICATION</C.Label>
        <C.Content>
          <C.Label>Login</C.Label>
          <Input 
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <Input 
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <C.LabelSignin>
            Não possui conta? 
              <C.Strong>
                <Link to="/">&nbsp;Registre-se</Link>
              </C.Strong>
          </C.LabelSignin>
          {!loading &&
            <Button Text="Entrar" backgroundColor="046ee5" color="fff" />
          }
          {loading &&
            <Button disabled Text="Aguarde ..." backgroundColor="046ee5" color="fff" />
          }
          {error &&
            <C.LabelError>{error}</C.LabelError>
          }
        </C.Content>
      </C.Container>
    </form>
    </>
  )
}

export default SignIn