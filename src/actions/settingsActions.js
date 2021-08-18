export const updateTheme = () => dispatch => {
  dispatch(setSettingsLoading());
  dispatch({
    type: 'UPDATE_THEME',
    payload: {}
  })
}

export const updateBackground = (bg) => dispatch => {
  dispatch(setSettingsLoading());
  dispatch({
    type: 'UPDATE_BACKGROUND',
    payload: bg
  })
}

export const setSettingsLoading = () => {
  return {
    type: 'SETTINGS_LOADING'
  };
};