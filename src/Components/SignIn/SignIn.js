import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import "./SignIn.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div className="signin">
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Name"
          name="name"
          value={name}
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
        <Form.Button content="Login" />

        <div className="fg-su">
          <span>Forget Password?</span>
          <span>
            Do not have an account? <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </Form>
    </div>
  );
}
