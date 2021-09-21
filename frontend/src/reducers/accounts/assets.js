import {
  GET_ASSETS_START,
  GET_ASSETS_SUCCESS,
  GET_ASSETS_FAIL,
  CREATE_ASSET_START,
  CREATE_ASSET_SUCCESS,
  CREATE_ASSET_FAIL,
  GET_ASSET_START,
  GET_ASSET_SUCCESS,
  GET_ASSET_FAIL,
  EDIT_ASSET,
  GET_UNVERIFIED_ASSETS_START,
  GET_UNVERIFIED_ASSETS_SUCCESS,
  GET_UNVERIFIED_ASSETS_FAIL,
  CREATE_UNVERIFIED_ASSET_START,
  CREATE_UNVERIFIED_ASSET_SUCCESS,
  CREATE_UNVERIFIED_ASSET_FAIL,
  GET_UNVERIFIED_ASSET_START,
  GET_UNVERIFIED_ASSET_SUCCESS,
  GET_UNVERIFIED_ASSET_FAIL,
  EDIT_UNVERIFIED_ASSET,
  GET_VERIFIED_ASSETS_START,
  GET_VERIFIED_ASSETS_SUCCESS,
  GET_VERIFIED_ASSETS_FAIL,
  GET_DELETED_ASSETS_START,
  GET_DELETED_ASSETS_SUCCESS,
  GET_DELETED_ASSETS_FAIL,
  VERIFY_ASSET_SUCCESS,
  VERIFY_ASSET_FAIL,
  VERIFY_ASSET_START,
  DELETE_ASSET_SUCCESS,
  DELETE_ASSET_FAIL,
  DELETE_ASSET_START,
} from '../../types/assetTypes';
import { updateObject } from "../../utility";

const initialState = {
    assets: [],
    asset: {},
    loading: false,
    error: null,
}

const verifyAssetStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyAssetSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyAssetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const deleteAssetStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const deleteAssetSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const deleteAssetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const getAssetListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssetListSuccess = (state, action) => {
  return updateObject(state, {
    assets: action.assets,
    error: null,
    loading: false
  });
};

const getAssetListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAssetStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAssetSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAssetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAssetDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAssetDetailSuccess = (state, action) => {
  return updateObject(state, {
    asset: action.asset,
    error: null,
    loading: false
  });
};

const getAssetDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedAssetListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedAssetListSuccess = (state, action) => {
  return updateObject(state, {
    deletedassets: action.deletedassets,
    error: null,
    loading: false
  });
};

const getDeletedAssetListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getVerifiedAssetListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getVerifiedAssetListSuccess = (state, action) => {
  return updateObject(state, {
    verifiedassets: action.verifiedassets,
    error: null,
    loading: false
  });
};

const getVerifiedAssetListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUnverifiedAssetListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnverifiedAssetListSuccess = (state, action) => {
  return updateObject(state, {
    unverifiedassets: action.unverifiedassets,
    error: null,
    loading: false
  });
};

const getUnverifiedAssetListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createUnverifiedAssetStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createUnverifiedAssetSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createUnverifiedAssetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUnverifiedAssetDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnverifiedAssetDetailSuccess = (state, action) => {
  return updateObject(state, {
    unverifiedasset: action.unverifiedasset,
    error: null,
    loading: false
  });
};

const getUnverifiedAssetDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function assets(state = initialState, action){
  switch(action.type){
    case GET_ASSETS_START:
      return getAssetListStart(state, action);
    case GET_ASSETS_SUCCESS:
      return getAssetListSuccess(state, action);
    case GET_ASSETS_FAIL:
      return getAssetListFail(state, action);
    case CREATE_ASSET_START:
      return createAssetStart(state, action);
    case CREATE_ASSET_SUCCESS:
      return createAssetSuccess(state, action);
    case CREATE_ASSET_FAIL:
      return createAssetFail(state, action);
    case GET_ASSET_START:
      return getAssetDetailStart(state, action);
    case GET_ASSET_SUCCESS:
      return getAssetDetailSuccess(state, action);
    case GET_ASSET_FAIL:
      return getAssetDetailFail(state, action);
    case EDIT_ASSET:
      const aarrayList = state.assets;
      aarrayList.splice(aarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        assets: aarrayList,
      };
    case GET_UNVERIFIED_ASSETS_START:
      return getUnverifiedAssetListStart(state, action);
    case GET_UNVERIFIED_ASSETS_SUCCESS:
      return getUnverifiedAssetListSuccess(state, action);
    case GET_UNVERIFIED_ASSETS_FAIL:
      return getUnverifiedAssetListFail(state, action);
    case CREATE_UNVERIFIED_ASSET_START:
      return createUnverifiedAssetStart(state, action);
    case CREATE_UNVERIFIED_ASSET_SUCCESS:
      return createUnverifiedAssetSuccess(state, action);
    case CREATE_UNVERIFIED_ASSET_FAIL:
      return createUnverifiedAssetFail(state, action);
    case GET_UNVERIFIED_ASSET_START:
      return getUnverifiedAssetDetailStart(state, action);
    case GET_UNVERIFIED_ASSET_SUCCESS:
      return getUnverifiedAssetDetailSuccess(state, action);
    case GET_UNVERIFIED_ASSET_FAIL:
      return getUnverifiedAssetDetailFail(state, action);
    case EDIT_UNVERIFIED_ASSET:
      const arrayList = state.unverifiedassets;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        unverifiedassets: arrayList,
      };
    case GET_VERIFIED_ASSETS_START:
      return getVerifiedAssetListStart(state, action);
    case GET_VERIFIED_ASSETS_SUCCESS:
      return getVerifiedAssetListSuccess(state, action);
    case GET_VERIFIED_ASSETS_FAIL:
      return getVerifiedAssetListFail(state, action);
    case GET_DELETED_ASSETS_START:
      return getDeletedAssetListStart(state, action);
    case GET_DELETED_ASSETS_SUCCESS:
      return getDeletedAssetListSuccess(state, action);
    case GET_DELETED_ASSETS_FAIL:
      return getDeletedAssetListFail(state, action);
    case VERIFY_ASSET_START:
      return verifyAssetStart(state, action);
    case VERIFY_ASSET_SUCCESS:
      return verifyAssetSuccess(state, action);
    case VERIFY_ASSET_FAIL:
      return verifyAssetFail(state, action);
    case DELETE_ASSET_START:
      return deleteAssetStart(state, action);
    case DELETE_ASSET_SUCCESS:
      return deleteAssetSuccess(state, action);
    case DELETE_ASSET_FAIL:
      return deleteAssetFail(state, action);
    default:
      return state;
  }
}
