import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Toolbar, AppBar} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../assets/Hope for Fertility (white).png";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  logo: {
    height: "5em",
    maxWidth:"80vw",
    margin: "1em 1em 1em 1em"
  },
  backButton: {
    marginLeft: "auto"
  }
});
class HeaderBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
          <img src={logo} alt="hope for fertility" className={classes.logo} />
          </Link>
          {/* <Link to="/" className={classes.backButton}>
            <Button variant="contained" color="secondary">
              Back
            </Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(HeaderBar);
