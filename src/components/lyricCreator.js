import React from 'react';
import FormInput from './forminput';
import {reduxForm, Field} from 'redux-form';
import {postLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';
import LyricCreatorOutput from './lyricCreatorOutput'
import Onboard from './onBoard'
import SubmissionForm from './submissionForm'
import {Route, withRouter} from 'react-router-dom';
import RegistrationPage from './registration-page';
import Dashboard from './dashboard';
import HeaderBar from './header-bar';
import {refreshAuthToken} from '../actions/auth';
import './lyricCreator.css'
import './lyricCreatorOutput.css'
//import SearchForm from './search-form'
export class LyricCreator extends React.Component{

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour, normally in package.json
        );
    }
    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }



    
///<div className="y-wrap"> goes on submission form + lyriccreator output 
////above lyric creatorOutput??<a id="link here"></a>
    render(){
        return(
            <div className="creatorBoard">
                <HeaderBar />
                <Route exact path="/" component={Onboard} />
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/register" component={RegistrationPage} />
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(LyricCreator));
