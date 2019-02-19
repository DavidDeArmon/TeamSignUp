import React, { Component } from "react";
import "./App.css";
import firebase from "./fire";
import { BrowserRouter, Route } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./Components/Dashboard";
import SetUpStepper from "./Components/Steps/Stepper";
import BrowseTeams from "./Components/BrowseTeams";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#2DA9E1"
    },
    secondary:{
      main:"#E798C1"
    }
  },
  typography: {
    useNextVariants: true,
  },
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTeam:''
    };
  }
  selectTeam=(teamName)=>{
    this.setState({selectedTeam:teamName})
  }
  render() {
    return (
      //to-do
      //limit number of teams
      //password protect private teams
      <FirebaseDatabaseProvider firebase={firebase}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Dashboard} />
            <Route
              path="/newTeam"
              render={props => <SetUpStepper {...props} type="team" />}
              />
            <Route
              path="/joinTeam"
              render={props => <SetUpStepper {...props} type="personal" selectedTeam={this.state.selectedTeam}/>}
              />
            <Route path="/browseTeams" render ={props=><BrowseTeams {...props} selectTeam={this.selectTeam} />}/>
          </div>
        </BrowserRouter>
        </MuiThemeProvider>
      </FirebaseDatabaseProvider>
    );
  }
}

export default App;
