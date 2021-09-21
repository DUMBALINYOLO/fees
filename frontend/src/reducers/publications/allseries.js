import {
  GET_ALL_SERIES_START,
  GET_ALL_SERIES_SUCCESS,
  GET_ALL_SERIES_FAIL,
  CREATE_ALL_SERIES_START,
  CREATE_ALL_SERIES_SUCCESS,
  CREATE_ALL_SERIES_FAIL,
  GET_SERIES_START,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAIL,
  EDIT_ALL_SERIES
  } from '../../types/allseriesTypes';
import { updateObject } from "../../utility";

const initialState = {
    allseries: [],
    series: {},
    loading: false,
    error: null,
}

const getAllSeriesListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAllSeriesListSuccess = (state, action) => {
  return updateObject(state, {
    allseries: action.allseries,
    error: null,
    loading: false
  });
};

const getAllSeriesListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAllSeriesStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAllSeriesSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAllSeriesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAllSeriesDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAllSeriesDetailSuccess = (state, action) => {
  return updateObject(state, {
    series: action.series,
    error: null,
    loading: false
  });
};

const getAllSeriesDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function allseries(state = initialState, action){
    switch(action.type){
        case GET_ALL_SERIES_START:
            return getAllSeriesListStart(state, action);
        case GET_ALL_SERIES_SUCCESS:
            return getAllSeriesListSuccess(state, action);
        case GET_ALL_SERIES_FAIL:
            return getAllSeriesListFail(state, action);
        case GET_SERIES_START:
            return getAllSeriesDetailStart(state, action);
        case GET_SERIES_SUCCESS:
            return getAllSeriesDetailSuccess(state, action);
        case GET_SERIES_FAIL:
            return getAllSeriesDetailFail(state, action);
        case CREATE_ALL_SERIES_START:
            return createAllSeriesStart(state, action);
        case CREATE_ALL_SERIES_SUCCESS:
            return createAllSeriesSuccess(state, action);
        case CREATE_ALL_SERIES_FAIL:
            return createAllSeriesFail(state, action);
        case EDIT_ALL_SERIES:
            const arrayList = state.allseries;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                allseries: arrayList,
            };
        default:
            return state;
    }
}
