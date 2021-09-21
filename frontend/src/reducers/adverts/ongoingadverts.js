import {
  GET_ONGOING_ADVERTS_START,
  GET_ONGOING_ADVERTS_SUCCESS,
  GET_ONGOING_ADVERTS_FAIL,
  GET_ONGOING_ADVERT_START,
  GET_ONGOING_ADVERT_SUCCESS,
  GET_ONGOING_ADVERT_FAIL,
} from '../../types/ongoingadvertTypes';
import { updateObject } from "../../utility";

const initialState = {
    ongoingadverts: [],
    ongoingadvert: {},
    loading: false,
    error: null,
}

const getOngoingAdvertListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOngoingAdvertListSuccess = (state, action) => {
  return updateObject(state, {
    ongoingadverts: action.ongoingadverts,
    error: null,
    loading: false
  });
};

const getOngoingAdvertListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOngoingAdvertDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOngoingAdvertDetailSuccess = (state, action) => {
  return updateObject(state, {
    ongoingadvert: action.ongoingadvert,
    error: null,
    loading: false
  });
};

const getOngoingAdvertDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function ongoingadverts(state = initialState, action){
    switch(action.type){
        case GET_ONGOING_ADVERTS_START:
            return getOngoingAdvertListStart(state, action);
        case GET_ONGOING_ADVERTS_SUCCESS:
            return getOngoingAdvertListSuccess(state, action);
        case GET_ONGOING_ADVERTS_FAIL:
            return getOngoingAdvertListFail(state, action);
        case GET_ONGOING_ADVERT_START:
            return getOngoingAdvertDetailStart(state, action);
        case GET_ONGOING_ADVERT_SUCCESS:
            return getOngoingAdvertDetailSuccess(state, action);
        case GET_ONGOING_ADVERT_FAIL:
            return getOngoingAdvertDetailFail(state, action);
        default:
            return state;
    }
}
