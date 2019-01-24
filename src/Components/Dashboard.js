import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }
  render() {
    return (
      <div>
        <div>
          <Link to='/authPage'>Login</Link>
        </div>
        <div>
          <Link to="/newTeam">Create Team</Link>
        </div>
        <div>
          <Link to="/joinTeam">Join an Existing Team</Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
