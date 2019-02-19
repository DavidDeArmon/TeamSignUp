import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
import logo from "../assets/Hope for Fertility (Long).png"
const styles = theme =>({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    height:'100vh'
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 6}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 6
  },
  logo:{
    width:"50em",
    maxWidth:"95vw",
    margin:"auto",
    marginTop:"10vh"
  }
})
class Dashboard extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.heroUnit}>
          <img src={logo} alt='logo' className={classes.logo}/>
          <div className={classes.heroContent}>
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
                  <Link to="/browseTeams" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                      Enter Site
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
