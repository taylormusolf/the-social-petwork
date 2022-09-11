import csrfFetch from "./csrf";

export const RECEIVE_PET = 'RECEIVE_PET';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const REMOVE_PET = 'REMOVE_PET';



//selectors

export const getUserPets = (userId) => state => {
  let obj = {};
  if(state.entities.pets){
    Object.values(state.entities.pets).forEach((pet)=>{
      if(pet.ownerId === userId){
        obj[pet.id] = pet;
      }
    })
  }
  return obj;
}

//thunk actions


export const fetchPet = (petId) => async dispatch => {
  const data = await csrfFetch(`/api/pets/${petId}`);
  const res = await data.json()
  dispatch(receivePet(res))
}
export const fetchPets = () => async dispatch => {
  const data = await csrfFetch("/api/pets");
  // if (data.ok){
  //   const res = await data.json()
  // } else {
  //   //error handling
  // }
  const res = await data.json()
  dispatch(receivePets(res))
}

export const fetchPetsByOwnerId = (ownerId) => async dispatch => {
  const data = await csrfFetch(`/api/users/${ownerId}/pets`);
  const res = await data.json()
  dispatch(receivePets(res))
}

export const createPet = (pet) => async dispatch => {
  const data = await csrfFetch(`/api/pets`, {
    method: 'POST',
    body: JSON.stringify(pet)
  });
  const res = await data.json()
  dispatch(receivePet(res))
  return res;
}

export const deletePet = (petId) => async dispatch => {
  const data = await csrfFetch(`/api/pets/${petId}`, {
    method: 'DELETE',
  });
  // const res = await data.json()
  dispatch(removePet(petId))
}



//action creators

const receivePet = (pet) => {
  return {
    type: RECEIVE_PET,
    pet
  }
}

const removePet = (petId) => {
  return {
    type: REMOVE_PET,
    petId
  }
}

const receivePets = (payload) => {
  return {
    type: RECEIVE_PETS,
    payload
  }
}

// reducer

const petReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_PETS:
      return {...state, ...action.payload.pets}
    case RECEIVE_PET:
      nextState[action.pet.id] = action.pet
      return nextState;
    case REMOVE_PET:
      delete nextState[action.petId]
      return nextState;
    default:
      return nextState;
  };
};

export default petReducer;
