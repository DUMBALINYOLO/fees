import axios from 'axios';
import {
    GET_LOCKED_HARD_COPIES_START,
    GET_LOCKED_HARD_COPIES_SUCCESS,
    GET_LOCKED_HARD_COPIES_FAIL,
    CREATE_LOCKED_HARD_COPY_START,
    CREATE_LOCKED_HARD_COPY_SUCCESS,
    CREATE_LOCKED_HARD_COPY_FAIL,
    GET_LOCKED_HARD_COPY_START,
    GET_LOCKED_HARD_COPY_SUCCESS,
    GET_LOCKED_HARD_COPY_FAIL,
    EDIT_LOCKED_HARD_COPY
    } from '../../types/lockedhardcopyTypes';
import { lockedhardcopiesURL } from '../../constants';
import { returnErrors } from '../messages';

//lockedhardcopies
const getLockedHardCopyListStart = () => {
  return {
    type: GET_LOCKED_HARD_COPIES_START
  };
};

const getLockedHardCopyListSuccess = lockedhardcopies => {
  return {
    type: GET_LOCKED_HARD_COPIES_SUCCESS,
    lockedhardcopies
  };
};

const getLockedHardCopyListFail = error => {
  return {
    type: GET_LOCKED_HARD_COPIES_FAIL,
    error: error
  };
};

const createLockedHardCopyStart = () => {
  return {
    type: CREATE_LOCKED_HARD_COPY_START
  };
};


const createLockedHardCopySuccess = lockedhardcopy => {
  return {
    type: CREATE_LOCKED_HARD_COPY_SUCCESS,
    lockedhardcopy
  };
};

const createLockedHardCopyFail = error => {
  return {
    type: CREATE_LOCKED_HARD_COPY_FAIL,
    error: error
  };
};

const getLockedHardCopyDetailStart = () => {
  return {
    type: GET_LOCKED_HARD_COPY_START
  };
};

const getLockedHardCopyDetailSuccess = lockedhardcopy => {
  return {
    type: GET_LOCKED_HARD_COPY_SUCCESS,
    lockedhardcopy
  };
};

const getLockedHardCopyDetailFail = error => {
  return {
    type: GET_LOCKED_HARD_COPY_FAIL,
    error: error
  };
};

export const getLockedHardCopies = (id, token) => {
  return dispatch => {
      dispatch(getLockedHardCopyListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${lockedhardcopiesURL}?id=${id}`, headers)
        .then(res => {
          const lockedhardcopies = res.data;
          dispatch(getLockedHardCopyListSuccess(lockedhardcopies));
          })
        .catch(err => {
          dispatch(getLockedHardCopyListStart(err));
        });
    };
};

export const getLockedHardCopy = (id, token) => {
  return dispatch => {
      dispatch(getLockedHardCopyDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${lockedhardcopiesURL}${id}`, headers)
        .then(res => {
          const lockedhardcopy = res.data;
          dispatch(getLockedHardCopyDetailSuccess(lockedhardcopy));
          })
        .catch(err => {
          dispatch(getLockedHardCopyDetailFail(err));
        });
    };
};

export const addLockedHardCopy = (lockedhardcopy, token) => {
  return dispatch => {
      dispatch(createLockedHardCopyStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(lockedhardcopiesURL, lockedhardcopy, headers)
        .then(res => {
          dispatch(createLockedHardCopySuccess(lockedhardcopy));
        })
        .catch(err => {
          dispatch(createLockedHardCopyFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editLockedHardCopy = (id, lockedhardcopy, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${lockedhardcopiesURL}${id}/`, lockedhardcopy, headers)
        .then(res => {
            dispatch({
                type: EDIT_LOCKED_HARD_COPY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
