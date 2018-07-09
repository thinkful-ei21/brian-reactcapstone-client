export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST';
export const fetchSearchRequest = () => ({
    type: FETCH_SEARCH_REQUEST
});

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const fetchSearchSuccess = lyric => ({
    type: FETCH_SEARCH_SUCCESS,
    lyric
});

export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
export const fetchSearchError = error => ({
    type: FETCH_SEARCH_ERROR,
    error
});

BASE_URL: 'http://localhost:8080/api/created';

export const fetchSearch = () => dispatch => {
    dispatch(fetchSearchRequest());
    return fetch(`${BASE_URL}`).then(res => {
         if (!res.ok){
             return Promise.reject(res.statusText)
         }
         return res.json();
     }).then(data => {
         dispatch(fetchSearchSuccess(data));
     }).catch(error => {
         console.log(error);
         dispatch(fetchSearchError(error));
     });
 };