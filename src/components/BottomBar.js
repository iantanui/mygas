import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DatabaseCheck, Droplet, Grid, Person, Sliders2 } from "react-bootstrap-icons";
import "../App.css";

const BottomBar = () => {
  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey="/dashboard"
      className="fixed-bottom"
      style={{ }}
    >
      <Nav.Item className="nav">
        <Nav.Link as={Link} to="/dashboard" className="link">
          <Grid /> Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/products"  className="link">
          <Droplet /> Products
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/refills"  className="link">
          <DatabaseCheck className="icon"/> Refills
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/management"  className="link">
          <Sliders2 />Management
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/account"  className="link">
          <Person />Account
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default BottomBar;
