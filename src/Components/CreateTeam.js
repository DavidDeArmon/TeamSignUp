import React, { Component } from "react";
import {Link} from 'react-router-dom'

class CreateTeam extends Component {
  render() {
    return (
      <div>
        <Link to = '/'>Back</Link>
        <Link to = '/authPage'>Login</Link>
      </div>
    );
  }
}

export default CreateTeam;
