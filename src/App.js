import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from "./Components/Dashboard";
import AuthPage from "./Components/Auth/AuthPage";
import SetUpStepper from "./Components/Steps/Stepper";
import BrowseTeams from "./Components/BrowseTeams";

class App extends Component {
  render() {
    return (
      <FirebaseDatabaseProvider>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Dashboard} />
            <Route path="/newTeam" render={(props)=><SetUpStepper {...props} type='team'/>} />
            <Route path="/joinTeam/:team" render={(props)=><SetUpStepper {...props} type='personal'/>} />
            <Route path="/authPage" component={AuthPage} />
            <Route path="/browseTeams" component={BrowseTeams} />
          </div>
        </BrowserRouter>
      </FirebaseDatabaseProvider>
    );
  }
}

export default App;
