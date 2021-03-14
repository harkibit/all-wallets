import React, { useState,createRef } from "react";
import CreatWalletForm from "./CreateWalletForm";
import Navbar from "react-bootstrap/Navbar";
import "./component.css";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const contextRef = createRef()

  return (
    <div className="navBar">
      <Navbar>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text> */}
              {/* <Rail position='right'> */}
                  <button className="btn-color addwallet-fixed" onClick={() => setModal(true)}>
                    Add wallet
                  </button>
              {/* </Rail> */}
              {/* <Sticky context={contextRef}>
                
              </Sticky> */}
            
            
          {/* </Navbar.Text> */}
        </Navbar.Collapse>
      </Navbar>
      <CreatWalletForm show={modal} onHide={() => setModal(false)} />
    </div>
  );
}
