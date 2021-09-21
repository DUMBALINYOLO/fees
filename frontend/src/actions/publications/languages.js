import axios from 'axios';
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
import { languagesURL } from '../../constants';
import {
  returnErrors
} from '../messages';

//languages
const getLanguageListStart = () => {
  return {
    type: GET_LANGUAGES_START
  };
};

const getLanguageListSuccess = languages => {
  return {
    type: GET_LANGUAGES_SUCCESS,
    languages
  };
};

const getLanguageListFail = error => {
  return {
    type: GET_LANGUAGES_FAIL,
    error: error
  };
};

const createLanguageStart = () => {
  return {
    type: CREATE_LANGUAGE_START
  };
};


const createLanguageSuccess = language => {
  return {
    type: CREATE_LANGUAGE_SUCCESS,
    language
  };
};

const createLanguageFail = error => {
  return {
    type: CREATE_LANGUAGE_FAIL,
    error: error
  };
};

const getLanguageDetailStart = () => {
  return {
    type: GET_LANGUAGE_START
  };
};

const getLanguageDetailSuccess = language => {
  return {
    type: GET_LANGUAGE_SUCCESS,
    language
  };
};

const getLanguageDetailFail = error => {
  return {
    type: GET_LANGUAGE_FAIL,
    error: error
  };
};

export const getLanguages = (token) => {
  return dispatch => {
      dispatch(getLanguageListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(languagesURL, headers)
        .then(res => {
          const languages = res.data;
          dispatch(getLanguageListSuccess(languages));
          })
        .catch(err => {
          dispatch(getLanguageListStart(err));
        });
    };
};

export const getLanguage = (id, token) => {
  return dispatch => {
      dispatch(getLanguageDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${languagesURL}${id}`, headers)
        .then(res => {
          const language = res.data;
          dispatch(getLanguageDetailSuccess(language));
          })
        .catch(err => {
          dispatch(getLanguageDetailFail(err));
        });
    };
};

export const addLanguage = (language, token) => {
  return dispatch => {
      dispatch(createLanguageStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(languagesURL, language, headers)
        .then(res => {
          dispatch(createLanguageSuccess(language));
        })
        .catch(err => {
          dispatch(createLanguageFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editLanguage = (id, language, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${languagesURL}${id}/`, language, headers)
        .then(res => {
            dispatch({
                type: EDIT_LANGUAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
