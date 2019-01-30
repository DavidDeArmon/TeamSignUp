import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
const styles = theme =>({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    height:"100vh",
    margin: "0 auto",
    padding: `${theme.spacing.unit * 12}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 6
  },
})
class Dashboard extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hope for Fertility
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Link to="/browseTeams">
                    <Button variant="contained" color="primary">
                      Browse Teams
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                <Link to="/newTeam">
                  <Button variant="outlined" color="primary">
                    Create New Team
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
