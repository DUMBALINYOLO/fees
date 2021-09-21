import axios from 'axios';
import {
    GET_UPCOMING_ADVERTS_START,
    GET_UPCOMING_ADVERTS_SUCCESS,
    GET_UPCOMING_ADVERTS_FAIL,
    CREATE_UPCOMING_ADVERT_START,
    CREATE_UPCOMING_ADVERT_SUCCESS,
    CREATE_UPCOMING_ADVERT_FAIL,
    GET_UPCOMING_ADVERT_START,
    GET_UPCOMING_ADVERT_SUCCESS,
    GET_UPCOMING_ADVERT_FAIL,
    EDIT_UPCOMING_ADVERT
    } from '../../types/upcomingadvertTypes';
import { upcomingadvertsURL } from '../../constants';
import { returnErrors } from '../messages';



//upcoming adverts
const getUpcomingAdvertListStart = () => {
  return {
    type: GET_UPCOMING_ADVERTS_START
  };
};

const getUpcomingAdvertListSuccess = upcomingadverts => {
  return {
    type: GET_UPCOMING_ADVERTS_SUCCESS,
    upcomingadverts
  };
};

const getUpcomingAdvertListFail = error => {
  return {
    type: GET_UPCOMING_ADVERTS_FAIL,
    error: error
  };
};

const createUpcomingAdvertStart = () => {
  return {
    type: CREATE_UPCOMING_ADVERT_START
  };
};


const createUpcomingAdvertSuccess = upcomingadvert => {
  return {
    type: CREATE_UPCOMING_ADVERT_SUCCESS,
    upcomingadvert
  };
};

const createUpcomingAdvertFail = error => {
  return {
    type: CREATE_UPCOMING_ADVERT_FAIL,
    error: error
  };
};

const getUpcomingAdvertDetailStart = () => {
  return {
    type: GET_UPCOMING_ADVERT_START
  };
};

const getUpcomingAdvertDetailSuccess = upcomingadvert => {
  return {
    type: GET_UPCOMING_ADVERT_SUCCESS,
    upcomingadvert
  };
};

const getUpcomingAdvertDetailFail = error => {
  return {
    type: GET_UPCOMING_ADVERT_FAIL,
    error: error
  };
};

export const getUpcomingAdverts = (token) => {
  return dispatch => {
      dispatch(getUpcomingAdvertListStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(upcomingadvertsURL, headers)
        .then(res => {
          const upcomingadverts = res.data;
          dispatch(getUpcomingAdvertListSuccess(upcomingadverts));
          })
        .catch(err => {
          dispatch(getUpcomingAdvertListStart(err));
        });
    };
};

export const getUpcomingAdvert = (id, token) => {
  return dispatch => {
      dispatch(getUpcomingAdvertDetailStart());
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${upcomingadvertsURL}${id}`, headers)
        .then(res => {
          const upcomingadvert = res.data;
          dispatch(getUpcomingAdvertDetailSuccess(upcomingadvert));
          })
        .catch(err => {
          dispatch(getUpcomingAdvertDetailFail(err));
        });
    };
};

export const addUpcomingAdvert = (upcomingadvert, token) => {
  return dispatch => {
      dispatch(createUpcomingAdvertStart());
      const headers ={
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
            'Accept': 'multipart/form-data',
      };
      axios
        .post(upcomingadvertsURL, upcomingadvert, headers)
        .then(res => {
          dispatch(createUpcomingAdvertSuccess(upcomingadvert));
        })
        .catch(err => {
          dispatch(createUpcomingAdvertFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editUpcomingAdvert = (id, upcomingadvert, token) => dispatch => {
  const headers ={
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${token}`,
        'Accept': 'multipart/form-data',
  };
    JSON.stringify(id, null, 3)
    axios.patch(`${upcomingadvertsURL}${id}/`, upcomingadvert, headers)
        .then(res => {
            dispatch({
                type: EDIT_UPCOMING_ADVERT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
