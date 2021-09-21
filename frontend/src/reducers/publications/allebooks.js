import {
  GET_ALL_EBOOKS_START,
  GET_ALL_EBOOKS_SUCCESS,
  GET_ALL_EBOOKS_FAIL,
  CREATE_ALL_EBOOK_START,
  CREATE_ALL_EBOOK_SUCCESS,
  CREATE_ALL_EBOOK_FAIL,
  GET_ALL_EBOOK_START,
  GET_ALL_EBOOK_SUCCESS,
  GET_ALL_EBOOK_FAIL,
  EDIT_ALL_EBOOK
  } from '../../types/allebookTypes';
import { updateObject } from "../../utility";

const initialState = {
    allebooks: [],
    allebook: {},
    loading: false,
    error: null,
}

const getAllEbookListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAllEbookListSuccess = (state, action) => {
  return updateObject(state, {
    allebooks: action.allebooks,
    error: null,
    loading: false
  });
};

const getAllEbookListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAllEbookStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAllEbookSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAllEbookFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAllEbookDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAllEbookDetailSuccess = (state, action) => {
  return updateObject(state, {
    allebook: action.allebook,
    error: null,
    loading: false
  });
};

const getAllEbookDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function allebooks(state = initialState, action){
    switch(action.type){
        case GET_ALL_EBOOKS_START:
            return getAllEbookListStart(state, action);
        case GET_ALL_EBOOKS_SUCCESS:
            return getAllEbookListSuccess(state, action);
        case GET_ALL_EBOOKS_FAIL:
            return getAllEbookListFail(state, action);
        case GET_ALL_EBOOK_START:
            return getAllEbookDetailStart(state, action);
        case GET_ALL_EBOOK_SUCCESS:
            return getAllEbookDetailSuccess(state, action);
        case GET_ALL_EBOOK_FAIL:
            return getAllEbookDetailFail(state, action);
        case CREATE_ALL_EBOOK_START:
            return createAllEbookStart(state, action);
        case CREATE_ALL_EBOOK_SUCCESS:
            return createAllEbookSuccess(state, action);
        case CREATE_ALL_EBOOK_FAIL:
            return createAllEbookFail(state, action);
        case EDIT_ALL_EBOOK:
            const arrayList = state.allebooks;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                allebooks: arrayList,
            };
        default:
            return state;
    }
}
