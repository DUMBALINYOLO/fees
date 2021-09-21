import {
  GET_EXPIRED_ADVERTS_START,
  GET_EXPIRED_ADVERTS_SUCCESS,
  GET_EXPIRED_ADVERTS_FAIL,
  GET_EXPIRED_ADVERT_START,
  GET_EXPIRED_ADVERT_SUCCESS,
  GET_EXPIRED_ADVERT_FAIL,
} from '../../types/expiredadvertTypes';
import { updateObject } from "../../utility";

const initialState = {
    expiredadverts: [],
    expiredadvert: {},
    loading: false,
    error: null,
}

const getExpiredAdvertListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getExpiredAdvertListSuccess = (state, action) => {
  return updateObject(state, {
    expiredadverts: action.expiredadverts,
    error: null,
    loading: false
  });
};

const getExpiredAdvertListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getExpiredAdvertDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getExpiredAdvertDetailSuccess = (state, action) => {
  return updateObject(state, {
    expiredadvert: action.expiredadvert,
    error: null,
    loading: false
  });
};

const getExpiredAdvertDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function expiredadverts(state = initialState, action){
    switch(action.type){
        case GET_EXPIRED_ADVERTS_START:
            return getExpiredAdvertListStart(state, action);
        case GET_EXPIRED_ADVERTS_SUCCESS:
            return getExpiredAdvertListSuccess(state, action);
        case GET_EXPIRED_ADVERTS_FAIL:
            return getExpiredAdvertListFail(state, action);
        case GET_EXPIRED_ADVERT_START:
            return getExpiredAdvertDetailStart(state, action);
        case GET_EXPIRED_ADVERT_SUCCESS:
            return getExpiredAdvertDetailSuccess(state, action);
        case GET_EXPIRED_ADVERT_FAIL:
            return getExpiredAdvertDetailFail(state, action);
        default:
            return state;
    }
}
