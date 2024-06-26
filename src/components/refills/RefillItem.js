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
import { useProducts } from "../products/ProductContext";

function RefillItem({ index, refill, onView, onEdit, onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { products } = useProducts();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Check if product and product.price are defined
  const product = products.find((p) => p.id === refill.productId);
  const totalPrice = product ? refill.quantity * product.sellingPrice : 0;

  return (
    <Card
      variant="outlined"
      style={{
        marginBottom: "10px",
        position: "relative",
        borderRadius: " 10px",
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
        {/* Header with index and menu */}
        <div
          style={{
            alignItems: "center",
            paddingBottom: "4px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
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
          </div>

          <IconButton onClick={handleMenuOpen}>
            <MoreVert />
          </IconButton>
        </div>

        {/* Menu */}
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

        {/* Divider */}
        <Divider style={{ width: "95%", alignSelf: "center" }} />

        {/* Details */}
        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Customer Name</span>
          <span>{refill.customerName}</span>
        </Typography>

        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Phone Number</span>
          <span>{refill.phoneNumber}</span>
        </Typography>

        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Gas Type</span>
          <span>{product ? product.gasName : "N/A"}</span>
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
          <span>{product ? product.gasSize : "N/A"}</span>
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
          <span>{refill.quantity}</span>
        </Typography>

        {/* Total Price */}
        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Total Price</span>
          <span>{totalPrice}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RefillItem;
