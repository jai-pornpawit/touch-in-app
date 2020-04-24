import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import firebase from '../Config/firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


export class Login extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (
            <div className="container">
                <Logo />
                <br/> 
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
}


export default Login
