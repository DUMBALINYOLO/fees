import axios from 'axios';
import {
    GET_EDITORS_START,
    GET_EDITORS_SUCCESS,
    GET_EDITORS_FAIL,
    CREATE_EDITOR_START,
    CREATE_EDITOR_SUCCESS,
    CREATE_EDITOR_FAIL,
    GET_EDITOR_START,
    GET_EDITOR_SUCCESS,
    GET_EDITOR_FAIL,
    EDIT_EDITOR
    } from '../../types/editorTypes';
import { editorsURL } from '../../constants';
import { createeditorURL } from '../../constants';
import { returnErrors } from '../messages';

//editors
const getEditorListStart = () => {
  return {
    type: GET_EDITORS_START
  };
};

const getEditorListSuccess = editors => {
  return {
    type: GET_EDITORS_SUCCESS,
    editors
  };
};

const getEditorListFail = error => {
  return {
    type: GET_EDITORS_FAIL,
    error: error
  };
};

const createEditorStart = () => {
  return {
    type: CREATE_EDITOR_START
  };
};


const createEditorSuccess = editor => {
  return {
    type: CREATE_EDITOR_SUCCESS,
    editor
  };
};

const createEditorFail = error => {
  return {
    type: CREATE_EDITOR_FAIL,
    error: error
  };
};

const getEditorDetailStart = () => {
  return {
    type: GET_EDITOR_START
  };
};

const getEditorDetailSuccess = editor => {
  return {
    type: GET_EDITOR_SUCCESS,
    editor
  };
};

const getEditorDetailFail = error => {
  return {
    type: GET_EDITOR_FAIL,
    error: error
  };
};

export const getEditors = (token) => {
  return dispatch => {
      dispatch(getEditorListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(editorsURL, headers)
        .then(res => {
          const editors = res.data;
          dispatch(getEditorListSuccess(editors));
          })
        .catch(err => {
          dispatch(getEditorListStart(err));
        });
    };
};

export const getEditor = (id, token) => {
  return dispatch => {
      dispatch(getEditorDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${editorsURL}${id}`, headers)
        .then(res => {
          const editor = res.data;
          dispatch(getEditorDetailSuccess(editor));
          })
        .catch(err => {
          dispatch(getEditorDetailFail(err));
        });
    };
};

export const addEditor = (editor, token) => {
  return dispatch => {
      dispatch(createEditorStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createeditorURL, editor, headers)
        .then(res => {
          dispatch(createEditorSuccess(editor));
        })
        .catch(err => {
          dispatch(createEditorFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editEditor = (id, editor, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${editorsURL}${id}/`, editor, headers)
        .then(res => {
            dispatch({
                type: EDIT_EDITOR,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

