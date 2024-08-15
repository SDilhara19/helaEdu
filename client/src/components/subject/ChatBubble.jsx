import React from "react";
import robotFace from "@assets/icons/robot-face.svg";
import profileFace from "@assets/icons/profile-face.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function ChatBubble({ content, type }) {
  const referenceBubble = (references) => {
    let [index, setIndex] = useState(0);
    let reference = references[index];
    let referenceCount = references.length;
    return (
      <div className="reference-bubble" key={uuidv4()}>
        <div className="reference-control flex-c">
          <h4>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="1x"
              onClick={() => {
                setIndex((referenceCount + index - 1) % referenceCount);
              }}
            />
            <span className="pointer-events-none">References</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="1x"
              onClick={() => {
                setIndex((index + 1) % referenceCount);
              }}
            />
          </h4>
        </div>
        <div className="flex-sb reference-location">
          <h4>Source : {reference.source}</h4>
          <h4>Page : {reference.page}</h4>
        </div>
        <p className="references">{reference.citation}</p>
      </div>
    );
  };

  const botBubble = (content) => {
    return (
      <div className="bot-bubble shadow">
        <p>{content}</p>
        <img src={robotFace} alt="bot" />
      </div>
    );
  };

  let userBubble = (content) => {
    return (
      <div className="user-bubble shadow">
        <p>{content}</p>
        <img src={profileFace} alt="user" />
      </div>
    );
  };
  switch (type) {
    case "ai": {
      return <>{botBubble(content)}</>;
    }
    case "reference":
      return <>{referenceBubble(content)}</>;
    case "human":
      return <>{userBubble(content)}</>;
    default:
      return <></>;
  }
}
export default ChatBubble;
