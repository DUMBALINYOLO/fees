import axios from 'axios';
import {
    GET_SERIES_SUBSCRIPTION_PLANS_START,
    GET_SERIES_SUBSCRIPTION_PLANS_SUCCESS,
    GET_SERIES_SUBSCRIPTION_PLANS_FAIL,
    CREATE_SERIES_SUBSCRIPTION_PLAN_START,
    CREATE_SERIES_SUBSCRIPTION_PLAN_SUCCESS,
    CREATE_SERIES_SUBSCRIPTION_PLAN_FAIL,
    GET_SERIES_SUBSCRIPTION_PLAN_START,
    GET_SERIES_SUBSCRIPTION_PLAN_SUCCESS,
    GET_SERIES_SUBSCRIPTION_PLAN_FAIL,
    EDIT_SERIES_SUBSCRIPTION_PLAN
    } from '../../types/seriessubsriptionplanTypes';
import { seriessubsriptionplansURL } from '../../constants';
import { returnErrors } from '../messages';

//seriessubsriptionplans
const getSeriesSubsriptionPlanListStart = () => {
  return {
    type: GET_SERIES_SUBSCRIPTION_PLANS_START
  };
};


const getSeriesSubsriptionPlanListSuccess = seriessubsriptionplans => {
  return {
    type: GET_SERIES_SUBSCRIPTION_PLANS_SUCCESS,
    seriessubsriptionplans
  };
};

const getSeriesSubsriptionPlanListFail = error => {
  return {
    type: GET_SERIES_SUBSCRIPTION_PLANS_FAIL,
    error: error
  };
};

const createSeriesSubsriptionPlanStart = () => {
  return {
    type: CREATE_SERIES_SUBSCRIPTION_PLAN_START
  };
};


const createSeriesSubsriptionPlanSuccess = seriessubsriptionplan => {
  return {
    type: CREATE_SERIES_SUBSCRIPTION_PLAN_SUCCESS,
    seriessubsriptionplan
  };
};

const createSeriesSubsriptionPlanFail = error => {
  return {
    type: CREATE_SERIES_SUBSCRIPTION_PLAN_FAIL,
    error: error
  };
};

const getSeriesSubsriptionPlanDetailStart = () => {
  return {
    type: GET_SERIES_SUBSCRIPTION_PLAN_START
  };
};

const getSeriesSubsriptionPlanDetailSuccess = seriessubsriptionplan => {
  return {
    type: GET_SERIES_SUBSCRIPTION_PLAN_SUCCESS,
    seriessubsriptionplan
  };
};

const getSeriesSubsriptionPlanDetailFail = error => {
  return {
    type: GET_SERIES_SUBSCRIPTION_PLAN_FAIL,
    error: error
  };
};

export const getSeriesSubsriptionPlans = (id, token) => {
  return dispatch => {
      dispatch(getSeriesSubsriptionPlanListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${seriessubsriptionplansURL}?id=${id}`, headers)
        .then(res => {
          const seriessubsriptionplans = res.data;
          dispatch(getSeriesSubsriptionPlanListSuccess(seriessubsriptionplans));
          })
        .catch(err => {
          dispatch(getSeriesSubsriptionPlanListStart(err));
        });
    };
};

export const getSeriesSubsriptionPlan = (id, token) => {
  return dispatch => {
      dispatch(getSeriesSubsriptionPlanDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${seriessubsriptionplansURL}${id}`, headers)
        .then(res => {
          const seriessubsriptionplan = res.data;
          dispatch(getSeriesSubsriptionPlanDetailSuccess(seriessubsriptionplan));
          })
        .catch(err => {
          dispatch(getSeriesSubsriptionPlanDetailFail(err));
        });
    };
};

export const addSeriesSubsriptionPlan = (seriessubsriptionplan, token) => {
  return dispatch => {
      dispatch(createSeriesSubsriptionPlanStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(seriessubsriptionplansURL, seriessubsriptionplan, headers)
        .then(res => {
          dispatch(createSeriesSubsriptionPlanSuccess(seriessubsriptionplan));
        })
        .catch(err => {
          dispatch(createSeriesSubsriptionPlanFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editSeriesSubsriptionPlan = (id, seriessubsriptionplan, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${seriessubsriptionplansURL}${id}/`, seriessubsriptionplan, headers)
        .then(res => {
            dispatch({
                type: EDIT_SERIES_SUBSCRIPTION_PLAN,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
