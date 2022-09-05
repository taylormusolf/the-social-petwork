import { useState } from "react";

const PetForm = () => {

  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [formPage, setFormPage] = useState(1);


  const pageOne = ()=>{
    return(
      <>
        <form>
          <input type='text' placeholder="pet name" onChange={(e)=> setPetName(e.target.value)} value={petName}/>
        </form>
        <button onClick={() => setFormPage(2)}>next</button>
      </>
    )
  }

  const pageTwo = ()=>{
    return(
      <>
        <form>
          <input type='text' placeholder="pet species" onChange={(e)=> setPetSpecies(e.target.value)} value={petSpecies}/>
          <button>Create Pet</button>
        </form>
        <button onClick={() => setFormPage(1)}>prev</button>
      </>
    )
  }


  const pageSelector = () => {
    switch (formPage) {
      case 1:
        return pageOne();
      case 2:
        return pageTwo();
        
    }


  }

  return(
    <>
      <h1>Pet form</h1>
      {pageSelector()}
   
    </>
  )

}


export default PetForm;