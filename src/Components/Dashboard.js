import React, { Component } from "react";
import { Link } from "react-router-dom";
import Firebase from "../fire";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }
  componentDidMount() {
    let teamRef = Firebase.database()
      .ref("team")
      .orderByKey()
      .limitToLast(100);
    teamRef.on("child_added", snapshot => {
      /* Update React state whenteam is added at Firebase Database */
      let team = { text: snapshot.val(), id: snapshot.key };
      this.setState({ teams: [team].concat(this.state.teams) });
    });
  }
  addMessage = e => {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send theteam to Firebase */
    Firebase.database()
      .ref("messages")
      .push(this.inputEl.value);
    this.inputEl.value = ""; // <- clear the input
  };
  render() {
    return (
      <div>
        <div>
          <Link to="/newTeam">Create Team</Link>
        </div>
        <div>
          <Link to="/joinTeam">Join an Existing Team</Link>
        </div>
        <form onSubmit={this.addMessage}>
          <input type="text" ref={el => (this.inputEl = el)} />
          <input type="submit" />
          <ul>
            {/* Render the list ofteams */
            this.state.teams.map(team => (
              <li key={team.id}>{team.text}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default Dashboard;
