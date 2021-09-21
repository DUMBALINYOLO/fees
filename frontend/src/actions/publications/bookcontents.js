import axios from 'axios';
import {
    GET_BOOK_CONTENTS_START,
    GET_BOOK_CONTENTS_SUCCESS,
    GET_BOOK_CONTENTS_FAIL,
    CREATE_BOOK_CONTENT_START,
    CREATE_BOOK_CONTENT_SUCCESS,
    CREATE_BOOK_CONTENT_FAIL,
    GET_BOOK_CONTENT_START,
    GET_BOOK_CONTENT_SUCCESS,
    GET_BOOK_CONTENT_FAIL,
    EDIT_BOOK_CONTENT
    } from '../../types/bookcontentTypes';
import { bookcontentsURL } from '../../constants';

//book contents
const getBookContentListStart = () => {
  return {
    type: GET_BOOK_CONTENTS_START
  };
};

const getBookContentListSuccess = bookcontents => {
  return {
    type: GET_BOOK_CONTENTS_SUCCESS,
    bookcontents
  };
};

const getBookContentListFail = error => {
  return {
    type: GET_BOOK_CONTENTS_FAIL,
    error: error
  };
};

const createBookContentStart = () => {
  return {
    type: CREATE_BOOK_CONTENT_START
  };
};


const createBookContentSuccess = bookcontent => {
  return {
    type: CREATE_BOOK_CONTENT_SUCCESS,
    bookcontent
  };
};

const createBookContentFail = error => {
  return {
    type: CREATE_BOOK_CONTENT_FAIL,
    error: error
  };
};

const getBookContentDetailStart = () => {
  return {
    type: GET_BOOK_CONTENT_START
  };
};

const getBookContentDetailSuccess = bookcontent => {
  return {
    type: GET_BOOK_CONTENT_SUCCESS,
    bookcontent
  };
};

const getBookContentDetailFail = error => {
  return {
    type: GET_BOOK_CONTENT_FAIL,
    error: error
  };
};

export const getBookContents = (token) => {
  return dispatch => {
      dispatch(getBookContentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(bookcontentsURL, headers)
        .then(res => {
          const bookcontents = res.data;
          dispatch(getBookContentListSuccess(bookcontents));
          })
        .catch(err => {
          dispatch(getBookContentListStart(err));
        });
    };
};

export const getBookContent = (id, token) => {
  return dispatch => {
      dispatch(getBookContentDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${bookcontentsURL}${id}`, headers)
        .then(res => {
          const bookcontent = res.data;
          dispatch(getBookContentDetailSuccess(bookcontent));
          })
        .catch(err => {
          dispatch(getBookContentDetailFail(err));
        });
    };
};

export const addBookContent = (bookcontent, token) => {
  return dispatch => {
      dispatch(createBookContentStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(bookcontentsURL, bookcontent, headers)
        .then(res => {
          dispatch(createBookContentSuccess(bookcontent));
        })
        .catch(err => {
          dispatch(createBookContentFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editBookContent = (id, bookcontent, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${bookcontentsURL}${id}/`, bookcontent, headers)
        .then(res => {
            dispatch({
                type: EDIT_BOOK_CONTENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
