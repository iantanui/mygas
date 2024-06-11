import React, { useState, useEffect } from 'react';
import ProductDialog from '../components/products/ProductDialog';
import ProductItem from '../components/products/ProductItem';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../api';

function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleSave = (product) => {
    if (currentProduct) {
      updateProduct(product).then(() => {
        setProducts(products.map(p => p.id === product.id ? product : p));
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
    <div className="products-screen">
      <h1>Products</h1>
      <button onClick={() => setShowDialog(true)} className="btn">Add Product</button>
      {products && products.map(product => (
        <ProductItem
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

export default ProductScreen;