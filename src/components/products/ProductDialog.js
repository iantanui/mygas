import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductDialog = ({ show, handleClose, handleSave, currentProduct, handleChange, modalType }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalType} Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="name"
              value={currentProduct.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formProductQuantity" className="mt-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              name="quantity"
              value={currentProduct.quantity}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formProductPrice" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              name="price"
              value={currentProduct.price}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDialog;

