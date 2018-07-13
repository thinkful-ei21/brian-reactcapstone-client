import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import {reducer} from './reducers/cheese';
import {reducer as formReducer} from 'redux-form'
import {reducer as lyricReducer} from './reducers/lyrics';


//applyMiddleware(thunk)
export default createStore(
    combineReducers({
        form: formReducer,
        createdlyrics: lyricReducer,
        createdcomments: lyricReducer
    }), applyMiddleware(thunk)
);