import React, { createContext, useContext, useState } from "react";

const RefillContext = createContext();

export const useRefills = () => {
  return useContext(RefillContext);
};

const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);

  const addRefill = (name, quantity, price) => {
    const newRefill = {
      id: Date.now().toString(),
      name,
      quantity,
      price,
    };
    setRefills((prevRefills) => [...prevRefills, newRefill]);
  };

  const deleteRefill = (id) => {
    setRefills((prevRefills) =>
      prevRefills.filter((refill) => refill.id !== id)
    );
  };

  const updateRefill = (id, name, quantity, price) => {
    setRefills((prevRefills) =>
      prevRefills.map((refill) =>
        refill.id === id ? { ...refill, name, quantity, price } : refill
      )
    );
  };

  return (
    <RefillContext.Provider
      value={{ refills, addRefill, deleteRefill, updateRefill }}>
      {children}
    </RefillContext.Provider>
  );
};

export default RefillContext;
