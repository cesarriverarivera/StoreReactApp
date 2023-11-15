import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaCartPlus } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import { getMeUserService } from '@/services/userServices'
import { useCartContext } from '../../hooks/useCartContext'
import { useStoreContext } from '../../hooks/useStoreContext'
import './menuNav.scss'

const MenuNav = () => {
  const { isAuth, logout } = useAuthContext()
  const { totalCart } = useCartContext()
  const { handlerSearch } = useStoreContext()

  const linkIsActive = (isActive) => { // isActive se puede usar con navlink que permite mostar que link has seleccionado
    return isActive ? 'header__link header__link--isActive' : 'header__link'
  }

  // para obtener los datos del usuario
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
        console.log('ocurrio un error al traer datos del usuario', error.message)
      }
    }
    getUserData()
  }, [token]) // si cambia el token vuelve a ejecutar el useEffect

  return (
    <>
      <Navbar expand='lg' className='header'>
        <Container>
          <Navbar.Brand>Store-React</Navbar.Brand>
          <input onChange={(e) => handlerSearch(e.target.value)} id='inputSearch' className='header__input' type='text' placeholder='Buscar Producto' />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='header__top' id='basic-navbar-nav'>
            <Nav className=' header__links'>
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
              {isAuth
                ? (
                  <>
                    <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
                    <NavLink className='header__link'>
                      {userData?.first_name && (
                        <span className='header__user'>Bienvenido<br /> {userData.first_name} {userData.last_name}</span>
                      )}
                    </NavLink>
                    <NavLink onClick={logout} className='header__link' to='/'>Logout</NavLink>
                  </>
                  )
                : (
                  <>
                    <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
                    <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Sign Up</NavLink>
                  </>
                  )}
              <NavLink onClick={totalCart} className={({ isActive }) => linkIsActive(isActive)} to='/cart'><FaCartPlus /></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MenuNav
