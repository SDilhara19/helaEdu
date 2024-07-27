import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faRocket } from "@fortawesome/free-solid-svg-icons";

import { sendToChatBot, getChatBotHistory } from "@services/ChatBotService";
import ChatContent from "@components/subject/ChatContent";

function ChatBot() {
  const [history, setHistory] = useState([]);
  const textInputRef = useRef(null);
  const rocketButtonRef = useRef(null);
  const sendToChat = () => {
    let content = textInputRef.current.value;
    chatPayload.prompt = content;
    let message = {
      content: content,
      type: "human",
    };

    setHistory((prevHistory) => [...prevHistory, message]);
    textInputRef.current.value = "";

    sendToChatBot(chatPayload).then((res) => {
      let answer = res.data.response.answer;
      let response = {
        content: answer,
        type: "ai",
      };
      setHistory((prevHistory) => [...prevHistory, response]);
    });
  };
  const changeRocket = (elem) => {
    if (elem.value) {
      rocketButtonRef.current.classList.add("active");
    } else {
      rocketButtonRef.current.classList.remove("active");
    }
  };

  let chatPayload = {
    prompt: "",
    grade: "11",
    subject: "Geography",
    student_id: "232",
    chat_session_id: "chat8",
  };

  useEffect(() => {
    getChatBotHistory({
      chat_session_id: chatPayload.chat_session_id,
    }).then((res) => {
      history.push(res.data.response);
      setHistory(...history);
    });
  }, []);

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
      <ChatContent messageList={history} />
      <div className="chat-control">
        <div className="chat-input-wrapper">
          <textarea
            name="chat-input"
            id="chat-input"
            ref={textInputRef}
            onInput={(e) => changeRocket(e.target)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                e.preventDefault();
                sendToChat();
                changeRocket(rocketButtonRef.current);
              }
            }}
          />
          <FontAwesomeIcon
            icon={faRocket}
            size="3x"
            ref={rocketButtonRef}
            onClick={sendToChat}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
