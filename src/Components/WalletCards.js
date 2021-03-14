import React, { useContext, useState } from "react";
import { useHistory, Link} from "react-router-dom";

import { ListWalletContext } from "../Contexts/ListWalletContext";
import { IdGeneratorContext } from "../Contexts/IdGeneratorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { Popup, Label } from 'semantic-ui-react'
import "./component.css";
// import DeleteModal from "./DeleteModal"

function WalletCards() {
  // const history = useHistory()
  const { WalletList, removeWallet } = useContext(ListWalletContext);
  const { IdGenerator, setIdGenerator } = useContext(IdGeneratorContext);
  
  const handleRemoveWallet = (id) => {
    removeWallet(id);
  }; 
  const style_popup = {
    borderRadius: 10 + "px",
    opacity: 0.7,
  }
  const colors = ["#0fbc9e", "#8916fe", "#ff25c2"]
  const labelColor = ["teal","purple", "pink"]
  const changeClassName = (e) => {
    e.currentTarget.classList.add("onclickcard")
  }
  let step = 0;
  
  return (
    <div>
        {WalletList.map((item, index) => {
          
          { step > 1 ? step = 0 : step++ }
          return(
          <Link to = {`/main/${item.walletName}`} style={{ textDecoration: 'none'}} >
            <div
              className="walletcard animate__animated animate__slideInDown animate__faster"
              style = { {backgroundColor : colors[step]} }
              eventKey={index}
              onFocus={changeClassName}
            >
              
            <div className="label-trans-numb">
              <Label circular basic size = "big" color = {labelColor[step]}>
                {item.balance} {item.select}
              </Label>
            </div>

            <div className="wallet-name">{index+1}. {item.walletName} </div>

            <div className="icons-card">
              <Popup
                trigger={<FontAwesomeIcon
                    icon={faTrashAlt}
                    size="xs"
                    onClick={() => handleRemoveWallet(item.id)}
                  />}
                content='delete'
                inverted
                style = {style_popup}
                position='bottom center'
                size='tiny'
              />
            </div>
            </div>
          </Link>
          
          )})}
     </div>
  );
}

export default WalletCards;
