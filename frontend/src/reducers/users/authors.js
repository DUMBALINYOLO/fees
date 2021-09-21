import {
  GET_AUTHORS_START,
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAIL,
  CREATE_AUTHOR_START,
  CREATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_FAIL,
  GET_AUTHOR_START,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_FAIL,
  EDIT_AUTHOR
} from '../../types/authorTypes';
import { updateObject } from "../../utility";

const initialState = {
    authors: [],
    author: {},
    loading: false,
    error: null,
}

const getAuthorListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAuthorListSuccess = (state, action) => {
  return updateObject(state, {
    authors: action.authors,
    error: null,
    loading: false
  });
};

const getAuthorListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAuthorStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAuthorSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAuthorFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAuthorDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAuthorDetailSuccess = (state, action) => {
  return updateObject(state, {
    author: action.author,
    error: null,
    loading: false
  });
};

const getAuthorDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function authors(state = initialState, action){
    switch(action.type){
        case GET_AUTHORS_START:
            return getAuthorListStart(state, action);
        case GET_AUTHORS_SUCCESS:
            return getAuthorListSuccess(state, action);
        case GET_AUTHORS_FAIL:
            return getAuthorListFail(state, action);
        case GET_AUTHOR_START:
            return getAuthorDetailStart(state, action);
        case GET_AUTHOR_SUCCESS:
            return getAuthorDetailSuccess(state, action);
        case GET_AUTHOR_FAIL:
            return getAuthorDetailFail(state, action);
        case CREATE_AUTHOR_START:
            return createAuthorStart(state, action);
        case CREATE_AUTHOR_SUCCESS:
            return createAuthorSuccess(state, action);
        case CREATE_AUTHOR_FAIL:
            return createAuthorFail(state, action);
        case EDIT_AUTHOR:
            const arrayList = state.authors;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                authors: arrayList,
            };
        default:
            return state;
    }
}
