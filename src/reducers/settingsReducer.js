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
  fight: {
    animation: 'DEFAULT-FIGHT',
    choreo: 'DEFAULT-CHOREO'
  },
  loading: false,
  drawerBtn: 'DEFAULT',
  secretUnlock: {
    unlock: false,
    modal: 'hide'
  }
};

const checkProperties = (initial, storage) => {
  let a = Object.entries(initial), b = Object.entries(storage), result = {};
  for(let index = 0; index < a.length; index++) {
    const A_KEY = a[index][0];
    if(index < b.length && A_KEY === b[index][0]) {
      const B_VALUE = b[index][1], B_VALUE_OBJ = (typeof B_VALUE === "object" && Object.keys(B_VALUE).length > 0) ? B_VALUE : null,
      B_VALUE_STRING = (typeof B_VALUE === "string") ? B_VALUE : null, B_VALUE_BOOLEAN = (typeof B_VALUE === "boolean") ? true : null;
      
      if(B_VALUE_STRING) {
        let LVL1 = DRAWER_LINKS.find(x => x.lvl2 && x.lvl2.find(y => y.id === A_KEY));
        if(!LVL1) result[A_KEY] = a[index][1];
        else {
          let LVL2 = LVL1.lvl2.find(x => x.value === B_VALUE);
          result[A_KEY] = LVL2 ? B_VALUE : a[index][1];
        }
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
const saveToLocalStorage = (data) => {
  localStorage.setItem('portfolioSettings', JSON.stringify(data));
}
const settingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PRESET_SETTINGS_STATE': 
      saveToLocalStorage(initialState);
      return {
        ...state,
        loading: false,
      };
    case 'LOAD_SETTINGS_STATE': 
      let item = JSON.parse(localStorage.getItem('portfolioSettings'));
      item = checkProperties(initialState, item);
      saveToLocalStorage(item);
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
      saveToLocalStorage(THEME);
      return THEME;
    case 'UPDATE_BACKGROUND':
      const BG = {
        ...state,
        background: action.payload
      };
      saveToLocalStorage(BG);
      return BG;
    case 'UPDATE_PARALLAX':
      const PARALLAX = {
        ...state,
        parallaxes: { ...state.parallaxes, ...action.payload }
      };
      saveToLocalStorage(PARALLAX);
      return PARALLAX;
    case 'UPDATE_AUDIO':
      const AUDIO = {
        ...state,
        audio: { ...state.audio, ...action.payload }
      };
      saveToLocalStorage(AUDIO);
      return AUDIO;
    case 'UPDATE_SPLASH':
      const SPLASH = {
        ...state,
        showSplash: action.payload
      };
      saveToLocalStorage(SPLASH);
      return SPLASH;
    case 'UPDATE_HEADER':
      const HEADER = {
        ...state,
        header: { ...state.header, ...action.payload }
      };
      saveToLocalStorage(HEADER);
      return HEADER;
    case 'UPDATE_FIGHT':
      const FIGHT = {
        ...state,
        fight: { ...state.fight, ...action.payload }
      }
      saveToLocalStorage(FIGHT);
      return FIGHT;
    case 'UPDATE_LINKS': 
      return {
        ...state,
        drawerLinks: action.payload
      };
    case 'UPDATE_PROJECT_PAGE':
      const PROJECT_PAGE = {
        ...state,
        page: action.payload
      }
      saveToLocalStorage(PROJECT_PAGE);
      return PROJECT_PAGE;
    case 'UPDATE_DRAWER_BUTTON':
      const DRAWER_BTN = {
        ...state,
        drawerBtn: action.payload
      }
      saveToLocalStorage(DRAWER_BTN);
      return DRAWER_BTN;
    case 'UNLOCK_SECRET':
      const SECRET = { 
        ...state, 
        secretUnlock: { ...state.secretUnlock, ...action.payload }
      };
      saveToLocalStorage(SECRET);
      return SECRET;
    default: return state;
  }
}

export default settingsReducer;