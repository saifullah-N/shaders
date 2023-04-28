import React, { useContext, useEffect, useState } from 'react';

const MaterialContext = React.createContext();
export const useMaterial = () => {
  return useContext(MaterialContext);
};

const MaterialProvider = ({ children }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const [materialBG, setMaterial] = useState({
    current: 'none',
    items: {
      laces: '#ff3',
      mesh: '#3f3',
      caps: '#3f3',
      inner: '#3f3',
      sole: '#ffff33',
      stripes: '#3f3',
      band: '#3f3',
      patch: '#3f3',
    },
  });
  const handleMaterial = (value) => {
    setMaterial(value);
    materialBG.current != 'none'
      ? setDisplayColorPicker(true)
      : setDisplayColorPicker(false);
  };

  const value = { materialBG, handleMaterial, displayColorPicker };

  return (
    <MaterialContext.Provider value={value}>
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialProvider;
