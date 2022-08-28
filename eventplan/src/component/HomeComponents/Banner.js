import React from "react";
import "./Banner.css";


export default function Banner() {
 
//video
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/hiruniherath/video/upload/v1661664555/test/Untitled_video_-_Made_with_Clipchamp_xgmxwb.mp4"
        />
      </video>
      
    </div>
  );
}