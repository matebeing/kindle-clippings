import React, { createContext, useContext, useState } from "react";

const MyClippingsContext = createContext({});

export function useClippings() {
  const context = useContext(MyClippingsContext);

  if (!context) {
    throw Error("useClippings must be use within a MyClippingsContextProvider");
  }

  return context;
}

export const MyClippingsContextProvider = ({ children }) => {
  const [clippings, setClippings] = useState("");

  function handleSetClippings(clippings) {
    setClippings(clippings);
  }

  return (
    <MyClippingsContext.Provider
      value={{
        clippings,
        handleSetClippings,
      }}
    >
      {children}
    </MyClippingsContext.Provider>
  );
};
