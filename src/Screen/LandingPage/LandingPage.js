import React, { useState } from "react";
import CreateWalletForm from "../../Components/CreateWalletForm/CreateWalletForm";
import header from "../../assets/Untitled design (5).png";
import "./LandingPage.css";

export default function LandingPage() {
  const [modal, setModal] = useState(false);

  const mainCreateWallet = (e) => {
    e.preventDefault();
  };
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <div className="landing-page-header-text">
          <h2>Some Text in here</h2>
          <form onSubmit={mainCreateWallet}>
            <button
              type="submit"
              onClick={() => setModal(true)}
              className="add-wallet-btn-nomain"
            >
              Create Wallet
            </button>
          </form>
        </div>

        <CreateWalletForm show={modal} onHide={() => setModal(false)} />
      </div>
    </div>
  );
}
