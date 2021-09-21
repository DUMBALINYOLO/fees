import axios from 'axios';
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
  GET_DELETED_WAREHOUSE_FAIL,
  DELETE_WAREHOUSE_START,
  DELETE_WAREHOUSE_SUCCESS,
  DELETE_WAREHOUSE_FAIL,
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
import { returnErrors } from '../messages';
import { 
  warehousesURL,
  deletedwarehousesURL,
  storagemediasURL,
  warehouseitemsURL,
} from '../../constants';

//warehouses
const getWarehouseItemListStart = () => {
  return {
    type: GET_WAREHOUSE_ITEMS_START
  };
};

const getWarehouseItemListSuccess = warehouseitems => {
  return {
      type: GET_WAREHOUSE_ITEMS_SUCCESS,
      warehouseitems
  };
};

const getWarehouseItemListFail = error => {
  return {
      type: GET_WAREHOUSE_ITEMS_FAIL,
      error: error
  };
};

const createWarehouseItemStart = () => {
  return {
      type: CREATE_WAREHOUSE_ITEM_START
  };
};


const createWarehouseItemSuccess = warehouse => {
  return {
      type: CREATE_WAREHOUSE_ITEM_SUCCESS,
      warehouse
  };
};

const createWarehouseItemFail = error => {
  return {
      type: CREATE_WAREHOUSE_ITEM_FAIL,
      error: error
  };
};


const getWarehouseListStart = () => {
    return {
      type: GET_WAREHOUSES_START
    };
};
  
const getWarehouseListSuccess = warehouses => {
    return {
        type: GET_WAREHOUSES_SUCCESS,
        warehouses
    };
};

const getWarehouseListFail = error => {
    return {
        type: GET_WAREHOUSES_FAIL,
        error: error
    };
};

const createWarehouseStart = () => {
    return {
        type: CREATE_WAREHOUSE_START
    };
};


const createWarehouseSuccess = warehouse => {
    return {
        type: CREATE_WAREHOUSE_SUCCESS,
        warehouse
    };
};

const createWarehouseFail = error => {
    return {
        type: CREATE_WAREHOUSE_FAIL,
        error: error
    };
};

const getWarehouseDetailStart = () => {
    return {
        type: GET_WAREHOUSE_START
    };
};

const getWarehouseDetailSuccess = warehouse => {
    return {
        type: GET_WAREHOUSE_SUCCESS,
        warehouse
    };
};

const getWarehouseDetailFail = error => {
    return {
        type: GET_WAREHOUSE_FAIL,
        error: error
    };
};



const getDeletedWarehouseListStart = () => {
    return {
      type: GET_DELETED_WAREHOUSES_START
    };
};
  
const getDeletedWarehouseListSuccess = warehouses => {
    return {
        type: GET_DELETED_WAREHOUSES_SUCCESS,
        warehouses
    };
};

const getDeletedWarehouseListFail = error => {
    return {
        type: GET_DELETED_WAREHOUSES_FAIL,
        error: error
    };
};


const getDeletedWarehouseDetailStart = () => {
    return {
        type: GET_DELETED_WAREHOUSE_START
    };
};

const getDeletedWarehouseDetailSuccess = warehouse => {
    return {
        type: GET_DELETED_WAREHOUSE_SUCCESS,
        warehouse
    };
};

const getDeletedWarehouseDetailFail = error => {
    return {
        type: GET_DELETED_WAREHOUSE_FAIL,
        error: error
    };
};


const deleteWarehouseStart = () => {
    return {
        type: DELETE_WAREHOUSE_START
    };
};


const deleteWarehouseSuccess = warehouse => {
    return {
        type: DELETE_WAREHOUSE_SUCCESS,
        warehouse
    };
};

const deleteWarehouseFail = error => {
    return {
        type: DELETE_WAREHOUSE_FAIL,
        error: error
    };
};



//storage medias
const getStorageMediaListStart = () => {
    return {
      type: GET_STORAGE_MEDIAS_START
    };
};
  
const getStorageMediaListSuccess = storagemedias => {
    return {
        type: GET_STORAGE_MEDIAS_SUCCESS,
        storagemedias
    };
};

const getStorageMediaListFail = error => {
    return {
        type: GET_STORAGE_MEDIAS_FAIL,
        error: error
    };
};

const createStorageMediaStart = () => {
    return {
        type: CREATE_STORAGE_MEDIA_START
    };
};


const createStorageMediaSuccess = storagemedia => {
    return {
        type: CREATE_STORAGE_MEDIA_SUCCESS,
        storagemedia
    };
};

const createStorageMediaFail = error => {
    return {
        type: CREATE_STORAGE_MEDIA_FAIL,
        error: error
    };
};

const getStorageMediaDetailStart = () => {
    return {
        type: GET_STORAGE_MEDIA_START
    };
};

const getStorageMediaDetailSuccess = storagemedia => {
    return {
        type: GET_STORAGE_MEDIA_SUCCESS,
        storagemedia
    };
};

