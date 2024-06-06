import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";
import { Person } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <div className="top">
        <Navbar.Brand className="title">myGas</Navbar.Brand>
        <Navbar.Brand className="sub-title">
          Crystal management made easy
        </Navbar.Brand>
      </div>
      <Nav>
        <Nav.Link href="/account">
          <Person />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default TopBar;
