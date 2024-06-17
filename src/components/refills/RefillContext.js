import React, { createContext, useContext, useState } from "react";

export const RefillContext = createContext();

const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);

  const addRefill = (name, quantity, price) => {
    const newRefill = {
      id: Date.now().toString(),
      name,
      quantity,
      price,
      date: new Date().toISOString(),
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
      value={{ refills, addRefill, deleteRefill, updateRefill }}
    >
      {children}
    </RefillContext.Provider>
  );
};

export const useRefills = () => useContext(RefillContext);

export default RefillProvider;
