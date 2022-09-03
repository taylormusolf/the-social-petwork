import csrfFetch from "./csrf";


const errorReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = {...state}
  switch(action.type){
      default:
          return nextState;
  }
}

export default errorReducer;