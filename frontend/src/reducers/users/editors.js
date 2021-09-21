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
import { updateObject } from "../../utility";

const initialState = {
    editors: [],
    editor: {},
    loading: false,
    error: null,
}

const getEditorListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEditorListSuccess = (state, action) => {
  return updateObject(state, {
    editors: action.editors,
    error: null,
    loading: false
  });
};

const getEditorListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createEditorStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createEditorSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createEditorFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getEditorDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getEditorDetailSuccess = (state, action) => {
  return updateObject(state, {
    editor: action.editor,
    error: null,
    loading: false
  });
};

const getEditorDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function editors(state = initialState, action){
    switch(action.type){
        case GET_EDITORS_START:
            return getEditorListStart(state, action);
        case GET_EDITORS_SUCCESS:
            return getEditorListSuccess(state, action);
        case GET_EDITORS_FAIL:
            return getEditorListFail(state, action);
        case GET_EDITOR_START:
            return getEditorDetailStart(state, action);
        case GET_EDITOR_SUCCESS:
            return getEditorDetailSuccess(state, action);
        case GET_EDITOR_FAIL:
            return getEditorDetailFail(state, action);
        case CREATE_EDITOR_START:
            return createEditorStart(state, action);
        case CREATE_EDITOR_SUCCESS:
            return createEditorSuccess(state, action);
        case CREATE_EDITOR_FAIL:
            return createEditorFail(state, action);
        case EDIT_EDITOR:
            const arrayList = state.editors;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                editors: arrayList,
            };
        default:
            return state;
    }
}
