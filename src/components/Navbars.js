import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';


export default function Navbars() {
 

  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">ARMANDO RICO</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">INICIO</Nav.Link>
      <Nav.Link href="/ListAll">LISTA ARTICULOS</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}


