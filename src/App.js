import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from "./Components/Dashboard";
import AuthPage from "./Components/Auth/AuthPage";
import SetUpStepper from "./Components/Steps/Stepper";

class App extends Component {
  render() {
    return (
      <FirebaseDatabaseProvider>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Dashboard} />
            <Route path="/newTeam" render={(props)=><SetUpStepper type='team'/>} />
            <Route path="/joinTeam" render={(props)=><SetUpStepper type='personal'/>} />
            <Route path="/authPage" component={AuthPage} />
          </div>
        </BrowserRouter>
      </FirebaseDatabaseProvider>
    );
  }
}

export default App;
