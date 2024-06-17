import React, { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (name, quantity, price) => {
    const newProduct = {
      id: Date.now().toString(),
      name,
      quantity,
      price,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const updateProduct = (productId, name, quantity, price) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, name, quantity, price }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
