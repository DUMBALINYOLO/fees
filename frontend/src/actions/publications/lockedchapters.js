import axios from 'axios';
import {
    GET_LOCKED_CHAPTERS_START,
    GET_LOCKED_CHAPTERS_SUCCESS,
    GET_LOCKED_CHAPTERS_FAIL,
    CREATE_LOCKED_CHAPTER_START,
    CREATE_LOCKED_CHAPTER_SUCCESS,
    CREATE_LOCKED_CHAPTER_FAIL,
    GET_LOCKED_CHAPTER_START,
    GET_LOCKED_CHAPTER_SUCCESS,
    GET_LOCKED_CHAPTER_FAIL,
    EDIT_LOCKED_CHAPTER
    } from '../../types/lockedchapterTypes';
import { lockedchaptersURL } from '../../constants';

//locked chapters
const getLockedChapterListStart = () => {
  return {
    type: GET_LOCKED_CHAPTERS_START
  };
};

const getLockedChapterListSuccess = lockedchapters => {
  return {
    type: GET_LOCKED_CHAPTERS_SUCCESS,
    lockedchapters
  };
};

const getLockedChapterListFail = error => {
  return {
    type: GET_LOCKED_CHAPTERS_FAIL,
    error: error
  };
};

const createLockedChapterStart = () => {
  return {
    type: CREATE_LOCKED_CHAPTER_START
  };
};


const createLockedChapterSuccess = lockedchapter => {
  return {
    type: CREATE_LOCKED_CHAPTER_SUCCESS,
    lockedchapter
  };
};

const createLockedChapterFail = error => {
  return {
    type: CREATE_LOCKED_CHAPTER_FAIL,
    error: error
  };
};

const getLockedChapterDetailStart = () => {
  return {
    type: GET_LOCKED_CHAPTER_START
  };
};

const getLockedChapterDetailSuccess = lockedchapter => {
  return {
    type: GET_LOCKED_CHAPTER_SUCCESS,
    lockedchapter
  };
};

const getLockedChapterDetailFail = error => {
  return {
    type: GET_LOCKED_CHAPTER_FAIL,
    error: error
  };
};

export const getLockedChapters = (token) => {
  return dispatch => {
      dispatch(getLockedChapterListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(lockedchaptersURL, headers)
        .then(res => {
          const lockedchapters = res.data;
          dispatch(getLockedChapterListSuccess(lockedchapters));
          })
        .catch(err => {
          dispatch(getLockedChapterListStart(err));
        });
    };
};

export const getLockedChapter = (id, token) => {
  return dispatch => {
      dispatch(getLockedChapterDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${lockedchaptersURL}${id}`, headers)
        .then(res => {
          const lockedchapter = res.data;
          dispatch(getLockedChapterDetailSuccess(lockedchapter));
          })
        .catch(err => {
          dispatch(getLockedChapterDetailFail(err));
        });
    };
};

export const addLockedChapter = (lockedchapter, token) => {
  return dispatch => {
      dispatch(createLockedChapterStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(lockedchaptersURL, lockedchapter, headers)
        .then(res => {
          dispatch(createLockedChapterSuccess(lockedchapter));
        })
        .catch(err => {
          dispatch(createLockedChapterFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editLockedChapter = (id, lockedchapter, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${lockedchaptersURL}${id}/`, lockedchapter, headers)
        .then(res => {
            dispatch({
                type: EDIT_LOCKED_CHAPTER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
