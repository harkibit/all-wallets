import React from "react";
import { Form } from "semantic-ui-react";
import Button from "../Button/Button";
export default function ContactUs() {
    const size = {
        height : "10vh"
    }
  return (
    <div className="contact-us">
      <Form>
        <Form.Input placeholder="Name" width={16} />
        <Form.Input placeholder="Email" width={16} />
        <Form.TextArea placeholder="Your message" width={16} />
        <Button text = "Submit" color = "white"/>
      </Form>
    </div>
  );
}
