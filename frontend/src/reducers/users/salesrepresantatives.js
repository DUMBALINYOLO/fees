import {
  GET_SALES_REPRESANTATIVES_START,
  GET_SALES_REPRESANTATIVES_SUCCESS,
  GET_SALES_REPRESANTATIVES_FAIL,
  GET_SALES_REPRESANTATIVE_START,
  GET_SALES_REPRESANTATIVE_SUCCESS,
  GET_SALES_REPRESANTATIVE_FAIL,
  CREATE_SALES_REPRESANTATIVE_START,
  CREATE_SALES_REPRESANTATIVE_SUCCESS,
  CREATE_SALES_REPRESANTATIVE_FAIL,
  EDIT_SALES_REPRESANTATIVE
} from '../../types/salesrepresantativeTypes';
import { updateObject } from "../../utility";

const initialState = {
    salesrepresantatives: [],
    salesrepresantative: {},
    loading: false,
    error: null,
}

const getSalesRepresantativeListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSalesRepresantativeListSuccess = (state, action) => {
  return updateObject(state, {
    salesrepresantatives: action.salesrepresantatives,
    error: null,
    loading: false
  });
};

const getSalesRepresantativeListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createSalesRepresantativeStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createSalesRepresantativeSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createSalesRepresantativeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getSalesRepresantativeDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSalesRepresantativeDetailSuccess = (state, action) => {
  return updateObject(state, {
    salesrepresantative: action.salesrepresantative,
    error: null,
    loading: false
  });
};

const getSalesRepresantativeDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function salesrepresantatives(state = initialState, action){
    switch(action.type){
        case GET_SALES_REPRESANTATIVES_START:
            return getSalesRepresantativeListStart(state, action);
        case GET_SALES_REPRESANTATIVES_SUCCESS:
            return getSalesRepresantativeListSuccess(state, action);
        case GET_SALES_REPRESANTATIVES_FAIL:
            return getSalesRepresantativeListFail(state, action);
        case GET_SALES_REPRESANTATIVE_START:
            return getSalesRepresantativeDetailStart(state, action);
        case GET_SALES_REPRESANTATIVE_SUCCESS:
            return getSalesRepresantativeDetailSuccess(state, action);
        case GET_SALES_REPRESANTATIVE_FAIL:
            return getSalesRepresantativeDetailFail(state, action);
        case CREATE_SALES_REPRESANTATIVE_START:
            return createSalesRepresantativeStart(state, action);
        case CREATE_SALES_REPRESANTATIVE_SUCCESS:
            return createSalesRepresantativeSuccess(state, action);
        case CREATE_SALES_REPRESANTATIVE_FAIL:
            return createSalesRepresantativeFail(state, action);
        case EDIT_SALES_REPRESANTATIVE:
            const arrayList = state.salesrepresantatives;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                salesrepresantatives: arrayList,
            };
        default:
            return state;
    }
}
