import {
  GET_CLOSED_TASKS_START,
  GET_CLOSED_TASKS_SUCCESS,
  GET_CLOSED_TASKS_FAIL,
  GET_CLOSED_TASK_START,
  GET_CLOSED_TASK_SUCCESS,
  GET_CLOSED_TASK_FAIL,
} from '../../types/taskTypes';
import { updateObject } from "../../utility";

const initialState = {
    closedtasks: [],
    closedtask: {},
    loading: false,
    error: null,
}

const getClosedTaskListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClosedTaskListSuccess = (state, action) => {
  return updateObject(state, {
    closedtasks: action.closedtasks,
    error: null,
    loading: false
  });
};

const getClosedTaskListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getClosedTaskDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClosedTaskDetailSuccess = (state, action) => {
  return updateObject(state, {
    closedtask: action.closedtask,
    error: null,
    loading: false
  });
};

const getClosedTaskDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function closedtasks(state = initialState, action){
  switch(action.type){
    case GET_CLOSED_TASKS_START:
      return getClosedTaskListStart(state, action);
    case GET_CLOSED_TASKS_SUCCESS:
      return getClosedTaskListSuccess(state, action);
    case GET_CLOSED_TASKS_FAIL:
      return getClosedTaskListFail(state, action);
    case GET_CLOSED_TASK_START:
      return getClosedTaskDetailStart(state, action);
    case GET_CLOSED_TASK_SUCCESS:
      return getClosedTaskDetailSuccess(state, action);
    case GET_CLOSED_TASK_FAIL:
      return getClosedTaskDetailFail(state, action);
    default:
      return state;
  }
}
