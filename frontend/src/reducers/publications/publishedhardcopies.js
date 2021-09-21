import {
  GET_PUBLISHED_HARD_COPIES_START,
  GET_PUBLISHED_HARD_COPIES_SUCCESS,
  GET_PUBLISHED_HARD_COPIES_FAIL,
  GET_PUBLISHED_HARD_COPY_START,
  GET_PUBLISHED_HARD_COPY_SUCCESS,
  GET_PUBLISHED_HARD_COPY_FAIL,
  EDIT_PUBLISHED_HARD_COPY
  } from '../../types/publishedhardcopyTypes';
import { updateObject } from "../../utility";

const initialState = {
    publishedhardcopies: [],
    publishedhardcopy: {},
    loading: false,
    error: null,
}

const getPublishedHardCopyListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublishedHardCopyListSuccess = (state, action) => {
  return updateObject(state, {
    publishedhardcopies: action.publishedhardcopies,
    error: null,
    loading: false
  });
};

const getPublishedHardCopyListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getPublishedHardCopyDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublishedHardCopyDetailSuccess = (state, action) => {
  return updateObject(state, {
    publishedhardcopy: action.publishedhardcopy,
    error: null,
    loading: false
  });
};

const getPublishedHardCopyDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function publishedhardcopies(state = initialState, action){
    switch(action.type){
        case GET_PUBLISHED_HARD_COPIES_START:
            return getPublishedHardCopyListStart(state, action);
        case GET_PUBLISHED_HARD_COPIES_SUCCESS:
            return getPublishedHardCopyListSuccess(state, action);
        case GET_PUBLISHED_HARD_COPIES_FAIL:
            return getPublishedHardCopyListFail(state, action);
        case GET_PUBLISHED_HARD_COPY_START:
            return getPublishedHardCopyDetailStart(state, action);
        case GET_PUBLISHED_HARD_COPY_SUCCESS:
            return getPublishedHardCopyDetailSuccess(state, action);
        case GET_PUBLISHED_HARD_COPY_FAIL:
            return getPublishedHardCopyDetailFail(state, action);
        case EDIT_PUBLISHED_HARD_COPY:
            const arrayList = state.publishedhardcopies;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                publishedhardcopies: arrayList,
            };
        default:
            return state;
    }
}
