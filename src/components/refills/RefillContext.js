import React, { createContext, useContext, useState } from "react";

export const RefillContext = createContext();

const RefillProvider = ({ children }) => {
  const [refills, setRefills] = useState([]);

  const addRefill = (customerName, phoneNumber, gasType, gasSize, quantity) => {
    const newRefill = {
      id: Date.now().toString(),
      customerName,
      phoneNumber,
      gasType,
      gasSize,
      quantity,
    };
    setRefills((prevRefills) => [...prevRefills, newRefill]);
  };

  const deleteRefill = (id) => {
    setRefills((prevRefills) =>
      prevRefills.filter((refill) => refill.id !== id)
    );
  };

  const updateRefill = (id, customerName, phoneNumber, gasType, gasSize, quantity) => {
    setRefills((prevRefills) =>
      prevRefills.map((refill) =>
        refill.id === id ? { ...refill, customerName, phoneNumber, gasType, gasSize, quantity} : refill
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
