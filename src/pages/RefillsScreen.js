import React, { useState } from "react";
import { Button, Container, Divider, List, Typography } from "@mui/material";
import RefillItem from "../components/refills/RefillItem";
import RefillDialog from "../components/refills/RefillDialog";
import { useRefills } from "../components/refills/RefillContext";

const Refills = () => {
  const { refills, addRefill, deleteRefill, updateRefill } = useRefills();
  const [showDialog, setShowDialog] = useState(false);
  const [currentRefill, setCurrentRefill] = useState(null);

  const handleSave = (name, quantity, price) => {
    if (currentRefill) {
      updateRefill(currentRefill.id, name, quantity, price);
    } else {
      addRefill(name, quantity, price);
    }
    setShowDialog(false);
    setCurrentRefill(null);
  };

  return (
    <Container>
      <Typography>Gas Refills</Typography>
      <Typography>List of refills</Typography>

      <Button>Add Refill</Button>

      <List>
        {refills
          .slice()
          .reverse()
          .map((refill, index) => {
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
              <Divider />
            </React.Fragment>;
          })}
      </List>

      <RefillDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onSave={handleSave}
        refill={currentRefill}
      />
    </Container>
  );
};

export default Refills;
