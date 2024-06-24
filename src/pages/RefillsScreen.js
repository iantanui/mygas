import React, { useState } from "react";
import { Button, Container, List, Typography } from "@mui/material";
import RefillItem from "../components/refills/RefillItem";
import RefillDialog from "../components/refills/RefillDialog";
import { useRefills } from "../components/refills/RefillContext";

const Refills = () => {
  const { refills, addRefill, deleteRefill, updateRefill } = useRefills();
  const [showDialog, setShowDialog] = useState(false);
  const [currentRefill, setCurrentRefill] = useState(null);

  const handleSave = (
    customerName,
    phoneNumber,
    gasType,
    gasSize,
    quantity
  ) => {
    if (currentRefill) {
      updateRefill(
        currentRefill.id,
        customerName,
        phoneNumber,
        gasType,
        gasSize,
        quantity
      );
    } else {
      addRefill(customerName, phoneNumber, gasType, gasSize, quantity);
    }
    setShowDialog(false);
    setCurrentRefill(null);
  };

  return (
    <Container style={{ padding: "8px" }}>
      <Typography>Gas Refills</Typography>
      <Typography>List of refills</Typography>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{
          backgroundColor: "black",
          color: "white",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        onClick={() => {
          setCurrentRefill(null);
          setShowDialog(true);
        }}
      >
        Add Refill
      </Button>

      <List>
        {refills
          .slice()
          .reverse()
          .map((refill, index) => (
            <React.Fragment key={refill.id}>
              <RefillItem
                index={index}
                refill={refill}
                onEdit={() => {
                  setCurrentRefill(refill);
                  setShowDialog(true);
                }}
                onDelete={() => deleteRefill(refill.id)}
              />
              
            </React.Fragment>
          ))}
      </List>

      <RefillDialog
        open={showDialog}
        onClose={() => {
          setShowDialog(false);
          setCurrentRefill(null);
        }}
        onSave={handleSave}
        refill={currentRefill}
      />
    </Container>
  );
};

export default Refills;
