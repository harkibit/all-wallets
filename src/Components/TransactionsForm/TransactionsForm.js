import React, { useState, useContext } from "react";
import { ListTransContext } from "../../ContextsApi/ListTransContext";
import { Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import "./TransactionsForm.css";
import ButtonComponent from "../Button/Button";

function TransactionsForm() {
  const { name } = useParams();
  const { addTrans } = useContext(ListTransContext);
  const [amount, setAmount] = useState(0);
  const [noteTrans, setNoteTrans] = useState("");
  const [tagTrans, setTagTrans] = useState("");
  const [type, setType] = useState("");

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleNoteTrans = (e) => {
    setNoteTrans(e.target.value);
  };
  const handleTagTrans = (e) => {
    setTagTrans(e.target.value);
  };

  const addTransaction = (e) => {
    e.preventDefault();
    addTrans(0, name, amount, type, noteTrans, tagTrans);
    setAmount(0);
    setNoteTrans("");
    setTagTrans("");
  };

  return (
    <>
      <div className="trans-form">
        <h3>Make Transaction :</h3>
        <form onSubmit={addTransaction} className="grid-trans-form">
          <div className="inline-input">
            <input
              type="number"
              className="trans-form-inputs trans-form-input-amount"
              placeholder="Add amount"
              value={amount}
              onChange={handleAmountInput}
              required
            />
            <input
              type="button"
              className="exp-in income"
              value="income"
              onClick={handleType}
              required
            />
            <input
              type="button"
              className="exp-in expense"
              value="expense"
              onClick={handleType}
              required
            />
          </div>

          <div className="inline-input">
            <input
              type="text"
              className="trans-form-inputs trans-form-input-amount"
              placeholder="Some notes ?.."
              value={noteTrans}
              onChange={handleNoteTrans}
              required
            />
            <input
              type="text"
              className="trans-form-inputs trans-form-input-amount"
              placeholder="Add tags ( coma in between )"
              value={tagTrans}
              onChange={handleTagTrans}
            />
          </div>

          <ButtonComponent
            text="create transaction"
            className="create-trans-btn"
          />
        </form>
      </div>
    </>
  );
}
export default TransactionsForm;
