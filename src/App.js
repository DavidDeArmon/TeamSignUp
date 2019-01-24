import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { FirebaseDatabaseProvider } from '@react-firebase/database'
import Dashboard from "./Components/Dashboard";
import CreateTeam from "./Components/CreateTeam";
import JoinTeam from "./Components/JoinTeam";
import AuthPage from "./Components/Auth/AuthPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Dashboard} />
          <Route path="/newTeam" component={CreateTeam} />
          <Route path="/joinTeam" component={JoinTeam} />
          <Route path="/authPage" component={AuthPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
