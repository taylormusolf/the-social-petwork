import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import csrfFetch, { restoreSession} from './store/csrf';
import { BrowserRouter } from 'react-router-dom';

const initialState = {};

const store = configureStore(initialState);

// testing
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
}
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

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  restoreSession().then(initializeApp);
} else {
  initializeApp();
}

