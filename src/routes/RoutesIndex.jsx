import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import {Home, Login, SignUp, Dashboard, Secret, CartShop} from '@/pages'
import VistaDetalle from '../components/VistaDetalle/VistaDetalle'
import { useAuthContext } from '@/hooks/useAuthContext'

export const RoutesIndex = () => {
  const {isAuth} = useAuthContext()

  return (
 
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detalle/:product_name' element={<VistaDetalle/>} />
        <Route path='/dashboard' element={ isAuth ? <Dashboard/> : <Navigate to='/login'/>} />
        <Route path='/secret' element={ isAuth ? <Secret/> : <Navigate to='/login'/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<CartShop/>}  />
    </Routes>
   
  )
}
