import { DRAWER_LINKS } from "../data/links";
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
  showSplash: true,
  header: {},
  loading: false
};

const checkProperties = (initial, storage) => {
  let a = Object.entries(initial), b = Object.entries(storage), result = {};
  for(let index = 0; index < a.length; index++) {
    const A_KEY = a[index][0];
    if(index < b.length && A_KEY === b[index][0]) {
      const B_VALUE = b[index][1],
      B_VALUE_STRING = (typeof B_VALUE === "string") ? B_VALUE : null, 
      B_VALUE_BOOLEAN = (typeof B_VALUE === "boolean") ? true : null, 
      B_VALUE_OBJ = (typeof B_VALUE === "object") ? B_VALUE : null;
      let LVL2 = null, LVL3 = null;
      if(B_VALUE_STRING) {
        LVL2 = DRAWER_LINKS.filter(x => x.id === A_KEY && x.lvl2.find(y => y.value === B_VALUE_STRING)) ? true : null;
      }
      else if(B_VALUE_BOOLEAN) {
        LVL2 = DRAWER_LINKS.filter(x => x.id === A_KEY) ? true : null;
      }  
      else if(B_VALUE_OBJ) {
        let counter = 0;
        Object.values(B_VALUE_OBJ).forEach(b_value => {
          if(DRAWER_LINKS.filter(x => x.id === A_KEY).filter(x => x.lvl3 && x.lvl2.filter(y => y.lvl3.find(z => z.value === b_value)))) 
            counter++;
        })
        if(counter === Object.values(B_VALUE_OBJ).length) LVL3 = true;
      }
      result[A_KEY] = (LVL2 || LVL3) ? B_VALUE : a[index][1];
    }
    else result[A_KEY] = a[index][1];
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
      localStorage.setItem('portfolioSettings', JSON.stringify(item));
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
    case 'UPDATE_SPLASH':
      const SPLASH = {
        ...state,
        showSplash: action.payload
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(SPLASH));
      return SPLASH;
    case 'UPDATE_HEADER':
      const HEADER = {
        ...state,
        header: action.payload
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(HEADER));
      return HEADER;
    default: return state;
  }
}

export default settingsReducer;