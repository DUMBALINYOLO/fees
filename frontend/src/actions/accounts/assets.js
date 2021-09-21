import axios from 'axios';
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
    GET_DELETED_ASSETS_START,
    GET_DELETED_ASSETS_SUCCESS,
    GET_DELETED_ASSETS_FAIL,
    GET_VERIFIED_ASSETS_SUCCESS,
    GET_VERIFIED_ASSETS_FAIL,
    GET_VERIFIED_ASSET_START,
    GET_VERIFIED_ASSET_SUCCESS,
    GET_VERIFIED_ASSET_FAIL,
    GET_VERIFIED_ASSETS_START,
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
    VERIFY_ASSET_SUCCESS,
    VERIFY_ASSET_FAIL,
    VERIFY_ASSET_START,
    DELETE_ASSET_SUCCESS,
    DELETE_ASSET_FAIL,
    DELETE_ASSET_START,
    } from '../../types/assetTypes';




import { 
  assetsURL, 
  deletedassetsURL,
  verifiedassetsURL,
  unverifiedassetsURL
} from '../../constants';
import { returnErrors } from '../messages';


const verifyAssetStart = () => {
  return {
    type: VERIFY_ASSET_START
  };
};

const verifyAssetSuccess = asset => {
  return {
    type: VERIFY_ASSET_SUCCESS,
    asset
  };
};

const verifyAssetFail = error => {
  return {
    type: VERIFY_ASSET_FAIL,
    error: error
  };
};


const deleteAssetStart = () => {
  return {
    type: DELETE_ASSET_START
  };
};

const deleteAssetSuccess = asset => {
  return {
    type: DELETE_ASSET_SUCCESS,
    asset
  };
};

const deleteAssetFail = error => {
  return {
    type: DELETE_ASSET_FAIL,
    error: error
  };
};

//assets
const getAssetListStart = () => {
  return {
    type: GET_ASSETS_START
  };
};

const getAssetListSuccess = assets => {
  return {
    type: GET_ASSETS_SUCCESS,
    assets
  };
};

const getAssetListFail = error => {
  return {
    type: GET_ASSETS_FAIL,
    error: error
  };
};

const createAssetStart = () => {
  return {
    type: CREATE_ASSET_START
  };
};

const createAssetSuccess = asset => {
  return {
    type: CREATE_ASSET_SUCCESS,
    asset
  };
};

const createAssetFail = error => {
  return {
    type: CREATE_ASSET_FAIL,
    error: error
  };
};

const getAssetDetailStart = () => {
  return {
    type: GET_ASSET_START
  };
};

const getAssetDetailSuccess = asset => {
  return {
    type: GET_ASSET_SUCCESS,
    asset
  };
};

const getAssetDetailFail = error => {
  return {
    type: GET_ASSET_FAIL,
    error: error
  };
};

const getDeletedAssetListStart = () => {
  return {
    type: GET_DELETED_ASSETS_START
  };
};

const getDeletedAssetListSuccess = deletedassets => {
  return {
    type: GET_DELETED_ASSETS_SUCCESS,
    deletedassets
  };
};

const getDeletedAssetListFail = error => {
  return {
    type: GET_DELETED_ASSETS_FAIL,
    error: error
  };
};

//verified assets
const getVerifiedAssetListStart = () => {
  return {
    type: GET_VERIFIED_ASSETS_START
  };
};

const getVerifiedAssetListSuccess = verifiedassets => {
  return {
    type: GET_VERIFIED_ASSETS_SUCCESS,
    verifiedassets
  };
};

const getVerifiedAssetListFail = error => {
  return {
    type: GET_VERIFIED_ASSETS_FAIL,
    error: error
  };
};

const getVerifiedAssetDetailStart = () => {
  return {
    type: GET_VERIFIED_ASSET_START
  };
};

const getVerifiedAssetDetailSuccess = verifiedasset => {
  return {
    type: GET_VERIFIED_ASSET_SUCCESS,
    verifiedasset
  };
};

const getVerifiedAssetDetailFail = error => {
  return {
    type: GET_VERIFIED_ASSET_FAIL,
    error: error
  };
};

//unverified assets
const getUnverifiedAssetListStart = () => {
  return {
    type: GET_UNVERIFIED_ASSETS_START
  };
};

const getUnverifiedAssetListSuccess = unverifiedassets => {
  return {
    type: GET_UNVERIFIED_ASSETS_SUCCESS,
    unverifiedassets
  };
};

const getUnverifiedAssetListFail = error => {
  return {
    type: GET_UNVERIFIED_ASSETS_FAIL,
    error: error
  };
};

const createUnverifiedAssetStart = () => {
  return {
    type: CREATE_UNVERIFIED_ASSET_START
  };
};

const createUnverifiedAssetSuccess = unverifiedasset => {
  return {
    type: CREATE_UNVERIFIED_ASSET_SUCCESS,
    unverifiedasset
  };
};

