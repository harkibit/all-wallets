import React from "react";
import { Card } from "semantic-ui-react";
import "./UsersReview.css"

export default function UsersReview({color}) {
    const size = {
        height : "11em",
        width : "15em",
    }
  return (
    <div>
      <Card
      style = {size}
        color={color}
        header="Rick Sanchez"
        meta="Scientist"
        description={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
          "tempor incididunt ut labore et dolore.",
        ].join("")}
      />
    </div>
  );
}
