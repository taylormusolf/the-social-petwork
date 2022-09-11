import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { createPet } from "../../store/petReducer";
import {getCurrentUser} from "../../store/sessionReducer";

const PetForm = () => {
  const history = useHistory();
  const currentUser = useSelector(getCurrentUser);

  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petBirthdate, setPetBirthdate] = useState('');
  const [petBio, setPetBio] = useState('');

  const [formPage, setFormPage] = useState(1);

  const dispatch = useDispatch();


  const pageOne = ()=>{
    return(
      <>
          <h1>What is your pet's name?</h1>
          <input type='text' placeholder="pet name" onChange={(e)=> setPetName(e.target.value)} value={petName}/>
        <button onClick={() => setFormPage(2)}>next</button>
      </>
    )
  }

  const pageTwo = ()=>{
    return(
      <>
          <h1>What is your pet's species?</h1>
          <select defaultValue={petSpecies ? petSpecies : 'default'} onChange={(e)=> setPetSpecies(e.target.value)}>
            <option value="default" disabled>Species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="reptile">Reptile</option>
            <option value="fish">Fish</option>
            <option value="amphibian">Amphibian</option>
            <option value="horse">Horse</option>
            <option value="rodent">Rodent</option>
            <option value="exotic">Exotic</option>
            <option value="farm">Farm</option>

          </select>
          {/* <input type='text' placeholder="pet species" onChange={(e)=> setPetSpecies(e.target.value)} value={petSpecies}/> */}
          
        <button onClick={() => setFormPage(1)}>prev</button>
        <button onClick={() => setFormPage(3)}>next</button>
      </>
    )
  }

  const pageThree = ()=>{
    return(
      <>
          <h1>What is your pet's birthday?</h1>
          <input type='date' onChange={(e)=> setPetBirthdate(e.target.value)} value={petBirthdate}/>
        <button onClick={() => setFormPage(2)}>prev</button>
        <button onClick={() => setFormPage(4)}>next</button>
      </>
    )
  }
  const pageFour = ()=>{
    return(
      <>
        <form onSubmit={handleSubmit}>
        
            <h1>What is your pet's bio?</h1>
            <textarea  placeholder="bio" onChange={(e)=> setPetBio(e.target.value)} value={petBio}/>
          <button onClick={() => setFormPage(3)}>prev</button>
          <button>Create Pet</button>
        </form>
      </>
    )
  }


  const pageSelector = () => {
    switch (formPage) {
      case 1:
        return pageOne();
      case 2:
        return pageTwo();
      case 3:
        return pageThree();
      case 4:
        return pageFour();
        
    }


  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createPet({
      name: petName,
      bio: petBio,
      species: petSpecies,
      birthdate: petBirthdate,
      owner_id: currentUser.id
    })).then((pet) => history.push(`/pets/${pet.id}`))

  }

  return(
    <>
        {pageSelector()}
      
  
    </>
  )

}


export default PetForm;