import React, { Component } from "react";
import logo from '../assets/Hope for Fertility (white).png'
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import db from "../fire";
import {
  Grid,
  Button,
  Typography,
  AppBar,
  Toolbar,
  CardContent,
  Card,
  CardActions,
  GridList
} from "@material-ui/core";
import PassCode from "./PassCodeModal";

const styles = theme => ({
  appBar: {
    position: "relative",
    
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
    minWidth: "15em",
    display: "flex",
    flexDirection: "column"
  },
  cardContent: {
    flexGrow: 1
  },
  logo:{
    height:"5em",
    margin:"1em 1em 1em 1em",
  }
});

class BrowseTeams extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }
  componentDidMount() {
    let newteams = [];
    db.collection("teams")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => newteams.push(doc.data()));
        this.setState({ teams: newteams });
      });
  }
  render() {
    const { classes } = this.props;
    console.log("this.state.teams", this.state.teams);
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img src={logo} alt='hope for fertility' className={classes.logo}/>
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
          <Grid container spacing={40}>
            {this.state.teams.map((team, idx) => (
              <Grid item key={team.name} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h1">
                      {team.name}
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                      Members:
                    </Typography>
                    <GridList ul='true' cols={1} cellHeight='auto'>
                      {team.members.map(member => (
                        <Typography key={member}>{member}</Typography>
                      ))}
                    </GridList>
                  </CardContent>
                  <CardActions>
                    {team.private && team.members.length < 4 && (
                      <PassCode
                        passcode={team.passcode}
                        team={team.name}
                        selectTeam={this.props.selectTeam}
                      />
                    )}
                    {!team.private && team.members.length < 4 && (
                      <Link to={`/joinTeam/`}>
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          onClick={() => this.props.selectTeam(team.name)}
                        >
                          Join
                        </Button>
                      </Link>
                    )}
                    {team.private && team.members.length < 4 && (
                      <Typography gutterBottom component="h2">
                        Private
                      </Typography>
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
