import React from "react";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p className="videoFooter__description">{description}</p>
        <div className="videoFooter__ticker">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          <div className="ticker-text">
            <span>{song}</span>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
