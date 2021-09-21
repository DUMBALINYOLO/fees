import axios from 'axios';
import {
    GET_NEWS_LETTERS_START,
    GET_NEWS_LETTERS_SUCCESS,
    GET_NEWS_LETTERS_FAIL,
    CREATE_NEWS_LETTER_START,
    CREATE_NEWS_LETTER_SUCCESS,
    CREATE_NEWS_LETTER_FAIL,
    GET_NEWS_LETTER_START,
    GET_NEWS_LETTER_SUCCESS,
    GET_NEWS_LETTER_FAIL,
    EDIT_NEWS_LETTER
    } from '../../types/newsletterTypes';
import { newslettersURL } from '../../constants';

//newsletters
const getNewsLetterListStart = () => {
  return {
    type: GET_NEWS_LETTERS_START
  };
};

const getNewsLetterListSuccess = newsletters => {
  return {
    type: GET_NEWS_LETTERS_SUCCESS,
    newsletters
  };
};

const getNewsLetterListFail = error => {
  return {
    type: GET_NEWS_LETTERS_FAIL,
    error: error
  };
};

const createNewsLetterStart = () => {
  return {
    type: CREATE_NEWS_LETTER_START
  };
};


const createNewsLetterSuccess = newsletter => {
  return {
    type: CREATE_NEWS_LETTER_SUCCESS,
    newsletter
  };
};

const createNewsLetterFail = error => {
  return {
    type: CREATE_NEWS_LETTER_FAIL,
    error: error
  };
};

const getNewsLetterDetailStart = () => {
  return {
    type: GET_NEWS_LETTER_START
  };
};

const getNewsLetterDetailSuccess = newsletter => {
  return {
    type: GET_NEWS_LETTER_SUCCESS,
    newsletter
  };
};

const getNewsLetterDetailFail = error => {
  return {
    type: GET_NEWS_LETTER_FAIL,
    error: error
  };
};

export const getNewsLetters = (token) => {
  return dispatch => {
      dispatch(getNewsLetterListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(newslettersURL, headers)
        .then(res => {
          const newsletters = res.data;
          dispatch(getNewsLetterListSuccess(newsletters));
          })
        .catch(err => {
          dispatch(getNewsLetterListStart(err));
        });
    };
};

export const getNewsLetter = (id, token) => {
  return dispatch => {
      dispatch(getNewsLetterDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${newslettersURL}${id}`, headers)
        .then(res => {
          const newsletter = res.data;
          dispatch(getNewsLetterDetailSuccess(newsletter));
          })
        .catch(err => {
          dispatch(getNewsLetterDetailFail(err));
        });
    };
};

export const addNewsLetter = (newsletter, token) => {
  return dispatch => {
      dispatch(createNewsLetterStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(newslettersURL, newsletter, headers)
        .then(res => {
          dispatch(createNewsLetterSuccess(newsletter));
        })
        .catch(err => {
          dispatch(createNewsLetterFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editNewsLetter = (id, newsletter, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${newslettersURL}${id}/`, newsletter, headers)
        .then(res => {
            dispatch({
                type: EDIT_NEWS_LETTER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
