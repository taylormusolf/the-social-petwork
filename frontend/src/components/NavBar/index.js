import './index.scss';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { logoutUser, getCurrentUser } from '../../store/sessionReducer';
import LoginFormModal from '../Session/Login/LoginFormModal';
import { fetchPetsByOwnerId, getUserPets } from '../../store/petReducer';


const NavBar = () => {
  const dispatch = useDispatch();
  const selectCurrentUser = useSelector(getCurrentUser);

  const selectCurrentUserPets = selectCurrentUser ? useSelector(getUserPets(selectCurrentUser.id)) : useSelector(getUserPets(null));
 
  const [currentUser, setCurrentUser] = useState(selectCurrentUser);
  useEffect(()=>{
    setCurrentUser(selectCurrentUser);
  }, [selectCurrentUser]);

  useEffect(()=>{
    if (selectCurrentUser) dispatch(fetchPetsByOwnerId(selectCurrentUser.id));
  }, [])
  
  const greeting = ()=> {

    if(currentUser){
      return (
        <div className="greeting">
          <div className="dropdown">
            <h2>Hello, {currentUser.fname}</h2>
            <div className="dropdown-content">
              <h2 className='dropdown-username'>{currentUser.fname} {currentUser.lname}</h2>
              <div className="logout-button" onClick={()=>dispatch(logoutUser())}>Logout</div>
            </div>
          </div>
          <div className="dropdown">
            <h2>Pet Select</h2>
            <div className="dropdown-content">
              <h2 className='dropdown-pet-title'>Your Pets</h2>
              {Object.values(selectCurrentUserPets).map((pet)=>{
                return <li className='dropdown-pet' key={pet.id}><Link to={`/pets/${pet.id}`}>{pet.name}</Link></li>
              })}
            </div>
          </div>
          <Link to='/pet/new'>Add Pet</Link>
        </div>  
      )
    }else{
      return(
        <div className="greeting">
          <LoginFormModal />
        </div>
      )
    }
  }

  return (
    <>
      <div className="nav-container">
        <nav>
          <div className='logo'><Link to="/"><img src={window.logo}/></Link></div>
          <h2 className="header"><div><Link to="/">The Social Petwork</Link></div></h2>
          {greeting()}
        </nav>
      </div>
      
    </>
  )
}

export default NavBar;