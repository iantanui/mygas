import React from 'react';
import { Card, CardContent, Typography, CardActions, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const GasTypeItem = ({ gasType, onEdit, onDelete }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {gasType.name}
          </Typography>
          <Typography color="textSecondary">
            Wholesale Price 6kg: {gasType.wholesalePrice6kg}
          </Typography>
          <Typography color="textSecondary">
            Wholesale Price 13kg: {gasType.wholesalePrice13kg}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => onEdit(gasType)} style={{ marginLeft: 'auto' }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(gasType.id)} color="secondary">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GasTypeItem;
