import axios from 'axios';
import {
    GET_PUBLISHER_CITIES_START,
    GET_PUBLISHER_CITIES_SUCCESS,
    GET_PUBLISHER_CITIES_FAIL,
    CREATE_PUBLISHER_CITY_START,
    CREATE_PUBLISHER_CITY_SUCCESS,
    CREATE_PUBLISHER_CITY_FAIL,
    GET_PUBLISHER_CITY_START,
    GET_PUBLISHER_CITY_SUCCESS,
    GET_PUBLISHER_CITY_FAIL,
    EDIT_PUBLISHER_CITY
    } from '../../types/publishercityTypes';
import { publishercitiesURL } from '../../constants';

//publisher cities
const getPublisherCityListStart = () => {
  return {
    type: GET_PUBLISHER_CITIES_START
  };
};

const getPublisherCityListSuccess = publishercities => {
  return {
    type: GET_PUBLISHER_CITIES_SUCCESS,
    publishercities
  };
};

const getPublisherCityListFail = error => {
  return {
    type: GET_PUBLISHER_CITIES_FAIL,
    error: error
  };
};

const createPublisherCityStart = () => {
  return {
    type: CREATE_PUBLISHER_CITY_START
  };
};


const createPublisherCitySuccess = publishercity => {
  return {
    type: CREATE_PUBLISHER_CITY_SUCCESS,
    publishercity
  };
};

const createPublisherCityFail = error => {
  return {
    type: CREATE_PUBLISHER_CITY_FAIL,
    error: error
  };
};

const getPublisherCityDetailStart = () => {
  return {
    type: GET_PUBLISHER_CITY_START
  };
};

const getPublisherCityDetailSuccess = publishercity => {
  return {
    type: GET_PUBLISHER_CITY_SUCCESS,
    publishercity
  };
};

const getPublisherCityDetailFail = error => {
  return {
    type: GET_PUBLISHER_CITY_FAIL,
    error: error
  };
};

export const getPublisherCities = (token) => {
  return dispatch => {
      dispatch(getPublisherCityListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(publishercitiesURL, headers)
        .then(res => {
          const publishercities = res.data;
          dispatch(getPublisherCityListSuccess(publishercities));
          })
        .catch(err => {
          dispatch(getPublisherCityListStart(err));
        });
    };
};

export const getPublisherCity = (id, token) => {
  return dispatch => {
      dispatch(getPublisherCityDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${publishercitiesURL}${id}`, headers)
        .then(res => {
          const publishercity = res.data;
          dispatch(getPublisherCityDetailSuccess(publishercity));
          })
        .catch(err => {
          dispatch(getPublisherCityDetailFail(err));
        });
    };
};

export const addPublisherCity = (publishercity, token) => {
  return dispatch => {
      dispatch(createPublisherCityStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(publishercitiesURL, publishercity, headers)
        .then(res => {
          dispatch(createPublisherCitySuccess(publishercity));
        })
        .catch(err => {
          dispatch(createPublisherCityFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editPublisherCity = (id, publishercity, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${publishercitiesURL}${id}/`, publishercity, headers)
        .then(res => {
            dispatch({
                type: EDIT_PUBLISHER_CITY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
