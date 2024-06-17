import React, { useEffect, useState } from "react";
import "./ProductDialog.css";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const gasTypes = [
  { value: "6kg", label: "6kg" },
  { value: "13kg", label: "13kg" },
];

function ProductDialog({ open, onClose, onSave, product }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [selectedGasType, setSelectedGasType] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setQuantity(product.quantity || "");
      setPrice(product.price || "");
      setSelectedGasType(product.availableGasTypes || "");
    } else {
      setName("");
      setQuantity("");
      setPrice("");
      setSelectedGasType([]);
    }
  }, [product]);

  const handleSave = () => {
    onSave(name, parseInt(quantity), parseFloat(price), selectedGasType);
  };

  const handleGasTypeChange = (event) => {
    setSelectedGasType(event.target.value);
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
        <FormControl fullWidth>
          <InputLabel id="gas-type-label">Gas Type</InputLabel>
          <Select
            labelId="gas-type-label"
            id="gas-type-select"
            multiple
            value={selectedGasType}
            onChange={handleGasTypeChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {gasTypes.map((gasType) => (
              <MenuItem key={gasType.value} value={gasType.value}>
                <Checkbox
                  checked={selectedGasType.indexOf(gasType.value) > -1}
                />
                <ListItemText primary={gasType.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "black", color: "white", padding: "10px" }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "black", color: "white", padding: "10px" }}
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;
