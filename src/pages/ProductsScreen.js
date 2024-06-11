import React, { useEffect, useState } from "react";
import ProductItem from "../components/products/ProductItem";
import ProductDialog from "../components/products/ProductDialog";

function ProductsScreen() {
  const [products, setProducts] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleSave = (product) => {
    if (currentProduct) {
      updatedProduct(product).then(() => {
        setProducts(products.map((p) => (p.id === product.id ? product : p)));
      });
    } else {
      addProduct(product).then((newProduct) => {
        setProducts([...products, newProduct]);
      });
    }
    setShowDialog(false);
    setCurrentProduct(null);
  };

  return (
    <div>
      <button onClick={() => setShowDialog(true)}>Add Product</button>
        {products.map(product => (
          key={product.id}
          product={product}
          onEdit={() => {
          setCurrentProduct(product);
          setShowDialog(true);
          }}
          onDelete={() => {
            deleteProduct(product.id).then(() => {
              setProducts(products.filter(p => p.id !== product.id));
            });
          }}
          />
        ))}
        {showDialog && (
          <ProductDialog
          product={currentProduct}
          onDismiss={() => setShowDialog(false)}
          onSave={handleSave}
          />
        )}
        </div>
  );
}

export default ProductsScreen;
