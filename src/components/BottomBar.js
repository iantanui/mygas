import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/dashboard" className="fixed-bottom">
      <Nav.Item>
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/refills">Refills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/management">Management</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/account">Account</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default BottomBar;
