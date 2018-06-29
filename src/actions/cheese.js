
export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
    type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheese => ({
    type: FETCH_CHEESE_SUCCESS,
    cheese
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = error => ({
    type: FETCH_CHEESE_ERROR,
    error
});

const BASE_URL = 'http://localhost:8080/api/cheeses';

export const fetchCheeses = () => dispatch => {
   dispatch(fetchCheeseRequest());
   return fetch(`${BASE_URL}`).then(res => {
        if (!res.ok){
            return Promise.reject(res.statusText)
        }
        return res.json();
    }).then(data => {
        dispatch(fetchCheeseSuccess(data));
    }).catch(error => {
        dispatch(fetchCheeseError(error));
    });
};

