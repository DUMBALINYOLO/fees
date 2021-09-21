import {
    GET_WAREHOUSES_START,
    GET_WAREHOUSES_SUCCESS,
    GET_WAREHOUSES_FAIL,
    GET_WAREHOUSE_START,
    GET_WAREHOUSE_SUCCESS,
    GET_WAREHOUSE_FAIL,
    CREATE_WAREHOUSE_START,
    CREATE_WAREHOUSE_SUCCESS,
    CREATE_WAREHOUSE_FAIL,
    EDIT_WAREHOUSE,
    GET_DELETED_WAREHOUSES_START,
    GET_DELETED_WAREHOUSES_SUCCESS,
    GET_DELETED_WAREHOUSES_FAIL,
    GET_DELETED_WAREHOUSE_START,
    GET_DELETED_WAREHOUSE_SUCCESS, 
    DELETE_WAREHOUSE_START,
    DELETE_WAREHOUSE_SUCCESS,
    DELETE_WAREHOUSE_FAIL,
    GET_DELETED_WAREHOUSE_FAIL,
    GET_STORAGE_MEDIAS_START,
    GET_STORAGE_MEDIAS_SUCCESS,
    GET_STORAGE_MEDIAS_FAIL,
    CREATE_STORAGE_MEDIA_START,
    CREATE_STORAGE_MEDIA_SUCCESS,
    CREATE_STORAGE_MEDIA_FAIL,
    GET_STORAGE_MEDIA_START,
    GET_STORAGE_MEDIA_SUCCESS,
    GET_STORAGE_MEDIA_FAIL,
    EDIT_STORAGE_MEDIA,
    GET_WAREHOUSE_ITEMS_START,
    GET_WAREHOUSE_ITEMS_SUCCESS,
    GET_WAREHOUSE_ITEMS_FAIL,
    CREATE_WAREHOUSE_ITEM_START,
    CREATE_WAREHOUSE_ITEM_SUCCESS,
    CREATE_WAREHOUSE_ITEM_FAIL,
} from '../../types/warehouseTypes';
import { updateObject } from "../../utility";

const initialState = {
    warehouses: [],
    warehouse: {},
    deletedwarehouses: [],
    deletedwarehouse: {},
    storagemedias: [],
    warehouseitems: [],
    storagemedia: {},
    loading: false,
    error: null,
}


const getWarehouseItemListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getWarehouseItemListSuccess =(state, action) => {
    return updateObject(state, {
        warehouseitems: action.warehouseitems,
        error: null,
        loading: true
      });
};
  
const getWarehouseItemListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const createWarehouseItemStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createWarehouseItemSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const createWarehouseItemFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  


const getWarehouseListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getWarehouseListSuccess = (state, action) => {
    return updateObject(state, {
        warehouses: action.warehouses,
        error: null,
        loading: false
    });
};
  
const getWarehouseListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};
  
const createWarehouseStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const createWarehouseSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const createWarehouseFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};
  
const getWarehouseDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getWarehouseDetailSuccess = (state, action) => {
    return updateObject(state, {
      warehouse: action.warehouse,
      error: null,
      loading: false
    });
};
  
const getWarehouseDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};

const deleteWarehouseStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const deleteWarehouseSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const deleteWarehouseFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};

const getDeletedWarehouseListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getDeletedWarehouseListSuccess = (state, action) => {
    return updateObject(state, {
        deletedwarehouses: action.deletedwarehouses,
        error: null,
        loading: false
    });
};
  
const getDeletedWarehouseListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};


 
const getDeletedWarehouseDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getDeletedWarehouseDetailSuccess = (state, action) => {
    return updateObject(state, {
      deletedwarehouse: action.deletedwarehouse,
      error: null,
      loading: false
    });
};
  
const getDeletedWarehouseDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};



const getStorageMediaListStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getStorageMediaListSuccess = (state, action) => {
    return updateObject(state, {
        storagemedias: action.storagemedias,
        error: null,
        loading: false
    });
};
  
const getStorageMediaListFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};
  
const createStorageMediaStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const createStorageMediaSuccess = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
  
const createStorageMediaFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};
  
const getStorageMediaDetailStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};
  
