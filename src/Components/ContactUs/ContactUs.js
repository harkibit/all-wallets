import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Button from "../Button/Button";
import emailjs from "emailjs-com";
import dotenv from  'dotenv'
export default function ContactUs() {
  const [value, setValue] = useState("Send Email");
  const [input_value, setInputValue] = useState(null);

  const onsubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    setValue("Sending...");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setValue("Send Email");
          console.log(result.text);
        },
        (error) => {
          setValue("Send Email");
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-us">
      <Form onSubmit={onsubmit} className="contact-form">
        <Form.Input
          placeholder="Name"
          width={16}
          name="to_name"
          id="to_name"
          value={input_value}
        />
        <Form.Input
          placeholder="Email"
          width={16}
          name="user_email"
          id="user_email"
          value={input_value}
        />
        <Form.TextArea placeholder="Your message" width={16} />
        <Button text={value} color="white" type="submit" id="button" />
      </Form>
    </div>
  );
}
