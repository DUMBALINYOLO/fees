import {
  GET_ACCOUNTANTS_START,
  GET_ACCOUNTANTS_SUCCESS,
  GET_ACCOUNTANTS_FAIL,
  GET_ACCOUNTANT_START,
  GET_ACCOUNTANT_SUCCESS,
  GET_ACCOUNTANT_FAIL,
  CREATE_ACCOUNTANT_START,
  CREATE_ACCOUNTANT_SUCCESS,
  CREATE_ACCOUNTANT_FAIL,
  EDIT_ACCOUNTANT
} from '../../types/accountantTypes';
import { updateObject } from "../../utility";

const initialState = {
    accountants: [],
    accountant: {},
    loading: false,
    error: null,
}

const getAccountantListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountantListSuccess = (state, action) => {
  return updateObject(state, {
    accountants: action.accountants,
    error: null,
    loading: false
  });
};

const getAccountantListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAccountantStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAccountantSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAccountantFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountantDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountantDetailSuccess = (state, action) => {
  return updateObject(state, {
    accountant: action.accountant,
    error: null,
    loading: false
  });
};

const getAccountantDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function accountants(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNTANTS_START:
            return getAccountantListStart(state, action);
        case GET_ACCOUNTANTS_SUCCESS:
            return getAccountantListSuccess(state, action);
        case GET_ACCOUNTANTS_FAIL:
            return getAccountantListFail(state, action);
        case GET_ACCOUNTANT_START:
            return getAccountantDetailStart(state, action);
        case GET_ACCOUNTANT_SUCCESS:
            return getAccountantDetailSuccess(state, action);
        case GET_ACCOUNTANT_FAIL:
            return getAccountantDetailFail(state, action);
        case CREATE_ACCOUNTANT_START:
            return createAccountantStart(state, action);
        case CREATE_ACCOUNTANT_SUCCESS:
            return createAccountantSuccess(state, action);
        case CREATE_ACCOUNTANT_FAIL:
            return createAccountantFail(state, action);
        case EDIT_ACCOUNTANT:
            const arrayList = state.accountants;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                accountants: arrayList,
            };
        default:
            return state;
    }
}
