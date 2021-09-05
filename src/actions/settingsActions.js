export const updateTheme = (theme) => dispatch => {
  dispatch({
    type: 'UPDATE_THEME',
    payload: theme
  })
}

export const updateBackground = (bg) => dispatch => {
  var body = document.querySelector('body');
  body.className = bg;
  dispatch({
    type: 'UPDATE_BACKGROUND',
    payload: bg
  })
}

export const updateParallax = (parallax) => dispatch => {
  dispatch({
    type: 'UPDATE_PARALLAX',
    payload: parallax
  })
}

export const updateAudio = (audio) => dispatch => {
  dispatch({
    type: 'UPDATE_AUDIO',
    payload: audio
  })
}

export const updateHeader = (header) => dispatch => {
  dispatch({
    type: 'UPDATE_HEADER',
    payload: header
  })
}

export const updateSplash = (showSplash) => dispatch => {
  dispatch({
    type: 'UPDATE_SPLASH',
    payload: showSplash
  })
}

export const updateFight = (fight) => dispatch => {
  dispatch({
    type: 'UPDATE_FIGHT',
    payload: fight
  })
}

export const updateLinks = (links) => dispatch => {
  dispatch({
    type: 'UPDATE_LINKS',
    payload: links
  })
}

export const updateProjectPage = (page) => dispatch => {
  dispatch({
    type: 'UPDATE_PROJECT_PAGE',
    payload: page
  })
}

export const updateDrawerBtn = (drawerBtn) => dispatch => {
  dispatch({
    type: 'UPDATE_DRAWER_BUTTON',
    payload: drawerBtn
  })
}

export const unlockSecret = (secretUnlock) => dispatch => {
  if(secretUnlock.modal) {
    dispatch({
      type: 'UNLOCK_SECRET',
      payload: secretUnlock
    })
  }
  else if(secretUnlock.unlock) {
    const SECRET = ['ass', 'butt', 'booty', 'cake', 'yams'];
    if(SECRET.find(x => x === secretUnlock.unlock.toLowerCase())) {
      dispatch({
        type: 'UNLOCK_SECRET',
        payload: { unlock: true }
      })
    } else {
      dispatch({
        type: 'UNLOCK_SECRET',
        payload: { unlock: false }
      })
      return 'error';
    }
  }
}

export const presetSettings = () => dispatch => {
  dispatch({
    type: 'PRESET_SETTINGS_STATE'
  })
}

export const loadSettings = () => dispatch => {
  dispatch({
    type: 'LOAD_SETTINGS_STATE'
  })
}

export const setSettingsLoading = () => {
  return {
    type: 'SETTINGS_LOADING'
  };
};