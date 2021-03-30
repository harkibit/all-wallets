import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import "./Signup.css"

export default function Signup() {
  const [Username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [email, setEmail] = useState("");
  const handlePassword = (e) => {
    setPassowrd(e.target.value)
  }
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    setUsername(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div className = "signin">
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Username"
          name="Username"
          value={Username}
          onChange={handleChange}
          width={16}
        />
        <Form.Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleMailChange}
          width={16}
        />
        <Form.Input
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePassword}
          width={16}
        />
        <Form.Button content="Register" />

        <div className = "fg-su">
            <span>Already have an account? Sign in</span>
        </div>
      </Form>
    </div>
  );
}