const getStorageMediaDetailFail = error => {
  return {
    type: GET_STORAGE_MEDIA_FAIL,
    error: error
  };
};



export const getWarehouses = (token) => {
    return dispatch => {
        dispatch(getWarehouseListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(warehousesURL, headers)
          .then(res => {
            const warehouses = res.data;
            dispatch(getWarehouseListSuccess(warehouses));
            })
          .catch(err => {
            dispatch(getWarehouseListFail(err));
          });
      };
};


export const getWarehouse = (id, token) => {
    return dispatch => {
        dispatch(getWarehouseDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${warehousesURL}${id}`, headers)
          .then(res => {
            const warehouse = res.data;
            dispatch(getWarehouseDetailSuccess(warehouse));
            })
          .catch(err => {
            dispatch(getWarehouseDetailFail(err));
          });
      };
};
  

export const addWarehouse = (warehouse, token) => {
    return dispatch => {
        dispatch(createWarehouseStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(warehousesURL, warehouse, headers)
          .then(res => {
            dispatch(createWarehouseSuccess(warehouse));
          })
          .catch(err => {
            dispatch(createWarehouseFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};
  

export const editWarehouse = (id, warehouse, token) => dispatch => {
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            'Accept': 'application/json',
        };
      JSON.stringify(id, null, 3)
      axios.patch(`${warehousesURL}${id}/`, warehouse, headers)
      .then(res => {
          dispatch({
              type: EDIT_WAREHOUSE,
              payload: res.data
          });
      }).catch(err => console.log(err))
}



export const getDeletedWarehouses = (token) => {
    return dispatch => {
        dispatch(getDeletedWarehouseListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(deletedwarehousesURL, headers)
          .then(res => {
            const deletedwarehouses = res.data;
            dispatch(getDeletedWarehouseListSuccess(deletedwarehouses));
            })
          .catch(err => {
            dispatch(getDeletedWarehouseListFail(err));
          });
      };
};


export const getDeletedWarehouse = (id, token) => {
    return dispatch => {
        dispatch(getDeletedWarehouseDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${deletedwarehousesURL}${id}`, headers)
          .then(res => {
            const deletedwarehouse = res.data;
            dispatch(getDeletedWarehouseDetailSuccess(deletedwarehouse));
            })
          .catch(err => {
            dispatch(getDeletedWarehouseDetailFail(err));
        });
    };
};



//storage medias
export const getStorageMedias = (id, token) => {
    return dispatch => {
      dispatch(getStorageMediaListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${storagemediasURL}?id=${id}`, headers)
        .then(res => {
          const storagemedias = res.data;
          dispatch(getStorageMediaListSuccess(storagemedias));
          })
        .catch(err => {
          dispatch(getStorageMediaListFail(err));
      });
    };
  };
  
  export const getStorageMedia = (id, token) => {
    return dispatch => {
      dispatch(getStorageMediaDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${storagemediasURL}${id}`, headers)
        .then(res => {
          const storagemedias = res.data;
          dispatch(getStorageMediaDetailSuccess(storagemedias));
          })
        .catch(err => {
          dispatch(getStorageMediaDetailFail(err));
      });
    };
  }; 
  
  export const addStorageMedia = (storagemedia, token) => {
    return dispatch => {
      dispatch(createStorageMediaStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(storagemediasURL, storagemedia, headers)
        .then(res => {
          dispatch(createStorageMediaSuccess(storagemedia));
        })
        .catch(err => {
          dispatch(createStorageMediaFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
  };  
  
  export const editStorageMedia = (id, storagemedia, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${storagemediasURL}${id}/`, storagemedia, headers)
    .then(res => {
      dispatch({
          type: EDIT_STORAGE_MEDIA,
          payload: res.data
      });
    }).catch(err => console.log(err))
}



export const deleteWarehouse = (id, order, token) => {
    return dispatch => {
        dispatch(deleteWarehouseStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${warehousesURL}${id}/remove/`, order, headers)
          .then(res => {
            dispatch(deleteWarehouseSuccess(order));
          })
          .catch(err => {
            dispatch(deleteWarehouseFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
    };
};




export const getWarehouseItems = (id, token) => {
  return dispatch => {
      dispatch(getWarehouseItemListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${warehouseitemsURL}?id=${id}`, headers)
        .then(res => {
          const warehouseitems = res.data;
          dispatch(getWarehouseItemListSuccess(warehouseitems));
          })
        .catch(err => {
          dispatch(getWarehouseItemListFail(err));
        });
    };
};





export const addWarehouseItem = (warehouse, token) => {
  return dispatch => {
      dispatch(createWarehouseItemStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(warehouseitemsURL, warehouse, headers)
        .then(res => {
          dispatch(createWarehouseItemSuccess(warehouse));
        })
        .catch(err => {
          dispatch(createWarehouseItemFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};




  
  
  
