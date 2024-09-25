import React, { useState, useEffect } from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import * as C from './styles'

// router
import { Link } from 'react-router-dom'

// Hooks
import { useAuthentication } from '../../../hooks/useAuthentication'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

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
    if (authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: '100%', display: "flex", flexDirection: "column", gap: "8px" }}>
        <C.Title>Faça sua conta</C.Title>
        <C.FormControl>
          <label>E-mail</label>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </C.FormControl>

        <C.FormControl>
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </C.FormControl>

        <C.LabelSignin>
          Não possui conta?
          <C.Strong>
            <Link to="/register">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignin>
        {!loading &&
          <Button Text="Entrar" backgroundColor="a6a6a6" color="fff" />
        }
        {loading &&
          <Button disabled Text="Aguarde ..." backgroundColor="023530" color="fff" />
        }
        {error &&
          <C.LabelError>{error}</C.LabelError>
        }
      </form>
    </>
  )
}

export default SignIn