const getStorageMediaDetailSuccess = (state, action) => {
    return updateObject(state, {
      storagemedia: action.storagemedia,
      error: null,
      loading: false
    });
};
  
const getStorageMediaDetailFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
};
  



export default function creditnotes(state = initialState, action){
    switch(action.type){
        case GET_WAREHOUSES_START:
            return getWarehouseListStart(state, action);
        case GET_WAREHOUSES_SUCCESS:
            return getWarehouseListSuccess(state, action);
        case GET_WAREHOUSES_FAIL:
            return getWarehouseListFail(state, action);
        case GET_WAREHOUSE_START:
            return getWarehouseDetailStart(state, action);
        case GET_WAREHOUSE_SUCCESS:
            return getWarehouseDetailSuccess(state, action);
        case GET_WAREHOUSE_FAIL:
            return getWarehouseDetailFail(state, action);
        case GET_DELETED_WAREHOUSES_START:
            return getDeletedWarehouseListStart(state, action);
        case GET_DELETED_WAREHOUSES_SUCCESS:
            return getDeletedWarehouseListSuccess(state, action);
        case GET_DELETED_WAREHOUSES_FAIL:
            return getDeletedWarehouseListFail(state, action);
        case GET_DELETED_WAREHOUSE_START:
            return getDeletedWarehouseDetailStart(state, action);
        case GET_DELETED_WAREHOUSE_SUCCESS:
            return getDeletedWarehouseDetailSuccess(state, action);
        case GET_DELETED_WAREHOUSE_FAIL:
            return getDeletedWarehouseDetailFail(state, action);
        case CREATE_WAREHOUSE_START:
            return createWarehouseStart(state, action);
        case CREATE_WAREHOUSE_SUCCESS:
            return createWarehouseSuccess(state, action);
        case CREATE_WAREHOUSE_FAIL:
            return createWarehouseFail(state, action);
        case DELETE_WAREHOUSE_START:
            return deleteWarehouseStart(state, action);
        case DELETE_WAREHOUSE_SUCCESS:
            return deleteWarehouseSuccess(state, action);
        case DELETE_WAREHOUSE_FAIL:
            return deleteWarehouseFail(state, action);
        case GET_STORAGE_MEDIAS_START:
            return getStorageMediaListStart(state, action);
        case GET_STORAGE_MEDIAS_SUCCESS:
            return getStorageMediaListSuccess(state, action);
        case GET_STORAGE_MEDIAS_FAIL:
            return getStorageMediaListFail(state, action);
        case GET_STORAGE_MEDIA_START:
            return getStorageMediaDetailStart(state, action);
        case GET_STORAGE_MEDIA_SUCCESS:
            return getStorageMediaDetailSuccess(state, action);
        case GET_STORAGE_MEDIA_FAIL:
            return getStorageMediaDetailFail(state, action);
        case CREATE_STORAGE_MEDIA_START:
            return createStorageMediaStart(state, action);
        case CREATE_STORAGE_MEDIA_SUCCESS:
            return createStorageMediaSuccess(state, action);
        case CREATE_STORAGE_MEDIA_FAIL:
            return createStorageMediaFail(state, action);

        case CREATE_WAREHOUSE_ITEM_START:
            return createWarehouseItemStart(state, action);
        case CREATE_WAREHOUSE_ITEM_SUCCESS:
            return createWarehouseItemSuccess(state, action);
        case CREATE_WAREHOUSE_ITEM_FAIL:
            return createWarehouseItemFail(state, action);
        case GET_WAREHOUSE_ITEMS_START:
            return getWarehouseItemListStart(state, action);
        case GET_WAREHOUSE_ITEMS_SUCCESS:
            return getWarehouseItemListSuccess(state, action);
        case GET_WAREHOUSE_ITEMS_FAIL:
            return getWarehouseItemListFail(state, action);


        case EDIT_WAREHOUSE:
            const arrayList = state.warehouses;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                warehouses: arrayList,
            };

        case EDIT_STORAGE_MEDIA:
            const storagemediaList = state.storagemedias;
            storagemediaList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                storagemedias: storagemediaList,
            };
        
        default:
            return state;
    }
}
