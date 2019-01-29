import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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
        <div>
          <TextField label="Group Name" id="filled-name" margin="normal" fullWidth/>
        </div>
       
      </div>
    );
  }
}

export default withStyles(styles)(CreateTeam);
