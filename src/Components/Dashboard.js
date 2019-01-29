import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
          <Link to="/authPage">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/newTeam">
            <Button variant="contained" color="primary">
              Create Team
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/joinTeam">
            <Button variant="contained" color="primary">
              Join an Existing Team
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
