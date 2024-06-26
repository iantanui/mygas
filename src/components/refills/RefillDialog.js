import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../products/ProductContext";
 // Update the import path

function RefillDialog({ open, onClose, onSave, refill }) {
  const { products } = useProducts();
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedGasName, setSelectedGasName] = useState("");
  const [selectedGasSize, setSelectedGasSize] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (refill) {
      setCustomerName(refill.customerName || "");
      setPhoneNumber(refill.phoneNumber || "");
      setQuantity(refill.quantity || "");
      setSelectedGasName(refill.gasName || "");
      setSelectedGasSize(refill.gasSize || "");
    } else {
      setCustomerName("");
      setQuantity("");
      setPhoneNumber("");
      setSelectedGasName("");
      setSelectedGasSize("");
    }
  }, [refill]);

  const handleSave = () => {
    if (customerName && phoneNumber && quantity && selectedGasName && selectedGasSize) {
      const product = products.find(p => p.gasName === selectedGasName && p.gasSize === selectedGasSize);
      if (product) {
        onSave(customerName, phoneNumber, parseInt(quantity), product.id);
        setCustomerName("");
        setPhoneNumber("");
        setSelectedGasName("");
        setSelectedGasSize("");
        setQuantity("");
      }
    } else {
      // error
    }
  };

  // Get unique gas names from products
  const gasNames = [...new Set(products.map(product => product.gasName))];

  // Filter sizes based on selected gas name
  const gasSizes = products
    .filter(product => product.gasName === selectedGasName)
    .map(product => product.gasSize);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{refill ? "Edit Refill" : "Add Refill"}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Customer name"
          fullWidth
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Phone number"
          type="number"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FormControl fullWidth style={{ marginTop: "10px" }}>
          <InputLabel id="gas-name-label">Gas Name</InputLabel>
          <Select
            labelId="gas-name-label"
            id="gas-name-select"
            value={selectedGasName}
            onChange={(e) => setSelectedGasName(e.target.value)}
          >
            {gasNames.map((gasName) => (
              <MenuItem key={gasName} value={gasName}>
                {gasName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: "10px" }}>
          <InputLabel id="gas-size-label">Gas Size</InputLabel>
          <Select
            labelId="gas-size-label"
            id="gas-size-select"
            value={selectedGasSize}
            onChange={(e) => setSelectedGasSize(e.target.value)}
            disabled={!selectedGasName}
          >
            {gasSizes.map((gasSize) => (
              <MenuItem key={gasSize} value={gasSize}>
                {gasSize}
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

export default RefillDialog;
