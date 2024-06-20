import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useGasTypes } from "../gasTypes/GasTypeContext";

function ProductDialog({ open, onClose, onSave, product }) {
  const { gasTypes } = useGasTypes();
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [selectedGasName, setSelectedGasName] = useState("");
  const [selectedGasSize, setSelectedGasSize] = useState("");

  useEffect(() => {
    if (product) {
      setQuantity(product.quantity);
      setPrice(product.price);
      setSelectedGasName(product.gasName);
      setSelectedGasSize(product.gasSize);
    } else {
      setQuantity("");
      setPrice("");
      setSelectedGasName("");
      setSelectedGasSize("");
    }
  }, [product]);

  const handleSave = () => {
    onSave(
        selectedGasName,
        quantity,
        price,
        selectedGasName,
        selectedGasSize
      );
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel id="gas-type-label">Gas Name</InputLabel>
          <Select
            labelId="gas-type-label"
            id="gas-type-select"
            value={selectedGasName}
            onChange={(e) => setSelectedGasName(e.target.value)}
          >
            {gasTypes.map((gasType) => (
              <MenuItem key={gasType.id} value={gasType.name}>
                {gasType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel id="gas-size-label">Gas Size</InputLabel>
          <Select
            labelId="gas-size-label"
            id="gas-size-select"
            value={selectedGasSize}
            onChange={(e) => setSelectedGasSize(e.target.value)}
          >
            <MenuItem value="6kg">6 kg</MenuItem>
            <MenuItem value="13kg">13 kg</MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Quantity"
          type="number"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="primary"
          style={{ color: "white", backgroundColor: "black" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          style={{ color: "white", backgroundColor: "black" }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;
