import {
  GET_UPCOMING_ADVERTS_START,
  GET_UPCOMING_ADVERTS_SUCCESS,
  GET_UPCOMING_ADVERTS_FAIL,
  CREATE_UPCOMING_ADVERT_START,
  CREATE_UPCOMING_ADVERT_SUCCESS,
  CREATE_UPCOMING_ADVERT_FAIL,
  GET_UPCOMING_ADVERT_START,
  GET_UPCOMING_ADVERT_SUCCESS,
  GET_UPCOMING_ADVERT_FAIL,
  EDIT_UPCOMING_ADVERT
} from '../../types/upcomingadvertTypes';
import { updateObject } from "../../utility";

const initialState = {
    upcomingadverts: [],
    upcomingadvert: {},
    loading: false,
    error: null,
}

const getUpcomingAdvertListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUpcomingAdvertListSuccess = (state, action) => {
  return updateObject(state, {
    upcomingadverts: action.upcomingadverts,

    error: null,
    loading: false
  });
};

const getUpcomingAdvertListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createUpcomingAdvertStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createUpcomingAdvertSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createUpcomingAdvertFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUpcomingAdvertDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUpcomingAdvertDetailSuccess = (state, action) => {
  return updateObject(state, {
    upcomingadvert: action.upcomingadvert,
    error: null,
    loading: false
  });
};

const getUpcomingAdvertDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function upcomingadverts(state = initialState, action){
    switch(action.type){
        case GET_UPCOMING_ADVERTS_START:
            return getUpcomingAdvertListStart(state, action);
        case GET_UPCOMING_ADVERTS_SUCCESS:
            return getUpcomingAdvertListSuccess(state, action);
        case GET_UPCOMING_ADVERTS_FAIL:
            return getUpcomingAdvertListFail(state, action);
        case GET_UPCOMING_ADVERT_START:
            return getUpcomingAdvertDetailStart(state, action);
        case GET_UPCOMING_ADVERT_SUCCESS:
            return getUpcomingAdvertDetailSuccess(state, action);
        case GET_UPCOMING_ADVERT_FAIL:
            return getUpcomingAdvertDetailFail(state, action);
        case CREATE_UPCOMING_ADVERT_START:
            return createUpcomingAdvertStart(state, action);
        case CREATE_UPCOMING_ADVERT_SUCCESS:
            return createUpcomingAdvertSuccess(state, action);
        case CREATE_UPCOMING_ADVERT_FAIL:
            return createUpcomingAdvertFail(state, action);
        case EDIT_UPCOMING_ADVERT:
            const arrayList = state.upcomingadverts;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                upcomingadverts: arrayList,
            };
        default:
            return state;
    }
}
