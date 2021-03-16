import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import TransactionsForm from "../Components/TransactionsForm/TransactionsForm";
import TransactionsList from "../Components/TransactionsList/TransactionsList";
import WalletCards from "../Components/WalletCards/WalletCards";
import { Grid } from "semantic-ui-react";
import "./main.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <Grid>
          <Grid.Column width={3} className="sidebar">
            <div className="arrow-card-inline">
              <WalletCards />
            </div>
          </Grid.Column>
          <Grid.Column width={13} className="right-side-column">
            <div className="main-items-right-div">
              <TransactionsForm />
              <TransactionsList />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}
