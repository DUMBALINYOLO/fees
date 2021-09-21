import {
    GET_SUPPLIER_ADDRESSES_START,
    GET_SUPPLIER_ADDRESSES_SUCCESS,
    GET_SUPPLIER_ADDRESSES_FAIL,
    CREATE_SUPPLIER_ADDRESS_START,
    CREATE_SUPPLIER_ADDRESS_SUCCESS,
    CREATE_SUPPLIER_ADDRESS_FAIL,
    GET_SUPPLIER_ADDRESS_START,
    GET_SUPPLIER_ADDRESS_SUCCESS,
    GET_SUPPLIER_ADDRESS_FAIL,
    EDIT_SUPPLIER_ADDRESS,
    GET_DEACTIVATED_SUPPLIERS_START,
    GET_DEACTIVATED_SUPPLIERS_SUCCESS,
    GET_DEACTIVATED_SUPPLIERS_FAIL,
    GET_DEACTIVATED_SUPPLIER_START,
    GET_DEACTIVATED_SUPPLIER_SUCCESS,
    GET_DEACTIVATED_SUPPLIER_FAIL,
    GET_ACTIVE_SUPPLIERS_START,
    GET_ACTIVE_SUPPLIERS_SUCCESS,
    GET_ACTIVE_SUPPLIERS_FAIL,
    GET_ACTIVE_SUPPLIER_START,
    GET_ACTIVE_SUPPLIER_SUCCESS,
    GET_ACTIVE_SUPPLIER_FAIL,
    ACTIVATE_SUPPLIER_START,
    ACTIVATE_SUPPLIER_SUCCESS,
    ACTIVATE_SUPPLIER_FAIL,
    DEACTIVATE_SUPPLIER_START,
    DEACTIVATE_SUPPLIER_SUCCESS,
    DEACTIVATE_SUPPLIER_FAIL,
    EDIT_ACTIVE_SUPPLIER,
    CREATE_ACTIVE_SUPPLIER_START,
    CREATE_ACTIVE_SUPPLIER_SUCCESS,
    CREATE_ACTIVE_SUPPLIER_FAIL

} from '../../types/supplierTypes';
import { updateObject } from "../../utility";


const initialState ={
    activesuppliers: [],
    activesupplier: {},
    deactivatedsuppliers: [],
    deactivatedsupplier: {},
    supplieraddresses: [],
    supplieraddress: {},
    loading: false,
    error: null,
}




const getDeactivedSupplierListStart = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getDeactivedSupplierListSuccess = (state, action)  => {
    return updateObject(state, {
        deactivatedsuppliers: action.deactivatedsuppliers,
        error: null,
        loading: true
      });
};

const getDeactivedSupplierListFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};



const getDeactivedSupplierDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getDeactivedSupplierDetailSuccess = (state, action) => {
    return updateObject(state, {
        deactivatedsupplier: action.deactivatedsupplier,
        error: null,
        loading: true
      });
};

const getDeactivedSupplierDetailFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

//supplier addresses
const getSupplierAddressListStart = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getSupplierAddressListSuccess = (state, action)  => {
    return updateObject(state, {
        supplieraddresses: action.supplieraddresses,
        error: null,
        loading: true
      });
};

const getSupplierAddressListFail = (state, action)  => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createSupplierAddressStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createSupplierAddressSuccess = (state, action)  => {
    return updateObject(state, {
        supplieraddress: action.supplieraddress,
        error: null,
        loading: true
      });
};

const createSupplierAddressFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getSupplierAddressDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getSupplierAddressDetailSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getSupplierAddressDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};





//active suppliers
const getActiveSupplierListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getActiveSupplierListSuccess = (state, action) => {
    return updateObject(state, {
        activesuppliers: action.activesuppliers,
        error: null,
        loading: true
      });
};

const getActiveSupplierListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getActiveSupplierDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getActiveSupplierDetailSuccess = (state, action)=> {
    return updateObject(state, {
        activesupplier: action.activesupplier,
        error: null,
        loading: true
      });
};

const getActiveSupplierDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const activateSupplierStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const activateSupplierSuccess = (state, action) => {
    return updateObject(state, {
        activesupplier: action.activesupplier,
        error: null,
        loading: true
      });
};

const activateSupplierFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const deactivateSupplierStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const deactivateSupplierSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const deactivateSupplierFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};



const createActiveSupplierStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createActiveSupplierSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createActiveSupplierFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};




export default function suppliers(state = initialState, action){
    switch(action.type){
        case GET_ACTIVE_SUPPLIERS_START:
            return getActiveSupplierListStart(state, action);
        case GET_ACTIVE_SUPPLIERS_SUCCESS:
            return getActiveSupplierListSuccess(state, action);
        case GET_ACTIVE_SUPPLIERS_FAIL:
            return getActiveSupplierListFail(state, action);
        case GET_ACTIVE_SUPPLIER_START:
            return getActiveSupplierDetailStart(state, action);
        case GET_ACTIVE_SUPPLIER_SUCCESS:
            return getActiveSupplierDetailSuccess(state, action);
        case GET_ACTIVE_SUPPLIER_FAIL:
            return getActiveSupplierDetailFail(state, action);
        case GET_DEACTIVATED_SUPPLIERS_START:
            return getDeactivedSupplierListStart(state, action);
        case GET_DEACTIVATED_SUPPLIERS_SUCCESS:
            return getDeactivedSupplierListSuccess(state, action);
        case GET_DEACTIVATED_SUPPLIERS_FAIL:
            return getDeactivedSupplierListFail(state, action);
        case GET_DEACTIVATED_SUPPLIER_START:
            return getDeactivedSupplierDetailStart(state, action);
        case GET_DEACTIVATED_SUPPLIER_SUCCESS:
            return getDeactivedSupplierDetailSuccess(state, action);
        case GET_DEACTIVATED_SUPPLIER_FAIL:
            return getDeactivedSupplierDetailFail(state, action);
        case GET_SUPPLIER_ADDRESSES_START:
            return getSupplierAddressListStart(state, action);
        case GET_SUPPLIER_ADDRESSES_SUCCESS:
            return getSupplierAddressListSuccess(state, action);
        case GET_SUPPLIER_ADDRESSES_FAIL:
            return getSupplierAddressListFail(state, action);
        case GET_SUPPLIER_ADDRESS_START:
            return getSupplierAddressDetailStart(state, action);
        case GET_SUPPLIER_ADDRESS_SUCCESS:
            return getSupplierAddressDetailSuccess(state, action);
        case GET_SUPPLIER_ADDRESS_FAIL:
            return getSupplierAddressDetailFail(state, action);

        case CREATE_SUPPLIER_ADDRESS_START:
            return createSupplierAddressStart(state, action);
        case CREATE_SUPPLIER_ADDRESS_SUCCESS:
            return createSupplierAddressSuccess(state, action);
        case CREATE_SUPPLIER_ADDRESS_FAIL:
            return createSupplierAddressFail(state, action);
        
        case ACTIVATE_SUPPLIER_START:
            return activateSupplierStart(state, action);
        case ACTIVATE_SUPPLIER_SUCCESS:
            return activateSupplierSuccess(state, action);
        case ACTIVATE_SUPPLIER_FAIL:
            return activateSupplierFail(state, action);
        case DEACTIVATE_SUPPLIER_START:
            return deactivateSupplierStart(state, action);
        case DEACTIVATE_SUPPLIER_SUCCESS:
            return deactivateSupplierSuccess(state, action);
        case DEACTIVATE_SUPPLIER_FAIL:
            return deactivateSupplierFail(state, action);
        case CREATE_ACTIVE_SUPPLIER_START:
            return createActiveSupplierStart(state, action);
        case CREATE_ACTIVE_SUPPLIER_SUCCESS:
            return createActiveSupplierSuccess(state, action);
        case CREATE_ACTIVE_SUPPLIER_FAIL:
            return createActiveSupplierFail(state, action);    
        case EDIT_SUPPLIER_ADDRESS:
            const arrayList = state.supplieraddresses;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                supplieraddresses: arrayList,
            };
        case EDIT_ACTIVE_SUPPLIER:
            const sarrayList = state.activesuppliers;
            sarrayList.splice(sarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                activesuppliers: sarrayList,
            };
        
        
        default:
            return state;
    }
}
