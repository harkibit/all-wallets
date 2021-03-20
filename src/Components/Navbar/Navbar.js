import React, { useState } from "react";
import CreatWalletForm from "../CreateWalletForm/CreateWalletForm";
import Navbar from "react-bootstrap/Navbar";
import Button from "../Button/Button"
import "./Navbar.css";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  return (
    <div className="navBar">
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Button color = "white" text = "add wallet" onClick={() => setModal(true)}/>
        </Navbar.Collapse>
      </Navbar>
      <CreatWalletForm show={modal} onHide={() => setModal(false)} />
    </div>
  );
}
