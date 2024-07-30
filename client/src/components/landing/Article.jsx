import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Article({ alignment, img }) {
  return (
    <div className={`article ${alignment}`}>
      <div className="article-content-wrapper">
        <div className="article-left-panel">
          <div className="article-content">
            <div className="meta flex-sb">
              <div className="title">
                <h3>Elements</h3>
                <h5>2021.03.15</h5>
              </div>
              <div className="profile">
                <FontAwesomeIcon icon={faCircleUser} className="user-logo" />
                <h4>M.R Perera</h4>
              </div>
            </div>
            <div className="content">
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugiat vitae maiores accusantium, soluta tenetur, quis
                nihil veniam, ut excepturi accusamus tempore earum quod dolore
                eligendi commodi non! Nihil, vitae......
              </h4>
            </div>
            <div className="control">
              <div className="stat-details">
                <h4>53 likes</h4>
                <h4>12 comments</h4>
              </div>
              <div className="buttons flex">
                <div>
                  <button className="blue-button flex-sb bookmark-button">
                    <FontAwesomeIcon icon={faBookmark} size="2x" />

                    <h4>Read Later</h4>
                  </button>
                </div>
                <div>
                  <button className="blue-button ">
                    <h4>Read Now</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-right-panel">
          <img src={img} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Article;
