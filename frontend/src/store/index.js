import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import petReducer from './petReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

const entitiesReducer = combineReducers({
  pets: petReducer,
  users: userReducer
});

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorReducer
});



let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, enhancer)
);

export default configureStore;