import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ product, handleShowModal }) => {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="rounded-circle bg-secondary text-white text-center" style={{ width: '30px', height: '30px' }}>
          {product.id}
        </div>
        <div>
          <Button variant="outline-primary" size="sm" className="me-1" onClick={() => handleShowModal('Edit', product)}>Edit</Button>
          <Button variant="outline-success" size="sm" className="me-1">View</Button>
          <Button variant="outline-danger" size="sm">Delete</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text className="d-flex justify-content-between">
          <span>Product Name:</span> <span>{product.name}</span>
        </Card.Text>
        <Card.Text className="d-flex justify-content-between">
          <span>Quantity:</span> <span>{product.quantity}</span>
        </Card.Text>
        <Card.Text className="d-flex justify-content-between">
          <span>Price:</span> <span>${product.price}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
