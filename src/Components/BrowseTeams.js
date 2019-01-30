import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  Grid,
  Button,
  Typography,
  AppBar,
  Toolbar,
  CardContent,
  Card,
  CardActions
} from "@material-ui/core";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardContent: {
    flexGrow: 1
  }
});

class BrowseTeams extends Component {
  constructor() {
    super();
    this.state = {
      teams: [
        { name: "Red", members: ["Steve", "Karen"] },
        { name: "Blue", members: ["David", "Chase", "Joey"] },
        { name: "Orange", members: ["Chandler", "Rachel", "Jim", "Pam"] },
        { name: "Green", members: ["Stanley", "Leslie", "Ron", "Chris"] }
      ]
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Hope For Fertility
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Teams
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
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      Back To Homepage
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
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {this.state.teams.map((team,idx)=> (
              <Grid item key={idx} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {team.name}
                    </Typography>
                    {team.members.map(member => (
                      <Typography key={member}>{member}</Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    {team.members.length < 4 && (
                        <Link to={`/joinTeam/${team.name}`}>
                      <Button size="small" color="primary">
                        Join
                      </Button>
                        </Link>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BrowseTeams);
