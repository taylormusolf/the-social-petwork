import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../store/userReducer';
import {getCurrentUser } from '../../store/sessionReducer';
import { Redirect } from 'react-router-dom';
import './index.scss'


const Signup = () => {
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
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  }

  return(
    <div className='signup-container'>
      <h1>Signup Here</h1>
      <form className='session-form' onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <input type='text' placeholder='first name' onChange={(e)=>{setUser({...user, fname: e.target.value})}} value={user.fname}/>
        <input type='text' placeholder='last name' onChange={(e)=>{setUser({...user, lname: e.target.value})}} value={user.lname}/>
        <input type='text' placeholder="email" onChange={(e)=>{setUser({...user, email: e.target.value})}} value={user.email}/>
        <input type='password' placeholder="password" onChange={(e)=>{setUser({...user, password: e.target.value})}} value={user.password}/>
        <input type='password' placeholder="confirm password"onChange={(e)=>{setUser({...user, confirmPassword: e.target.value})}} value={user.confirmPassword}/>
        <input type='submit' value='Signup'/>
      </form>
    </div>
  )

}

export default Signup;