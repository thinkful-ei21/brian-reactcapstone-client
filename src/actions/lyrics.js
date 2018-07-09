export const FETCH_LYRICS_REQUEST = 'FETCH_LYRICS_REQUEST';
export const fetchLyricsRequest = () => ({
    type: FETCH_LYRICS_REQUEST
});

export const FETCH_LYRICS_SUCCESS = 'FETCH_LYRICS_SUCCESS';
export const fetchLyricsSuccess = lyric => ({
    type: FETCH_LYRICS_SUCCESS,
    lyric
});

export const FETCH_LYRICS_ERROR = 'FETCH_LYRICS_ERROR';
export const fetchLyricsError = error => ({
    type: FETCH_LYRICS_ERROR,
    error
});
////////POSTING LYRICS
export const POST_LYRICS_REQUEST = 'POST_LYRICS_REQUEST';
export const postLyricsRequest = () => ({
    type: POST_LYRICS_REQUEST
});

export const POST_LYRICS_SUCCESS = 'POST_LYRICS_SUCCESS';
export const postLyricsSuccess = lyrics => ({
    type: POST_LYRICS_SUCCESS,
    lyrics
});

export const POST_LYRICS_ERROR = 'POST_LYRICS_ERROR';
export const postLyricsError = error => ({
    type: POST_LYRICS_ERROR,
    error
});
///post and fetchLyrics
const BASE_URL = 'http://localhost:8080/api/created';

export const postLyrics = (values) => dispatch => {
   dispatch(postLyricsRequest());
   return fetch(`${BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    
   }).then(res => {
        if (!res.ok){
            return Promise.reject(res.statusText)
        }
        return res.json();
    }).then(data => {
        dispatch(postLyricsSuccess(data));
    })
    .catch(error => {
        dispatch(postLyricsError(error));
    });
};
export const fetchLyrics = () => dispatch => {
    dispatch(fetchLyricsRequest());
    return fetch(`${BASE_URL}`).then(res => {
         if (!res.ok){
             return Promise.reject(res.statusText)
         }
         return res.json();
     }).then(data => {
         console.log(data)
         dispatch(fetchLyricsSuccess(data));
     }).catch(error => {
         console.log(error);
         dispatch(fetchLyricsError(error));
     });
 };