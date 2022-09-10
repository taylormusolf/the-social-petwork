import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../../store/userReducer';
import {getCurrentUser } from '../../../store/sessionReducer';
import { Redirect } from 'react-router-dom';
import './index.scss'


const Signup = (props) => {
  const sessionUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const[user, setUser] = useState({email: '', password: '', confirmPassword: '', fname: '', lname: ''});
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.password === user.confirmPassword){
      setErrors([]);
      return dispatch(signupUser(user))
        .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors(data);
          else setErrors([res.statusText]);
        });
    }
    return setErrors(['passwords must match']);
  }

  return(
    <div className='signup-container'>
      <header>
        <h1>Signup Here</h1>
        <button onClick={props.switchModal}>Login</button>
        <h2 onClick={props.onClose}>x</h2>
      </header>
      <form className='session-form' onSubmit={handleSubmit}>
        <input className={errors.includes("Fname can't be blank") ? 'red-field' : ''} type='text' placeholder='first name' onChange={(e)=>{setUser({...user, fname: e.target.value})}} value={user.fname}/>
        {errors.includes("Fname can't be blank") ? <li>first name can't be blank</li> : <li></li>}
        <input className={errors.includes("Lname can't be blank") ? 'red-field' : ''} type='text' placeholder='last name' onChange={(e)=>{setUser({...user, lname: e.target.value})}} value={user.lname}/>
        {errors.includes("Lname can't be blank") ? <li>last name can't be blank</li> : <li></li>}
        <input className={errors.includes("Email can't be blank") ? 'red-field' : ''} type='text' placeholder="email" onChange={(e)=>{setUser({...user, email: e.target.value})}} value={user.email}/>
        {errors.includes("Email can't be blank") ? <li>email can't be blank</li> : <li></li>}
        <input className={errors.includes("Password is too short (minimum is 6 characters)") ? 'red-field' : ''} type='password' placeholder="password" onChange={(e)=>{setUser({...user, password: e.target.value})}} value={user.password}/>
        {errors.includes("Password is too short (minimum is 6 characters)") ? <li>password must be at least 6 characters</li> : <li></li>}
        <input className={errors.includes("passwords must match") ? 'red-field' : ''} type='password' placeholder="confirm password"onChange={(e)=>{setUser({...user, confirmPassword: e.target.value})}} value={user.confirmPassword}/>
        {errors.includes("passwords must match") ? <li>passwords must match</li> : <li></li>}
        <input type='submit' value='Signup'/>
      </form>
    </div>
  )

}

export default Signup;