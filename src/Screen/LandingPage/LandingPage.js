import React from "react";
import OurValues from "../../Components/OurValues/OurValues";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import Header from "../../Components/Header/Header"
import UsersReviews from "../../Components/UsersReviews/UsersReviews";

import "./LandingPage.css";

export default function LandingPage() {
  
  return (
    <div className="landing-page">
      <Header/>
      <div className="landing-page-body">
        <OurValues />
        <UsersReviews/>
        <HowItWorks/>
      </div>
    </div>
  );
}
