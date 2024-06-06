import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href="/">myGas</Navbar.Brand>
      <Nav>
        <Nav.Link href="/account">Account</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default TopBar;
