import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import petReducer from './petReducer';

const rootReducer = combineReducers({
  pets: petReducer
});

// const dummyReducer = (state, action) => ({});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;