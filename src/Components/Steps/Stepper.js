import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  AppBar,
  Toolbar,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Button
} from "@material-ui/core";
import BackButton from "../BackButton";
import CreateTeam from "./CreateTeam";
import PersonalInfo from "./PersonalInfo";
import Payment from "./Payment";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class SetUpStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      steps: ["Personal Information", "Team Information", "Payment"],
      team: "",
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    };
  }
  componentDidMount() {
    if (this.props.type === "personal") {
      this.setState({ steps: ["Personal Information", "Payment"] });
    }
    if (this.props.team){
      this.setState({team:this.props.team})
    }
  }
  getStepContent = () => {
    const { activeStep } = this.state;
    if (activeStep === 0)
      return (
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          handleChange={this.handleChange}
          team={this.props.match.params.team}
        />
      );
    if (activeStep === 1 && this.props.type === "team")
      return (
        <CreateTeam
          personalInfo={this.state.personalInfo}
          handleChange={this.handleChange}
        />
      );
    if (activeStep === 1 && this.props.type === "personal")
      return <Payment personalInfo={this.state.personalInfo} />;
    if (activeStep === 2)
      return <Payment personalInfo={this.state.personalInfo} />;
    else throw new Error("Unknown step");
  };
  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };
  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <div>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Hope For Fertility
            </Typography>
            <BackButton />
          </Toolbar>
        </AppBar>
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Sign Up
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {this.state.steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {this.getStepContent()}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={this.handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
              >
                {activeStep === this.state.steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SetUpStepper);
