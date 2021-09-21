import {
  GET_UNLOCKED_CHAPTERS_START,
  GET_UNLOCKED_CHAPTERS_SUCCESS,
  GET_UNLOCKED_CHAPTERS_FAIL,
  GET_UNLOCKED_CHAPTER_START,
  GET_UNLOCKED_CHAPTER_SUCCESS,
  GET_UNLOCKED_CHAPTER_FAIL,
} from '../../types/unlockedchapterTypes';
import { updateObject } from "../../utility";

const initialState = {
    unlockedchapters: [],
    unlockedchapter: {},
    loading: false,
    error: null,
}

const getUnlockedChapterListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnlockedChapterListSuccess = (state, action) => {
  return updateObject(state, {
    unlockedchapters: action.unlockedchapters,
    error: null,
    loading: false
  });
};

const getUnlockedChapterListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUnlockedChapterDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnlockedChapterDetailSuccess = (state, action) => {
  return updateObject(state, {
    unlockedchapter: action.unlockedchapter,
    error: null,
    loading: false
  });
};

const getUnlockedChapterDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function unlockedchapters(state = initialState, action){
    switch(action.type){
        case GET_UNLOCKED_CHAPTERS_START:
            return getUnlockedChapterListStart(state, action);
        case GET_UNLOCKED_CHAPTERS_SUCCESS:
            return getUnlockedChapterListSuccess(state, action);
        case GET_UNLOCKED_CHAPTERS_FAIL:
            return getUnlockedChapterListFail(state, action);
        case GET_UNLOCKED_CHAPTER_START:
            return getUnlockedChapterDetailStart(state, action);
        case GET_UNLOCKED_CHAPTER_SUCCESS:
            return getUnlockedChapterDetailSuccess(state, action);
        case GET_UNLOCKED_CHAPTER_FAIL:
            return getUnlockedChapterDetailFail(state, action);
        default:
            return state;
    }
}
