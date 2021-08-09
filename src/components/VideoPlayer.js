import React from 'react';
// import ReactPlayer from 'react-player/lazy';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer className="react-player" 
      url={url} 
      volume={1} 
      light={true}
      controls={true} 
      width="100%" height="100%"
      />
    </div>
  )
}
export default VideoPlayer;