import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import CreateTeam from './Components/CreateTeam';
import JoinTeam from './Components/JoinTeam';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route path='/' exact component={Dashboard}/>
        <Route path='/newTeam'  component={CreateTeam}/>
        <Route path='/joinTeam'  component={JoinTeam}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
