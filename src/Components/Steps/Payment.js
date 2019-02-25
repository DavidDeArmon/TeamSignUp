import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PaymentForm from "./Payment/PaymentForm";
import db from "../../fire";
import firebase from "firebase/app";
import "firebase/firestore";
import SuccessModal from "../SuccessModal";
import { Typography, Divider } from "@material-ui/core";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      successModal: false
    };
  }

  componentWillMount() {
    let sqPaymentScript = document.createElement("script");
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      this.setState({
        loaded: true
      });
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }
  paymentSuccess = nonce => {
    this.handleSuccessOpen();
    const { personalInfo } = this.props;
    const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      email
    } = personalInfo;
    const team = db.collection("teams").doc(personalInfo.team);
    const user = db.collection("users").doc(firstName + " " + lastName);
    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      country: country,
      email: email,
      team: personalInfo.team
    };
    //new team
    if (this.props.type === "team") {
      team
        .set({
          name: personalInfo.team,
          members: [firstName + " " + lastName],
          private: personalInfo.private,
          passcode: personalInfo.passcode
        })
        .then(() => {
          console.log("success");
        })
        .catch(error => {
          console.error("Error writing document: ", error);
        });
    } else if (this.props.type === "personal") {
      //existing team
      team
        .update({
          members: firebase.firestore.FieldValue.arrayUnion(
            firstName + " " + lastName
          )
        })
        .then(() => {
          console.log("success");
        })
        .catch(error => {
          console.error("Error writing document: ", error);
        });
    }
    //add user
    user.set(userInfo);
    user.update({ nonce: nonce });
  };
  handleSuccessOpen = () => {
    this.setState({ successModal: true });
  };
  handleClose = () => {
    this.setState({ successModal: false });
    this.props.history.push("/");
  };
  render() {
    return (
      this.state.loaded && (
        <div>
          <Divider variant="middle" />
          <Typography gutterBottom variant="h6" component="h1">
            Your total is $35
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h6">
            Pay securely through Square using your credit card.
          </Typography>
          <Divider variant="middle" />
          <PaymentForm
            paymentForm={window.SqPaymentForm}
            paymentSuccess={this.paymentSuccess}
          />
          <SuccessModal
            open={this.state.successModal}
            handleClose={this.handleClose}
          />
        </div>
      )
    );
  }
}

export default withRouter(Payment);
