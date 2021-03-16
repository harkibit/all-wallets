import React, { useContext, useState } from "react";
import { ListTransContext } from "../../ContextsApi/ListTransContext";

import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Label, Popup } from "semantic-ui-react";
import "./TransactionsList.css";

export default function TransactionsList() {
  const { TransList } = useContext(ListTransContext);
  const { removeTrans } = useContext(ListTransContext);
  const { name } = useParams();
  
  const [animationChange] = useState(
    "note-trans-item-flex animate__animated animate__slideInDown animate__faster"
  );
  const handleRemoveTrans = (id) => {
    removeTrans(id);
  };
  const style_popup = {
    borderRadius: 10 + "px",
    opacity: 0.7,
  };
  let allTags = [];

  return (
    <div>
      {TransList.filter((transaction) => transaction.walletName === name).map(
        (transaction, i) => {
          allTags = transaction.tags.split(",");

          return (
            <div className={animationChange}>
              <div className="trans-list-div-parent" id={i}>
                <div className="trans-item">
                  <div>
                    <h3 className="trans-amount">
                      {transaction.type === "expense"
                        ? "- " + parseInt(transaction.amount)
                        : parseInt(transaction.amount)}
                    </h3>
                    {allTags.map(
                      (tag) =>
                        allTags.length !== 0 && (
                          <Label circular color="pink">
                            {tag}
                          </Label>
                        )
                    )}
                  </div>
                  <div>
                    <Popup
                      trigger={
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          size="2x"
                          onClick={() => handleRemoveTrans(transaction.id)}
                        />
                      }
                      content="delete"
                      inverted
                      style={style_popup}
                      position="bottom center"
                      size="tiny"
                    />
                  </div>
                </div>
              </div>

              <div className="note-card shadow-lg p-3 mb-5 rounded ">
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;
                {transaction.note}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
