import axios from 'axios';
import {
    GET_EBOOK_SUBSCRIPTION_PLANS_START,
    GET_EBOOK_SUBSCRIPTION_PLANS_SUCCESS,
    GET_EBOOK_SUBSCRIPTION_PLANS_FAIL,
    CREATE_EBOOK_SUBSCRIPTION_PLAN_START,
    CREATE_EBOOK_SUBSCRIPTION_PLAN_SUCCESS,
    CREATE_EBOOK_SUBSCRIPTION_PLAN_FAIL,
    GET_EBOOK_SUBSCRIPTION_PLAN_START,
    GET_EBOOK_SUBSCRIPTION_PLAN_SUCCESS,
    GET_EBOOK_SUBSCRIPTION_PLAN_FAIL,
    EDIT_EBOOK_SUBSCRIPTION_PLAN
    } from '../../types/ebooksubsriptionplanTypes';
import { ebooksubsriptionplansURL } from '../../constants';
import {
  returnErrors
} from '../messages';


//ebook subsription plans
const getEbookSubsriptionPlanListStart = () => {
  return {
    type: GET_EBOOK_SUBSCRIPTION_PLANS_START
  };
};

const getEbookSubsriptionPlanListSuccess = ebooksubsriptionplans => {
  return {
    type: GET_EBOOK_SUBSCRIPTION_PLANS_SUCCESS,
    ebooksubsriptionplans
  };
};

const getEbookSubsriptionPlanListFail = error => {
  return {
    type: GET_EBOOK_SUBSCRIPTION_PLANS_FAIL,
    error: error
  };
};

const createEbookSubsriptionPlanStart = () => {
  return {
    type: CREATE_EBOOK_SUBSCRIPTION_PLAN_START
  };
};


const createEbookSubsriptionPlanSuccess = ebooksubsriptionplan => {
  return {
    type: CREATE_EBOOK_SUBSCRIPTION_PLAN_SUCCESS,
    ebooksubsriptionplan
  };
};

const createEbookSubsriptionPlanFail = error => {
  return {
    type: CREATE_EBOOK_SUBSCRIPTION_PLAN_FAIL,
    error: error
  };
};

const getEbookSubsriptionPlanDetailStart = () => {
  return {
    type: GET_EBOOK_SUBSCRIPTION_PLAN_START
  };
};

const getEbookSubsriptionPlanDetailSuccess = ebooksubsriptionplan => {
  return {
    type: GET_EBOOK_SUBSCRIPTION_PLAN_SUCCESS,
    ebooksubsriptionplan
  };
};

const getEbookSubsriptionPlanDetailFail = error => {
  return {
    type: GET_EBOOK_SUBSCRIPTION_PLAN_FAIL,
    error: error
  };
};

export const getEbookSubsriptionPlans = (id, token) => {
  return dispatch => {
      dispatch(getEbookSubsriptionPlanListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${ebooksubsriptionplansURL}?id=${id}`, headers)
        .then(res => {
          const ebooksubsriptionplans = res.data;
          dispatch(getEbookSubsriptionPlanListSuccess(ebooksubsriptionplans));
          })
        .catch(err => {
          dispatch(getEbookSubsriptionPlanListStart(err));
        });
    };
};

export const getEbookSubsriptionPlan = (id, token) => {
  return dispatch => {
      dispatch(getEbookSubsriptionPlanDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${ebooksubsriptionplansURL}${id}`, headers)
        .then(res => {
          const ebooksubsriptionplan = res.data;
          dispatch(getEbookSubsriptionPlanDetailSuccess(ebooksubsriptionplan));
          })
        .catch(err => {
          dispatch(getEbookSubsriptionPlanDetailFail(err));
        });
    };
};

export const addEbookSubsriptionPlan = (ebooksubsriptionplan, token) => {
  return dispatch => {
      dispatch(createEbookSubsriptionPlanStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(ebooksubsriptionplansURL, ebooksubsriptionplan, headers)
        .then(res => {
          dispatch(createEbookSubsriptionPlanSuccess(ebooksubsriptionplan));
        })
        .catch(err => {
          dispatch(createEbookSubsriptionPlanFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editEbookSubsriptionPlan = (id, ebooksubsriptionplan, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${ebooksubsriptionplansURL}${id}/`, ebooksubsriptionplan, headers)
        .then(res => {
            dispatch({
                type: EDIT_EBOOK_SUBSCRIPTION_PLAN,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
