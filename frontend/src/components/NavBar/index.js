import './index.scss';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { logoutUser, getCurrentUser } from '../../store/sessionReducer';
import LoginFormModal from '../Session/Login/LoginFormModal';


const NavBar = () => {
  const dispatch = useDispatch();
  const selectCurrentUser = useSelector(getCurrentUser);
  const [currentUser, setCurrentUser] = useState(selectCurrentUser);
  useEffect(()=>{
    setCurrentUser(selectCurrentUser);
  }, [selectCurrentUser]);
  
  const greeting = ()=> {
    if(currentUser){
      return (
        <div className="greeting">
          <div class="dropdown">
            <h2>Hello, {currentUser.fname}</h2>
          <div class="dropdown-content">
            <h2 className='dropdown-username'>{currentUser.fname} {currentUser.lname}</h2>
            <div className="logout-button" onClick={()=>dispatch(logoutUser())}>Logout</div>
          </div>
      </div>
          
          
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
          <div className='logo'><Link to="/"><img src="./assets/images/dog-24.svg"/></Link></div>
          <h2 className="header"><div><Link to="/">The Social Petwork</Link></div></h2>
          {greeting()}
        </nav>
      </div>
      
    </>
  )
}

export default NavBar;