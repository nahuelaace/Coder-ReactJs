import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './Cart/CartWidget';
import { Link } from 'react-router-dom';

const NavBarr = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/'>AC</Link>
                    <Nav className="me-auto">
                    <Nav.Link href="#home"><Link to="Categoria/hombre">Hombre</Link>
                    </Nav.Link>
                    <Nav.Link href="#features"><Link to="Categoria/mujer">Mujer</Link></Nav.Link>
                    <Nav.Link href="#pricing">
                        <Link to='/cart'> 
                            <CartWidget/> 
                        </Link> 
                    </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarr

