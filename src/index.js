import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SubmissionBoard from './components/submissionForm'
import store from './store';
import {Provider} from 'react-redux';
import LyricCreator from './components/lyricCreator';



ReactDOM.render(
    <Provider store={store}>
        <LyricCreator  /> 
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
