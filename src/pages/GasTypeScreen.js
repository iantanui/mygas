import React, { useState } from "react";
import { Container, Typography, Button, List } from "@mui/material";
import GasTypeItem from "../components/gasTypes/GasTypeItem";
import GasTypeDialog from "../components/gasTypes/GasTypeDialog";
import { useGasTypes } from "../components/gasTypes/GasTypeContext";

function GasTypesScreen() {
  const { gasTypes, addGasType, deleteGasType, updateGasType } = useGasTypes();
  const [showDialog, setShowdialog] = useState(false);
  const [currentGasType, setCurrentGasType] = useState(null);

  const handleSave = (name, wholesalePrice6kg, wholesalePrice13kg) => {
    if (currentGasType) {
      updateGasType(
        currentGasType.id,
        name,
        wholesalePrice6kg,
        wholesalePrice13kg
      );
    } else {
      addGasType(name, wholesalePrice6kg, wholesalePrice13kg);
    }
    setShowdialog(false);
    setCurrentGasType(null);
  };

  return (
    <Container style={{ padding: "0" }}>
      <Typography variant="h6" style={{ textAlign: "left" }}>
        Gas Types
      </Typography>

      <Button
        variant="contained"
        fullWidth
        style={{
          backgroundColor: "black",
          color: "white",
          marginBottom: "1rem",
        }}
        onClick={() => setShowdialog(true)}
      >
        Add Gas Type
      </Button>

      <List>
        {gasTypes
          .slice()
          .reverse()
          .map((gasType, index) => (
            <React.Fragment key={gasType.id}>
              <GasTypeItem
                index={index}
                gasType={gasType}
                onEdit={() => {
                  setCurrentGasType(gasType);
                  setShowdialog(true);
                }}
                onDelete={() => deleteGasType(gasType.id)}
              />
            </React.Fragment>
          ))}
      </List>

      <GasTypeDialog
        open={showDialog}
        onClose={() => setShowdialog(false)}
        gasType={currentGasType}
        onSave={handleSave}
      />
    </Container>
  );
}

export default GasTypesScreen;
