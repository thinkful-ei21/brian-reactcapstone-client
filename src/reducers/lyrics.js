import { 
    FETCH_LYRICS_REQUEST,
     FETCH_LYRICS_SUCCESS,
      FETCH_LYRICS_ERROR,
      POST_LYRICS_REQUEST,
      POST_LYRICS_SUCCESS, 
      POST_LYRICS_ERROR
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
    } 
    
    return state;
};

///////i copied and pasted the above reducer
// export const postreducer = (state=initialState, action) => {
//     console.log(state, action);
//     if (action.type === POST_LYRICS_REQUEST){
//         return Object.assign({}, state, {
//             loading: true, 
//             error: null
//         })
//     } if (action.type === POST_LYRICS_SUCCESS){
//         return Object.assign({}, state, {
//             loading: false,
//             error: null,
//             lyrics: [...state.lyric,
//                 action.lyric]
//         })
//     } if (action.type === POST_LYRICS_ERROR){
//         return Object.assign({}, state, {
//             loading: false,
//             error: action.error,
            
//         })
//     } 
    
//     return state;
// };