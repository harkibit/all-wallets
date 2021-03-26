import React from "react";
import "./OurValues.css";
import { Icon } from "semantic-ui-react";

export default function OurValues() {
  const icon_size = {
    fontSize: "7vw",
    marginBottom: "8vh",
    color: "#f2b552",
  };
  return (
    <div className="ourValues-container">

      <div className="ourValues-icon">
        <div>
          <Icon name="sticky note outline" style={icon_size} />
          <p className="text-size-resp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <Icon name="shield" style={icon_size} />
          <p className="text-size-resp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <Icon name="hourglass half" style={icon_size} />
          <p className="text-size-resp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
