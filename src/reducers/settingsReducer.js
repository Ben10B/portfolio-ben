const initialState = {
  theme: {},
  header: {},
  parallaxes: {
    landing: 'PX-1',
    slideshow: 'PX-10'
  },
  background: 'BG-1',
  loading: false
};

const settingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SETTINGS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.payload
      };
    case 'UPDATE_BACKGROUND':
      return {
        ...state,
        background: action.payload
      };
    case 'UPDATE_PARALLAX':
      return {
        ...state,
        parallaxes: { ...state.parallaxes, ...action.payload }
      };
    case 'UPDATE_HEADER':
      return {
        ...state,
        header: action.payload
      };
    default: 
      return state;
  }
}

export default settingsReducer;