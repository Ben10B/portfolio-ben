import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer2 = ({ settings }) => {
  return (
    <div className={`audio-player-wrapper ${settings.audio.control}`}>
      <AudioPlayer
      src={require(`../assets/audio/${settings.audio.song}.mp3`).default}
      header={`Now Playing: ${settings.audio.song}`}
      showJumpControls={false}
      className="audio-player"
      autoPlayAfterSrcChange
      layout="stacked-reverse"
    />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, {})(AudioPlayer2);