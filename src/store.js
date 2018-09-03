import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import {reducer} from './reducers/cheese';
import {reducer as formReducer} from 'redux-form'
import {reducer as lyricReducer} from './reducers/lyrics';
////auth
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';

//applyMiddleware(thunk)
const store = createStore(
    combineReducers({
        form: formReducer,
        createdlyrics: lyricReducer,
        createdcomments: lyricReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
     applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
