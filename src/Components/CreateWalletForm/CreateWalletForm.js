import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { ListWalletContext } from "../../ContextsApi/ListWalletContext";

import { Select } from "semantic-ui-react";
import { Modal } from "react-bootstrap";
import "./CreateWalletForm.css";

export default function CreatWalletForm({ show, onHide }) {
  let history = useHistory();
  const { addWallet } = useContext(ListWalletContext);

  const options = [
    { key: "$", value: "$", text: "Dollar $" },
    { key: "lbp", value: "LBP", text: "Lebanese Pound LBP" },
  ];
  const [walletName, setWalletName] = useState("");
  const [balance, setBalance] = useState(0);
  const [select, setSelect] = useState("$");

  const handleNameInput = (e) => {
    setWalletName(e.target.value);
  };
  const handleBalance = (e) => {
    setBalance(e.target.value);
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addWallet(3, [], walletName, balance, select);
    setWalletName("");
    setBalance(0);
    setSelect("");
    history.push("/main/" + walletName);
  };
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onHide}
        className="modal-bg-style"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Wallet
          </Modal.Title>
        </Modal.Header>

        <form onSubmit={onSubmit}>
          <Modal.Body>
            <table className="table-form-styling">
              <tr>
                <td>
                  <span className="label-crte-wlt">
                    <label for="name">Name </label>
                  </span>
                </td>
                <td>
                  <input
                    className="crte-wlt-inp-form"
                    type="text"
                    placeholder="Wallet Name ( required ) "
                    value={walletName}
                    onChange={handleNameInput}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span className="label-crte-wlt">
                    <label for="balance">Starting Balance </label>
                  </span>
                </td>
                <td>
                  <input
                    className="crte-wlt-inp-form"
                    type="number"
                    placeholder="Optional , if empty then 0"
                    value={balance}
                    onChange={handleBalance}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span className="label-crte-wlt">Currency </span>{" "}
                </td>
                <td>
                  <Select
                    placeholder="Currency"
                    options={options}
                    value={options.value}
                    onChange={handleSelect}
                    required
                  ></Select>
                </td>
              </tr>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <button className="create-wlt-btn-modal" type="submit" closeButton>
              Create Wallet
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
