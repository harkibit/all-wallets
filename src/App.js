import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListTransContextProvider from "./Contexts/ListTransContext";
import ListWalletContextProvider from "./Contexts/ListWalletContext";
import IdGeneratorContextProvider from "./Contexts/IdGeneratorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css/animate.css'
import "./App.css";

import NoMain from "./NoMain/NoMain";
import NavBar from "./Components/Navbar";
import Main from "./Main/Main";


export default function App() {
  return (
    <Router>
      <div className="App">
        <ListWalletContextProvider>
          <ListTransContextProvider>
            <IdGeneratorContextProvider>
              <NavBar />
              <Route exact path="/" component={NoMain} />
              {/* <Route path="/main" component={Main} /> */}

              <Route path = "/main/:name"> <Main/> </Route>
            </IdGeneratorContextProvider>
          </ListTransContextProvider>
        </ListWalletContextProvider>
      </div>
    </Router>
  );
}