import {
  GET_SERIES_SUBSCRIPTION_PLANS_START,
  GET_SERIES_SUBSCRIPTION_PLANS_SUCCESS,
  GET_SERIES_SUBSCRIPTION_PLANS_FAIL,
  CREATE_SERIES_SUBSCRIPTION_PLAN_START,
  CREATE_SERIES_SUBSCRIPTION_PLAN_SUCCESS,
  CREATE_SERIES_SUBSCRIPTION_PLAN_FAIL,
  GET_SERIES_SUBSCRIPTION_PLAN_START,
  GET_SERIES_SUBSCRIPTION_PLAN_SUCCESS,
  GET_SERIES_SUBSCRIPTION_PLAN_FAIL,
  EDIT_SERIES_SUBSCRIPTION_PLAN
} from '../../types/seriessubsriptionplanTypes';
import { updateObject } from "../../utility";

const initialState = {
    seriessubsriptionplans: [],
    seriessubsriptionplan: {},
    loading: false,
    error: null,
}

const getSeriesSubsriptionPlanListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSeriesSubsriptionPlanListSuccess = (state, action) => {
  return updateObject(state, {
    seriessubsriptionplans: action.seriessubsriptionplans,
    error: null,
    loading: false
  });
};

const getSeriesSubsriptionPlanListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createSeriesSubsriptionPlanStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createSeriesSubsriptionPlanSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createSeriesSubsriptionPlanFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getSeriesSubsriptionPlanDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getSeriesSubsriptionPlanDetailSuccess = (state, action) => {
  return updateObject(state, {
    seriessubsriptionplan: action.seriessubsriptionplan,
    error: null,
    loading: false
  });
};

const getSeriesSubsriptionPlanDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function seriessubsriptionplans(state = initialState, action){
    switch(action.type){
        case GET_SERIES_SUBSCRIPTION_PLANS_START:
            return getSeriesSubsriptionPlanListStart(state, action);
        case GET_SERIES_SUBSCRIPTION_PLANS_SUCCESS:
            return getSeriesSubsriptionPlanListSuccess(state, action);
        case GET_SERIES_SUBSCRIPTION_PLANS_FAIL:
            return getSeriesSubsriptionPlanListFail(state, action);
        case GET_SERIES_SUBSCRIPTION_PLAN_START:
            return getSeriesSubsriptionPlanDetailStart(state, action);
        case GET_SERIES_SUBSCRIPTION_PLAN_SUCCESS:
            return getSeriesSubsriptionPlanDetailSuccess(state, action);
        case GET_SERIES_SUBSCRIPTION_PLAN_FAIL:
            return getSeriesSubsriptionPlanDetailFail(state, action);
        case CREATE_SERIES_SUBSCRIPTION_PLAN_START:
            return createSeriesSubsriptionPlanStart(state, action);
        case CREATE_SERIES_SUBSCRIPTION_PLAN_SUCCESS:
            return createSeriesSubsriptionPlanSuccess(state, action);
        case CREATE_SERIES_SUBSCRIPTION_PLAN_FAIL:
            return createSeriesSubsriptionPlanFail(state, action);
        case EDIT_SERIES_SUBSCRIPTION_PLAN:
            const arrayList = state.seriessubsriptionplans;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                seriessubsriptionplans: arrayList,
            };
        default:
            return state;
    }
}
