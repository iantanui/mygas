import React, { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (productName, quantity, sellingPrice, gasName, gasSize) => {
    const newProduct = {
      id: Date.now().toString(),
      productName,
      quantity,
      sellingPrice,
      gasName,
      gasSize,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const updateProduct = (productId, productName, quantity, sellingPrice, gasName, gasSize) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, productName, quantity, sellingPrice, gasName, gasSize }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct, }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
