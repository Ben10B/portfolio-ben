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

export const setSettingsLoading = () => {
  return {
    type: 'SETTINGS_LOADING'
  };
};