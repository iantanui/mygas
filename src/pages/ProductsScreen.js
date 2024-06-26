import React, { useState } from "react";
import ProductDialog from "../components/products/ProductDialog";
import ProductItem from "../components/products/ProductItem";
import { Button, Container, List, Typography } from "@mui/material";
import { useProducts } from "../components/products/ProductContext";

function ProductScreen() {
  const { products, addProduct, deleteProduct, updateProduct } = useProducts();
  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSave = (gasTypeId, gasSize, quantity, sellingPrice) => {
    if (currentProduct) {
      updateProduct(
        currentProduct.id,
        gasTypeId,
        gasSize,
        quantity,
        sellingPrice
      );
    } else {
      addProduct(gasTypeId, gasSize, quantity, sellingPrice);
    }
    setShowDialog(false);
    setCurrentProduct(null);
  };

  return (
    <Container style={{ padding: "8px" }}>
      <Typography variant="h6" style={{ textAlign: "left" }}>
        Gas Cylinders
      </Typography>
      <Typography variant="body2">List of gas</Typography>

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
        onClick={() => setShowDialog(true)}
      >
        Add Product
      </Button>

      <List>
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductItem
              index={index}
              product={product}
              onEdit={(editedProduct) => {
                setCurrentProduct(editedProduct);
                setShowDialog(true);
              }}
              onDelete={(productId) => deleteProduct(productId)}
            />
          </React.Fragment>
        ))}
      </List>

      <ProductDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onSave={handleSave}
        product={currentProduct}
      />
    </Container>
  );
}

export default ProductScreen;
