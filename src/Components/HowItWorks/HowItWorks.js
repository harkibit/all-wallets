import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <div className="howitworks">
      <div className="howitworks-title-text">
        <h1 className="howitworks-title">How it works</h1>
        <p className="howitworks-text text-size-resp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <img
        className="howitworks-img"
        src="https://image.freepik.com/free-vector/business-finance-services-money-loan-budget-planning_1200-539.jpg"
      />
    </div>
  );
}
