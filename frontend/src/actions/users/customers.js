import axios from 'axios';
import {
    GET_CUSTOMERS_START,
    GET_CUSTOMERS_SUCCESS,
    GET_CUSTOMERS_FAIL,
    CREATE_CUSTOMER_START,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAIL,
    GET_CUSTOMER_START,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAIL,
    EDIT_CUSTOMER
    } from '../../types/customerTypes';
import { customersURL } from '../../constants';
import { createcustomerURL } from '../../constants';
import { returnErrors } from '../messages';

//customers
const getCustomerListStart = () => {
  return {
    type: GET_CUSTOMERS_START
  };
};

const getCustomerListSuccess = customers => {
  return {
    type: GET_CUSTOMERS_SUCCESS,
    customers
  };
};

const getCustomerListFail = error => {
  return {
    type: GET_CUSTOMERS_FAIL,
    error: error
  };
};

const createCustomerStart = () => {
  return {
    type: CREATE_CUSTOMER_START
  };
};


const createCustomerSuccess = customer => {
  return {
    type: CREATE_CUSTOMER_SUCCESS,
    customer
  };
};

const createCustomerFail = error => {
  return {
    type: CREATE_CUSTOMER_FAIL,
    error: error
  };
};

const getCustomerDetailStart = () => {
  return {
    type: GET_CUSTOMER_START
  };
};

const getCustomerDetailSuccess = customer => {
  return {
    type: GET_CUSTOMER_SUCCESS,
    customer
  };
};

const getCustomerDetailFail = error => {
  return {
    type: GET_CUSTOMER_FAIL,
    error: error
  };
};

export const getCustomers = (token) => {
  return dispatch => {
      dispatch(getCustomerListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customersURL, headers)
        .then(res => {
          const customers = res.data;
          dispatch(getCustomerListSuccess(customers));
          })
        .catch(err => {
          dispatch(getCustomerListStart(err));
        });
    };
};

export const getCustomer = (id, token) => {
  return dispatch => {
      dispatch(getCustomerDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${customersURL}${id}`, headers)
        .then(res => {
          const customer = res.data;
          dispatch(getCustomerDetailSuccess(customer));
          })
        .catch(err => {
          dispatch(getCustomerDetailFail(err));
        });
    };
};

export const addCustomer = (customer, token) => {
  return dispatch => {
      dispatch(createCustomerStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createcustomerURL, customer, headers)
        .then(res => {
          dispatch(createCustomerSuccess(customer));
        })
        .catch(err => {
          dispatch(createCustomerFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editCustomer = (id, customer, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${customersURL}${id}/`, customer, headers)
        .then(res => {
            dispatch({
                type: EDIT_CUSTOMER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

