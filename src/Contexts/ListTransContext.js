import React, { createContext, useState } from "react";

export const ListTransContext = createContext();

const ListTransContextProvider = (props) => {
  const [animationChange , setAnimationChange] = useState ("note-trans-item-flex animate__animated animate__slideInDown")
  const [TransList, setTransList] = useState([]);

  const addTrans = (id, walletName, amount,type, note, tags) => {
    id = TransList.length;
    // idWalletTrans =
    setTransList([...TransList, { id, walletName, amount,type, note, tags }]);
  };

  const removeTrans = (id) => {
    setTransList(TransList.filter((transaction) => transaction.id !== id));
    
  };
  return (
    <ListTransContext.Provider value={{ TransList, addTrans, removeTrans }}>
      {props.children}
    </ListTransContext.Provider>
  );
};
export default ListTransContextProvider;
