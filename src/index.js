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
import { presetSettings, loadSettings, setSettingsLoading, updateSplash } from './actions/settingsActions';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const Splash = () => {
  const [renderSplashScreen, setRenderSplashScreen] = useState(true);
  useEffect(() => {
    store.dispatch(setSettingsLoading());
    if(!localStorage.getItem('portfolioSettings')) store.dispatch(presetSettings());
    else store.dispatch(loadSettings());
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if(store.getState()) setIsLoading(false);
  }, []);

  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    function handleChange() {
      let splash = store.getState().settings.showSplash;
      if(showSplash !== splash) setShowSplash(splash);
    }
    const unsubscribe = store.subscribe(handleChange);
    return () => {
      unsubscribe();
    }
  }, [showSplash]);

  const enter = () => setRenderSplashScreen(false);
  const enterAlways = () => {
    setRenderSplashScreen(false);
    store.dispatch(updateSplash(false));
  }
  const splash = (
    <div className="hght-100-vh" style={{ position: 'relative' }}>
      {isLoading ? <Loader/> : <SplashBtn click={enter} click2={enterAlways}/>}
    </div>
  );
  return renderSplashScreen && showSplash ? splash : app;
}

ReactDOM.render(<Splash/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
