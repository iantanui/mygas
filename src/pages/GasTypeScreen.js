import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGasTypes } from '../components/gasTypes/GasTypeContext';

const GasTypesScreen = () => {
  const { gasTypes, addGasType, deleteGasType } = useGasTypes();
  const [name, setName] = useState('');
  const [wholesalePrice6kg, setWholesalePrice6kg] = useState('');
  const [wholesalePrice13kg, setWholesalePrice13kg] = useState('');

  const handleAddGasType = () => {
    if (name && wholesalePrice6kg && wholesalePrice13kg) {
      addGasType(name, parseFloat(wholesalePrice6kg), parseFloat(wholesalePrice13kg));
      setName('');
      setWholesalePrice6kg('');
      setWholesalePrice13kg('');
    }
  };

  return (
    <Container>
      <h2>Manage Gas Types</h2>
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
      />
      <TextField
        label="Wholesale Price 13kg"
        value={wholesalePrice13kg}
        onChange={(e) => setWholesalePrice13kg(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        style={{ backgroundColor: 'black', color: 'white', marginTop: '1rem' }}
        onClick={handleAddGasType}
        fullWidth
      >
        Add Gas Type
      </Button>
      <List>
        {gasTypes.map((gasType) => (
          <ListItem key={gasType.id}>
            <ListItemText
              primary={gasType.name}
              secondary={`6kg: ${gasType.wholesalePrice6kg} | 13kg: ${gasType.wholesalePrice13kg}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteGasType(gasType.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GasTypesScreen;