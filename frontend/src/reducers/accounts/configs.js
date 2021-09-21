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
import { updateObject } from "../../utility";

const initialState = {
    currencies: [],
    taxes: [],
    loading: false,
    error: null,
}

const getTaxListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getTaxListSuccess = (state, action) => {
  return updateObject(state, {
    taxes: action.taxes,
    error: null,
    loading: false
  });
};

const getTaxListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createTaxStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createTaxSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createTaxFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedTaxListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedTaxListSuccess = (state, action) => {
  return updateObject(state, {
    deletedtaxes: action.deletedtaxes,
    error: null,
    loading: false
  });
};

const getDeletedTaxListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCurrencyListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCurrencyListSuccess = (state, action) => {
  return updateObject(state, {
    currencies: action.currencies,
    error: null,
    loading: false
  });
};

const getCurrencyListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCurrencyStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createCurrencySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createCurrencyFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedCurrencyListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedCurrencyListSuccess = (state, action) => {
  return updateObject(state, {
    deletedcurrencies: action.deletedcurrencies,
    error: null,
    loading: false
  });
};

const getDeletedCurrencyListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function configs(state = initialState, action){
  switch(action.type){
    case GET_CURRENCIES_START:
      return getCurrencyListStart(state, action);
    case GET_CURRENCIES_SUCCESS:
      return getCurrencyListSuccess(state, action);
    case GET_CURRENCIES_FAIL:
      return getCurrencyListFail(state, action);
    case CREATE_CURRENCY_START:
      return createCurrencyStart(state, action);
    case CREATE_CURRENCY_SUCCESS:
      return createCurrencySuccess(state, action);
    case CREATE_CURRENCY_FAIL:
      return createCurrencyFail(state, action);
    case EDIT_CURRENCY:
      const carrayList = state.currencies;
      carrayList.splice(carrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        currencies: carrayList,
      };
    case GET_DELETED_CURRENCIES_START:
      return getDeletedCurrencyListStart(state, action);
    case GET_DELETED_CURRENCIES_SUCCESS:
      return getDeletedCurrencyListSuccess(state, action);
    case GET_DELETED_CURRENCIES_FAIL:
      return getDeletedCurrencyListFail(state, action);
    case GET_TAXES_START:
      return getTaxListStart(state, action);
    case GET_TAXES_SUCCESS:
      return getTaxListSuccess(state, action);
    case GET_TAXES_FAIL:
      return getTaxListFail(state, action);
    case CREATE_TAX_START:
      return createTaxStart(state, action);
    case CREATE_TAX_SUCCESS:
      return createTaxSuccess(state, action);
    case CREATE_TAX_FAIL:
      return createTaxFail(state, action);
    case EDIT_TAX:
      const arrayList = state.taxes;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        taxes: arrayList,
      };
    case GET_DELETED_TAXES_START:
      return getDeletedTaxListStart(state, action);
    case GET_DELETED_TAXES_SUCCESS:
      return getDeletedTaxListSuccess(state, action);
    case GET_DELETED_TAXES_FAIL:
      return getDeletedTaxListFail(state, action);
    default:
      return state;
  }
}
