import axios from 'axios'
import {
    GET_INVENTORY_SETTINGS_START,
    GET_INVENTORY_SETTINGS_SUCCESS,
    GET_INVENTORY_SETTINGS_FAIL,
    GET_INVENTORY_SETTING_START,
    GET_INVENTORY_SETTING_SUCCESS,
    GET_INVENTORY_SETTING_FAIL,
    CREATE_INVENTORY_SETTING_START,
    CREATE_INVENTORY_SETTING_SUCCESS,
    CREATE_INVENTORY_SETTING_FAIL,
    EDIT_INVENTORY_SETTING,
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    CREATE_CATEGORY_START,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    EDIT_CATEGORY,
    GET_DELETED_CATEGORIES_START,
    GET_DELETED_CATEGORIES_SUCCESS,
    GET_DELETED_CATEGORIES_FAIL,
    DELETE_CATEGORY_START,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,

} from '../../types/inventoryConfigurationTypes';

import {
    inventorysettingsURL,
    categoriesURL,
    deletedcategoriesURL,
} from '../../constants';
import { returnErrors } from '../messages';


//storage medias
const getInventorySettingListStart = () => {
    return {
      type: GET_INVENTORY_SETTINGS_START
    };
};
  
const getInventorySettingListSuccess = inventorysettings => {
    return {
        type: GET_INVENTORY_SETTINGS_SUCCESS,
        inventorysettings
    };
};

const getInventorySettingListFail = error => {
    return {
        type: GET_INVENTORY_SETTINGS_FAIL,
        error: error
    };
};

const getInventorySettingDetailStart = () => {
    return {
        type: GET_INVENTORY_SETTING_START
    };
};

const getInventorySettingDetailSuccess = inventorysetting => {
    return {
        type: GET_INVENTORY_SETTING_SUCCESS,
        inventorysetting
    };
};

const getInventorySettingDetailFail = error => {
  return {
    type: GET_INVENTORY_SETTING_FAIL,
    error: error
  };
};

const createInventorySettingStart = () => {
    return {
        type: CREATE_INVENTORY_SETTING_START
    };
};


const createInventorySettingSuccess = inventorysetting => {
    return {
        type: CREATE_INVENTORY_SETTING_SUCCESS,
        inventorysetting
    };
};

const createInventorySettingFail = error => {
    return {
        type: CREATE_INVENTORY_SETTING_FAIL,
        error: error
    };
};



//storage medias
const getCategoryListStart = () => {
    return {
      type: GET_CATEGORIES_START
    };
};
  
const getCategoryListSuccess = categories => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        categories
    };
};

const getCategoryListFail = error => {
    return {
        type: GET_CATEGORIES_FAIL,
        error: error
    };
};


const createCategoryStart = () => {
    return {
        type: CREATE_CATEGORY_START
    };
};


const createCategorySuccess = category => {
    return {
        type: CREATE_CATEGORY_SUCCESS,
        category
    };
};

const createCategoryFail = error => {
    return {
        type: CREATE_CATEGORY_FAIL,
        error: error
    };
};



const deleteCategoryStart = () => {
    return {
        type: DELETE_CATEGORY_START
    };
};


const deleteCategorySuccess = category => {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        category
    };
};

const deleteCategoryFail = error => {
    return {
        type: DELETE_CATEGORY_FAIL,
        error: error
    };
};


const getDeletedCategoryListStart = () => {
    return {
      type: GET_DELETED_CATEGORIES_START
    };
};
  
const getDeletedCategoryListSuccess = deletedcategories => {
    return {
        type: GET_DELETED_CATEGORIES_SUCCESS,
        deletedcategories
    };
};

const getDeletedCategoryListFail = error => {
    return {
        type: GET_DELETED_CATEGORIES_FAIL,
        error: error
    };
};




export const getInventorySettings = (token) => {
    return dispatch => {
        dispatch(getInventorySettingListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(inventorysettingsURL, headers)
          .then(res => {
            const inventorysettings = res.data;
            dispatch(getInventorySettingListSuccess(inventorysettings));
            })
          .catch(err => {
            dispatch(getInventorySettingListFail(err));
          });
      };
};


export const getInventorySetting = (id, token) => {
    return dispatch => {
        dispatch(getInventorySettingDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${inventorysettingsURL}${id}`, headers)
          .then(res => {
            const inventorysetting = res.data;
            dispatch(getInventorySettingDetailSuccess(inventorysetting));
            })
          .catch(err => {
            dispatch(getInventorySettingDetailFail(err));
          });
      };
};
  

export const addInventorySetting = (configuration, token) => {
    return dispatch => {
        dispatch(createInventorySettingStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(inventorysettingsURL, configuration, headers)
          .then(res => {
            dispatch(createInventorySettingSuccess(configuration));
          })
          .catch(err => {
            dispatch(createInventorySettingFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};
  

export const editInventorySetting = (id, configuration, token) => dispatch => {
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
        };
      JSON.stringify(id, null, 3)
      axios.patch(`${inventorysettingsURL}${id}/`, configuration, headers)
      .then(res => {
          dispatch({
              type: EDIT_INVENTORY_SETTING,
              payload: res.data
          });
      }).catch(err => console.log(err))
}


export const getCategories = (token) => {
    return dispatch => {
        dispatch(getCategoryListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(categoriesURL, headers)
          .then(res => {
            const categories = res.data;
            dispatch(getCategoryListSuccess(categories));
            })
          .catch(err => {
            dispatch(getCategoryListFail(err));
          });
      };
};



  

export const addCategory = (category, token) => {
    return dispatch => {
        dispatch(createCategoryStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(categoriesURL, category, headers)
          .then(res => {
            dispatch(createCategorySuccess(category));
          })
          .catch(err => {
            dispatch(createCategoryFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};
  

export const editCategory = (id, category, token) => dispatch => {
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
        };
      JSON.stringify(id, null, 3)
      axios.patch(`${categoriesURL}${id}/`, category, headers)
      .then(res => {
          dispatch({
              type: EDIT_CATEGORY,
              payload: res.data
          });
      }).catch(err => console.log(err))
}



export const deleteCategory = (id, category, token) => {
    return dispatch => {
        dispatch(deleteCategoryStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${categoriesURL}${id}/remove/`, category, headers)
          .then(res => {
            dispatch(deleteCategorySuccess(category));
          })
          .catch(err => {
            dispatch(deleteCategoryFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
    };
};




export const getDeletedCategories = (token) => {
    return dispatch => {
        dispatch(getDeletedCategoryListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(deletedcategoriesURL, headers)
          .then(res => {
            const deletedcategories = res.data;
            dispatch(getDeletedCategoryListSuccess(deletedcategories));
            })
          .catch(err => {
            dispatch(getDeletedCategoryListFail(err));
          });
      };
};