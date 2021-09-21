import axios from 'axios';
import {
    GET_ALL_EBOOKS_START,
    GET_ALL_EBOOKS_SUCCESS,
    GET_ALL_EBOOKS_FAIL,
    CREATE_ALL_EBOOK_START,
    CREATE_ALL_EBOOK_SUCCESS,
    CREATE_ALL_EBOOK_FAIL,
    GET_ALL_EBOOK_START,
    GET_ALL_EBOOK_SUCCESS,
    GET_ALL_EBOOK_FAIL,
    EDIT_ALL_EBOOK
    } from '../../types/allebookTypes';
import { allebooksURL } from '../../constants';
import { returnErrors } from '../messages';

//allebooks
const getAllEbookListStart = () => {
  return {
    type: GET_ALL_EBOOKS_START
  };
};

const getAllEbookListSuccess = allebooks => {
  return {
    type: GET_ALL_EBOOKS_SUCCESS,
    allebooks
  };
};

const getAllEbookListFail = error => {
  return {
    type: GET_ALL_EBOOKS_FAIL,
    error: error
  };
};

const createAllEbookStart = () => {
  return {
    type: CREATE_ALL_EBOOK_START
  };
};


const createAllEbookSuccess = allebook => {
  return {
    type: CREATE_ALL_EBOOK_SUCCESS,
    allebook
  };
};

const createAllEbookFail = error => {
  return {
    type: CREATE_ALL_EBOOK_FAIL,
    error: error
  };
};

const getAllEbookDetailStart = () => {
  return {
    type: GET_ALL_EBOOK_START
  };
};

const getAllEbookDetailSuccess = allebook => {
  return {
    type: GET_ALL_EBOOK_SUCCESS,
    allebook
  };
};

const getAllEbookDetailFail = error => {
  return {
    type: GET_ALL_EBOOK_FAIL,
    error: error
  };
};

export const getAllEbooks = (id, token) => {
  return dispatch => {
      dispatch(getAllEbookListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };

      axios
        .get(`${allebooksURL}?id=${id}`, headers)
        .then(res => {
          const allebooks = res.data;
          dispatch(getAllEbookListSuccess(allebooks));
          })
        .catch(err => {
          dispatch(getAllEbookListStart(err));
        });
    };
};


export const getAllEbook = (id, token) => {
  return dispatch => {
      dispatch(getAllEbookDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${allebooksURL}${id}`, headers)
        .then(res => {
          const allebook = res.data;
          dispatch(getAllEbookDetailSuccess(allebook));
          })
        .catch(err => {
          dispatch(getAllEbookDetailFail(err));
        });
    };
};

export const addAllEbook = (allebook, token) => {
  return dispatch => {
      dispatch(createAllEbookStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(allebooksURL, allebook, headers)
        .then(res => {
          dispatch(createAllEbookSuccess(allebook));
        })
        .catch(err => {
          dispatch(createAllEbookFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAllEbook = (id, allebook, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${allebooksURL}${id}/`, allebook, headers)
        .then(res => {
            dispatch({
                type: EDIT_ALL_EBOOK,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
