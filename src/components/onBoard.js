import React from 'react';
import './onBoard.css'
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import logo from './noteonboard.png'
export class Onboard extends React.Component{



    render(){
        // <LoginForm />
        //     <Link to="/register">Register</Link
        if (this.props.loggedIn) {
               return <Redirect to="/dashboard" />;
           }

        return(
        <div className="onboarding">
            <div className="onBoardDescription">

              <hr></hr>
                <div className="onBoardLogin">
                    <h2>Already a songwriter? Login!</h2>
                    <LoginForm />
                    <Link to="/register" className="register">Register</Link>
                </div>
                <p>demo account, username: devaccount <br/>password: password1234</p>
            <h2>What does this app do?</h2>
         <ul>
            <li>Maybe you are curious about making a song and need a small place to jot down some ideas quickly. </li>
            <li>You need to <strong>jot down</strong> some notes inbetween a recording session for the world to see.</li>
            <li>You want to make quick <strong>comments</strong> on how close your lyrics are to perfection, or someone elses song.</li>
         </ul>

            <h2> A personal Genius app for yourself and friends.  </h2>
            <h2> This application was designed in order to help anyone jot down lyrics for a song and share them with the world, and open them for commentary. Normally it is difficult to send
                 songs to Genius and allow them to feature your lyrics for the world to see. But now anyone is capable of doing this. </h2>
                 
            </div>

        </div>

        )
    }

}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Onboard);
