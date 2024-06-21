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
import { useGasTypes } from "../gasTypes/GasTypeContext";

function RefillDialog({ open, onClose, onSave, refill }) {
  const { gasTypes } = useGasTypes();
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedGasType, setSelectedGasType] = useState("");
  const [selectedGasSize, setSelectedGasSize] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (refill) {
      setCustomerName(refill.customerName || "");
      setPhoneNumber(refill.phoneNumber || "");
      setQuantity(refill.quantity || "");
      setSelectedGasType(refill.gasType || "");
      setSelectedGasSize(refill.gasSize || "");
    } else {
      setCustomerName("");
      setQuantity("");
      setPhoneNumber("");
      setSelectedGasType("");
      setSelectedGasSize("");
    }
  }, [refill]);

  const handleSave = () => {
    onSave(
      customerName,
      phoneNumber,
      parseInt(quantity),
      selectedGasType,
      selectedGasSize,
    );
  };

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
          <InputLabel id="gas-type-label">Gas Type</InputLabel>
          <Select
            labelId="gas-type-label"
            id="gas-type-select"
            value={selectedGasType}
            onChange={(e) => setSelectedGasType(e.target.value)}
          >
            {gasTypes.map((gasType) => (
              <MenuItem key={gasType.id} value={gasType.name}>
                {gasType.name}
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
          >
            <MenuItem value="6kg">6 kg</MenuItem>
            <MenuItem value="13kg">13 kg</MenuItem>
            {/* Add other gas sizes as needed */}
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
