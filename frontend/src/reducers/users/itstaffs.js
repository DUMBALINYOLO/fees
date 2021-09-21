import {
  GET_IT_STAFFS_START,
  GET_IT_STAFFS_SUCCESS,
  GET_IT_STAFFS_FAIL,
  CREATE_IT_STAFF_START,
  CREATE_IT_STAFF_SUCCESS,
  CREATE_IT_STAFF_FAIL,
  GET_IT_STAFF_START,
  GET_IT_STAFF_SUCCESS,
  GET_IT_STAFF_FAIL,
  EDIT_IT_STAFF
} from '../../types/itstaffTypes';
import { updateObject } from "../../utility";

const initialState = {
    itstaffs: [],
    itstaff: {},
    loading: false,
    error: null,
}

const getItStaffListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getItStaffListSuccess = (state, action) => {
  return updateObject(state, {
    itstaffs: action.itstaffs,
    error: null,
    loading: false
  });
};

const getItStaffListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createItStaffStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createItStaffSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createItStaffFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getItStaffDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getItStaffDetailSuccess = (state, action) => {
  return updateObject(state, {
    itstaff: action.itstaff,
    error: null,
    loading: false
  });
};

const getItStaffDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function itstaffs(state = initialState, action){
    switch(action.type){
        case GET_IT_STAFFS_START:
            return getItStaffListStart(state, action);
        case GET_IT_STAFFS_SUCCESS:
            return getItStaffListSuccess(state, action);
        case GET_IT_STAFFS_FAIL:
            return getItStaffListFail(state, action);
        case GET_IT_STAFF_START:
            return getItStaffDetailStart(state, action);
        case GET_IT_STAFF_SUCCESS:
            return getItStaffDetailSuccess(state, action);
        case GET_IT_STAFF_FAIL:
            return getItStaffDetailFail(state, action);
        case CREATE_IT_STAFF_START:
            return createItStaffStart(state, action);
        case CREATE_IT_STAFF_SUCCESS:
            return createItStaffSuccess(state, action);
        case CREATE_IT_STAFF_FAIL:
            return createItStaffFail(state, action);
        case EDIT_IT_STAFF:
            const arrayList = state.itstaffs;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                itstaffs: arrayList,
            };
        default:
            return state;
    }
}
