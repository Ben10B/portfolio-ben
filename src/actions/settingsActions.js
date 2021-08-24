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