import React, {useState, useEffect} from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as C from './styles'

// router-dom
import { Link } from 'react-router-dom'
// hooks
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais !")
      return
    }

    const res = await createUser(user)
    console.log(res)
    
  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  },[authError])

  return (
    <form onSubmit={handleSubmit}>
      <C.Container>
        <C.Label>REACT WITH FIREBASE - AUTHENTICATION</C.Label>
        <C.Content>
          <C.Label>Registre-se</C.Label>
          <Input 
            type="text"
            placeholder="Digite seu nome"
            value={displayName}
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Input 
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
           <Input 
            type="password"
            placeholder="Digite sua senha"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
           <Input 
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <C.LabelSignin>
            Já possui conta? 
              <C.Strong>
                <Link to="/signin">&nbsp;Login</Link>
              </C.Strong>
          </C.LabelSignin>
          {!loading &&
            <Button Text="Entrar" backgroundColor="046ee5" color="fff"/>
          }
          {loading &&
            <Button disabled Text="Aguarde ..." backgroundColor="046ee5" color="fff"/>
          }
          {error &&
            <C.LabelError>{error}</C.LabelError>
          }
        </C.Content>
      </C.Container>
    </form>
  )
}

export default Register