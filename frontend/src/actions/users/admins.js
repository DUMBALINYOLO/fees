import axios from 'axios';
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
import { adminsURL } from '../../constants';
import { createadminURL } from '../../constants';
import { returnErrors } from '../messages';

//admins
const getAdminListStart = () => {
  return {
    type: GET_ADMINS_START
  };
};

const getAdminListSuccess = admins => {
  return {
    type: GET_ADMINS_SUCCESS,
    admins
  };
};

const getAdminListFail = error => {
  return {
    type: GET_ADMINS_FAIL,
    error: error
  };
};

const createAdminStart = () => {
  return {
    type: CREATE_ADMIN_START
  };
};


const createAdminSuccess = admin => {
  return {
    type: CREATE_ADMIN_SUCCESS,
    admin
  };
};

const createAdminFail = error => {
  return {
    type: CREATE_ADMIN_FAIL,
    error: error
  };
};

const getAdminDetailStart = () => {
  return {
    type: GET_ADMIN_START
  };
};

const getAdminDetailSuccess = admin => {
  return {
    type: GET_ADMIN_SUCCESS,
    admin
  };
};

const getAdminDetailFail = error => {
  return {
    type: GET_ADMIN_FAIL,
    error: error
  };
};

export const getAdmins = (token) => {
  return dispatch => {
      dispatch(getAdminListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(adminsURL, headers)
        .then(res => {
          const admins = res.data;
          dispatch(getAdminListSuccess(admins));
          })
        .catch(err => {
          dispatch(getAdminListStart(err));
        });
    };
};

export const getAdmin = (id, token) => {
  return dispatch => {
      dispatch(getAdminDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${adminsURL}${id}`, headers)
        .then(res => {
          const admin = res.data;
          dispatch(getAdminDetailSuccess(admin));
          })
        .catch(err => {
          dispatch(getAdminDetailFail(err));
        });
    };
};

export const addAdmin = (admin, token) => {
  return dispatch => {
      dispatch(createAdminStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createadminURL, admin, headers)
        .then(res => {
          dispatch(createAdminSuccess(admin));
        })
        .catch(err => {
          dispatch(createAdminFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAdmin = (id, admin, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${adminsURL}${id}/`, admin, headers)
        .then(res => {
            dispatch({
                type: EDIT_ADMIN,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

