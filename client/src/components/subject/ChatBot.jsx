import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faRocket,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import robotFace from "@assets/icons/robot-face.svg";
import profileFace from "@assets/icons/profile-face.png";
import { sendToChatBot } from "@services/ChatBotService";
import ChatBubble from "@components/subject/ChatBubble";

function ChatBot() {
  const [payload, setPayload] = useState({
    prompt: "",
    grade: "11",
    subject: "Geography",
    student_id: "232",
    chat_session_id: "chat4",
  });
  const [history, setHistory] = useState([]);
  const textInputRef = useRef(null);

  return (
    <div className="chatbot">
      <div className="title-wrapper">
        <div className="title flex-sb">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>
            Grade 10
            <FontAwesomeIcon icon={faPen} className="pen-icon" />
          </h4>
        </div>
      </div>
      <div className="content">
        {history.forEach((msg) => {
          <ChatBubble content={msg.content} type={msg.type} />;
        })}
      </div>
      <div className="chat-control">
        <div className="chat-input-wrapper">
          <textarea name="chat-input" id="chat-input" ref={textInputRef} />
          <FontAwesomeIcon
            icon={faRocket}
            size="3x"
            onClick={() => {
              payload.prompt = textInputRef.current.value;
              sendToChatBot(payload).then((res) => {
                let response = res.data.response;
                setHistory(response.history);
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
