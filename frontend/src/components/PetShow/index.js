import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect, Link, useParams } from 'react-router-dom';
import { fetchPet, fetchPets } from '../../store/petReducer';
import { getCurrentUser } from '../../store/sessionReducer';
import './index.scss'

const PetShow = props => {
    const dispatch = useDispatch();
    const {petId} = useParams();
    const pet = useSelector(state=> state.entities.pets[petId] ? state.entities.pets[petId] : null )

    useEffect(()=>{
        dispatch(fetchPet(petId));
    }, [petId])

    useEffect(()=>{
        dispatch(fetchPet(petId));
    }, [])


    if(!pet) return null;

    return(
        <>
            <ul className='pet-show-ul'>
                <img src={pet.photoUrl}/>
                <li>Name: {pet.name}</li>
            </ul>
        </>
    )
    
}


export default PetShow;