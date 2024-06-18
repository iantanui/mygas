import React, { createContext, useContext, useState } from 'react';

const GasTypeContext = createContext();

export const useGasTypes = () => {
  return useContext(GasTypeContext);
};

const GasTypeProvider = ({ children }) => {
  const [gasTypes, setGasTypes] = useState([]);

  const addGasType = (name, wholesalePrice6kg, wholesalePrice13kg) => {
    const newGasType = {
      id: Date.now().toString(),
      name,
      wholesalePrice6kg,
      wholesalePrice13kg,
    };
    setGasTypes((prevGasTypes) => [...prevGasTypes, newGasType]);
  };

  const deleteGasType = (id) => {
    setGasTypes((prevGasTypes) => prevGasTypes.filter((gasType) => gasType.id !== id));
  };

  const updateGasType = (id, name, wholesalePrice6kg, wholesalePrice13kg) => {
    setGasTypes((prevGasTypes) =>
      prevGasTypes.map((gasType) =>
        gasType.id === id ? { ...gasType, name, wholesalePrice6kg, wholesalePrice13kg } : gasType
      )
    );
  };

  return (
    <GasTypeContext.Provider value={{ gasTypes, addGasType, deleteGasType, updateGasType }}>
      {children}
    </GasTypeContext.Provider>
  );
};

export default GasTypeProvider;