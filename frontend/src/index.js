import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { restoreSession } from './store/csrf';

const initialState = {};

const store = configureStore(initialState);

// testing
window.store = store;
//

const initializeApp = () => {
  ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
} 

restoreSession().then(initializeApp);

