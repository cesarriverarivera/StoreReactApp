import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false) // estoy autenticado ?
  const [userPayload, setUserPayload] = useState(null)// datos de usuario sacados del jwt decodificado(payload)

  const login = (token) => {
    // setitem guarda el token en el local storage
    localStorage.setItem('token', token)
    const decoded = jwtDecode(token)
    setUserPayload(decoded) // jwt decode es una libreria para decodificar el token y devuelve la informacion decodificada
    setIsAuth(true)
  }

  const logout = () => {
    // borrar el localstorage
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  useEffect(() => {
    // recuperar el token del local storage, sino devuelve null
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
