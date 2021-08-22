import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './config/store';
import App from './App';
import './css/buttons.css';
import Loader from './components/Loader';
import SplashBtn from './components/SplashBtn';
import { presetSettings, loadSettings, setSettingsLoading } from './actions/settingsActions';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const Splash = () => {
  const [renderSplashScreen, setSplashScreen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    store.dispatch(setSettingsLoading());
    if(!localStorage.getItem('portfolioSettings')) store.dispatch(presetSettings());
    else store.dispatch(loadSettings());
  });
  useEffect(() => {
    if(store.getState()) setIsLoading(false);
  }, []);
  const enter = () => setSplashScreen(false);
  const splash = (
    <div className="hght-100-vh" style={{ position: 'relative' }}>
      {isLoading ? <Loader/> : <SplashBtn click={enter}/>}
    </div>
  );
  return renderSplashScreen ? splash : app;
}

ReactDOM.render(<Splash/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
