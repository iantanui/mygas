import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css'

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Navbar.Brand href="/">myGas</Navbar.Brand>
      <Nav>
        <Nav.Link href="/account">Account</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default TopBar;
