import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, getCurrentUser } from '../../store/sessionReducer';
import './index.scss'

const Login = (props) => {
  const sessionUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  useEffect(()=> {
    const errorsUl = document.querySelector('.session-form')
    if(errors.length){
      console.log(errorsUl)
      errorsUl.classList.add('red')
    } else {
      errorsUl.classList.remove('red')
    }
  }, [errors])

  if (sessionUser) return <Redirect to="/" />;

  const demoUser = () => {
    dispatch(loginUser({
      email: 'demo@demouser.com',
      password: '123456'
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(loginUser({
      email,
      password
    }))
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

  return(
    <div className='login-form-container'>
      <h1>Login Here</h1>
      <form className='session-form' onSubmit={handleSubmit}>
        <input type='text' placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
        <input type='password' placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        <ul className='errors'>
          {errors.map(error => <li key={error}>{error.toLowerCase()}</li>)}
        </ul>
        <input type='submit' value='Login'/>

      </form>
      <button className="demouser-button" onClick={demoUser}>Demo User</button>
    </div>
  )
}

export default Login;