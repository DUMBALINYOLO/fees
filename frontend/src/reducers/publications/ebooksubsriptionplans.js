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
import { updateObject } from "../../utility";

const initialState = {
    ebooksubsriptionplans: [],
    ebooksubsriptionplan: {},
    loading: false,
    error: null,
}

const getEbookSubsriptionPlanListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEbookSubsriptionPlanListSuccess = (state, action) => {
  return updateObject(state, {
    ebooksubsriptionplans: action.ebooksubsriptionplans,
    error: null,
    loading: false
  });
};

const getEbookSubsriptionPlanListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createEbookSubsriptionPlanStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createEbookSubsriptionPlanSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createEbookSubsriptionPlanFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getEbookSubsriptionPlanDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEbookSubsriptionPlanDetailSuccess = (state, action) => {
  return updateObject(state, {
    ebooksubsriptionplan: action.ebooksubsriptionplan,
    error: null,
    loading: false
  });
};

const getEbookSubsriptionPlanDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function ebooksubsriptionplans(state = initialState, action){
    switch(action.type){
        case GET_EBOOK_SUBSCRIPTION_PLANS_START:
            return getEbookSubsriptionPlanListStart(state, action);
        case GET_EBOOK_SUBSCRIPTION_PLANS_SUCCESS:
            return getEbookSubsriptionPlanListSuccess(state, action);
        case GET_EBOOK_SUBSCRIPTION_PLANS_FAIL:
            return getEbookSubsriptionPlanListFail(state, action);
        case GET_EBOOK_SUBSCRIPTION_PLAN_START:
            return getEbookSubsriptionPlanDetailStart(state, action);
        case GET_EBOOK_SUBSCRIPTION_PLAN_SUCCESS:
            return getEbookSubsriptionPlanDetailSuccess(state, action);
        case GET_EBOOK_SUBSCRIPTION_PLAN_FAIL:
            return getEbookSubsriptionPlanDetailFail(state, action);
        case CREATE_EBOOK_SUBSCRIPTION_PLAN_START:
            return createEbookSubsriptionPlanStart(state, action);
        case CREATE_EBOOK_SUBSCRIPTION_PLAN_SUCCESS:
            return createEbookSubsriptionPlanSuccess(state, action);
        case CREATE_EBOOK_SUBSCRIPTION_PLAN_FAIL:
            return createEbookSubsriptionPlanFail(state, action);
        case EDIT_EBOOK_SUBSCRIPTION_PLAN:
            const arrayList = state.ebooksubsriptionplans;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                ebooksubsriptionplans: arrayList,
            };
        default:
            return state;
    }
}
