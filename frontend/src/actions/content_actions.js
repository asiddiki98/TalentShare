import * as ContentUtil from '../util/content_util';

export const RECEIVE_CONTENT = "RECEIVE_CONTENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


// REGULAR ACTION CREATORS 



export const receiveContent = content => {
  return {
    type: RECEIVE_CONTENT,
    content
  }
}

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});


// THUNK ACTION CREATORS 


export const sendFile = file => dispatch => {
  return (
    ContentUtil.sendFile(file).then(
      res => (dispatch(receiveContent(res.data))),
      err => (dispatch(receiveErrors(err.response.data)))
    )
  )
}