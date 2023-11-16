import React, { useState, useEffect } from 'react'
import { getMeUserService } from '@/services/userServices'

export const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getMeUserService(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('ocurrio un error en el dashboard', error.message)
      }
    }
    getUserData()
  }, [token]) // si cambia el token vuelve a ejecutar el useEffect

  return (
    <>
      <h1>Dashboard</h1>
      {userData.first_name && <h3> {userData.first_name} </h3>}
    </>
  )
}
// DEBO CREAR UN FORMULARIO PARA REGSITRAR UN NUEVO PRODUCTO
// LUEGO CREAR EN USERSERVICES EL SERVICIO CON AXIOS PARA ENVIAR LOS DATOS A LA BASE DE DATOS
