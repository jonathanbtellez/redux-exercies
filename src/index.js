import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppReduxSaga from './AppReduxSaga';

// Redux imports
//Initial config
// import storeConfig from './store/config/storeConfig';
// import Config function of App store
import { Provider } from 'react-redux';
import { appAsyncStore } from './store/config/storeAsyncConfig';

//Store that use redux saga
let store = appAsyncStore();

ReactDOM.render(
  // Using the app store config
  // <Provider store={storeConfig}> 
  <Provider store={store}>
    <React.StrictMode>
      <AppReduxSaga />

    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
