import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, Login, SignUp, Dashboard} from '@/pages'
import VistaDetalle from '../components/VistaDetalle/VistaDetalle'

export const RoutesIndex = () => {
  return (
 
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detalle/:product_name' element={<VistaDetalle/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
   
  )
}
