import React from "react";
import "./TransactionItem.css"

export default function TransactionItem(props) {
  const { type, amount, note, tags } = props;
  return (
    <div className="trans-item">
      <div className="trans-item-info-container">
        <div className="trans-amount-note-flex">
          <h3 className="trans-amount">
            {type === "expense" ? "- " + parseInt(amount) : parseInt(amount)}
          </h3>
          <span>{note}</span>
        </div>

        {tags.map((tag) => tags.length !== 0 && <Label circular>{tag}</Label>)}
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
  );
}
