import axios from 'axios';
import {
    GET_AUTHORS_START,
    GET_AUTHORS_SUCCESS,
    GET_AUTHORS_FAIL,
    CREATE_AUTHOR_START,
    CREATE_AUTHOR_SUCCESS,
    CREATE_AUTHOR_FAIL,
    GET_AUTHOR_START,
    GET_AUTHOR_SUCCESS,
    GET_AUTHOR_FAIL,
    EDIT_AUTHOR
    } from '../../types/authorTypes';
import { authorsURL } from '../../constants';
import { createauthorURL } from '../../constants';
import { returnErrors } from '../messages';

//authors
const getAuthorListStart = () => {
  return {
    type: GET_AUTHORS_START
  };
};

const getAuthorListSuccess = authors => {
  return {
    type: GET_AUTHORS_SUCCESS,
    authors
  };
};

const getAuthorListFail = error => {
  return {
    type: GET_AUTHORS_FAIL,
    error: error
  };
};

const createAuthorStart = () => {
  return {
    type: CREATE_AUTHOR_START
  };
};


const createAuthorSuccess = author => {
  return {
    type: CREATE_AUTHOR_SUCCESS,
    author
  };
};

const createAuthorFail = error => {
  return {
    type: CREATE_AUTHOR_FAIL,
    error: error
  };
};

const getAuthorDetailStart = () => {
  return {
    type: GET_AUTHOR_START
  };
};

const getAuthorDetailSuccess = author => {
  return {
    type: GET_AUTHOR_SUCCESS,
    author
  };
};

const getAuthorDetailFail = error => {
  return {
    type: GET_AUTHOR_FAIL,
    error: error
  };
};

export const getAuthors = (token) => {
  return dispatch => {
      dispatch(getAuthorListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(authorsURL, headers)
        .then(res => {
          const authors = res.data;
          dispatch(getAuthorListSuccess(authors));
          })
        .catch(err => {
          dispatch(getAuthorListStart(err));
        });
    };
};

export const getAuthor = (id, token) => {
  return dispatch => {
      dispatch(getAuthorDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${authorsURL}${id}`, headers)
        .then(res => {
          const author = res.data;
          dispatch(getAuthorDetailSuccess(author));
          })
        .catch(err => {
          dispatch(getAuthorDetailFail(err));
        });
    };
};

export const addAuthor = (author, token) => {
  return dispatch => {
      dispatch(createAuthorStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createauthorURL, author, headers)
        .then(res => {
          dispatch(createAuthorSuccess(author));
        })
        .catch(err => {
          dispatch(createAuthorFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAuthor = (id, author, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${authorsURL}${id}/`, author, headers)
        .then(res => {
            dispatch({
                type: EDIT_AUTHOR,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
