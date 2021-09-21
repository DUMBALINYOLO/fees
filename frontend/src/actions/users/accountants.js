import axios from 'axios';
import {
    GET_ACCOUNTANTS_START,
    GET_ACCOUNTANTS_SUCCESS,
    GET_ACCOUNTANTS_FAIL,
    CREATE_ACCOUNTANT_START,
    CREATE_ACCOUNTANT_SUCCESS,
    CREATE_ACCOUNTANT_FAIL,
    GET_ACCOUNTANT_START,
    GET_ACCOUNTANT_SUCCESS,
    GET_ACCOUNTANT_FAIL,
    EDIT_ACCOUNTANT
    } from '../../types/accountantTypes';
import { accountantsURL } from '../../constants';
import { createaccountantURL } from '../../constants';
import { returnErrors } from '../messages';

//accountants
const getAccountantListStart = () => {
  return {
    type: GET_ACCOUNTANTS_START
  };
};

const getAccountantListSuccess = accountants => {
  return {
    type: GET_ACCOUNTANTS_SUCCESS,
    accountants
  };
};

const getAccountantListFail = error => {
  return {
    type: GET_ACCOUNTANTS_FAIL,
    error: error
  };
};

const createAccountantStart = () => {
  return {
    type: CREATE_ACCOUNTANT_START
  };
};


const createAccountantSuccess = accountant => {
  return {
    type: CREATE_ACCOUNTANT_SUCCESS,
    accountant
  };
};

const createAccountantFail = error => {
  return {
    type: CREATE_ACCOUNTANT_FAIL,
    error: error
  };
};

const getAccountantDetailStart = () => {
  return {
    type: GET_ACCOUNTANT_START
  };
};

const getAccountantDetailSuccess = accountant => {
  return {
    type: GET_ACCOUNTANT_SUCCESS,
    accountant
  };
};

const getAccountantDetailFail = error => {
  return {
    type: GET_ACCOUNTANT_FAIL,
    error: error
  };
};

export const getAccountants = (token) => {
  return dispatch => {
      dispatch(getAccountantListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(accountantsURL, headers)
        .then(res => {
          const accountants = res.data;
          dispatch(getAccountantListSuccess(accountants));
          })
        .catch(err => {
          dispatch(getAccountantListStart(err));
        });
    };
};

export const getAccountant = (id, token) => {
  return dispatch => {
      dispatch(getAccountantDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${accountantsURL}${id}`, headers)
        .then(res => {
          const accountant = res.data;
          dispatch(getAccountantDetailSuccess(accountant));
          })
        .catch(err => {
          dispatch(getAccountantDetailFail(err));
        });
    };
};

export const addAccountant = (accountant, token) => {
  return dispatch => {
      dispatch(createAccountantStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createaccountantURL, accountant, headers)
        .then(res => {
          dispatch(createAccountantSuccess(accountant));
        })
        .catch(err => {
          dispatch(createAccountantFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAccountant = (id, accountant, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${accountantsURL}${id}/`, accountant, headers)
        .then(res => {
            dispatch({
                type: EDIT_ACCOUNTANT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

