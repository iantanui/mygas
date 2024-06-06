import React from "react";
import { Modal } from "react-bootstrap";

const ProductDialog = ({ product, onDismiss, onSave }) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>{product == null ? "Add Product" : "Edit Product"}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default ProductDialog;
