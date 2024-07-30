import React from "react";
import robotFace from "@assets/icons/robot-face.svg";
import profileFace from "@assets/icons/profile-face.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

function ChatBubble({ content, type }) {
  switch (type) {
    case "ai":
      return (
        <div className="bot-bubble shadow">
          <p>{content}</p>
          <img src={robotFace} alt="bot" />
        </div>
      );
    case "reference":
      return (
        <div className="reference-bubble">
          <p>{content}</p>
          <img src={robotFace} alt="user" />
        </div>
      );
    case "human":
      return (
        <div className="user-bubble shadow">
          <p>{content}</p>
          <img src={profileFace} alt="user" />
        </div>
      );

    default:
      return <></>;
  }
}
export default ChatBubble;
