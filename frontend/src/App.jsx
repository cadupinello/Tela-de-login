import { useState, useEffect } from 'react'
import GlobalStyle from './styles/global'

//RoutesApp
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesApp from './Routes'

// firebase auth
import {onAuthStateChanged} from 'firebase/auth'

// hooks
import { useAuthentication } from './hooks/useAuthentication'

//context
import { AuthProvider } from './context/AuthContext'

import Navbar from './components/Navbar'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser) { 
    return <p>Carregando ...</p>
  }

  return (
    <div>
      <AuthProvider value={{ user }}>
        <Router>
          <RoutesApp />
          <GlobalStyle />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
