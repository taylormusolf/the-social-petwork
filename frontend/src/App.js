import {Switch, Redirect, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import PetIndex from "./components/PetIndex";
import PetShow from "./components/PetShow";
import PetForm from "./components/PetForm";


function App() {
  
  return (
    <>
      <NavBar/>
      <main>
        <Switch>
          <Route exact path="/">
            {/* <h1> Splash </h1> */}
            <Splash />
          </Route>
          <Route exact path="/pets">
            <PetIndex />
          </Route>
          <Route exact path="/pets/:petId">
            <PetShow />
          </Route>
          <Route exact path="/pet/new">
            <PetForm />
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