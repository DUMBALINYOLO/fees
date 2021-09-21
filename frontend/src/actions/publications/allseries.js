import axios from 'axios';
import {
    GET_ALL_SERIES_START,
    GET_ALL_SERIES_SUCCESS,
    GET_ALL_SERIES_FAIL,
    CREATE_ALL_SERIES_START,
    CREATE_ALL_SERIES_SUCCESS,
    CREATE_ALL_SERIES_FAIL,
    GET_SERIES_START,
    GET_SERIES_SUCCESS,
    GET_SERIES_FAIL,
    EDIT_ALL_SERIES
    } from '../../types/allseriesTypes';
import { allseriesURL } from '../../constants';
import { returnErrors } from '../messages';

//allseries
const getAllSeriesListStart = () => {
  return {
    type: GET_ALL_SERIES_START
  };
};

const getAllSeriesListSuccess = allseries => {
  return {
    type: GET_ALL_SERIES_SUCCESS,
    allseries
  };
};

const getAllSeriesListFail = error => {
  return {
    type: GET_ALL_SERIES_FAIL,
    error: error
  };
};

const createAllSeriesStart = () => {
  return {
    type: CREATE_ALL_SERIES_START
  };
};


const createAllSeriesSuccess = series => {
  return {
    type: CREATE_ALL_SERIES_SUCCESS,
    series
  };
};

const createAllSeriesFail = error => {
  return {
    type: CREATE_ALL_SERIES_FAIL,
    error: error
  };
};

const getAllSeriesDetailStart = () => {
  return {
    type: GET_SERIES_START
  };
};

const getAllSeriesDetailSuccess = series => {
  return {
    type: GET_SERIES_SUCCESS,
    series
  };
};

const getAllSeriesDetailFail = error => {
  return {
    type: GET_SERIES_FAIL,
    error: error
  };
};

export const getAllSeries = (id, token) => {
  return dispatch => {
      dispatch(getAllSeriesListStart());
      let headers = axios.defaults.headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${allseriesURL}?id=${id}`, headers)
        .then(res => {
          const allseries = res.data;
          dispatch(getAllSeriesListSuccess(allseries));
          })
        .catch(err => {
          dispatch(getAllSeriesListStart(err));
        });
    };
};

export const getSeries = (id, token) => {
  return dispatch => {
      dispatch(getAllSeriesDetailStart());
      let headers = axios.defaults.headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${allseriesURL}${id}`, headers)
        .then(res => {
          const series = res.data;
          dispatch(getAllSeriesDetailSuccess(series));
          })
        .catch(err => {
          dispatch(getAllSeriesDetailFail(err));
        });
    };
};

export const addAllSeries = (series, token) => {
  return dispatch => {
      dispatch(createAllSeriesStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': "application/json"
      };
      axios
        .post(allseriesURL, series, headers)
        .then(res => {
          dispatch(createAllSeriesSuccess(series));
        })
        .catch(err => {
          dispatch(createAllSeriesFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAllSeries = (id, series, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${allseriesURL}${id}/`, series, headers)
        .then(res => {
            dispatch({
                type: EDIT_ALL_SERIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
