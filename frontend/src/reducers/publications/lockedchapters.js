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
import { updateObject } from "../../utility";

const initialState = {
    lockedchapters: [],
    lockedchapter: {},
    loading: false,
    error: null,
}

const getLockedChapterListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLockedChapterListSuccess = (state, action) => {
  return updateObject(state, {
    lockedchapters: action.lockedchapters,
    error: null,
    loading: false
  });
};

const getLockedChapterListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createLockedChapterStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createLockedChapterSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createLockedChapterFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getLockedChapterDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLockedChapterDetailSuccess = (state, action) => {
  return updateObject(state, {
    lockedchapter: action.lockedchapter,
    error: null,
    loading: false
  });
};

const getLockedChapterDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function lockedchapters(state = initialState, action){
    switch(action.type){
        case GET_LOCKED_CHAPTERS_START:
            return getLockedChapterListStart(state, action);
        case GET_LOCKED_CHAPTERS_SUCCESS:
            return getLockedChapterListSuccess(state, action);
        case GET_LOCKED_CHAPTERS_FAIL:
            return getLockedChapterListFail(state, action);
        case GET_LOCKED_CHAPTER_START:
            return getLockedChapterDetailStart(state, action);
        case GET_LOCKED_CHAPTER_SUCCESS:
            return getLockedChapterDetailSuccess(state, action);
        case GET_LOCKED_CHAPTER_FAIL:
            return getLockedChapterDetailFail(state, action);
        case CREATE_LOCKED_CHAPTER_START:
            return createLockedChapterStart(state, action);
        case CREATE_LOCKED_CHAPTER_SUCCESS:
            return createLockedChapterSuccess(state, action);
        case CREATE_LOCKED_CHAPTER_FAIL:
            return createLockedChapterFail(state, action);
        case EDIT_LOCKED_CHAPTER:
            const arrayList = state.lockedchapters;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                lockedchapters: arrayList,
            };
        default:
            return state;
    }
}
