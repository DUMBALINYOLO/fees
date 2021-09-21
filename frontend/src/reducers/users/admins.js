import {
  GET_ADMINS_START,
  GET_ADMINS_SUCCESS,
  GET_ADMINS_FAIL,
  CREATE_ADMIN_START,
  CREATE_ADMIN_SUCCESS,
  CREATE_ADMIN_FAIL,
  GET_ADMIN_START,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAIL,
  EDIT_ADMIN
} from '../../types/adminTypes';
import { updateObject } from "../../utility";

const initialState = {
    admins: [],
    admin: {},
    loading: false,
    error: null,
}

const getAdminListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminListSuccess = (state, action) => {
  return updateObject(state, {
    admins: action.admins,
    error: null,
    loading: false
  });
};

const getAdminListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAdminStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAdminSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAdminFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAdminDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAdminDetailSuccess = (state, action) => {
  return updateObject(state, {
    admin: action.admin,
    error: null,
    loading: false
  });
};

const getAdminDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function admins(state = initialState, action){
    switch(action.type){
        case GET_ADMINS_START:
            return getAdminListStart(state, action);
        case GET_ADMINS_SUCCESS:
            return getAdminListSuccess(state, action);
        case GET_ADMINS_FAIL:
            return getAdminListFail(state, action);
        case GET_ADMIN_START:
            return getAdminDetailStart(state, action);
        case GET_ADMIN_SUCCESS:
            return getAdminDetailSuccess(state, action);
        case GET_ADMIN_FAIL:
            return getAdminDetailFail(state, action);
        case CREATE_ADMIN_START:
            return createAdminStart(state, action);
        case CREATE_ADMIN_SUCCESS:
            return createAdminSuccess(state, action);
        case CREATE_ADMIN_FAIL:
            return createAdminFail(state, action);
        case EDIT_ADMIN:
            const arrayList = state.admins;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                admins: arrayList,
            };
        default:
            return state;
    }
}
