import BASE_URL from '../config'
/////////FETCHING LYRICS OR COMMENTS
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
});//_____________________COMMENTS_____________________________
export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const fetchCommentsRequest = () => ({
    type: FETCH_COMMENTS_REQUEST
});

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const fetchCommentsSuccess = (comments,lyricsID) => ({
    type: FETCH_COMMENTS_SUCCESS,
    comments,lyricsID
});

export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';
export const fetchCommentsError = error => ({
    type: FETCH_COMMENTS_ERROR,
    error
});
////////POSTING LYRICS OR COMMENTS/////////////////////////////
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
//_________________COMMENTS_____________________
export const POST_COMMENTS_REQUEST = 'POST_COMMENTS_REQUEST';
export const postCommentsRequest = () => ({
    type: POST_COMMENTS_REQUEST
});

export const POST_COMMENTS_SUCCESS = 'POST_COMMENTS_SUCCESS';
export const postCommentsSuccess = comments => ({
    type: POST_COMMENTS_SUCCESS,
    comments
});

export const POST_COMMENTS_ERROR = 'POST_COMMENTS_ERROR';
export const postCommentsError = error => ({
    type: POST_COMMENTS_ERROR,
    error
});
////////DELETE LYRICS/////////////////////////////////
export const DELETE_LYRICS_REQUEST = 'DELETE_LYRICS_REQUEST';
export const deleteLyricsRequest = () => ({
    type: DELETE_LYRICS_REQUEST
});

export const DELETE_LYRICS_SUCCESS = 'DELETE_LYRICS_SUCCESS';
export const deleteLyricsSuccess = id => ({
    type: DELETE_LYRICS_SUCCESS,
    lyric:{id}
});

export const DELETE_LYRICS_ERROR = 'DELETE_LYRICS_ERROR';
export const deleteLyricsError = error => ({
    type: DELETE_LYRICS_ERROR,
    error
});


///post, delete and fetchLyrics
//const BASE_URL = 'http://localhost:8080/api/created';

export const postLyrics = (values) => dispatch => {
   dispatch(postLyricsRequest());
   return fetch(`${BASE_URL}/created`, {
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
    return fetch(`${BASE_URL}/created`).then(res => {
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

 export const deleteLyrics = (id) => dispatch => {
    dispatch(deleteLyricsRequest());
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Accept': 'application/json' },
    }
    ).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText)
        }
       return res
    })
    .then(res => {

        dispatch(deleteLyricsSuccess(id));
    }).catch(error => {
        console.log(error);
        dispatch(deleteLyricsError(error));
    });
}
//const BASE_URLs = 'http://localhost:8080/api/created';
//_______________COMMENTS_________________
export const postComments = (values,id) => dispatch => {
    dispatch(postCommentsRequest());
    return fetch(`${BASE_URL}/${id}/comments`, {
     method: 'POST',
     body: JSON.stringify(values),
     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },

    }).then(res => {
         if (!res.ok){
             return Promise.reject(res.statusText)
         }
         return res.json();
     }).then(data => {
         dispatch(postCommentsSuccess(data));
     })
     .catch(error => {
         dispatch(postCommentsError(error));
     });
 };
 export const fetchComments = (id) => dispatch => {
     dispatch(fetchCommentsRequest());
     return fetch(`${BASE_URL}/${id}/comments`).then(res => {
          if (!res.ok){
              return Promise.reject(res.statusText)
          }
          return res.json();
      }).then(data => {
          console.log(data)
          dispatch(fetchCommentsSuccess(data, id));
      }).catch(error => {
          console.log(error);
          dispatch(fetchCommentsError(error));
      });
  };
