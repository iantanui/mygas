import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Typography variant="h4">Products</Typography>
        <Typography variant="body1" style={{ marginBottom: "10px" }}>
          List of products
        </Typography>
      </div>

      <Grid container spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={6}>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            Product1
            <br />
            Product2
            <br />
            Product3
          </div>
          
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Add Product
          </Button>
        </Grid>
      </Grid>

      {/* products */}
    </div>
  );
};

export default Products;
