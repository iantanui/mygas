import React, { useState } from "react";
import "./ProductDialog.css";

function ProductDialog({ product, onDismiss, onSave }) {
  const [name, setName] = useState(product ? product.name : "");
  const [quantity, setQuantity] = useState(product ? product.quantity : 0);
  const [price, setPrice] = useState(product ? product.price : 0.0);

  const handleSubmit = () => {
    onSave({ id: product?.id, name, quantity, price });
  };

  return (
    <div className="product-dialog">
      <h2>{product ? "Edit Product" : "Add Product"}</h2>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Quantity{" "}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>
      <label>
        Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>
      <div className="product-dialog-button">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onDismiss}>Cancel</button>
      </div>
    </div>
  );
}

export default ProductDialog;
