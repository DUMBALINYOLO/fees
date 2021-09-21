import axios from 'axios';
import {
  GET_CURRENCIES_START,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  CREATE_CURRENCY_START,
  CREATE_CURRENCY_SUCCESS,
  CREATE_CURRENCY_FAIL,
  EDIT_CURRENCY,
  GET_DELETED_CURRENCIES_START,
  GET_DELETED_CURRENCIES_SUCCESS,
  GET_DELETED_CURRENCIES_FAIL,
  CREATE_TAX_START,
  CREATE_TAX_SUCCESS,
  CREATE_TAX_FAIL,
  EDIT_TAX,
  GET_TAXES_START,
  GET_TAXES_SUCCESS,
  GET_TAXES_FAIL,
  GET_DELETED_TAXES_START,
  GET_DELETED_TAXES_SUCCESS,
  GET_DELETED_TAXES_FAIL
} from '../../types/configTypes';
import { currenciesURL, deletedcurrenciesURL, taxesURL, deletedtaxesURL } from '../../constants';
import { returnErrors } from '../messages';

//currencies
const getCurrencyListStart = () => {
  return {
    type: GET_CURRENCIES_START
  };
};

const getCurrencyListSuccess = currencies => {
  return {
    type: GET_CURRENCIES_SUCCESS,
    currencies
  };
};

const getCurrencyListFail = error => {
  return {
    type: GET_CURRENCIES_FAIL,
    error: error
  };
};

const createCurrencyStart = () => {
  return {
    type: CREATE_CURRENCY_START
  };
};

const createCurrencySuccess = currency => {
  return {
    type: CREATE_CURRENCY_SUCCESS,
    currency
  };
};

const createCurrencyFail = error => {
  return {
    type: CREATE_CURRENCY_FAIL,
    error: error
  };
};

const getDeletedCurrencyListStart = () => {
  return {
    type: GET_DELETED_CURRENCIES_START
  };
};

const getDeletedCurrencyListSuccess = deletedcurrencies => {
  return {
    type: GET_DELETED_CURRENCIES_SUCCESS,
    deletedcurrencies
  };
};

const getDeletedCurrencyListFail = error => {
  return {
    type: GET_DELETED_CURRENCIES_FAIL,
    error: error
  };
};

//taxes
const getTaxListStart = () => {
  return {
    type: GET_TAXES_START
  };
};

const getTaxListSuccess = taxes => {
  return {
    type: GET_TAXES_SUCCESS,
    taxes
  };
};

const getTaxListFail = error => {
  return {
    type: GET_TAXES_FAIL,
    error: error
  };
};

const createTaxStart = () => {
  return {
    type: CREATE_TAX_START
  };
};


const createTaxSuccess = tax => {
  return {
    type: CREATE_TAX_SUCCESS,
    tax
  };
};

const createTaxFail = error => {
  return {
    type: CREATE_TAX_FAIL,
    error: error
  };
};

const getDeletedTaxListStart = () => {
  return {
    type: GET_DELETED_TAXES_START
  };
};

const getDeletedTaxListSuccess = deletedtaxes => {
  return {
    type: GET_DELETED_TAXES_SUCCESS,
    deletedtaxes
  };
};

const getDeletedTaxListFail = error => {
  return {
    type: GET_DELETED_TAXES_FAIL,
    error: error
  };
};

export const getCurrencies = (token) => {
  return dispatch => {
      dispatch(getCurrencyListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(currenciesURL, headers)
        .then(res => {
          const currencies = res.data;
          dispatch(getCurrencyListSuccess(currencies));
          })
        .catch(err => {
          dispatch(getCurrencyListStart(err));
        });
    };
};

export const addCurrency = (currency, token) => {
  return dispatch => {
      dispatch(createCurrencyStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(currenciesURL, currency, headers)
        .then(res => {
          dispatch(createCurrencySuccess(currency));
        })
        .catch(err => {
          dispatch(createCurrencyFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editCurrency = (id, currency, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${currenciesURL}${id}/`, currency, headers)
        .then(res => {
            dispatch({
                type: EDIT_CURRENCY,
                payload: res.data
            });
        }).catch(err => console.log(err))
};

export const getDeletedCurrencies = (token) => {
  return dispatch => {
      dispatch(getDeletedCurrencyListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(deletedcurrenciesURL, headers)
        .then(res => {
          const deletedcurrencies = res.data;
          dispatch(getDeletedCurrencyListSuccess(deletedcurrencies));
          })
        .catch(err => {
          dispatch(getDeletedCurrencyListStart(err));
        });
    };
};


export const getTaxes = (token) => {
  return dispatch => {
      dispatch(getTaxListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(taxesURL, headers)
        .then(res => {
          const taxes = res.data;
          dispatch(getTaxListSuccess(taxes));
          })
        .catch(err => {
          dispatch(getTaxListStart(err));
        });
    };
};

export const addTax = (tax, token) => {
  return dispatch => {
      dispatch(createTaxStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(taxesURL, tax, headers)
        .then(res => {
          dispatch(createTaxSuccess(tax));
        })
        .catch(err => {
          dispatch(createTaxFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editTax = (id, tax, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${taxesURL}${id}/`, tax, headers)
        .then(res => {
            dispatch({
                type: EDIT_TAX,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getDeletedTaxes = (token) => {
  return dispatch => {
      dispatch(getDeletedTaxListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(deletedtaxesURL, headers)
        .then(res => {
          const deletedtaxes = res.data;
          dispatch(getDeletedTaxListSuccess(deletedtaxes));
          })
        .catch(err => {
          dispatch(getDeletedTaxListStart(err));
        });
    };
};