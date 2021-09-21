import axios from 'axios';
import {
    GET_UNLOCKED_TOPICS_START,
    GET_UNLOCKED_TOPICS_SUCCESS,
    GET_UNLOCKED_TOPICS_FAIL,
    GET_UNLOCKED_TOPIC_START,
    GET_UNLOCKED_TOPIC_SUCCESS,
    GET_UNLOCKED_TOPIC_FAIL,
    } from '../../types/unlockedtopicTypes';
import { unlockedtopicsURL } from '../../constants';

//unlocked topics
const getUnlockedTopicListStart = () => {
  return {
    type: GET_UNLOCKED_TOPICS_START
  };
};

const getUnlockedTopicListSuccess = unlockedtopics => {
  return {
    type: GET_UNLOCKED_TOPICS_SUCCESS,
    unlockedtopics
  };
};

const getUnlockedTopicListFail = error => {
  return {
    type: GET_UNLOCKED_TOPICS_FAIL,
    error: error
  };
};

const getUnlockedTopicDetailStart = () => {
  return {
    type: GET_UNLOCKED_TOPIC_START
  };
};

const getUnlockedTopicDetailSuccess = unlockedtopic => {
  return {
    type: GET_UNLOCKED_TOPIC_SUCCESS,
    unlockedtopic
  };
};

const getUnlockedTopicDetailFail = error => {
  return {
    type: GET_UNLOCKED_TOPIC_FAIL,
    error: error
  };
};

export const getUnlockedTopics = (token) => {
  return dispatch => {
      dispatch(getUnlockedTopicListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(unlockedtopicsURL, headers)
        .then(res => {
          const unlockedtopics = res.data;
          dispatch(getUnlockedTopicListSuccess(unlockedtopics));
          })
        .catch(err => {
          dispatch(getUnlockedTopicListStart(err));
        });
    };
};

export const getUnlockedTopic = (id, token) => {
  return dispatch => {
      dispatch(getUnlockedTopicDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${unlockedtopicsURL}${id}`, headers)
        .then(res => {
          const unlockedtopic = res.data;
          dispatch(getUnlockedTopicDetailSuccess(unlockedtopic));
          })
        .catch(err => {
          dispatch(getUnlockedTopicDetailFail(err));
        });
    };
};

