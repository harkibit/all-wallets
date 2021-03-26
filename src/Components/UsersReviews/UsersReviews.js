import React from "react";
import UsersReview from "../UsersReview/UsersReview";
import "./UsersReviews.css";

export default function UsersReviews() {
  const colors = ["red", "orange", "yellow", "blue", "violet", "purple"];
  return (
    <div className="l-c-container">
      <div>
        <div>
          {colors.map((c) => (
            <UsersReview color={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
