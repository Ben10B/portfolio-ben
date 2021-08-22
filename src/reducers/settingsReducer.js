const initialState = {
  theme: 'DARK',
  background: 'BG-1',
  parallaxes: {
    landing: 'PX-1',
    slideshow: 'PX-10'
  },
  audio: {
    song: 'Wolfs Milk',
    control: 'hide'
  },
  header: {},
  loading: false
};

const checkProperties = (initial, storage) => {
  let a = Object.entries(initial), b = Object.entries(storage), result = {};
  for(let index = 0; index < a.length; index++) {
    if(index < b.length && a[index][0] === b[index][0]) 
      result[a[index][0]] = b[index][1];
    else result[a[index][0]] = a[index][1];
  }
  return result;
}

const settingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PRESET_SETTINGS_STATE': 
      localStorage.setItem('portfolioSettings', JSON.stringify(initialState));
      return {
        ...state,
        loading: false
      };
    case 'LOAD_SETTINGS_STATE': 
      let item = JSON.parse(localStorage.getItem('portfolioSettings'));
      item = checkProperties(initialState, item);
      var body = document.querySelector('body'); body.className = item.background;
      return {
        ...item,
        loading: false
      };
    case 'SETTINGS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'UPDATE_THEME':
      const THEME = {
        ...state,
        theme: action.payload
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(THEME));
      return THEME;
    case 'UPDATE_BACKGROUND':
      const BG = {
        ...state,
        background: action.payload
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(BG));
      return BG;
    case 'UPDATE_PARALLAX':
      const PARALLAX = {
        ...state,
        parallaxes: { ...state.parallaxes, ...action.payload }
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(PARALLAX));
      return PARALLAX;
    case 'UPDATE_AUDIO':
      const AUDIO = {
        ...state,
        audio: { ...state.audio, ...action.payload }
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(AUDIO));
      return AUDIO;
    case 'UPDATE_HEADER':
      const HEADER = {
        ...state,
        header: action.payload
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(HEADER));
      return HEADER;
    default: 
      return state;
  }
}

export default settingsReducer;