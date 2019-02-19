import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PaymentForm from "./Payment/PaymentForm";
import db from "../../fire";
import firebase from 'firebase/app'
import 'firebase/firestore'

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
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
  componentDidMount(){
    console.log('this.props',this.props)
  }
  paymentSuccess = nonce => {
    const { personalInfo,history } = this.props;
    const {firstName,lastName,address1,address2,city,state,zip,country,email} = personalInfo
    const team = db.collection("teams").doc(personalInfo.team);
    const user = db.collection("users").doc(firstName + ' ' + lastName)
    let userInfo = {
      firstName:firstName,
      lastName:lastName,
      address1:address1,
      address2:address2,
      city:city,
      state:state,
      zip:zip,
      country:country,
      email:email,
      team:personalInfo.team
    }
    //new team
    if (this.props.type === "team") {
      team
        .set({
          name: personalInfo.team,
          members:[(firstName + ' ' + lastName)],
          private:personalInfo.private,
          passcode:personalInfo.passcode
        })
        .then(()=> {
          history.push('/browseTeams')
        })
        .catch((error)=> {
          console.error("Error writing document: ", error);
        });
    }else if (this.props.type === "personal") {
      //existing team 
      team
        .update({
          members: firebase.firestore.FieldValue.arrayUnion(
            firstName +' '+ lastName
          )
        })
        .then(() =>{
          history.push('/browseTeams')
        })
        .catch((error)=>{
          console.error("Error writing document: ", error);
        });
    }
    //add user
    user.set(userInfo)
  };
  render() {
    return (
      this.state.loaded && (
        <PaymentForm
          paymentForm={window.SqPaymentForm}
          paymentSuccess={this.paymentSuccess}
        />
      )
    );
  }
}

export default withRouter(Payment);
