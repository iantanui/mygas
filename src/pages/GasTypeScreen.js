import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import GasTypeItem from '../components/gasTypes/GasTypeItem';
import GasTypeDialog from '../components/gasTypes/GasTypeDialog';
import { useGasTypes } from '../components/gasTypes/GasTypeContext';

const GasTypesScreen = () => {
  const { gasTypes, deleteGasType, updateGasType } = useGasTypes();
  const [open, setOpen] = useState(false);
  const [editingGasType, setEditingGasType] = useState(null);

  const handleOpen = (gasType = null) => {
    setEditingGasType(gasType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingGasType(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gas Types
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: 'black', color: 'white', marginBottom: '1rem' }}
        onClick={() => handleOpen()}
      >
        Add Gas Type
      </Button>
      <Grid container spacing={3}>
        {gasTypes.map((gasType) => (
          <GasTypeItem
            key={gasType.id}
            gasType={gasType}
            onEdit={handleOpen}
            onDelete={deleteGasType}
          />
        ))}
      </Grid>
      <GasTypeDialog
        open={open}
        onClose={handleClose}
        gasType={editingGasType}
        onSave={updateGasType}
      />
    </Container>
  );
};

export default GasTypesScreen;
