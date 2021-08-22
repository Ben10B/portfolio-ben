import React from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({ settings }) => {
  return (
    <div className={`audio-player-wrapper ${settings.audio.control}`}>
      <ReactAudioPlayer
       src={require(`../assets/audio/${settings.audio.song}.mp3`).default}
      autoPlay
      controls
    />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, {})(AudioPlayer);