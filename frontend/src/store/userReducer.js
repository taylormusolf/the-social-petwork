import csrfFetch from "./csrf";
import {RECEIVE_CURRENT_USER, receiveCurrentUser} from './sessionReducer'

export const RECEIVE_USER = 'RECEIVE_USER';

//selectors
export const getUser = userId => state =>{
  return state.users[userId];
} 


//action creators
export const receiveUser = (user)=> ({
  type: RECEIVE_USER,
  payload: user
});

export const fetchUser = userId => async dispatch => {
  let res = await csrfFetch(`api/users/${userId}`)
  let data = await res.json();
  dispatch(receiveUser(data));
}

export const signupUser = user => async dispatch =>{
  let res = await csrfFetch('api/users',{
    method: 'POST',
    body: JSON.stringify(user)
    });
    let data = await res.json();
    dispatch(receiveCurrentUser(data));

}



const userReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = {...state}
  switch(action.type){
      case RECEIVE_USER:
        nextState[action.payload.user.id] = action.payload.user;
          return nextState;
      case RECEIVE_CURRENT_USER:
        nextState[action.payload.user.id] = action.payload.user
      default:
          return nextState;
  }
}



export default userReducer;



