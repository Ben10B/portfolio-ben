import { webData, graphicData, mediaData } from '../data/data';

export const updateProjectPage = (params) => dispatch => {
  dispatch(setProjectLoading());
  let project = null;
  switch(params.type) {
    case 'web': project = webData.find(x => x.title === params.title); break;
    case 'graphic': project = graphicData.find(x => x.title === params.title); break;
    case 'media': project = mediaData.find(x => x.title === params.title); break;
    default: break;
  }
  dispatch({
    type: 'UPDATE_PROJECT',
    payload: project
  })
}

export const setProjectLoading = () => {
  return {
    type: 'PROJECT_LOADING'
  };
};