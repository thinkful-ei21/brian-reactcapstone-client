import { 
    FETCH_LYRICS_REQUEST,
     FETCH_LYRICS_SUCCESS,
      FETCH_LYRICS_ERROR,
      POST_LYRICS_REQUEST,
      POST_LYRICS_SUCCESS, 
      POST_LYRICS_ERROR,
      DELETE_LYRICS_REQUEST,
      DELETE_LYRICS_SUCCESS,
      DELETE_LYRICS_ERROR
    } from '../actions/lyrics'

const initialState = {
  lyrics: [],
  fetchloading: false,
  postloading: false,
  fetcherror: null,
  posterror: null
};

export const reducer = (state=initialState, action) => {
    console.log(state, action)
    if (action.type === FETCH_LYRICS_REQUEST){
        return Object.assign({}, state, {
            fetchloading: true, 
            fetcherror: null
        })
    } if (action.type === FETCH_LYRICS_SUCCESS){
        console.log(state, action)
        return Object.assign({}, state, {
            fetchloading: false,
            fetcherror: null,
            lyrics: action.lyric.lyrics
        })
    } if (action.type === FETCH_LYRICS_ERROR){
        return Object.assign({}, state, {
            fetchloading: false,
            fetcherror: action.error,
            
        })
    } if (action.type === POST_LYRICS_REQUEST){
        return Object.assign({}, state, {
            postloading: true, 
            posterror: null
        })
    } if (action.type === POST_LYRICS_SUCCESS){
        console.log(action);
        return Object.assign({}, state, {
            
            postloading: false,
            posterror: null,
            lyrics:  [...state.lyrics, action.lyrics]
                
        })
    } if (action.type === POST_LYRICS_ERROR){
        return Object.assign({}, state, {
            postloading: false,
            posterror: action.error,
            
        })
    } ////////////////delete
    if (action.type === DELETE_LYRICS_REQUEST){
        return Object.assign({}, state, {
            postloading: true, 
            posterror: null
        })
    } if (action.type === DELETE_LYRICS_SUCCESS){
        console.log(action);
        return Object.assign({}, state, {
            
            postloading: false,
            posterror: null,
            lyrics:  state.lyrics.filter(words => words.id !== action.lyric.id )
                
        })
    } if (action.type === DELETE_LYRICS_ERROR){
        return Object.assign({}, state, {
            postloading: false,
            posterror: action.error,
            
        })
    } 
    
    return state;
};

