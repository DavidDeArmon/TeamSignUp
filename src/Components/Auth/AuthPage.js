import React, { Component } from "react";
import Fire from '../../fire'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const firebaseConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class AuthPage extends Component {
 
  render() {
    return (
        <div>
          <StyledFirebaseAuth uiConfig={firebaseConfig} firebaseAuth={firebase.auth()}/>
        </div>
    );
  }
}

export default AuthPage;
