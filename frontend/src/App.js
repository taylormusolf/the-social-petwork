import NavBar from "./components/NavBar";
import {Switch, Redirect, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <h3>Welcome Pets!</h3>
        </Route>

        <Route path="/login">
          
        </Route>
        <Route path="/signup">
          
        </Route>
        {/* <Redirect from="/accounts" to="/users" /> */}

        <Route>
          <h3>404 No Match!</h3>
        </Route>
      </Switch>
    </>
  );

 
}

export default App;