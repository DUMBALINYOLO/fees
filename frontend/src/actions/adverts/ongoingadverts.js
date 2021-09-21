import axios from 'axios';
import {
    GET_ONGOING_ADVERTS_START,
    GET_ONGOING_ADVERTS_SUCCESS,
    GET_ONGOING_ADVERTS_FAIL,
    GET_ONGOING_ADVERT_START,
    GET_ONGOING_ADVERT_SUCCESS,
    GET_ONGOING_ADVERT_FAIL,
    } from '../../types/ongoingadvertTypes';
import { ongoingadvertsURL } from '../../constants';

//ongoing adverts
const getOngoingAdvertListStart = () => {
  return {
    type: GET_ONGOING_ADVERTS_START
  };
};

const getOngoingAdvertListSuccess = ongoingadverts => {
  return {
    type: GET_ONGOING_ADVERTS_SUCCESS,
    ongoingadverts
  };
};

const getOngoingAdvertListFail = error => {
  return {
    type: GET_ONGOING_ADVERTS_FAIL,
    error: error
  };
};

const getOngoingAdvertDetailStart = () => {
  return {
    type: GET_ONGOING_ADVERT_START
  };
};

const getOngoingAdvertDetailSuccess = ongoingadvert => {
  return {
    type: GET_ONGOING_ADVERT_SUCCESS,
    ongoingadvert
  };
};

const getOngoingAdvertDetailFail = error => {
  return {
    type: GET_ONGOING_ADVERT_FAIL,
    error: error
  };
};

export const getOngoingAdverts = (token) => {
  return dispatch => {
      dispatch(getOngoingAdvertListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(ongoingadvertsURL, headers)
        .then(res => {
          const ongoingadverts = res.data;
          dispatch(getOngoingAdvertListSuccess(ongoingadverts));
          })
        .catch(err => {
          dispatch(getOngoingAdvertListStart(err));
        });
    };
};

export const getOngoingAdvert = (id, token) => {
  return dispatch => {
      dispatch(getOngoingAdvertDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${ongoingadvertsURL}${id}`, headers)
        .then(res => {
          const ongoingadvert = res.data;
          dispatch(getOngoingAdvertDetailSuccess(ongoingadvert));
          })
        .catch(err => {
          dispatch(getOngoingAdvertDetailFail(err));
        });
    };
};
