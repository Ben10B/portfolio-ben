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
  header: {
    style: 'HEADER-1',
    buttonsize: 'BUTTON-1',
    buttonstyle: 'BTNSTYLE-1'
  },
  loading: false
};

const checkProperties = (initial, storage) => {
  let a = Object.entries(initial), b = Object.entries(storage), result = {};
  for(let index = 0; index < a.length; index++) {
    const A_KEY = a[index][0];
    if(index < b.length && A_KEY === b[index][0]) {
      const B_VALUE = b[index][1], B_VALUE_OBJ = (typeof B_VALUE === "object" && Object.keys(B_VALUE).length > 0) ? B_VALUE : null,
      B_VALUE_STRING = (typeof B_VALUE === "string") ? B_VALUE : null, B_VALUE_BOOLEAN = (typeof B_VALUE === "boolean") ? true : null;
      if(B_VALUE_STRING) {
        let LVL2 = DRAWER_LINKS.filter(x => x.id === A_KEY && x.lvl2.find(y => y.value === B_VALUE_STRING)) ? true : null;
        result[A_KEY] = LVL2 ? B_VALUE : a[index][1];
      }
      else if(B_VALUE_BOOLEAN) {
        let LVL2 = DRAWER_LINKS.filter(x => x.id === A_KEY) ? true : null;
        result[A_KEY] = LVL2 ? B_VALUE : a[index][1];
      }  
      else if(B_VALUE_OBJ) {
        let temp = {};
        Object.keys(a[index][1]).forEach((x, a_index) => {
          if(Object.keys(B_VALUE_OBJ).find(b => b === x)) {
            let b_index = Object.keys(B_VALUE_OBJ).findIndex(b => b === x);
            temp[x] = Object.values(B_VALUE_OBJ)[b_index];
          }
          else temp[x] = Object.values(a[index][1])[a_index];
        })
        result[A_KEY] = temp;
      }
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
        header: { ...state.header, ...action.payload }
      };
      localStorage.setItem('portfolioSettings', JSON.stringify(HEADER));
      return HEADER;
    default: return state;
  }
}

export default settingsReducer;