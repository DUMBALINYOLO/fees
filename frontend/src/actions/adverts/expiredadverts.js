import axios from 'axios';
import {
    GET_EXPIRED_ADVERTS_START,
    GET_EXPIRED_ADVERTS_SUCCESS,
    GET_EXPIRED_ADVERTS_FAIL,
    GET_EXPIRED_ADVERT_START,
    GET_EXPIRED_ADVERT_SUCCESS,
    GET_EXPIRED_ADVERT_FAIL,
    } from '../../types/expiredadvertTypes';
import { expiredadvertsURL } from '../../constants';

//expired adverts
const getExpiredAdvertListStart = () => {
  return {
    type: GET_EXPIRED_ADVERTS_START
  };
};

const getExpiredAdvertListSuccess = expiredadverts => {
  return {
    type: GET_EXPIRED_ADVERTS_SUCCESS,
    expiredadverts
  };
};

const getExpiredAdvertListFail = error => {
  return {
    type: GET_EXPIRED_ADVERTS_FAIL,
    error: error
  };
};

const getExpiredAdvertDetailStart = () => {
  return {
    type: GET_EXPIRED_ADVERT_START
  };
};

const getExpiredAdvertDetailSuccess = expiredadvert => {
  return {
    type: GET_EXPIRED_ADVERT_SUCCESS,
    expiredadvert
  };
};

const getExpiredAdvertDetailFail = error => {
  return {
    type: GET_EXPIRED_ADVERT_FAIL,
    error: error
  };
};

export const getExpiredAdverts = (token) => {
  return dispatch => {
      dispatch(getExpiredAdvertListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(expiredadvertsURL, headers)
        .then(res => {
          const expiredadverts = res.data;
          dispatch(getExpiredAdvertListSuccess(expiredadverts));
          })
        .catch(err => {
          dispatch(getExpiredAdvertListStart(err));
        });
    };
};

export const getExpiredAdvert = (id, token) => {
  return dispatch => {
      dispatch(getExpiredAdvertDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${expiredadvertsURL}${id}`, headers)
        .then(res => {
          const expiredadvert = res.data;
          dispatch(getExpiredAdvertDetailSuccess(expiredadvert));
          })
        .catch(err => {
          dispatch(getExpiredAdvertDetailFail(err));
        });
    };
};
