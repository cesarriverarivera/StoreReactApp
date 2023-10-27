import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useStoreContext } from '@/hooks/useStoreContext'
import './MenuNav.css'

const MenuNav = () => {
    const {list, listFiltered, setListFiltered, searchValue, setSearchValue } = useStoreContext()

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Store-React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Category</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <input id='inputSearch' type='text' placeholder='Buscar'></input>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuNav