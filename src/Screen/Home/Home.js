import React from "react";
import TransactionsForm from "../../Components/TransactionsForm/TransactionsForm";
import TransactionsList from "../../Components/TransactionsList/TransactionsList";
import WalletCards from "../../Components/WalletCards/WalletCards";
import DashbordNavbar from "../../Components/DashbordNavbar/DashbordNavbar";
import NavBar from "../../Components/Navbar/Navbar";

import { Grid } from "semantic-ui-react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <NavBar />
        <DashbordNavbar />
        <Grid>
          <Grid.Column width={4}>
            <WalletCards />
          </Grid.Column>
          <Grid.Column width={8} className="right-side-column">
            <div className="main-items-right-div-2-sections">
              <TransactionsForm />
              <TransactionsList />
            </div>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid>
      </div>
    </>
  );
}
