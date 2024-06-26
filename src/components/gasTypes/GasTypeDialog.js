import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const GasTypeDialog = ({ open, onClose, gasType, onSave }) => {
  const [name, setName] = useState("");
  const [wholesalePrice6kg, setWholesalePrice6kg] = useState("");
  const [wholesalePrice13kg, setWholesalePrice13kg] = useState("");

  useEffect(() => {
    if (gasType) {
      setName(gasType.name);
      setWholesalePrice6kg(gasType.wholesalePrice6kg);
      setWholesalePrice13kg(gasType.wholesalePrice13kg);
    } else {
      setName("");
      setWholesalePrice6kg("");
      setWholesalePrice13kg("");
    }
  }, [gasType]);

  const handleSave = () => {
    onSave(
      name,
      parseInt(wholesalePrice6kg),
      parseInt(wholesalePrice13kg)
    );
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{gasType ? "Edit Gas Type" : "Add Gas Type"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Gas Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Wholesale Price 6kg"
          value={wholesalePrice6kg}
          onChange={(e) => setWholesalePrice6kg(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Wholesale Price 13kg"
          value={wholesalePrice13kg}
          onChange={(e) => setWholesalePrice13kg(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: "black" }}>
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GasTypeDialog;
