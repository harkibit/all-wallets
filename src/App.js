import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css/animate.css'

import ListTransContextProvider from "./ContextsApi/ListTransContext";
import ListWalletContextProvider from "./ContextsApi/ListWalletContext";
import IdGeneratorContextProvider from "./ContextsApi/IdGeneratorContext";
import NavBar from "./Components/Navbar/Navbar";
import LandingPage from "./Screen/LandingPage/LandingPage";
import Home from "./Screen/Home/Home";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ListWalletContextProvider>
          <ListTransContextProvider>
            <IdGeneratorContextProvider>
              <NavBar/>
              <Route exact path="/" component={LandingPage} />
              <Route path = "/Home/:name"> <Home/> </Route>
              <Footer/>
            </IdGeneratorContextProvider>
          </ListTransContextProvider>
        </ListWalletContextProvider>
      </div>
    </Router>
  );
}
