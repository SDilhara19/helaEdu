import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faRocket,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import robotFace from "@assets/icons/robot-face.svg";
import profileFace from "@assets/icons/profile-face.png";
function ChatBot() {
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
        <div className="bot-bubble shadow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed aliquam laudantium repellendus nostrum voluptates tenetur?
          </p>
          <img src={robotFace} alt="bot" />
        </div>
        <div className="user-bubble shadow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed aliquam laudantium repellendus nostrum voluptates tenetur?
          </p>
          <img src={profileFace} alt="user" />
        </div>

        <div className="bot-bubble">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed aliquam laudantium repellendus nostrum voluptates tenetur?
          </p>
          <img src={robotFace} alt="bot" />
        </div>
        <div className="user-bubble shadow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed aliquam laudantium repellendus nostrum voluptates tenetur?
          </p>
          <img src={profileFace} alt="user" />
        </div>
        <div className="bot-bubble">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed aliquam laudantium repellendus nostrum voluptates tenetur?
          </p>
          <img src={robotFace} alt="bot" />
        </div>
        <div className="reference-bubble">
          <div className="reference-control flex-c">
            <h4>
              <FontAwesomeIcon icon={faArrowLeft} size="1x" />
              References
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </h4>
          </div>
          <div className="flex-sb reference-location">
            <h4>Source : Geogrophy Grade -10</h4>
            <h4>Page : 17</h4>
          </div>
          <p className="references">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed aliquam laudantium repellendus nostrum voluptates tenetur?
          </p>
        </div>
      </div>
      <div className="chat-control">
        <div className="chat-input-wrapper">
          <textarea name="chat-input" id="chat-input" />
          <FontAwesomeIcon icon={faRocket} size="3x" />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
