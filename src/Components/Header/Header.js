import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateWalletForm from "../../Components/CreateWalletForm/CreateWalletForm";
import "./Header.css";

export default function Header() {
  const [modal, setModal] = useState(false);

  const mainCreateWallet = (e) => {
    e.preventDefault();
  };

  return (
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

          <Link to="/register">
            <button className="add-wallet-btn-nomain"> Sign up </button>
          </Link>
        </form>
      </div>
      <CreateWalletForm show={modal} onHide={() => setModal(false)} />
    </div>
  );
}
