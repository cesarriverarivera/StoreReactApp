import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, SignUp, Dashboard, Secret, CartShop, NotAnAdmin } from '@/pages'
import VistaDetalle from '../components/VistaDetalle/VistaDetalle'
import { useAuthContext } from '@/hooks/useAuthContext'

export const RoutesIndex = () => {
  const { isAuth, isAutorizedAdmin } = useAuthContext()

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detalle/:product_name' element={<VistaDetalle />} />
      <Route path='/dashboard' element={isAutorizedAdmin & isAuth ? <Dashboard /> : isAuth ? <NotAnAdmin /> : <Navigate to='/login' />} />
      <Route path='/secret' element={isAuth ? <Secret /> : <Navigate to='/login' />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<CartShop />} />
    </Routes>

  )
}
