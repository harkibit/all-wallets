import React, { useContext, useState } from "react";
import { ListTransContext } from "../../ContextsApi/ListTransContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Label, Popup } from "semantic-ui-react";
import "./TransactionItem.css";
import { Accordion, Icon } from "semantic-ui-react";

export default function TransactionItem(props) {
  const { id, amount, note, type, allTags } = props;
  const { removeTrans } = useContext(ListTransContext);

  const handleRemoveTrans = (id) => {
    removeTrans(id);
  };
  const style_popup = {
    borderRadius: 8 + "px",
    opacity: 0.7,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <div className="trans-item">
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          <span className="trans-amount">
            {type === "expense" ? "- " + parseInt(amount) : parseInt(amount)}
          </span>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === -1}>
          <span>{note}</span>
          <br />

          {allTags.length !== 0 &&
            allTags.map(
              (tag) => allTags.length !== 0 && <Label circular>{tag}</Label>
            )}
        </Accordion.Content>
      </Accordion>

      <div>
        <Popup
          trigger={
            <FontAwesomeIcon
              icon={faTrashAlt}
              className = "trash"
              onClick={() => handleRemoveTrans(id)}
            />
          }
          content="delete"
          inverted
          style={style_popup}
          position="top center"
          size="tiny"
        />
      </div>
    </div>
  );
}
