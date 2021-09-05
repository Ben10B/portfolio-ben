import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../css/audio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateAudio } from '../actions/settingsActions';

const AudioPlayer2 = ({ settings, updateAudio }) => {
  return (
    <div className={`audio-player-wrapper ${settings.audio.control}`}>
      <div className="audio-player-content">
        <div className="close" onClick={() => updateAudio({ control: 'hide' })}>
          <FontAwesomeIcon icon={'times'}/>
        </div>
        <AudioPlayer
        src={require(`../assets/audio/${settings.audio.song}.mp3`).default}
        header={`Now Playing: ${settings.audio.song}`}
        showJumpControls={false}
        className="audio-player"
        autoPlayAfterSrcChange
        layout="stacked-reverse"
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateAudio: (ownProps) => dispatch(updateAudio(ownProps)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer2);