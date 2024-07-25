import React from "react";

function ChatBubble({ content, type }) {
  switch (type) {
    case "ai":
      return (
        <div className="bot-bubble shadow">
          <p>{content}</p>
          <img src={robotFace} alt="bot" />
        </div>
      );
      break;
    case "reference":
      return (
        <div className="reference-bubble">
          <p>{content}</p>
          <img src={robotFace} alt="user" />
        </div>
      );
      break;
    case "human":
      return (
        <div className="user-bubble shadow">
          <p>{content}</p>
          <img src={profileFace} alt="user" />
        </div>
      );
      break;

    default:
      return <></>;
      break;
  }
}
export default ChatBubble;
