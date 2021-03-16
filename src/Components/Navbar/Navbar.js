import React, { useState } from "react";
import CreatWalletForm from "../CreateWalletForm/CreateWalletForm";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export default function NavBar() {
  const [modal, setModal] = useState(false);

  return (
    <div className="navBar">
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <button
            className="btn-color addwallet-fixed"
            onClick={() => setModal(true)}
          >
            Add wallet
          </button>
        </Navbar.Collapse>
      </Navbar>
      <CreatWalletForm show={modal} onHide={() => setModal(false)} />
    </div>
  );
}
