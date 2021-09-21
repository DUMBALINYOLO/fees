import axios from 'axios';
import {
    GET_PUBLISHED_EBOOKS_START,
    GET_PUBLISHED_EBOOKS_SUCCESS,
    GET_PUBLISHED_EBOOKS_FAIL,
    GET_PUBLISHED_EBOOK_START,
    GET_PUBLISHED_EBOOK_SUCCESS,
    GET_PUBLISHED_EBOOK_FAIL,
    EDIT_PUBLISHED_EBOOK
    } from '../../types/publishedebookTypes';
import { publishedebooksURL } from '../../constants';

//publishedebooks
const getPublishedEbookListStart = () => {
  return {
    type: GET_PUBLISHED_EBOOKS_START
  };
};

const getPublishedEbookListSuccess = publishedebooks => {
  return {
    type: GET_PUBLISHED_EBOOKS_SUCCESS,
    publishedebooks
  };
};

const getPublishedEbookListFail = error => {
  return {
    type: GET_PUBLISHED_EBOOKS_FAIL,
    error: error
  };
};

const getPublishedEbookDetailStart = () => {
  return {
    type: GET_PUBLISHED_EBOOK_START
  };
};

const getPublishedEbookDetailSuccess = publishedebook => {
  return {
    type: GET_PUBLISHED_EBOOK_SUCCESS,
    publishedebook
  };
};

const getPublishedEbookDetailFail = error => {
  return {
    type: GET_PUBLISHED_EBOOK_FAIL,
    error: error
  };
};

export const getPublishedEbooks = (id, token) => {
  return dispatch => {
      dispatch(getPublishedEbookListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishedebooksURL}?id=${id}`, headers)
        .then(res => {
          const publishedebooks = res.data;
          dispatch(getPublishedEbookListSuccess(publishedebooks));
          })
        .catch(err => {
          dispatch(getPublishedEbookListStart(err));
        });
    };
};

export const getPublishedEbook = (id, token) => {
  return dispatch => {
      dispatch(getPublishedEbookDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishedebooksURL}${id}`, headers)
        .then(res => {
          const publishedebook = res.data;
          dispatch(getPublishedEbookDetailSuccess(publishedebook));
          })
        .catch(err => {
          dispatch(getPublishedEbookDetailFail(err));
        });
    };
};

export const editPublishedEbook = (id, publishedebook, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${publishedebooksURL}${id}/`, publishedebook, headers)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHED_EBOOK,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
