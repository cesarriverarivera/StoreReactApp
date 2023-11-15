import axios from 'axios'

const baseUrl = 'https://ecommerce-json-jwt.onrender.com'

const registerUserService = (data) => axios.post(`${baseUrl}/register`, data)
const loginUserService = (data) => axios.post(`${baseUrl}/login`, data)
const getMeUserService = (jwtToken) => axios.get(`${baseUrl}/users/me`,
  {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

export {
  registerUserService,
  loginUserService,
  getMeUserService
}

// importo axios, luego creo una constante con la url de la api y por ultimo genero las funciones para registrarse y logearse con axios
