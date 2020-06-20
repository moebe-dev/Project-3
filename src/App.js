import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginButton from './Components/LoginButton';
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./Components/Profile";
// import Loading from "./Components/Loading"
import PrivateRoute from "./Components/PrivateRoute";
import history from "./utils/history";
import Main from "./Pages/mainPage";
// import NavBar from "./Components/NavBar/NavBar"


function App () {
  const { loading } = useAuth0();

  if(loading) {
    return <h1>DOG</h1>
  }
  return (
    <div className="App">
      <Router history={history}>
        <header>
    {/* <NavBar /> */}
     <LoginButton />
          
        </header>
        <Switch>
          <Route path="/" exact component= {MainPage} />
          <PrivateRoute path="/mainPage" component = { Main()}/>
          <MainPage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;