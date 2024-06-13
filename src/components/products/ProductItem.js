import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";

function ProductItem({ index, product, onEdit, onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardContent>
        <Typography>{index + 1}</Typography>
        <IconButton onClick={handleMenuOpen}>
          <MoreVert />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            onClick={() => {
              onEdit(product);
              handleMenuClose();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              onDelete(product.id);
              handleMenuClose();
            }}
          >
            Delete
          </MenuItem>
        </Menu>

        <Divider />

        <Typography>Name: {product.name}</Typography>
        <Typography>Quantity: {product.quantity}</Typography>
        <Typography>Price: {product.price}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
