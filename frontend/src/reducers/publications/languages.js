import {
    GET_LANGUAGES_START,
    GET_LANGUAGES_SUCCESS,
    GET_LANGUAGES_FAIL,
    CREATE_LANGUAGE_START,
    CREATE_LANGUAGE_SUCCESS,
    CREATE_LANGUAGE_FAIL,
    GET_LANGUAGE_START,
    GET_LANGUAGE_SUCCESS,
    GET_LANGUAGE_FAIL,
    EDIT_LANGUAGE
    } from '../../types/languageTypes';
import { updateObject } from "../../utility";

const initialState = {
    languages: [],
    language: {},
    loading: false,
    error: null,
}

const getLanguageListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLanguageListSuccess = (state, action) => {
  return updateObject(state, {
    languages: action.languages,
    error: null,
    loading: false
  });
};

const getLanguageListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createLanguageStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createLanguageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createLanguageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getLanguageDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLanguageDetailSuccess = (state, action) => {
  return updateObject(state, {
    language: action.language,
    error: null,
    loading: false
  });
};

const getLanguageDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function languages(state = initialState, action){
    switch(action.type){
        case GET_LANGUAGES_START:
            return getLanguageListStart(state, action);
        case GET_LANGUAGES_SUCCESS:
            return getLanguageListSuccess(state, action);
        case GET_LANGUAGES_FAIL:
            return getLanguageListFail(state, action);
        case GET_LANGUAGE_START:
            return getLanguageDetailStart(state, action);
        case GET_LANGUAGE_SUCCESS:
            return getLanguageDetailSuccess(state, action);
        case GET_LANGUAGE_FAIL:
            return getLanguageDetailFail(state, action);
        case CREATE_LANGUAGE_START:
            return createLanguageStart(state, action);
        case CREATE_LANGUAGE_SUCCESS:
            return createLanguageSuccess(state, action);
        case CREATE_LANGUAGE_FAIL:
            return createLanguageFail(state, action);
        case EDIT_LANGUAGE:
            const arrayList = state.languages;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                languages: arrayList,
            };
        default:
            return state;
    }
}
