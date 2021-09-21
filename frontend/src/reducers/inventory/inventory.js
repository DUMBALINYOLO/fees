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
import { updateObject } from "../../utility";

const initialState = {
    inventoryitems: [],
    inventoryitem: {},
    consumables: [],
    consumable: {},
    rawmaterials: [],
    rawmaterial: {},
    error: null,
    loading: false,
};



const getInventoryItemListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getInventoryItemListSuccess = (state, action) => {
    return updateObject(state, {
        inventoryitems: action.inventoryitems,
        error: null,
        loading: true
    });
};

const getInventoryItemListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getConsumableListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getConsumableListSuccess = (state, action) => {
    return updateObject(state, {
        consumables: action.consumables,
        error: null,
        loading: true
    });
};

const getConsumableListFail =(state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getConsumableDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getConsumableDetailSuccess = (state, action) => {
    return updateObject(state, {
        consumable: action.consumable,
        error: null,
        loading: true
    });
};

const getConsumableDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};




const getRawMaterialListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getRawMaterialListSuccess = (state, action) => {
    return updateObject(state, {
        rawmaterials: action.rawmaterials,
        error: null,
        loading: true
    });
};

const getRawMaterialListFail =(state, action)=> {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getRawMaterialDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getRawMaterialDetailSuccess = (state, action) => {
    return updateObject(state, {
        rawmaterial: action.rawmaterial,
        error: null,
        loading: true
    });
};

const getRawMaterialDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createConsumableStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createConsumableSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const createConsumableFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createRawMaterialStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createRawMaterialSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const createRawMaterialFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


export default function suppliers(state = initialState, action){
    switch(action.type){
        case GET_CONSUMABLES_START:
            return getConsumableListStart(state, action);
        case GET_CONSUMABLES_SUCCESS:
            return getConsumableListSuccess(state, action);
        case GET_CONSUMABLES_FAIL:
            return getConsumableListFail(state, action);
        case GET_CONSUMABLE_START:
            return getConsumableDetailStart(state, action);
        case GET_CONSUMABLE_SUCCESS:
            return getConsumableDetailSuccess(state, action);
        case GET_CONSUMABLE_FAIL:
            return getConsumableDetailFail(state, action);
        case GET_INVENTORY_ITEMS_START:
            return getInventoryItemListStart(state, action);
        case GET_INVENTORY_ITEMS_SUCCESS:
            return getInventoryItemListSuccess(state, action);
        case GET_INVENTORY_ITEMS_FAIL:
            return getInventoryItemListFail(state, action);
        case GET_RAW_MATERIALS_START:
            return getRawMaterialListStart(state, action);
        case GET_RAW_MATERIALS_SUCCESS:
            return getRawMaterialListSuccess(state, action);
        case GET_RAW_MATERIALS_FAIL:
            return getRawMaterialListFail(state, action);
        case GET_RAW_MATERIAL_START:
            return getRawMaterialDetailStart(state, action);
        case GET_RAW_MATERIAL_SUCCESS:
            return getRawMaterialDetailSuccess(state, action);
        case GET_RAW_MATERIAL_FAIL:
            return getRawMaterialDetailFail(state, action);
        case CREATE_CONSUMABLE_START:
            return createConsumableStart(state, action);
        case CREATE_CONSUMABLE_SUCCESS:
            return createConsumableSuccess(state, action);
        case CREATE_CONSUMABLE_FAIL:
            return createConsumableFail(state, action);
        case CREATE_RAW_MATERIAL_START:
            return createRawMaterialStart(state, action);
        case CREATE_RAW_MATERIAL_SUCCESS:
            return createRawMaterialSuccess(state, action);
        case CREATE_RAW_MATERIAL_FAIL:
            return createRawMaterialFail(state, action);

        case EDIT_CONSUMABLE:
            const sarrayList = state.consumables;
            sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                consumables: sarrayList,
        };

        case EDIT_RAW_MATERIAL:
            const asarrayList = state.consumables;
            asarrayList.splice(asarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                consumables: asarrayList,
        };


        
        
        default:
            return state;
    }
}
