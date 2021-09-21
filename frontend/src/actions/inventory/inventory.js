import axios from 'axios';
import {
    GET_INVENTORY_ITEMS_START,
    GET_INVENTORY_ITEMS_SUCCESS,
    GET_INVENTORY_ITEMS_FAIL,
    GET_CONSUMABLES_START,
    GET_CONSUMABLES_SUCCESS,
    GET_CONSUMABLES_FAIL,
    GET_CONSUMABLE_START,
    GET_CONSUMABLE_SUCCESS,
    GET_CONSUMABLE_FAIL,
    CREATE_CONSUMABLE_START,
    CREATE_CONSUMABLE_SUCCESS,
    CREATE_CONSUMABLE_FAIL,
    EDIT_CONSUMABLE,
    GET_RAW_MATERIALS_START,
    GET_RAW_MATERIALS_SUCCESS,
    GET_RAW_MATERIALS_FAIL,
    GET_RAW_MATERIAL_START,
    GET_RAW_MATERIAL_SUCCESS,
    GET_RAW_MATERIAL_FAIL,
    CREATE_RAW_MATERIAL_START,
    CREATE_RAW_MATERIAL_SUCCESS,
    CREATE_RAW_MATERIAL_FAIL,
    EDIT_RAW_MATERIAL,

} from '../../types/inventoryTypes';
import { returnErrors } from '../messages';
import { 
  inventoryitemsURL,
  consumablesURL,
  rawmaterialsURL
  
} from '../../constants';

const getInventoryItemListStart = () => {
    return {
      type: GET_INVENTORY_ITEMS_START
    };
};
  
const getInventoryItemListSuccess = inventoryitems => {
    return {
        type: GET_INVENTORY_ITEMS_SUCCESS,
        inventoryitems
    };
};

const getInventoryItemListFail = error => {
    return {
        type: GET_INVENTORY_ITEMS_FAIL,
        error: error
    };
};


const getConsumableListStart = () => {
    return {
      type: GET_CONSUMABLES_START
    };
};
  
const getConsumableListSuccess = consumables => {
    return {
        type: GET_CONSUMABLES_SUCCESS,
        consumables
    };
};

const getConsumableListFail = error => {
    return {
        type: GET_CONSUMABLES_FAIL,
        error: error
    };
};

const getConsumableDetailStart = () => {
    return {
        type: GET_CONSUMABLE_START
    };
};

const getConsumableDetailSuccess = consumable => {
    return {
        type: GET_CONSUMABLE_SUCCESS,
        consumable
    };
};

const getConsumableDetailFail = error => {
  return {
    type: GET_CONSUMABLE_FAIL,
    error: error
  };
};




const getRawMaterialListStart = () => {
    return {
      type: GET_RAW_MATERIALS_START
    };
};
  
const getRawMaterialListSuccess = rawmaterials => {
    return {
        type: GET_RAW_MATERIALS_SUCCESS,
        rawmaterials
    };
};

const getRawMaterialListFail = error => {
    return {
        type: GET_RAW_MATERIALS_FAIL,
        error: error
    };
};

const getRawMaterialDetailStart = () => {
    return {
        type: GET_RAW_MATERIAL_START
    };
};

const getRawMaterialDetailSuccess = rawmaterial => {
    return {
        type: GET_RAW_MATERIAL_SUCCESS,
        rawmaterial
    };
};

const getRawMaterialDetailFail = error => {
  return {
    type: GET_RAW_MATERIAL_FAIL,
    error: error
  };
};


const createConsumableStart = () => {
    return {
        type: CREATE_CONSUMABLE_START
    };
};


const createConsumableSuccess = stocktake => {
    return {
        type: CREATE_CONSUMABLE_SUCCESS,
        stocktake
    };
};

const createConsumableFail = error => {
    return {
        type: CREATE_CONSUMABLE_FAIL,
        error: error
    };
};


const createRawMaterialStart = () => {
    return {
        type: CREATE_RAW_MATERIAL_START
    };
};


const createRawMaterialSuccess = stocktake => {
    return {
        type: CREATE_RAW_MATERIAL_SUCCESS,
        stocktake
    };
};

const createRawMaterialFail = error => {
    return {
        type: CREATE_RAW_MATERIAL_FAIL,
        error: error
    };
};


export const getInventoryItems = (token) => {
    return dispatch => {
      dispatch(getInventoryItemListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(inventoryitemsURL, headers)
        .then(res => {
          const inventoryitems = res.data;
          dispatch(getInventoryItemListSuccess(inventoryitems));
          })
        .catch(err => {
          dispatch(getInventoryItemListFail(err));
      });
    };
};



//active suppliers
export const getConsumables = (token) => {
    return dispatch => {
      dispatch(getConsumableListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(consumablesURL, headers)
        .then(res => {
          const consumables = res.data;
          dispatch(getConsumableListSuccess(consumables));
          })
        .catch(err => {
          dispatch(getConsumableListFail(err));
      });
    };
  };
  
  export const getConsumable = (id, token) => {
    return dispatch => {
      dispatch(getConsumableDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${consumablesURL}${id}`, headers)
        .then(res => {
          const consumable = res.data;
          dispatch(getConsumableDetailSuccess(consumable));
          })
        .catch(err => {
          dispatch(getConsumableDetailFail(err));
      });
    };
  };
  
  export const addConsumable = (consumable, token) => {
    return dispatch => {
      dispatch(createConsumableStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(consumablesURL, consumable, headers)
        .then(res => {
          dispatch(createConsumableSuccess(consumable));
        })
        .catch(err => {
          dispatch(createConsumableFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};  
  
export const editConsumable = (id, consumable, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${consumablesURL}${id}/`, consumable, headers)
    .then(res => {
      dispatch({
          type: EDIT_CONSUMABLE,
          payload: res.data
      });
    }).catch(err => console.log(err))
}





export const getRawMaterials = (token) => {
    return dispatch => {
      dispatch(getRawMaterialListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(rawmaterialsURL, headers)
        .then(res => {
          const rawmaterials = res.data;
          dispatch(getRawMaterialListSuccess(rawmaterials));
          })
        .catch(err => {
          dispatch(getRawMaterialListFail(err));
      });
    };
};

  
export const getRawMaterial = (id, token) => {
    return dispatch => {
      dispatch(getRawMaterialDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${rawmaterialsURL}${id}`, headers)
        .then(res => {
          const rawmaterial = res.data;
          dispatch(getRawMaterialDetailSuccess(rawmaterial));
          })
        .catch(err => {
          dispatch(getRawMaterialDetailFail(err));
      });
    };
};
  


export const addRawMaterial = (rawmaterial, token) => {
    return dispatch => {
      dispatch(createRawMaterialStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(rawmaterialsURL, rawmaterial, headers)
        .then(res => {
          dispatch(createRawMaterialSuccess(rawmaterial));
        })
        .catch(err => {
          dispatch(createRawMaterialFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};  


export const editRawMaterial = (id, rawmaterial, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${rawmaterialsURL}${id}/`, rawmaterial, headers)
    .then(res => {
      dispatch({
          type: EDIT_RAW_MATERIAL,
          payload: res.data
      });
    }).catch(err => console.log(err))
}