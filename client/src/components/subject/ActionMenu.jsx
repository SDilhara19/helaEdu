import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faComment,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import robotFace from "@assets/icons/robot-face.svg";
function ActionMenu({
  sideBarComponent,
  sideBarComponentMap,
  setSideBarComponent,
}) {
  const setSideBarValue = (sideBarValue) => {
    if (sideBarValue.type == sideBarComponent.type) {
      setSideBarComponent(sideBarComponentMap.PASSIVE);
    } else {
      setSideBarComponent(sideBarValue);
    }
  };

  return (
    <div className="action-menu">
      <ul>
        <li>
          <FontAwesomeIcon icon={faShapes} size="1x" />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faStickyNote}
            size="1x"
            onClick={() => {
              setSideBarValue(sideBarComponentMap.STICKYNOTE);
            }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faComment}
            size="1x"
            onClick={() => {
              setSideBarValue(sideBarComponentMap.DISCUSSION);
            }}
          />
        </li>
        <li>
          <img
            src={robotFace}
            alt=""
            onClick={() => {
              setSideBarValue(sideBarComponentMap.CHATBOT);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default ActionMenu;
