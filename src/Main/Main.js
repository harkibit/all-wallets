import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import TransactionsForm from "../Components/TransactionsForm/TransactionsForm";
import TransactionsList from "../Components/TransactionsList/TransactionsList";
import WalletCards from "../Components/WalletCards/WalletCards";
import { ListWalletContext } from "../ContextsApi/ListWalletContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Grid, Icon } from "semantic-ui-react";
import "./main.css";

export default function Main() {
  const { WalletList } = useContext(ListWalletContext);
  const [glow, setGlow] = useState(false);
  const glow_card_focus = () => {
    setGlow(true);
  };
  let { name } = useParams();
  return (
    <>
      <div className="main" onClick={glow_card_focus}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} className="sidebar">
              <Icon name="braille" color="pink" />
              <span className="white">Wallets</span>
              <div className="arrow-card-inline">
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  className={glow ? "showarrow" : "hidearrow"}
                >
                </FontAwesomeIcon>
                <WalletCards />
              </div>
            </Grid.Column>
            <Grid.Column width={13} className="right-side-column">
              {WalletList.filter((wallet) => wallet.walletName === name).map(
                (wallet) =>
                  <h1 style={{ color: "white" }}>{wallet.walletName}</h1>
              )}
              <div className="main-items-right-div">
                <TransactionsForm />
                <TransactionsList />
                <br />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
