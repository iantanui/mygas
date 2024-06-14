import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function RefillItem({ index, refill, onView, onEdit, onDelete }) {
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
        <div>
          <div>{index + 1}</div>

          <IconButton onClick={handleMenuOpen}>
            <MoreVert />
          </IconButton>
        </div>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            onClick={() => {
              onView(refill);
              handleMenuClose();
            }}
          >
            View
          </MenuItem>

          <MenuItem
            onClick={() => {
              onEdit(refill);
              handleMenuClose();
            }}
          >
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              onDelete(refill.id);
              handleMenuClose();
            }}
          >
            Delete
          </MenuItem>
        </Menu>

        <Typography>
          <span>Name</span>
          <span>{refill.name}</span>
        </Typography>

        <Typography>
          <span>Quantity</span>
          <span>{refill.quantity}</span>
        </Typography>

        <Typography>
          <span>Price</span>
          <span>{refill.price}</span>
        </Typography>
        
      </CardContent>
    </Card>
  );
}

export default RefillItem;
