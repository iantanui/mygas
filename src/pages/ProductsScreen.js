import React, { useState, useEffect } from "react";
import ProductDialog from "../components/products/ProductDialog";
import ProductItem from "../components/products/ProductItem";
import { useProducts } from "../components/products/ProductContext";
import { Button, Container, Divider, List, Typography } from "@mui/material";

function ProductScreen() {
  const { products, addProduct, deleteProduct, updateProduct } = useProducts();
  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSave = (name, quantity, price) => {
    if (currentProduct) {
      updateProduct(currentProduct.id, name, quantity, price);
    } else {
      addProduct(name, quantity, price);
    }
    setShowDialog(false);
    setCurrentProduct(null);
  };

  return (
    <div className="products-screen">
      <Container>
        <Typography variant="h6">Gas Cylinders</Typography>
        <Typography variant="body2">List of gas</Typography>

        <Button
          variant="contained"
          color="black"
          fullWidth
          onClick={() => setShowDialog(true)}
        >
          Add Product
        </Button>

        <List>
          {products
            .slice()
            .reverse()
            .map((product, index) => (
              <React.Fragment key={product.id}>
                <ProductItem
                  index={index}
                  product={product}
                  onEdit={() => {
                    setCurrentProduct(product);
                    setShowDialog(true);
                  }}
                  onDelete={() => deleteProduct(product.id)}
                />
                <Divider />
              </React.Fragment>
            ))}
        </List>
      </Container>
    </div>
  );
}

export default ProductScreen;
