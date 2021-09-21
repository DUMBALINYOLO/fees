import {
  GET_PUBLISHER_CITIES_START,
  GET_PUBLISHER_CITIES_SUCCESS,
  GET_PUBLISHER_CITIES_FAIL,
  CREATE_PUBLISHER_CITY_START,
  CREATE_PUBLISHER_CITY_SUCCESS,
  CREATE_PUBLISHER_CITY_FAIL,
  GET_PUBLISHER_CITY_START,
  GET_PUBLISHER_CITY_SUCCESS,
  GET_PUBLISHER_CITY_FAIL,
  EDIT_PUBLISHER_CITY
} from '../../types/publishercityTypes';
import { updateObject } from "../../utility";

const initialState = {
    publishercities: [],
    publishercity: {},
    loading: false,
    error: null,
}

const getPublisherCityListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublisherCityListSuccess = (state, action) => {
  return updateObject(state, {
    publishercities: action.publishercities,
    error: null,
    loading: false
  });
};

const getPublisherCityListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createPublisherCityStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createPublisherCitySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createPublisherCityFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getPublisherCityDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublisherCityDetailSuccess = (state, action) => {
  return updateObject(state, {
    publishercity: action.publishercity,
    error: null,
    loading: false
  });
};

const getPublisherCityDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function publishercities(state = initialState, action){
    switch(action.type){
        case GET_PUBLISHER_CITIES_START:
            return getPublisherCityListStart(state, action);
        case GET_PUBLISHER_CITIES_SUCCESS:
            return getPublisherCityListSuccess(state, action);
        case GET_PUBLISHER_CITIES_FAIL:
            return getPublisherCityListFail(state, action);
        case GET_PUBLISHER_CITY_START:
            return getPublisherCityDetailStart(state, action);
        case GET_PUBLISHER_CITY_SUCCESS:
            return getPublisherCityDetailSuccess(state, action);
        case GET_PUBLISHER_CITY_FAIL:
            return getPublisherCityDetailFail(state, action);
        case CREATE_PUBLISHER_CITY_START:
            return createPublisherCityStart(state, action);
        case CREATE_PUBLISHER_CITY_SUCCESS:
            return createPublisherCitySuccess(state, action);
        case CREATE_PUBLISHER_CITY_FAIL:
            return createPublisherCityFail(state, action);
        case EDIT_PUBLISHER_CITY:
            const arrayList = state.publishercities;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                publishercities: arrayList,
            };
        default:
            return state;
    }
}
