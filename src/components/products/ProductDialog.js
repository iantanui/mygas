import React, { useEffect, useState } from "react";
import "./ProductDialog.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

function ProductDialog({ open, onClose, onSave, product }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setQuantity(product.quantity);
      setPrice(product.price);
    } else {
      setName("");
      setQuantity("");
      setPrice("");
    }
  }, [product]);

  const handleSave = () => {
    onSave(name, parseInt(quantity), parseInt(price));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Product Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Quantity"
          type="number"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;
