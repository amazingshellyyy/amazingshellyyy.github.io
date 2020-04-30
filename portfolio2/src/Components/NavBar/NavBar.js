import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';


const NavBar = props => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Amazingshellyyy</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;