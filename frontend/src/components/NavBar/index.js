import './index.scss';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { logoutUser, getCurrentUser } from '../../store/sessionReducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const selectCurrentUser = useSelector(getCurrentUser);
  const [currentUser, setCurrentUser] = useState(selectCurrentUser);
  useEffect(()=>{
    setCurrentUser(selectCurrentUser);
  }, [selectCurrentUser])
  
  const greeting = ()=> {
    if(currentUser){
      return (
        <div className="greeting">
          <h2>Hello, {currentUser.fname}</h2>
          <button onClick={()=>dispatch(logoutUser())}>Logout</button>
        </div>  
      )
    }else{
      return(
        <div className="greeting">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
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