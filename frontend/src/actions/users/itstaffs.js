import axios from 'axios';
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
import { itstaffsURL } from '../../constants';
import { createitstaffURL } from '../../constants';
import { returnErrors } from '../messages';

//it staffs
const getItStaffListStart = () => {
  return {
    type: GET_IT_STAFFS_START
  };
};

const getItStaffListSuccess = itstaffs => {
  return {
    type: GET_IT_STAFFS_SUCCESS,
    itstaffs
  };
};

const getItStaffListFail = error => {
  return {
    type: GET_IT_STAFFS_FAIL,
    error: error
  };
};

const createItStaffStart = () => {
  return {
    type: CREATE_IT_STAFF_START
  };
};


const createItStaffSuccess = itstaff => {
  return {
    type: CREATE_IT_STAFF_SUCCESS,
    itstaff
  };
};

const createItStaffFail = error => {
  return {
    type: CREATE_IT_STAFF_FAIL,
    error: error
  };
};

const getItStaffDetailStart = () => {
  return {
    type: GET_IT_STAFF_START
  };
};

const getItStaffDetailSuccess = itstaff => {
  return {
    type: GET_IT_STAFF_SUCCESS,
    itstaff
  };
};

const getItStaffDetailFail = error => {
  return {
    type: GET_IT_STAFF_FAIL,
    error: error
  };
};

export const getItStaffs = (token) => {
  return dispatch => {
      dispatch(getItStaffListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(itstaffsURL, headers)
        .then(res => {
          const itstaffs = res.data;
          dispatch(getItStaffListSuccess(itstaffs));
          })
        .catch(err => {
          dispatch(getItStaffListStart(err));
        });
    };
};

export const getItStaff = (id, token) => {
  return dispatch => {
      dispatch(getItStaffDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${itstaffsURL}${id}`, headers)
        .then(res => {
          const itstaff = res.data;
          dispatch(getItStaffDetailSuccess(itstaff));
          })
        .catch(err => {
          dispatch(getItStaffDetailFail(err));
        });
    };
};

export const addItStaff = (itstaff, token) => {
  return dispatch => {
      dispatch(createItStaffStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createitstaffURL, itstaff, headers)
        .then(res => {
          dispatch(createItStaffSuccess(itstaff));
        })
        .catch(err => {
          dispatch(createItStaffFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editItStaff = (id, itstaff, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    JSON.stringify(id, null, 3)
    axios.patch(`${itstaffsURL}${id}/`, itstaff, headers)
        .then(res => {
            dispatch({
                type: EDIT_IT_STAFF,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

