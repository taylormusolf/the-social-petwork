import {Switch, Redirect, Route} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  
  return (
    <>
      <NavBar/>
      <main>
        <Switch>
          <Route exact path="/">
            <h3>Splash</h3>
          </Route>
          <Route exact path="/pets">
            <h3>Welcome Pets!</h3>
          </Route>
          <Route>
            <h3>404 No Match!</h3>
          </Route>
        </Switch>
      </main>
    </>
  );

 
}

export default App;