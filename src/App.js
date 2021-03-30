import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css/animate.css'

import ListTransContextProvider from "./ContextsApi/ListTransContext";
import ListWalletContextProvider from "./ContextsApi/ListWalletContext";
import IdGeneratorContextProvider from "./ContextsApi/IdGeneratorContext";
import LandingPage from "./Screen/LandingPage/LandingPage";
import Home from "./Screen/Home/Home";
import Registration from "./Screen/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import Signup from "./Components/Signup/Signup";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ListWalletContextProvider>
          <ListTransContextProvider>
            <IdGeneratorContextProvider>
              <Route exact path="/" component={LandingPage} />
              <Route path = "/Home/:name"> <Home/> </Route>
              <Route path = "/register"> <Registration/> </Route>
              <Route path = "/signup"> <Signup/> </Route>
              <Footer/>
            </IdGeneratorContextProvider>
          </ListTransContextProvider>
        </ListWalletContextProvider>
      </div>
    </Router>
  );
}
