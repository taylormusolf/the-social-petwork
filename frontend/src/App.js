import {useSelector} from 'react-redux';
import {Switch, Redirect, Route} from "react-router-dom";

import{getCurrentUser} from "./store/sessionReducer";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import {Auth, Protected} from './util/routeUtil';

function App() {
  
  return (
    <>
      <NavBar/>
      <main>
        <Switch>
          <Route exact path="/">
            <h3>Welcome Pets!</h3>
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Redirect from="/dogs" to="/cats" />

          <Route>
            <h3>404 No Match!</h3>
          </Route>
        </Switch>
      </main>
    </>
  );

 
}

export default App;