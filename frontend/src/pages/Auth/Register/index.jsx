import React, { useState, useEffect } from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import * as C from './styles'

// router-dom
import { Link } from 'react-router-dom'
// hooks
import { useAuthentication } from '../../../hooks/useAuthentication'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais !")
      return
    }

    const res = await createUser(user)
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
        <label>
          Nome:
        </label>
        <Input 
        type="text" 
        placeholder="Digite seu nome" 
        value={displayName} 
        onChange={(e) => setDisplayName(e.target.value)} />
      </C.FormControl>
      <C.FormControl>
        <label>
          Email:
        </label>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </C.FormControl>
        
      <C.FormControl>
        <label>
          Senha:
        </label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </C.FormControl>
      <C.FormControl>
        <label>
          Confirme sua senha:
        </label>
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </C.FormControl>
       <C.LabelSignin>
            Já possui conta? 
              <C.Strong>
                <Link to="/signin">&nbsp;Login</Link>
              </C.Strong>
          </C.LabelSignin>
          {!loading &&
            <Button Text="Entrar" backgroundColor="a6a6a6" color="fff"/>
          }
          {loading &&
            <Button disabled Text="Aguarde ..." backgroundColor="023530" color="fff"/>
          }
          {error &&
            <C.LabelError>{error}</C.LabelError>
          }
    </form>
    </>
  )
}

export default Register