import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';
import store from './store';
import {Provider} from 'react-redux';

// const cheeses = [
//     "Bath Blue",
//     "Barkham Blue",
//     "Buxton Blue"
// ]
//cheeses={cheeses}

ReactDOM.render(
    <Provider store={store}>
        <CheeseList  /> 
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
