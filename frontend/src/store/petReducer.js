import csrfFetch from "./csrf";

export const RECEIVE_PET = 'RECEIVE_PET';
export const RECEIVE_PETS = 'RECEIVE_PETS';



export const fetchPet = (petId) => async dispatch => {
  const data = await csrfFetch(`api/pets/${petId}`);
  if (data.ok){
    const res = await data.json()
  } else {
    //error handling
  }
  dispatch(receivePet(res))
}
export const fetchPets = () => async dispatch => {
  const data = await csrfFetch("api/pets");
  if (data.ok){
    const res = await data.json()
  } else {
    //error handling
  }
  dispatch(receivePets(res))
}


const receivePet = (pet) => {
  return {
    type: RECEIVE_PET,
    pet
  }
}

const receivePets = (pets) => {
  return {
    type: RECEIVE_PETS,
    pets
  }
}

/* ----REDUCER---- */
const petReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_PETS:
      return action.pets

    case RECEIVE_PET:
      nextState[action.pet.id] = action.pet
  
    default:
      return nextState;
  };
};

export default petReducer;
