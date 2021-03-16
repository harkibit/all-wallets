import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListTransContextProvider from "./ContextsApi/ListTransContext";
import ListWalletContextProvider from "./ContextsApi/ListWalletContext";
import IdGeneratorContextProvider from "./ContextsApi/IdGeneratorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css/animate.css'

import NoWallet from "./NoWallet/NoWallet";
import NavBar from "./Components/Navbar/Navbar";
import Main from "./Main/Main";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ListWalletContextProvider>
          <ListTransContextProvider>
            <IdGeneratorContextProvider>
              <NavBar />
              <Route exact path="/" component={NoWallet} />
              <Route path = "/main/:name"> <Main/> </Route>
            </IdGeneratorContextProvider>
          </ListTransContextProvider>
        </ListWalletContextProvider>
      </div>
    </Router>
  );
}
