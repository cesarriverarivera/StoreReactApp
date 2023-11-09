import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '@/hooks/useAuthContext'
import { getMeUserService } from '@/services/userServices'
import './menuNav.scss'

const MenuNav = () => {
    const { isAuth, logout } = useAuthContext()

    const linkIsActive = (isActive) => { //isActive se puede usar con navlink que permite mostar que link has seleccionado
        return isActive ? "header__link header__link--isActive" : "header__link"
    }


    //para obtener los datos del usuario
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
                console.log("ocurrio un error al traer datos del usuario", error.message)
            }
        }
        getUserData()
    }, [token]) //si cambia el token vuelve a ejecutar el useEffect



    //funcion para abrir el carrito de compras
    const cart = () => {
        <>
        <Cart/>
        </>
        console.log("hola")
    }


    return (
        <>
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand>Store-React</Navbar.Brand>
                    <input id='inputSearch' type='text' placeholder='Buscar'></input>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='header__top' id="basic-navbar-nav">
                        <Nav className=" header__links">
                            <NavLink className={({ isActive }) => linkIsActive(isActive)} to={"/"}>Home</NavLink>
                            <NavLink className={({ isActive }) => linkIsActive(isActive)} to={"/dashboard"}>Dashboard</NavLink>
                            {isAuth
                                ? (
                                    <>
                                        <NavLink className={({ isActive }) => linkIsActive(isActive)} to={"/secret"}>Secret</NavLink>
                                        <NavLink className="header__link"> 
                                        {userData?.first_name && (
                                            <span className='header__user'>Bienvenido<br></br> {userData.first_name} {userData.last_name}</span>
                                        )} 
                                        </NavLink>
                                        <NavLink onClick={logout} className="header__link" to={"/"}>Logout</NavLink> 
                                    </>
                                )
                                : (
                                    <>
                                        <NavLink className={({ isActive }) => linkIsActive(isActive)} to={"/login"}>Login</NavLink>
                                        <NavLink className={({ isActive }) => linkIsActive(isActive)} to={"/signup"}>Sign Up</NavLink>
                                    </>
                                )
                            }
                            <NavLink className= {({ isActive }) => linkIsActive(isActive)} to="/cart"><FaCartPlus/></NavLink>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    )
}

export default MenuNav