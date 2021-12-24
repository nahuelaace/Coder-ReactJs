import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './Cart/CartWidget';

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AC</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Principal</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu

