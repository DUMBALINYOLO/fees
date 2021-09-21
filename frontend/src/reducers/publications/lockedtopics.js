import {
  GET_LOCKED_TOPICS_START,
  GET_LOCKED_TOPICS_SUCCESS,
  GET_LOCKED_TOPICS_FAIL,
  CREATE_LOCKED_TOPIC_START,
  CREATE_LOCKED_TOPIC_SUCCESS,
  CREATE_LOCKED_TOPIC_FAIL,
  GET_LOCKED_TOPIC_START,
  GET_LOCKED_TOPIC_SUCCESS,
  GET_LOCKED_TOPIC_FAIL,
  EDIT_LOCKED_TOPIC
} from '../../types/lockedtopicTypes';
import { updateObject } from "../../utility";

const initialState = {
    lockedtopics: [],
    lockedtopic: {},
    loading: false,
    error: null,
}

const getLockedTopicListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLockedTopicListSuccess = (state, action) => {
  return updateObject(state, {
    lockedtopics: action.lockedtopics,
    error: null,
    loading: false
  });
};

const getLockedTopicListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createLockedTopicStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createLockedTopicSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createLockedTopicFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getLockedTopicDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getLockedTopicDetailSuccess = (state, action) => {
  return updateObject(state, {
    lockedtopic: action.lockedtopic,
    error: null,
    loading: false
  });
};

const getLockedTopicDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function lockedtopics(state = initialState, action){
    switch(action.type){
        case GET_LOCKED_TOPICS_START:
            return getLockedTopicListStart(state, action);
        case GET_LOCKED_TOPICS_SUCCESS:
            return getLockedTopicListSuccess(state, action);
        case GET_LOCKED_TOPICS_FAIL:
            return getLockedTopicListFail(state, action);
        case GET_LOCKED_TOPIC_START:
            return getLockedTopicDetailStart(state, action);
        case GET_LOCKED_TOPIC_SUCCESS:
            return getLockedTopicDetailSuccess(state, action);
        case GET_LOCKED_TOPIC_FAIL:
            return getLockedTopicDetailFail(state, action);
        case CREATE_LOCKED_TOPIC_START:
            return createLockedTopicStart(state, action);
        case CREATE_LOCKED_TOPIC_SUCCESS:
            return createLockedTopicSuccess(state, action);
        case CREATE_LOCKED_TOPIC_FAIL:
            return createLockedTopicFail(state, action);
        case EDIT_LOCKED_TOPIC:
            const arrayList = state.lockedtopics;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                lockedtopics: arrayList,
            };
        default:
            return state;
    }
}
