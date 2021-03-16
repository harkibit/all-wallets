import React, { createContext, useState } from "react";

export const IdGeneratorContext = createContext();

const IdGeneratorContextProvider = (props) => {
  const [IdGenerator, setIdGenerator] = useState([]);
  return (
    <IdGeneratorContext.Provider value={{ IdGenerator, setIdGenerator }}>
      {props.children}
    </IdGeneratorContext.Provider>
  );
};

export default IdGeneratorContextProvider;
