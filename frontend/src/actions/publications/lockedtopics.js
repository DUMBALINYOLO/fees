import axios from 'axios';
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
import { lockedtopicsURL } from '../../constants';

//locked topics
const getLockedTopicListStart = () => {
  return {
    type: GET_LOCKED_TOPICS_START
  };
};

const getLockedTopicListSuccess = lockedtopics => {
  return {
    type: GET_LOCKED_TOPICS_SUCCESS,
    lockedtopics
  };
};

const getLockedTopicListFail = error => {
  return {
    type: GET_LOCKED_TOPICS_FAIL,
    error: error
  };
};

const createLockedTopicStart = () => {
  return {
    type: CREATE_LOCKED_TOPIC_START
  };
};


const createLockedTopicSuccess = lockedtopic => {
  return {
    type: CREATE_LOCKED_TOPIC_SUCCESS,
    lockedtopic
  };
};

const createLockedTopicFail = error => {
  return {
    type: CREATE_LOCKED_TOPIC_FAIL,
    error: error
  };
};

const getLockedTopicDetailStart = () => {
  return {
    type: GET_LOCKED_TOPIC_START
  };
};

const getLockedTopicDetailSuccess = lockedtopic => {
  return {
    type: GET_LOCKED_TOPIC_SUCCESS,
    lockedtopic
  };
};

const getLockedTopicDetailFail = error => {
  return {
    type: GET_LOCKED_TOPIC_FAIL,
    error: error
  };
};

export const getLockedTopics = (token) => {
  return dispatch => {
      dispatch(getLockedTopicListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(lockedtopicsURL, headers)
        .then(res => {
          const lockedtopics = res.data;
          dispatch(getLockedTopicListSuccess(lockedtopics));
          })
        .catch(err => {
          dispatch(getLockedTopicListStart(err));
        });
    };
};

export const getLockedTopic = (id, token) => {
  return dispatch => {
      dispatch(getLockedTopicDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${lockedtopicsURL}${id}`, headers)
        .then(res => {
          const lockedtopic = res.data;
          dispatch(getLockedTopicDetailSuccess(lockedtopic));
          })
        .catch(err => {
          dispatch(getLockedTopicDetailFail(err));
        });
    };
};

export const addLockedTopic = (lockedtopic, token) => {
  return dispatch => {
      dispatch(createLockedTopicStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(lockedtopicsURL, lockedtopic, headers)
        .then(res => {
          dispatch(createLockedTopicSuccess(lockedtopic));
        })
        .catch(err => {
          dispatch(createLockedTopicFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editLockedTopic = (id, lockedtopic, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${lockedtopicsURL}${id}/`, lockedtopic, headers)
        .then(res => {
            dispatch({
                type: EDIT_LOCKED_TOPIC,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
