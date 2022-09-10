import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { fetchPets } from '../../store/petReducer';
import { getCurrentUser } from '../../store/sessionReducer';
import './index.scss'


const PetIndex = () => {
    const dispatch = useDispatch();
    const pets = useSelector(state => state.entities.pets)
    useEffect(()=>{
        dispatch(fetchPets())
    }, [])


    if(!pets) return null;
    return(
        
        <div className='pet-index-container'>
            {Object.values(pets).map((pet)=>{
                return (
                <ul className='pet-index-ul' key={pet.id}>
                    <Link to={`/pets/${pet.id}`}><img src={pet.photoUrl}/></Link>
                    <div className='pet-index-info'>
                        <li>Name: {pet.name}</li>
                        <li>Owner: {pet.owner.fname}</li>
                    </div>
                </ul>
                )
            })}
        
        </div>
    )

}


export default PetIndex;

