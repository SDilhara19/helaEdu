import React, { useRef, useEffect } from "react";
import ChatBubble from "@components/subject/ChatBubble";
import { v4 as uuidv4 } from "uuid";

function ChatContent({ messageList }) {
  let messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageList]);
  return (
    <div className="content">
      {messageList.map((msg) => (
        <ChatBubble content={msg.content} type={msg.type} key={uuidv4()} />
      ))}
      <div
        ref={messagesEndRef}
        style={{ width: 0, height: 0 }}
        className="-z-10"
      ></div>
    </div>
  );
}

export default ChatContent;
