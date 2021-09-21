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
import { updateObject } from "../../utility";

const initialState = {
    customers: [],
    customer: {},
    loading: false,
    error: null,
}

const getCustomerListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCustomerListSuccess = (state, action) => {
  return updateObject(state, {
    customers: action.customers,
    error: null,
    loading: false
  });
};

const getCustomerListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createCustomerStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createCustomerSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createCustomerFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCustomerDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCustomerDetailSuccess = (state, action) => {
  return updateObject(state, {
    customer: action.customer,
    error: null,
    loading: false
  });
};

const getCustomerDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function customers(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMERS_START:
            return getCustomerListStart(state, action);
        case GET_CUSTOMERS_SUCCESS:
            return getCustomerListSuccess(state, action);
        case GET_CUSTOMERS_FAIL:
            return getCustomerListFail(state, action);
        case GET_CUSTOMER_START:
            return getCustomerDetailStart(state, action);
        case GET_CUSTOMER_SUCCESS:
            return getCustomerDetailSuccess(state, action);
        case GET_CUSTOMER_FAIL:
            return getCustomerDetailFail(state, action);
        case CREATE_CUSTOMER_START:
            return createCustomerStart(state, action);
        case CREATE_CUSTOMER_SUCCESS:
            return createCustomerSuccess(state, action);
        case CREATE_CUSTOMER_FAIL:
            return createCustomerFail(state, action);
        case EDIT_CUSTOMER:
            const arrayList = state.customers;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                customers: arrayList,
            };
        default:
            return state;
    }
}
