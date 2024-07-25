import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <div className="subject-card shadow-xl">
      <div className="card-icon">
        <FontAwesomeIcon icon={faBook} size="5x" />{" "}
      </div>
      <div className="card-text">
        <h3>Sinhala</h3>
      </div>
    </div>
  );
}
export default Card;
