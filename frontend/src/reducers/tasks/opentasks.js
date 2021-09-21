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
import { updateObject } from "../../utility";

const initialState = {
  opentasks: [],
  opentask: {},
  loading: false,
  error: null,
}

const getOpenTaskListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOpenTaskListSuccess = (state, action) => {
  return updateObject(state, {
    opentasks: action.opentasks,
    error: null,
    loading: false
  });
};

const getOpenTaskListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createOpenTaskStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createOpenTaskSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createOpenTaskFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOpenTaskDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOpenTaskDetailSuccess = (state, action) => {
  return updateObject(state, {
    opentask: action.opentask,
    error: null,
    loading: false
  });
};

const getOpenTaskDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function opentasks(state = initialState, action){
  switch(action.type){
    case GET_OPEN_TASKS_START:
      return getOpenTaskListStart(state, action);
    case GET_OPEN_TASKS_SUCCESS:
      return getOpenTaskListSuccess(state, action);
    case GET_OPEN_TASKS_FAIL:
      return getOpenTaskListFail(state, action);
    case GET_OPEN_TASK_START:
      return getOpenTaskDetailStart(state, action);
    case GET_OPEN_TASK_SUCCESS:
      return getOpenTaskDetailSuccess(state, action);
    case GET_OPEN_TASK_FAIL:
      return getOpenTaskDetailFail(state, action);
    case CREATE_OPEN_TASK_START:
      return createOpenTaskStart(state, action);
    case CREATE_OPEN_TASK_SUCCESS:
      return createOpenTaskSuccess(state, action);
    case CREATE_OPEN_TASK_FAIL:
      return createOpenTaskFail(state, action);
    case EDIT_OPEN_TASK:
      const arrayList = state.opentasks;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
          ...state,
          opentasks: arrayList,
      };
    default:
      return state;
  }
}
