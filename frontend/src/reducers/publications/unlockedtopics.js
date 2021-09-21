import {
  GET_UNLOCKED_TOPICS_START,
  GET_UNLOCKED_TOPICS_SUCCESS,
  GET_UNLOCKED_TOPICS_FAIL,
  GET_UNLOCKED_TOPIC_START,
  GET_UNLOCKED_TOPIC_SUCCESS,
  GET_UNLOCKED_TOPIC_FAIL,
} from '../../types/unlockedtopicTypes';
import { updateObject } from "../../utility";

const initialState = {
    unlockedtopics: [],
    unlockedtopic: {},
    loading: false,
    error: null,
}

const getUnlockedTopicListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnlockedTopicListSuccess = (state, action) => {
  return updateObject(state, {
    unlockedtopics: action.unlockedtopics,
    error: null,
    loading: false
  });
};

const getUnlockedTopicListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUnlockedTopicDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnlockedTopicDetailSuccess = (state, action) => {
  return updateObject(state, {
    unlockedtopic: action.unlockedtopic,
    error: null,
    loading: false
  });
};

const getUnlockedTopicDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function unlockedtopics(state = initialState, action){
    switch(action.type){
        case GET_UNLOCKED_TOPICS_START:
            return getUnlockedTopicListStart(state, action);
        case GET_UNLOCKED_TOPICS_SUCCESS:
            return getUnlockedTopicListSuccess(state, action);
        case GET_UNLOCKED_TOPICS_FAIL:
            return getUnlockedTopicListFail(state, action);
        case GET_UNLOCKED_TOPIC_START:
            return getUnlockedTopicDetailStart(state, action);
        case GET_UNLOCKED_TOPIC_SUCCESS:
            return getUnlockedTopicDetailSuccess(state, action);
        case GET_UNLOCKED_TOPIC_FAIL:
            return getUnlockedTopicDetailFail(state, action);
        default:
            return state;
    }
}
