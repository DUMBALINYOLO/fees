import axios from 'axios';
import {
    GET_SALES_REPRESANTATIVES_START,
    GET_SALES_REPRESANTATIVES_SUCCESS,
    GET_SALES_REPRESANTATIVES_FAIL,
    CREATE_SALES_REPRESANTATIVE_START,
    CREATE_SALES_REPRESANTATIVE_SUCCESS,
    CREATE_SALES_REPRESANTATIVE_FAIL,
    GET_SALES_REPRESANTATIVE_START,
    GET_SALES_REPRESANTATIVE_SUCCESS,
    GET_SALES_REPRESANTATIVE_FAIL,
    EDIT_SALES_REPRESANTATIVE
    } from '../../types/salesrepresantativeTypes';
import { salesrepresantativesURL } from '../../constants';
import { createsalesrepURL } from '../../constants';
import { returnErrors } from '../messages';

//sales represantatives
const getSalesRepresantativeListStart = () => {
  return {
    type: GET_SALES_REPRESANTATIVES_START
  };
};

const getSalesRepresantativeListSuccess = salesrepresantatives => {
  return {
    type: GET_SALES_REPRESANTATIVES_SUCCESS,
    salesrepresantatives
  };
};

const getSalesRepresantativeListFail = error => {
  return {
    type: GET_SALES_REPRESANTATIVES_FAIL,
    error: error
  };
};

const createSalesRepresantativeStart = () => {
  return {
    type: CREATE_SALES_REPRESANTATIVE_START
  };
};


const createSalesRepresantativeSuccess = salesrepresantative => {
  return {
    type: CREATE_SALES_REPRESANTATIVE_SUCCESS,
    salesrepresantative
  };
};

const createSalesRepresantativeFail = error => {
  return {
    type: CREATE_SALES_REPRESANTATIVE_FAIL,
    error: error
  };
};

const getSalesRepresantativeDetailStart = () => {
  return {
    type: GET_SALES_REPRESANTATIVE_START
  };
};

const getSalesRepresantativeDetailSuccess = salesrepresantative => {
  return {
    type: GET_SALES_REPRESANTATIVE_SUCCESS,
    salesrepresantative
  };
};

const getSalesRepresantativeDetailFail = error => {
  return {
    type: GET_SALES_REPRESANTATIVE_FAIL,
    error: error
  };
};

export const getSalesRepresantatives = (token) => {
  return dispatch => {
      dispatch(getSalesRepresantativeListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(salesrepresantativesURL, headers)
        .then(res => {
          const salesrepresantatives = res.data;
          dispatch(getSalesRepresantativeListSuccess(salesrepresantatives));
          })
        .catch(err => {
          dispatch(getSalesRepresantativeListStart(err));
        });
    };
};

export const getSalesRepresantative = (id, token) => {
  return dispatch => {
      dispatch(getSalesRepresantativeDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${salesrepresantativesURL}${id}`, headers)
        .then(res => {
          const salesrepresantative = res.data;
          dispatch(getSalesRepresantativeDetailSuccess(salesrepresantative));
          })
        .catch(err => {
          dispatch(getSalesRepresantativeDetailFail(err));
        });
    };
};

export const addSalesRepresantative = (salesrepresantative, token) => {
  return dispatch => {
      dispatch(createSalesRepresantativeStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createsalesrepURL, salesrepresantative, headers)
        .then(res => {
          dispatch(createSalesRepresantativeSuccess(salesrepresantative));
        })
        .catch(err => {
          dispatch(createSalesRepresantativeFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editSalesRepresantative = (id, salesrepresantative, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${salesrepresantativesURL}${id}/`, salesrepresantative, headers)
        .then(res => {
            dispatch({
                type: EDIT_SALES_REPRESANTATIVE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