const createUnverifiedAssetFail = error => {
  return {
    type: CREATE_UNVERIFIED_ASSET_FAIL,
    error: error
  };
};

const getUnverifiedAssetDetailStart = () => {
  return {
    type: GET_UNVERIFIED_ASSET_START
  };
};

const getUnverifiedAssetDetailSuccess = unverifiedasset => {
  return {
    type: GET_UNVERIFIED_ASSET_SUCCESS,
    unverifiedasset
  };
};

const getUnverifiedAssetDetailFail = error => {
  return {
    type: GET_UNVERIFIED_ASSET_FAIL,
    error: error
  };
};

export const getAssets = (token) => {
  return dispatch => {
      dispatch(getAssetListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(assetsURL, headers)
        .then(res => {
          const assets = res.data;
          dispatch(getAssetListSuccess(assets));
          })
        .catch(err => {
          dispatch(getAssetListStart(err));
        });
    };
};

export const getAsset = (id, token) => {
  return dispatch => {
      dispatch(getAssetDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${assetsURL}${id}`, headers)
        .then(res => {
          const asset = res.data;
          dispatch(getAssetDetailSuccess(asset));
          })
        .catch(err => {
          dispatch(getAssetDetailFail(err));
        });
    };
};

export const addAsset = (asset, token) => {
  return dispatch => {
      dispatch(createAssetStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(assetsURL, asset, headers)
        .then(res => {
          dispatch(createAssetSuccess(asset));
        })
        .catch(err => {
          dispatch(createAssetFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const editAsset = (id, asset, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${assetsURL}${id}/`, asset, headers)
    .then(res => {
        dispatch({
            type: EDIT_ASSET,
            payload: res.data
        });
    }).catch(err => console.log(err))
}

export const getDeletedAssets = (token) => {
  return dispatch => {
      dispatch(getDeletedAssetListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(deletedassetsURL, headers)
        .then(res => {
          const deletedassets = res.data;
          dispatch(getDeletedAssetListSuccess(deletedassets));
          })
        .catch(err => {
          dispatch(getDeletedAssetListStart(err));
        });
    };
};

export const getVerifiedAssets = (token) => {
  return dispatch => {
      dispatch(getVerifiedAssetListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(verifiedassetsURL, headers)
        .then(res => {
          const verifiedassets = res.data;
          dispatch(getVerifiedAssetListSuccess(verifiedassets));
          })
        .catch(err => {
          dispatch(getVerifiedAssetListStart(err));
        });
    };
};

export const getVerifiedAsset = (id, token) => {
  return dispatch => {
      dispatch(getVerifiedAssetDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${verifiedassetsURL}${id}`, headers)
        .then(res => {
          const verifiedasset = res.data;
          dispatch(getVerifiedAssetDetailSuccess(verifiedasset));
          })
        .catch(err => {
          dispatch(getVerifiedAssetDetailFail(err));
        });
    };
};

export const getUnverifiedAssets = (token) => {
  return dispatch => {
      dispatch(getUnverifiedAssetListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(unverifiedassetsURL, headers)
        .then(res => {
          const unverifiedassets = res.data;
          dispatch(getUnverifiedAssetListSuccess(unverifiedassets));
          })
        .catch(err => {
          dispatch(getUnverifiedAssetListStart(err));
        });
    };
};

export const getUnverifiedAsset = (id, token) => {
  return dispatch => {
      dispatch(getUnverifiedAssetDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${unverifiedassetsURL}${id}`, headers)
        .then(res => {
          const unverifiedasset = res.data;
          dispatch(getUnverifiedAssetDetailSuccess(unverifiedasset));
          })
        .catch(err => {
          dispatch(getUnverifiedAssetDetailFail(err));
        });
    };
};

export const addUnverifiedAsset = (unverifiedasset, token) => {
  return dispatch => {
      dispatch(createUnverifiedAssetStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(unverifiedassetsURL, unverifiedasset, headers)
        .then(res => {
          dispatch(createUnverifiedAssetSuccess(unverifiedasset));
        })
        .catch(err => {
          dispatch(createUnverifiedAssetFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editUnverifiedAsset = (id, unverifiedasset, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${unverifiedassetsURL}${id}/`, unverifiedasset, headers)
    .then(res => {
        dispatch({
            type: EDIT_UNVERIFIED_ASSET,
            payload: res.data
        });
    }).catch(err => console.log(err))
}


export const verifyAsset = (id, asset, token) => {
  return dispatch => {
      dispatch(verifyAssetStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(`${unverifiedassetsURL}${id}/verify_asset/`, asset, headers)
        .then(res => {
          dispatch(verifyAssetSuccess(asset));
        })
        .catch(err => {
          dispatch(verifyAssetFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const deleteAsset = (id, asset, token) => {
  return dispatch => {
      dispatch(deleteAssetStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(`${verifiedassetsURL}${id}/verify_asset/`, asset, headers)
        .then(res => {
          dispatch(deleteAssetSuccess(asset));
        })
        .catch(err => {
          dispatch(deleteAssetFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};