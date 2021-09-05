import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { unlockSecret } from '../actions/settingsActions';
import '../css/secret.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Secret = ({ secretUnlock, unlockSecret }) => {
  const [icon, setIcon] = useState('lock');
  const [error, setError] = useState('');
  const handleKeyUp = (e) => {
    if(e.code === 'Enter') {
      let result = unlockSecret({ unlock: e.target.value });
      if(result === 'error') {
        setError('error');
        setTimeout(() => setError(''), 800);
      }
    }
  }

  useEffect(() => {
    if(secretUnlock.unlock) setIcon('lock-open');
    else if(!secretUnlock.unlock) setIcon('lock');
  }, [secretUnlock, setIcon]);

  return (
    <div className={`secret ${secretUnlock.modal}`}>
      <article className="input-card">
        <header>
          <label>HINT: A woman's greatest physical ASSet.</label>
        </header>
        <input type="text" onKeyUp={handleKeyUp}/>
        <FontAwesomeIcon className={`${icon} ${error}`} icon={icon}/>
      </article>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    secretUnlock: state.settings.secretUnlock
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    unlockSecret: (ownProps) => dispatch(unlockSecret(ownProps)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Secret);