import {
  GET_NEWS_LETTERS_START,
  GET_NEWS_LETTERS_SUCCESS,
  GET_NEWS_LETTERS_FAIL,
  CREATE_NEWS_LETTER_START,
  CREATE_NEWS_LETTER_SUCCESS,
  CREATE_NEWS_LETTER_FAIL,
  GET_NEWS_LETTER_START,
  GET_NEWS_LETTER_SUCCESS,
  GET_NEWS_LETTER_FAIL,
  EDIT_NEWS_LETTER
} from '../../types/newsletterTypes';
import { updateObject } from "../../utility";

const initialState = {
    newsletters: [],
    newsletter: {},
    loading: false,
    error: null,
}

const getNewsLetterListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getNewsLetterListSuccess = (state, action) => {
  return updateObject(state, {
    newsletters: action.newsletters,
    error: null,
    loading: false
  });
};

const getNewsLetterListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createNewsLetterStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createNewsLetterSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createNewsLetterFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getNewsLetterDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getNewsLetterDetailSuccess = (state, action) => {
  return updateObject(state, {
    newsletter: action.newsletter,
    error: null,
    loading: false
  });
};

const getNewsLetterDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function newsletters(state = initialState, action){
    switch(action.type){
        case GET_NEWS_LETTERS_START:
            return getNewsLetterListStart(state, action);
        case GET_NEWS_LETTERS_SUCCESS:
            return getNewsLetterListSuccess(state, action);
        case GET_NEWS_LETTERS_FAIL:
            return getNewsLetterListFail(state, action);
        case GET_NEWS_LETTER_START:
            return getNewsLetterDetailStart(state, action);
        case GET_NEWS_LETTER_SUCCESS:
            return getNewsLetterDetailSuccess(state, action);
        case GET_NEWS_LETTER_FAIL:
            return getNewsLetterDetailFail(state, action);
        case CREATE_NEWS_LETTER_START:
            return createNewsLetterStart(state, action);
        case CREATE_NEWS_LETTER_SUCCESS:
            return createNewsLetterSuccess(state, action);
        case CREATE_NEWS_LETTER_FAIL:
            return createNewsLetterFail(state, action);
        case EDIT_NEWS_LETTER:
            const arrayList = state.newsletters;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                newsletters: arrayList,
            };
        default:
            return state;
    }
}
