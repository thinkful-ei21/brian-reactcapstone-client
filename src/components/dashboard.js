import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import SubmissionForm from './submissionForm'
import LyricCreatorOutput from './lyricCreatorOutput'
import './dashboard.css'
export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <SubmissionForm/>
                <LyricCreatorOutput/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};
////requires login is exported as a default because it is the page you will see if you cannot login. this
///page will be the redirection.
/////first parameter of requires login is empty for the component as well. the second param is the component.
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
