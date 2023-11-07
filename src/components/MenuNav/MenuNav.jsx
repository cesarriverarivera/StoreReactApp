import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '@/hooks/useAuthContext'
import './menuNav.scss'

const MenuNav = () => {
    const {isAuth, logout} = useAuthContext()

    const linkIsActive = (isActive) => { //isActive se puede usar con navlink que permite mostar que link has seleccionado
        return isActive ? "header__link header__link--isActive" : "header__link"
    }

    return (
        <>
            <Navbar expand="lg" className="header">
                <Container>
                    <Navbar.Brand>Store-React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto header__links">
                            <NavLink className={({isActive}) => linkIsActive(isActive)} to={"/"}>Home</NavLink>
                            <NavLink className={({isActive}) => linkIsActive(isActive)} to={"/dashboard"}>Dashboard</NavLink>
                            {isAuth 
                            ? (
                                <>
                                <NavLink className={({isActive}) => linkIsActive(isActive)} to={"/secret"}>Secret</NavLink>
                                <NavLink onClick={logout} className="header__link" to={"/"}>Logout</NavLink>
                                </>
                            )
                            : (
                                <>
                                 <NavLink className={({isActive}) => linkIsActive(isActive)} to={"/login"}>Login</NavLink>
                                <NavLink className={({isActive}) => linkIsActive(isActive)} to={"/signup"}>Sign Up</NavLink>
                                </>
                            )
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <input id='inputSearch' type='text' placeholder='Buscar'></input>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuNav