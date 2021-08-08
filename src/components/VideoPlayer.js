import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({ url }) => {
  return <ReactPlayer className="react-player" url={url} volume={1} controls={true}/>
}
export default VideoPlayer;