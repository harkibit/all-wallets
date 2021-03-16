import React, { useState } from "react";
import CreateWalletForm from "../Components/CreateWalletForm/CreateWalletForm";
import "./nowallet.css";

export default function NoWallet() {
  const [modal, setModal] = useState(false);

  const mainCreateWallet = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="nomain">
      <div className="nomain-parent-div">
        <div className="u-hv-no-wllt">
          Ooops ! <br />
          <h1>You have no wallet, You can now Create one \(^_^)/ </h1>
        </div>

        <form onSubmit={mainCreateWallet}>
          <button
            type="submit"
            onClick={() => setModal(true)}
            className="add-wallet-btn-nomain"
          >
            Create Wallet
          </button>
        </form>

        <CreateWalletForm show={modal} onHide={() => setModal(false)} />
      </div>
    </div>
  );
}
