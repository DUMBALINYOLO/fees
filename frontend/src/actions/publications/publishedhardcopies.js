import axios from 'axios';
import {
    GET_PUBLISHED_HARD_COPIES_START,
    GET_PUBLISHED_HARD_COPIES_SUCCESS,
    GET_PUBLISHED_HARD_COPIES_FAIL,
    GET_PUBLISHED_HARD_COPY_START,
    GET_PUBLISHED_HARD_COPY_SUCCESS,
    GET_PUBLISHED_HARD_COPY_FAIL,
    EDIT_PUBLISHED_HARD_COPY
    } from '../../types/publishedhardcopyTypes';
import { publishedhardcopiesURL } from '../../constants';

//publishedhardcopies
const getPublishedHardCopyListStart = () => {
  return {
    type: GET_PUBLISHED_HARD_COPIES_START
  };
};

const getPublishedHardCopyListSuccess = publishedhardcopies => {
  return {
    type: GET_PUBLISHED_HARD_COPIES_SUCCESS,
    publishedhardcopies
  };
};

const getPublishedHardCopyListFail = error => {
  return {
    type: GET_PUBLISHED_HARD_COPIES_FAIL,
    error: error
  };
};

const getPublishedHardCopyDetailStart = () => {
  return {
    type: GET_PUBLISHED_HARD_COPY_START
  };
};

const getPublishedHardCopyDetailSuccess = publishedhardcopy => {
  return {
    type: GET_PUBLISHED_HARD_COPY_SUCCESS,
    publishedhardcopy
  };
};

const getPublishedHardCopyDetailFail = error => {
  return {
    type: GET_PUBLISHED_HARD_COPY_FAIL,
    error: error
  };
};

export const getPublishedHardCopies = (id, token) => {
  return dispatch => {
      dispatch(getPublishedHardCopyListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishedhardcopiesURL}?id=${id}`, headers)
        .then(res => {
          const publishedhardcopies = res.data;
          dispatch(getPublishedHardCopyListSuccess(publishedhardcopies));
          })
        .catch(err => {
          dispatch(getPublishedHardCopyListStart(err));
        });
    };
};


export const getPublishedHardCopy = (id, token) => {
  return dispatch => {
      dispatch(getPublishedHardCopyDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishedhardcopiesURL}${id}`, headers)
        .then(res => {
          const publishedhardcopy = res.data;
          dispatch(getPublishedHardCopyDetailSuccess(publishedhardcopy));
          })
        .catch(err => {
          dispatch(getPublishedHardCopyDetailFail(err));
        });
    };
};

export const editPublishedHardCopy = (id, publishedhardcopy, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${publishedhardcopiesURL}${id}/`, publishedhardcopy, headers)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHED_HARD_COPY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
