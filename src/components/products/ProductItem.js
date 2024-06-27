import { MoreVert } from "@mui/icons-material";
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

function ProductItem({ index, product, onEdit, onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);

  console.log("Product Item Props:", product);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Find the gas name from gasTypes using the product.gasTypeId


  return (
    <Card
      variant="outlined"
      style={{
        marginBottom: "10px",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "8px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            paddingBottom: "4px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            style={{
              padding: "1px 5px",
              borderRadius: "50%",
              border: "1px solid gray",
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
            }}
          >
            {index + 1}
          </Typography>

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

        <Divider style={{ width: "95%", alignSelf: "center" }} />

        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Gas Name</span>
          <span>{product.gasName}</span>
        </Typography>
        
        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Gas Size</span>
          <span>{product.gasSize}</span>
        </Typography>
        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Quantity</span>
          <span>{product.quantity}</span>
        </Typography>
        <Typography
          style={{
            paddingLeft: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Price</span>
          <span>KES {product.sellingPrice}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
