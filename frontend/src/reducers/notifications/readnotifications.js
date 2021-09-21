import {
  GET_READ_NOTIFICATIONS_START,
  GET_READ_NOTIFICATIONS_SUCCESS,
  GET_READ_NOTIFICATIONS_FAIL,
  GET_READ_NOTIFICATION_START,
  GET_READ_NOTIFICATION_SUCCESS,
  GET_READ_NOTIFICATION_FAIL,
} from '../../types/notificationTypes';
import { updateObject } from "../../utility";

const initialState = {
    readnotifications: [],
    readnotification: {},
    loading: false,
    error: null,
}

const getReadNotificationListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getReadNotificationListSuccess = (state, action) => {
  return updateObject(state, {
    readnotifications: action.readnotifications,
    error: null,
    loading: false
  });
};

const getReadNotificationListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getReadNotificationDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getReadNotificationDetailSuccess = (state, action) => {
  return updateObject(state, {
    readnotification: action.readnotification,
    error: null,
    loading: false
  });
};

const getReadNotificationDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function readnotifications(state = initialState, action){
  switch(action.type){
    case GET_READ_NOTIFICATIONS_START:
      return getReadNotificationListStart(state, action);
    case GET_READ_NOTIFICATIONS_SUCCESS:
      return getReadNotificationListSuccess(state, action);
    case GET_READ_NOTIFICATIONS_FAIL:
      return getReadNotificationListFail(state, action);
    case GET_READ_NOTIFICATION_START:
      return getReadNotificationDetailStart(state, action);
    case GET_READ_NOTIFICATION_SUCCESS:
      return getReadNotificationDetailSuccess(state, action);
    case GET_READ_NOTIFICATION_FAIL:
      return getReadNotificationDetailFail(state, action);
    default:
      return state;
  }
}
