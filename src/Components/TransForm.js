import React, { useState, useContext } from "react";
import { ListTransContext } from "../Contexts/ListTransContext";
import { Button,Input } from 'semantic-ui-react'
import { useParams } from "react-router-dom"

function TransForm() {
  
  const { name } = useParams();
  console.log(name)

  const { addTrans } = useContext(ListTransContext)

  const [amount, setAmount] = useState(0);
  const [noteTrans, setNoteTrans] = useState("");
  const [tagTrans, setTagTrans] = useState("");
  const [type, setType] = useState("");
  const [sumTrans, setSumTrans] = useState(0)

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };
  const handleType = (e) =>{
    setType(e.target.value)
  }
  const handleNoteTrans = (e) => {
    setNoteTrans(e.target.value);
  };
  const handleTagTrans = (e) => {
    setTagTrans(e.target.value);
  };

  

  const addTransaction = (e) => {
    e.preventDefault();
    addTrans(0, name ,amount,type,noteTrans,tagTrans)
    setAmount(0)
    setNoteTrans("")
    setTagTrans("")
  }

  // const create_trans_ntf = UIkit.notification("...")

  return (
    <>    
    <div className = "trans-form shadow-lg p-3 mb-5 rounded">
      <h3>Make Transaction : &nbsp;</h3><br/>

      <div className = "grid-trans-form">
        <div className = "inline-input">
          {/* add amount - number value */}
          <input type = "text" 
            className = "trans-form-inputs trans-form-input-amount" 
            placeholder = "Add Amount"
            value = {amount}
            onChange = {handleAmountInput}
            required
            
          />

          <Button.Group>
            {/* income - expense buttons */}
            <button className="btn-color exp-in income" value="income" onClick={handleType}>
              Income
            </button>
            <Button.Or />
            <button className="btn-color exp-in expense" value="expense" onClick={handleType}>
              Expense
            </button>
          </Button.Group>
        </div>

        {/* notes & tags inputs*/}
        <div className = "inline-input">
          <input type = "text" 
            className = "trans-form-inputs trans-form-input-amount" 
            placeholder = "Some Notes ?.."
            value = {noteTrans}
            onChange = {handleNoteTrans}
            required
          />

          <input type = "text" 
              className = "trans-form-inputs trans-form-input-amount" 
              placeholder = "Add Tags ( coma in between )"
              value = {tagTrans}
              onChange = { handleTagTrans }
          />
        </div>

        <div>
          <form onSubmit = {addTransaction} >
            <button className="btn-create-trans"
              type = "submit">
              Create Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default TransForm;
