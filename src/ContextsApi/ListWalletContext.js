import React, { createContext, useState } from "react";

export const ListWalletContext = createContext();
const ListWalletContextProvider = (props) => {
  const [WalletList, setWalletList] = useState([]);

  const addWallet = (id, transactions, walletName, balance, select) => {
    id = WalletList.length;
    setWalletList([
      ...WalletList,
      { id, transactions, walletName, balance, select },
    ]);
  };

  const removeWallet = (index) => {
    setWalletList(WalletList.filter((wallet) => wallet.id !== index));
  };
  return (
    <ListWalletContext.Provider value={{ WalletList, addWallet, removeWallet }}>
      {props.children}
    </ListWalletContext.Provider>
  );
};
export default ListWalletContextProvider;
