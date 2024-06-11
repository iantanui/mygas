import React from "react";

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="product-item">
      <span>{product.name}</span>
      <span>{product.quantity}</span>
      <span>{product.price}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ProductItem;
