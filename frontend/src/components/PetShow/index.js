import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect, Link, useParams, useHistory } from 'react-router-dom';
import { fetchPet, fetchPets, deletePet } from '../../store/petReducer';
import { getCurrentUser } from '../../store/sessionReducer';
// import PopupModal from '../confirmationPopup/PopupModal';
import './index.scss';

const PetShow = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {petId} = useParams();
    const pet = useSelector(state=> state.entities.pets[petId] ? state.entities.pets[petId] : null )
    const currentUser = useSelector(getCurrentUser);

    useEffect(()=>{
        dispatch(fetchPet(petId));
    }, [petId])

    // useEffect(()=>{
    //     dispatch(fetchPet(petId));
    // }, [])

    const handleDelete = () =>{
        dispatch(deletePet(petId));
        history.push('/');
    }

    const ownerControls = () => {
        if(pet?.ownerId === currentUser.id){
            return(
                <>
                    <h1>Edit</h1>
                    {/* <PopupModal /> */}
                    {/* <h1 onClick={handleDelete}>Delete</h1> */}

                </>
            )
        }
    }


    if(!pet) return null;

    return(
        <>
            <ul className='pet-show-ul'>
                <img src={pet.photoUrl}/>
                <li>Name: {pet.name}</li>
                {ownerControls()}
            </ul>
        </>
    )
    
}


export default PetShow;