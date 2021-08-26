const initialState = {
  project: null,
  loading: false
}

const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PROJECT_LOADING': 
      return {
        ...state,
        loading: true
      };
    case 'UPDATE_PROJECT': 
      return {
        ...state,
        project: action.payload,
        loading: false
      };
    default: return state;
  }
}

export default projectReducer;