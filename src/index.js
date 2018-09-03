import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SubmissionForm from './components/submissionForm'
import store from './store';
import {Provider} from 'react-redux';
import LyricCreator from './components/lyricCreator';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <LyricCreator  />
        </Router>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
