import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

export default function Footer() {
  const color = {
    color: "white",
  };
  const names = [
    { name: "github alternate", link : "https://github.com/harkibit" },
    { name: "linkedin", link : "https://www.linkedin.com/in/hiba-abdel-karim/" },
    { name: "codepen", link : "https://codepen.io/harkibit" },
  ];
  return (
    <div className="footer">
      <h1>Contact us</h1>
      <ContactUs />

      <div className="social-media">
        {names.map((n) => (
          <a target = "_blank" href={n.link}>
            <Icon disabled name={n.name} size="big" style={color} />
          </a>
        ))}
      </div>
      <div>
        COPYRIGHT c 2021 Hiba
      </div>
    </div>
  );
}
