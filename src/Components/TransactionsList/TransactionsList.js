import React, { useContext, useState } from "react";
import { ListTransContext } from "../../ContextsApi/ListTransContext";

import { useParams } from "react-router-dom";
import "./TransactionsList.css";
import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionsList() {
  const { TransList } = useContext(ListTransContext);
  const { name } = useParams();
  const [animationChange] = useState(
    "note-trans-item-flex animate__animated animate__slideInDown animate__faster"
  );
  let allTags = [];

  return (
    <div>
      {TransList.filter((transaction) => transaction.walletName === name).map(
        (transaction, i) => {
          allTags = transaction.tags.split(",");

          return (
            <div className={animationChange}>
              <div className="trans-list-div-parent" id={i}>
                <TransactionItem
                  id={transaction.id}
                  amount={transaction.amount}
                  note={transaction.note}
                  type={transaction.type}
                  allTags={allTags}
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
