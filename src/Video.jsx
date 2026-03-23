import React, { useRef, useState, useEffect } from "react";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play automatically when component is mounted 
    // This is optional if scroll auto-plays
  }, []);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
