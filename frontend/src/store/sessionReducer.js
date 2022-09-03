import csrfFetch from "./csrf";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

//selector
export const getCurrentUser = state =>{
    if (state && state.session){
       return state.session.user
    } else {
        return null;
    }
    
}


//action creators
export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER, 
        payload: user
    }
}
export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

export const loginUser = user => async dispatch =>{
    let res = await csrfFetch('api/session',{
    method: 'POST',
    body: JSON.stringify(user)
    });
    let data = await res.json();
    dispatch(receiveCurrentUser(data));
    return res;
};

export const logoutUser = () => async dispatch => {
    let res = await csrfFetch('/api/session',{
        method: 'DELETE'
    });
    dispatch(removeCurrentUser());
}

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
  };


const sessionReducer = (state=initialState, action) => {
    Object.freeze(state);
    const nextState = {...state}
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            sessionStorage.setItem('currentUser', JSON.stringify(action.payload.user));
            return {user: action.payload.user};
        case REMOVE_CURRENT_USER:
            sessionStorage.setItem('currentUser', null);
            return {user: null};
        default:
            return nextState;
    }
}

export default sessionReducer;