import {
  GET_LOCKED_HARD_COPIES_START,
  GET_LOCKED_HARD_COPIES_SUCCESS,
  GET_LOCKED_HARD_COPIES_FAIL,
  CREATE_LOCKED_HARD_COPY_START,
  CREATE_LOCKED_HARD_COPY_SUCCESS,
  CREATE_LOCKED_HARD_COPY_FAIL,
  GET_LOCKED_HARD_COPY_START,
  GET_LOCKED_HARD_COPY_SUCCESS,
  GET_LOCKED_HARD_COPY_FAIL,
  EDIT_LOCKED_HARD_COPY
  } from '../../types/lockedhardcopyTypes';
import { updateObject } from "../../utility";

const initialState = {
    lockedhardcopies: [],
    lockedhardcopy: {},
    loading: false,
    error: null,
}

const getLockedHardCopyListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLockedHardCopyListSuccess = (state, action) => {
  return updateObject(state, {
    lockedhardcopies: action.lockedhardcopies,
    error: null,
    loading: false
  });
};

const getLockedHardCopyListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createLockedHardCopyStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createLockedHardCopySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createLockedHardCopyFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getLockedHardCopyDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLockedHardCopyDetailSuccess = (state, action) => {
  return updateObject(state, {
    lockedhardcopy: action.lockedhardcopy,
    error: null,
    loading: false
  });
};

const getLockedHardCopyDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function lockedhardcopies(state = initialState, action){
    switch(action.type){
        case GET_LOCKED_HARD_COPIES_START:
            return getLockedHardCopyListStart(state, action);
        case GET_LOCKED_HARD_COPIES_SUCCESS:
            return getLockedHardCopyListSuccess(state, action);
        case GET_LOCKED_HARD_COPIES_FAIL:
            return getLockedHardCopyListFail(state, action);
        case GET_LOCKED_HARD_COPY_START:
            return getLockedHardCopyDetailStart(state, action);
        case GET_LOCKED_HARD_COPY_SUCCESS:
            return getLockedHardCopyDetailSuccess(state, action);
        case GET_LOCKED_HARD_COPY_FAIL:
            return getLockedHardCopyDetailFail(state, action);
        case CREATE_LOCKED_HARD_COPY_START:
            return createLockedHardCopyStart(state, action);
        case CREATE_LOCKED_HARD_COPY_SUCCESS:
            return createLockedHardCopySuccess(state, action);
        case CREATE_LOCKED_HARD_COPY_FAIL:
            return createLockedHardCopyFail(state, action);
        case EDIT_LOCKED_HARD_COPY:
            const arrayList = state.lockedhardcopies;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                lockedhardcopies: arrayList,
            };
        default:
            return state;
    }
}
