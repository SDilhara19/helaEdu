import React, { useState } from "react";
import { Header } from "@components/common";
import {
  PdfBook,
  ActionMenu,
  ChatBot,
  Discussion,
  StickyNote,
} from "@components/subject";
import { useParams } from "react-router-dom";

function Subject() {
 
  const {subject} = useParams();
  console.log(subject);
  const sideBarComponentMap = Object.freeze({
    PASSIVE: false,
    DISCUSSION: <Discussion />,
    CHATBOT: <ChatBot  subject={subject}/>,
    STICKYNOTE: <StickyNote />,
  });

  const [sideBarComponent, setSideBarComponent] = useState(
    sideBarComponentMap.PASSIVE
  );

  return (
    <>
      <Header />
      <section className="subject">
        <div
          className={`left-panel ${sideBarComponent ? "sidebar-visible" : ""}`}
        >
          <ActionMenu
            sideBarComponent={sideBarComponent}
            sideBarComponentMap={sideBarComponentMap}
            setSideBarComponent={setSideBarComponent}
          />
          <PdfBook subject={subject}/>
        </div>
        <div className={`right-panel ${sideBarComponent ? "active" : ""}`}>
          {sideBarComponent}
        </div>
      </section>
    </>
  );
}

export default Subject;
