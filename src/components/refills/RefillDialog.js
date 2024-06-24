import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  TextField,
  Checkbox,
  Grid,
  ListItemText,
} from "@mui/material";
import { useGasTypes } from "../gasTypes/GasTypeContext";

function RefillDialog({ open, onClose, onSave, refill }) {
  const { gasTypes } = useGasTypes();
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedGasTypes, setSelectedGasTypes] = useState([]);
  const [selectedGasSize, setSelectedGasSize] = useState("");

  useEffect(() => {
    if (refill) {
      setCustomerName(refill.customerName || "");
      setPhoneNumber(refill.phoneNumber || "");
      setSelectedGasSize(refill.gasSize || "");
      setSelectedGasTypes(refill.gasTypes || []);
    } else {
      setCustomerName("");
      setPhoneNumber("");
      setSelectedGasSize("");
      setSelectedGasTypes([]);
    }
  }, [refill]);

  const handleGasTypeToggle = (gasType) => () => {
    const currentIndex = selectedGasTypes.findIndex(
      (item) => item.name === gasType.name
    );
    const newSelectedGasTypes = [...selectedGasTypes];

    if (currentIndex === -1) {
      newSelectedGasTypes.push({ name: gasType.name, quantity: 0 });
    } else {
      newSelectedGasTypes.splice(currentIndex, 1);
    }

    setSelectedGasTypes(newSelectedGasTypes);
  };

  const handleQuantityChange = (gasType) => (event) => {
    const newSelectedGasTypes = selectedGasTypes.map((item) =>
      item.name === gasType.name
        ? { ...item, quantity: parseInt(event.target.value) || 0 }
        : item
    );
    setSelectedGasTypes(newSelectedGasTypes);
  };

  const handleSave = () => {
    if (
      customerName &&
      phoneNumber &&
      selectedGasSize &&
      selectedGasTypes.length > 0 &&
      selectedGasTypes.every((gasType) => gasType.quantity > 0)
    ) {
      onSave(customerName, phoneNumber, selectedGasSize, selectedGasTypes);
      setCustomerName("");
      setPhoneNumber("");
      setSelectedGasSize("");
      setSelectedGasTypes([]);
    } else {
      // Show error or validation message
      console.error("Please fill in all required fields.");
    }
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
          <InputLabel id="gas-size-label">Gas Size</InputLabel>
          <TextField
            select
            labelId="gas-size-label"
            id="gas-size-select"
            value={selectedGasSize}
            onChange={(e) => setSelectedGasSize(e.target.value)}
            fullWidth
          >
            <option value="6kg">6 kg</option>
            <option value="13kg">13 kg</option>
            {/* Add other gas sizes as needed */}
          </TextField>
        </FormControl>
        {gasTypes.map((gasType) => (
          <Grid
            container
            alignItems="center"
            key={gasType.id}
            style={{ marginTop: "10px" }}
          >
            <Grid item xs={4}>
              <FormControl>
                <Checkbox
                  checked={selectedGasTypes.some(
                    (item) => item.name === gasType.name
                  )}
                  onChange={handleGasTypeToggle(gasType)}
                />
              </FormControl>
              <FormControl>
                <ListItemText primary={gasType.name} />
              </FormControl>
              <FormControl>
                <InputLabel>{gasType.name}</InputLabel>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <TextField
                  margin="dense"
                  type="number"
                  value={
                    selectedGasTypes.find((item) => item.name === gasType.name)
                      ?.quantity || ""
                  }
                  onChange={handleQuantityChange(gasType)}
                  disabled={
                    !selectedGasTypes.some((item) => item.name === gasType.name)
                  }
                  inputProps={{ min: 0 }}
                />
              </FormControl>
            </Grid>
          </Grid>
        ))}
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
