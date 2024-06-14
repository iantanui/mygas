import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function RefillDialog({ open, onClose, onSave, refill }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (refill) {
      setName(refill.name);
      setQuantity(refill.quantity);
      setPrice(refill.price);
    } else {
      setName("");
      setQuantity("");
      setPrice("");
    }
  }, [refill]);

  const handleSave = () => {
    onSave(name, parseInt(quantity), parseFloat(price));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{refill ? "Edit Refill" : "Add Refill"}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Refill name"
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
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>

    </Dialog>
  );
}

export default RefillDialog;