import {
  GET_PUBLISHED_EBOOKS_START,
  GET_PUBLISHED_EBOOKS_SUCCESS,
  GET_PUBLISHED_EBOOKS_FAIL,
  GET_PUBLISHED_EBOOK_START,
  GET_PUBLISHED_EBOOK_SUCCESS,
  GET_PUBLISHED_EBOOK_FAIL,
  EDIT_PUBLISHED_EBOOK
  } from '../../types/publishedebookTypes';
import { updateObject } from "../../utility";

const initialState = {
    publishedebooks: [],
    publishedebook: {},
    loading: false,
    error: null,
}

const getPublishedEbookListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublishedEbookListSuccess = (state, action) => {
  return updateObject(state, {
    publishedebooks: action.publishedebooks,
    error: null,
    loading: false
  });
};

const getPublishedEbookListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getPublishedEbookDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getPublishedEbookDetailSuccess = (state, action) => {
  return updateObject(state, {
    publishedebook: action.publishedebook,
    error: null,
    loading: false
  });
};

const getPublishedEbookDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function publishedebooks(state = initialState, action){
    switch(action.type){
        case GET_PUBLISHED_EBOOKS_START:
            return getPublishedEbookListStart(state, action);
        case GET_PUBLISHED_EBOOKS_SUCCESS:
            return getPublishedEbookListSuccess(state, action);
        case GET_PUBLISHED_EBOOKS_FAIL:
            return getPublishedEbookListFail(state, action);
        case GET_PUBLISHED_EBOOK_START:
            return getPublishedEbookDetailStart(state, action);
        case GET_PUBLISHED_EBOOK_SUCCESS:
            return getPublishedEbookDetailSuccess(state, action);
        case GET_PUBLISHED_EBOOK_FAIL:
            return getPublishedEbookDetailFail(state, action);
        case EDIT_PUBLISHED_EBOOK:
            const arrayList = state.publishedebooks;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                publishedebooks: arrayList,
            };
        default:
            return state;
    }
}
