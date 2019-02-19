import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@material-ui/core";

class PassCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      input: "",
      error: null,
      redirect: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleInput = input => {
    this.setState({ input });
  };
  handleJoin = () => {
    if (this.state.input === this.props.passcode) {
      this.props.selectTeam(this.props.team)
      this.setState({ redirect: true });
    } else {
      this.setState({ error: "the passcode you entered is incorrect" });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect && (
          <Redirect to={"/jointeam"} />
        )}
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Join
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Join Private Team</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To join this team the creator has required that you enter a
              passcode. (Case Sensitive)
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Passcode"
              fullWidth
              onChange={e => this.handleInput(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleJoin} color="primary">
              Join
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PassCode;
