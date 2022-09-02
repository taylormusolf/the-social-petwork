import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { restoreSession } from './store/csrf';
import { BrowserRouter } from 'react-router-dom';

const initialState = {};

const store = configureStore(initialState);

// testing
window.store = store;
//

const initializeApp = () => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
} 

restoreSession().then(initializeApp);

