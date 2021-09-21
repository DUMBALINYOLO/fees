import {
  GET_UNREAD_NOTIFICATIONS_START,
  GET_UNREAD_NOTIFICATIONS_SUCCESS,
  GET_UNREAD_NOTIFICATIONS_FAIL,
  GET_UNREAD_NOTIFICATION_START,
  GET_UNREAD_NOTIFICATION_SUCCESS,
  GET_UNREAD_NOTIFICATION_FAIL,
  READ_NOTIFICATION_START,
  READ_NOTIFICATION_SUCCESS,
  READ_NOTIFICATION_FAIL,
} from '../../types/notificationTypes';
import { updateObject } from "../../utility";

const initialState = {
    unreadnotifications: [],
    unreadnotification: {},
    loading: false,
    error: null,
}

const getUnReadNotificationListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnReadNotificationListSuccess = (state, action) => {
  return updateObject(state, {
    unreadnotifications: action.unreadnotifications,
    error: null,
    loading: false
  });
};

const getUnReadNotificationListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUnReadNotificationDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnReadNotificationDetailSuccess = (state, action) => {
  return updateObject(state, {
    unreadnotification: action.unreadnotification,
    error: null,
    loading: false
  });
};

const getUnReadNotificationDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const readNotificationStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const readNotificationSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const readNotificationFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function unreadnotifications(state = initialState, action){
  switch(action.type){
    case GET_UNREAD_NOTIFICATIONS_START:
      return getUnReadNotificationListStart(state, action);
    case GET_UNREAD_NOTIFICATIONS_SUCCESS:
      return getUnReadNotificationListSuccess(state, action);
    case GET_UNREAD_NOTIFICATIONS_FAIL:
      return getUnReadNotificationListFail(state, action);
    case GET_UNREAD_NOTIFICATION_START:
      return getUnReadNotificationDetailStart(state, action);
    case GET_UNREAD_NOTIFICATION_SUCCESS:
      return getUnReadNotificationDetailSuccess(state, action);
    case GET_UNREAD_NOTIFICATION_FAIL:
      return getUnReadNotificationDetailFail(state, action);
    case READ_NOTIFICATION_START:
      return readNotificationStart(state, action);
    case READ_NOTIFICATION_SUCCESS:
      return readNotificationSuccess(state, action);
    case READ_NOTIFICATION_FAIL:
      return readNotificationFail(state, action);
    default:
      return state;
  }
}
