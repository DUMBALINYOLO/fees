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
import { updateObject } from "../../utility";


const initialState ={
    inventorysettings: [],
    inventorysetting: {},
    categories: [],
    deletedcategories: [],
    loading: false,
    error: null,
}



const getInventorySettingListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getInventorySettingListSuccess = (state, action) => {
    return updateObject(state, {
        inventorysettings: action.inventorysettings,
        error: null,
        loading: true
      });
};

const getInventorySettingListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getInventorySettingDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getInventorySettingDetailSuccess = (state, action) => {
    return updateObject(state, {
        inventorysetting: action.inventorysetting,
        error: null,
        loading: true
      });
};

const getInventorySettingDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createInventorySettingStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createInventorySettingSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createInventorySettingFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};



//storage medias
const getCategoryListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getCategoryListSuccess = (state, action) => {
    return updateObject(state, {
        categories: action.categories,
        error: null,
        loading: true
      });
};

const getCategoryListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createCategoryStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createCategorySuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createCategoryFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};



const deleteCategoryStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const deleteCategorySuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const deleteCategoryFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const getDeletedCategoryListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getDeletedCategoryListSuccess = (state, action) => {
    return updateObject(state, {
        deletedcategories: action.deletedcategories,
        error: null,
        loading: true
      });
};

const getDeletedCategoryListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};




export default function suppliers(state = initialState, action){
    switch(action.type){
        case GET_INVENTORY_SETTINGS_START:
            return getInventorySettingListStart(state, action);
        case GET_INVENTORY_SETTINGS_SUCCESS:
            return getInventorySettingListSuccess(state, action);
        case GET_INVENTORY_SETTINGS_FAIL:
            return getInventorySettingListFail(state, action);
        case GET_INVENTORY_SETTING_START:
            return getInventorySettingDetailStart(state, action);
        case GET_INVENTORY_SETTING_SUCCESS:
            return getInventorySettingDetailSuccess(state, action);
        case GET_INVENTORY_SETTING_FAIL:
            return getInventorySettingDetailFail(state, action);
        case CREATE_INVENTORY_SETTING_START:
            return createInventorySettingStart(state, action);
        case CREATE_INVENTORY_SETTING_SUCCESS:
            return createInventorySettingSuccess(state, action);
        case CREATE_INVENTORY_SETTING_FAIL:
            return createInventorySettingFail(state, action);
        case CREATE_CATEGORY_START:
            return createCategoryStart(state, action);
        case CREATE_CATEGORY_SUCCESS:
            return createCategorySuccess(state, action);
        case CREATE_CATEGORY_FAIL:
            return createCategoryFail(state, action);
        case DELETE_CATEGORY_START:
            return deleteCategoryStart(state, action);
        case DELETE_CATEGORY_SUCCESS:
            return deleteCategorySuccess(state, action);
        case DELETE_CATEGORY_FAIL:
            return deleteCategoryFail(state, action);

        case GET_CATEGORIES_START:
            return getCategoryListStart(state, action);
        case GET_CATEGORIES_SUCCESS:
            return getCategoryListSuccess(state, action);
        case GET_CATEGORIES_FAIL:
            return getCategoryListFail(state, action);
        case GET_DELETED_CATEGORIES_START:
            return getDeletedCategoryListStart(state, action);
        case GET_DELETED_CATEGORIES_SUCCESS:
            return getDeletedCategoryListSuccess(state, action);
        case GET_DELETED_CATEGORIES_FAIL:
            return getDeletedCategoryListFail(state, action);    
        
        case EDIT_CATEGORY:
            const sarrayList = state.categories;
            sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                categories: sarrayList,
            };
        case EDIT_INVENTORY_SETTING:
            const asarrayList = state.inventorysettings;
            asarrayList.splice(asarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                inventorysettings: asarrayList,
            };
        
        
        default:
            return state;
    }
}
