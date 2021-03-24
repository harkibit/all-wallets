import React, { useState } from "react";
import CreateWalletForm from "../../Components/CreateWalletForm/CreateWalletForm";
import OurValues from "../../Components/OurValues/OurValues";
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
          <h2 className="landing-page-header-text-h2">Manage your budget</h2>
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
      <div className="landing-page-body">
        <OurValues />
      </div>
    </div>
  );
}
