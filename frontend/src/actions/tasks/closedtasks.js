import axios from 'axios';
import {
  GET_CLOSED_TASKS_START,
  GET_CLOSED_TASKS_SUCCESS,
  GET_CLOSED_TASKS_FAIL,
  GET_CLOSED_TASK_START,
  GET_CLOSED_TASK_SUCCESS,
  GET_CLOSED_TASK_FAIL,
} from '../../types/taskTypes';
import { closedtasksURL } from '../../constants';

//closed tasks
const getClosedTaskListStart = () => {
  return {
    type: GET_CLOSED_TASKS_START
  };
};

const getClosedTaskListSuccess = closedtasks => {
  return {
    type: GET_CLOSED_TASKS_SUCCESS,
    closedtasks
  };
};

const getClosedTaskListFail = error => {
  return {
    type: GET_CLOSED_TASKS_FAIL,
    error: error
  };
};

const getClosedTaskDetailStart = () => {
  return {
    type: GET_CLOSED_TASK_START
  };
};

const getClosedTaskDetailSuccess = closedtask => {
  return {
    type: GET_CLOSED_TASK_SUCCESS,
    closedtask
  };
};

const getClosedTaskDetailFail = error => {
  return {
    type: GET_CLOSED_TASK_FAIL,
    error: error
  };
};

export const getClosedTasks = (token) => {
  return dispatch => {
      dispatch(getClosedTaskListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(closedtasksURL, headers)
        .then(res => {
          const closedtasks = res.data;
          dispatch(getClosedTaskListSuccess(closedtasks));
          })
        .catch(err => {
          dispatch(getClosedTaskListStart(err));
        });
    };
};

export const getClosedTask = (id, token) => {
  return dispatch => {
      dispatch(getClosedTaskDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${closedtasksURL}${id}`, headers)
        .then(res => {
          const closedtask = res.data;
          dispatch(getClosedTaskDetailSuccess(closedtask));
          })
        .catch(err => {
          dispatch(getClosedTaskDetailFail(err));
        });
    };
};
