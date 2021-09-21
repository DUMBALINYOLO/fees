import {
  GET_BOOK_CONTENTS_START,
  GET_BOOK_CONTENTS_SUCCESS,
  GET_BOOK_CONTENTS_FAIL,
  CREATE_BOOK_CONTENT_START,
  CREATE_BOOK_CONTENT_SUCCESS,
  CREATE_BOOK_CONTENT_FAIL,
  GET_BOOK_CONTENT_START,
  GET_BOOK_CONTENT_SUCCESS,
  GET_BOOK_CONTENT_FAIL,
  EDIT_BOOK_CONTENT
} from '../../types/bookcontentTypes';
import { updateObject } from "../../utility";

const initialState = {
    bookcontents: [],
    bookcontent: {},
    loading: false,
    error: null,
}

const getBookContentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBookContentListSuccess = (state, action) => {
  return updateObject(state, {
    bookcontents: action.bookcontents,
    error: null,
    loading: false
  });
};

const getBookContentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBookContentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBookContentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBookContentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBookContentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBookContentDetailSuccess = (state, action) => {
  return updateObject(state, {
    bookcontent: action.bookcontent,
    error: null,
    loading: false
  });
};

const getBookContentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function bookcontents(state = initialState, action){
    switch(action.type){
        case GET_BOOK_CONTENTS_START:
            return getBookContentListStart(state, action);
        case GET_BOOK_CONTENTS_SUCCESS:
            return getBookContentListSuccess(state, action);
        case GET_BOOK_CONTENTS_FAIL:
            return getBookContentListFail(state, action);
        case GET_BOOK_CONTENT_START:
            return getBookContentDetailStart(state, action);
        case GET_BOOK_CONTENT_SUCCESS:
            return getBookContentDetailSuccess(state, action);
        case GET_BOOK_CONTENT_FAIL:
            return getBookContentDetailFail(state, action);
        case CREATE_BOOK_CONTENT_START:
            return createBookContentStart(state, action);
        case CREATE_BOOK_CONTENT_SUCCESS:
            return createBookContentSuccess(state, action);
        case CREATE_BOOK_CONTENT_FAIL:
            return createBookContentFail(state, action);
        case EDIT_BOOK_CONTENT:
            const arrayList = state.bookcontents;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                bookcontents: arrayList,
            };
        default:
            return state;
    }
}
