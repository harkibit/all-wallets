import React, { useState } from "react";
import "./Register.css";
import { Container } from "semantic-ui-react";
import SignIn from "../SignIn/SignIn";

export default function Register() {
  return (
    <Container>
      <div className="register">
        <div className="reg-left-grid">
            <h1>Welcome back!</h1>
        </div>
        <div className="reg-right-grid">
          <SignIn/>
        </div>
      </div>
    </Container>
  );
}
