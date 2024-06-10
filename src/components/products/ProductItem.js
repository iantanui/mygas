import React, { useState } from "react";
import { Card, Button, Modal, ModalTitle } from "react-bootstrap";
import "./ProductItem.css";
import { ThreeDots } from "react-bootstrap-icons";

const ProductItem = ({ product, handleShowModal }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleMore = () => {
    setShowModal(!showModal);
  };
  return (
    <Card className="product-card">
      <div className="product-card-header">
        <div className="product-id">{product.id}</div>
        <div className="product-actions">
          <ThreeDots
            size={20}
            onClick={handleToggleMore}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="divider" />

      <div className="product-info">
        <h5>{product.name}</h5>
        <p>{product.quantity}</p>
        <p>${product.price}</p>
      </div>

      <Modal show={showModal} onHide={handleToggleMore} centered>
        <Modal.Header closeButton>
          <ModalTitle>Product</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="outline-primary"
            size="sm"
            className="me-1"
            onClick={() => handleShowModal("Edit", product)}
          >
            Edit
          </Button>
          <Button variant="outline-success" size="sm" className="me-1">
            View
          </Button>
          <Button variant="outline-danger" size="sm">
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default ProductItem;
