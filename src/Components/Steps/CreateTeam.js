import React, { Component } from "react";
import {
  Checkbox,
  Typography,
  TextField,
  withStyles,
  Grid,
  FormControlLabel
} from "@material-ui/core";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class CreateTeam extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Typography component="h1" variant="h5">
          Create New Team
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              label="Group Name"
              id="filled-name"
              margin="normal"
              name="team"
              onChange={this.props.handleChange}
              value={this.props.personalInfo.team}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="private"
                  value="no"
                  onChange={this.props.handleChange}
                />
              }
              label="Private"
            />
            <TextField
              label="Passcode"
              id="passcode"
              name="passcode"
              onChange={this.props.handleChange}
              value={this.props.personalInfo.passcode}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CreateTeam);
