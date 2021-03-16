import React from "react";
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
          <Grid.Column width={3} className="sidebar"></Grid.Column>
          <Grid.Column width={13} className="right-side-column">
            <WalletCards />
            <div className="main-items-right-div-2-sections">
              <TransactionsForm />
              <TransactionsList />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}
