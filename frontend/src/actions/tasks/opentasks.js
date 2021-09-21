import axios from 'axios';
import {
  GET_OPEN_TASKS_START,
  GET_OPEN_TASKS_SUCCESS,
  GET_OPEN_TASKS_FAIL,
  CREATE_OPEN_TASK_START,
  CREATE_OPEN_TASK_SUCCESS,
  CREATE_OPEN_TASK_FAIL,
  GET_OPEN_TASK_START,
  GET_OPEN_TASK_SUCCESS,
  GET_OPEN_TASK_FAIL,
  EDIT_OPEN_TASK
} from '../../types/taskTypes';
import { opentasksURL } from '../../constants';
import { returnErrors } from '../messages';

//open tasks
const getOpenTaskListStart = () => {
  return {
    type: GET_OPEN_TASKS_START
  };
};

const getOpenTaskListSuccess = opentasks => {
  return {
    type: GET_OPEN_TASKS_SUCCESS,
    opentasks
  };
};

const getOpenTaskListFail = error => {
  return {
    type: GET_OPEN_TASKS_FAIL,
    error: error
  };
};

const createOpenTaskStart = () => {
  return {
    type: CREATE_OPEN_TASK_START
  };
};


const createOpenTaskSuccess = opentask => {
  return {
    type: CREATE_OPEN_TASK_SUCCESS,
    opentask
  };
};

const createOpenTaskFail = error => {
  return {
    type: CREATE_OPEN_TASK_FAIL,
    error: error
  };
};

const getOpenTaskDetailStart = () => {
  return {
    type: GET_OPEN_TASK_START
  };
};

const getOpenTaskDetailSuccess = opentask => {
  return {
    type: GET_OPEN_TASK_SUCCESS,
    opentask
  };
};

const getOpenTaskDetailFail = error => {
  return {
    type: GET_OPEN_TASK_FAIL,
    error: error
  };
};

export const getOpenTasks = (token) => {
  return dispatch => {
      dispatch(getOpenTaskListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(opentasksURL, headers)
        .then(res => {
          const opentasks = res.data;
          dispatch(getOpenTaskListSuccess(opentasks));
          })
        .catch(err => {
          dispatch(getOpenTaskListStart(err));
        });
    };
};

export const getOpenTask = (id, token) => {
  return dispatch => {
      dispatch(getOpenTaskDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${opentasksURL}${id}`, headers)
        .then(res => {
          const opentask = res.data;
          dispatch(getOpenTaskDetailSuccess(opentask));
          })
        .catch(err => {
          dispatch(getOpenTaskDetailFail(err));
        });
    };
};

export const addOpenTask = (opentask, token) => {
  return dispatch => {
      dispatch(createOpenTaskStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(opentasksURL, opentask, headers)
        .then(res => {
          dispatch(createOpenTaskSuccess(opentask));
        })
        .catch(err => {
          dispatch(createOpenTaskFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editOpenTask = (id, opentask, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${opentasksURL}${id}/`, opentask, headers)
        .then(res => {
            dispatch({
                type: EDIT_OPEN_TASK,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

