

const RECEIVE_PET = 'RECEIVE_PET';


/* ----REDUCER---- */
const petReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
  
    default:
      return nextState;
  };
};

export default petReducer;
