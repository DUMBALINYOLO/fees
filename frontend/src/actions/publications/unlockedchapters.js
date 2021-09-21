import axios from 'axios';
import {
    GET_UNLOCKED_CHAPTERS_START,
    GET_UNLOCKED_CHAPTERS_SUCCESS,
    GET_UNLOCKED_CHAPTERS_FAIL,
    GET_UNLOCKED_CHAPTER_START,
    GET_UNLOCKED_CHAPTER_SUCCESS,
    GET_UNLOCKED_CHAPTER_FAIL,
    } from '../../types/unlockedchapterTypes';
import { unlockedchaptersURL } from '../../constants';

//unlocked chapters
const getUnlockedChapterListStart = () => {
  return {
    type: GET_UNLOCKED_CHAPTERS_START
  };
};

const getUnlockedChapterListSuccess = unlockedchapters => {
  return {
    type: GET_UNLOCKED_CHAPTERS_SUCCESS,
    unlockedchapters
  };
};

const getUnlockedChapterListFail = error => {
  return {
    type: GET_UNLOCKED_CHAPTERS_FAIL,
    error: error
  };
};

const getUnlockedChapterDetailStart = () => {
  return {
    type: GET_UNLOCKED_CHAPTER_START
  };
};

const getUnlockedChapterDetailSuccess = unlockedchapter => {
  return {
    type: GET_UNLOCKED_CHAPTER_SUCCESS,
    unlockedchapter
  };
};

const getUnlockedChapterDetailFail = error => {
  return {
    type: GET_UNLOCKED_CHAPTER_FAIL,
    error: error
  };
};

export const getUnlockedChapters = (token) => {
  return dispatch => {
      dispatch(getUnlockedChapterListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(unlockedchaptersURL, headers)
        .then(res => {
          const unlockedchapters = res.data;
          dispatch(getUnlockedChapterListSuccess(unlockedchapters));
          })
        .catch(err => {
          dispatch(getUnlockedChapterListStart(err));
        });
    };
};

export const getUnlockedChapter = (id, token) => {
  return dispatch => {
      dispatch(getUnlockedChapterDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${unlockedchaptersURL}${id}`, headers)
        .then(res => {
          const unlockedchapter = res.data;
          dispatch(getUnlockedChapterDetailSuccess(unlockedchapter));
          })
        .catch(err => {
          dispatch(getUnlockedChapterDetailFail(err));
        });
    };
};
