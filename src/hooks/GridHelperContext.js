import { createContext, useState, useContext } from 'react';

export const GridHelperContext = createContext({});

const GridHelperProvider = ({ children }) => {
  const initialState = [
    { name: 'solarSystem', isClicked: false },
    { name: 'sunMesh', isClicked: false },
    { name: 'earthOrbit', isClicked: false },
    { name: 'earthMesh', isClicked: false },
    { name: 'moonMesh', isClicked: false },
  ];
  const [selectedOptions, setSelectedOptions] = useState(initialState);

  return (
    <GridHelperContext.Provider
      value={{
        selectedOptions,
        setSelectedOptions,
      }}
    >
      {children}
    </GridHelperContext.Provider>
  );
};

export const useGridHelperContext = () => {
  return useContext(GridHelperContext);
};

export default GridHelperProvider;
