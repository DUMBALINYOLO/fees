import axios from 'axios';
import {
    GET_PUBLISHERS_START,
    GET_PUBLISHERS_SUCCESS,
    GET_PUBLISHERS_FAIL,
    CREATE_PUBLISHER_START,
    CREATE_PUBLISHER_SUCCESS,
    CREATE_PUBLISHER_FAIL,
    GET_PUBLISHER_START,
    GET_PUBLISHER_SUCCESS,
    GET_PUBLISHER_FAIL,
    EDIT_PUBLISHER
    } from '../../types/publisherTypes';
import { publishersURL } from '../../constants';

//publishers
const getPublisherListStart = () => {
  return {
    type: GET_PUBLISHERS_START
  };
};

const getPublisherListSuccess = publishers => {
  return {
    type: GET_PUBLISHERS_SUCCESS,
    publishers
  };
};

const getPublisherListFail = error => {
  return {
    type: GET_PUBLISHERS_FAIL,
    error: error
  };
};

const createPublisherStart = () => {
  return {
    type: CREATE_PUBLISHER_START
  };
};


const createPublisherSuccess = publisher => {
  return {
    type: CREATE_PUBLISHER_SUCCESS,
    publisher
  };
};

const createPublisherFail = error => {
  return {
    type: CREATE_PUBLISHER_FAIL,
    error: error
  };
};

const getPublisherDetailStart = () => {
  return {
    type: GET_PUBLISHER_START
  };
};

const getPublisherDetailSuccess = publisher => {
  return {
    type: GET_PUBLISHER_SUCCESS,
    publisher
  };
};

const getPublisherDetailFail = error => {
  return {
    type: GET_PUBLISHER_FAIL,
    error: error
  };
};

export const getPublishers = (token) => {
  return dispatch => {
      dispatch(getPublisherListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(publishersURL, headers)
        .then(res => {
          const publishers = res.data;
          dispatch(getPublisherListSuccess(publishers));
          })
        .catch(err => {
          dispatch(getPublisherListStart(err));
        });
    };
};

export const getPublisher = (id, token) => {
  return dispatch => {
      dispatch(getPublisherDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishersURL}${id}`, headers)
        .then(res => {
          const publisher = res.data;
          dispatch(getPublisherDetailSuccess(publisher));
          })
        .catch(err => {
          dispatch(getPublisherDetailFail(err));
        });
    };
};

export const addPublisher = (publisher, token) => {
  return dispatch => {
      dispatch(createPublisherStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(publishersURL, publisher, headers)
        .then(res => {
          dispatch(createPublisherSuccess(publisher));
        })
        .catch(err => {
          dispatch(createPublisherFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editPublisher = (id, publisher, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${publishersURL}${id}/`, publisher, headers)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
