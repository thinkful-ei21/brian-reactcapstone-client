import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import {reducer} from './reducers/cheese';
import {reducer as formReducer} from 'redux-form'


//applyMiddleware(thunk)
export default createStore(
    combineReducers({
        form: formReducer
    })
);