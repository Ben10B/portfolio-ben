import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './config/store';
import App from './App';
import { presetSettings, loadSettings, setSettingsLoading } from './actions/settingsActions';

store.dispatch(setSettingsLoading());
if(!localStorage.getItem('portfolioSettings')) store.dispatch(presetSettings());
else store.dispatch(loadSettings());


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
