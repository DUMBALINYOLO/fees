import axios from "axios";
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
import { returnErrors } from '../messages';
import { 
  supplieraddressesURL,
  deactivedsuppliersURL,
  activesuppliersURL,
  
} from '../../constants';



const getDeactivedSupplierListStart = () => {
    return {
      type: GET_DEACTIVATED_SUPPLIERS_START
    };
};
  
const getDeactivedSupplierListSuccess = deactivatedsuppliers => {
    return {
        type: GET_DEACTIVATED_SUPPLIERS_SUCCESS,
        deactivatedsuppliers
    };
};

const getDeactivedSupplierListFail = error => {
    return {
        type: GET_DEACTIVATED_SUPPLIERS_FAIL,
        error: error
    };
};



const getDeactivedSupplierDetailStart = () => {
    return {
        type: GET_DEACTIVATED_SUPPLIER_START
    };
};

const getDeactivedSupplierDetailSuccess = deactivatedsupplier => {
    return {
        type: GET_DEACTIVATED_SUPPLIER_SUCCESS,
        deactivatedsupplier
    };
};

const getDeactivedSupplierDetailFail = error => {
  return {
    type: GET_DEACTIVATED_SUPPLIER_FAIL,
    error: error
  };
};

//supplier addresses
const getSupplierAddressListStart = () => {
    return {
      type: GET_SUPPLIER_ADDRESSES_START
    };
};
  
const getSupplierAddressListSuccess = supplieraddresses => {
    return {
        type: GET_SUPPLIER_ADDRESSES_SUCCESS,
        supplieraddresses
    };
};

const getSupplierAddressListFail = error => {
    return {
        type: GET_SUPPLIER_ADDRESSES_FAIL,
        error: error
    };
};

const createSupplierAddressStart = () => {
    return {
        type: CREATE_SUPPLIER_ADDRESS_START
    };
};


const createSupplierAddressSuccess = supplieraddress => {
    return {
        type: CREATE_SUPPLIER_ADDRESS_SUCCESS,
        supplieraddress
    };
};

const createSupplierAddressFail = error => {
    return {
        type: CREATE_SUPPLIER_ADDRESS_FAIL,
        error: error
    };
};

const getSupplierAddressDetailStart = () => {
    return {
        type: GET_SUPPLIER_ADDRESS_START
    };
};

const getSupplierAddressDetailSuccess = supplieraddress => {
    return {
        type: GET_SUPPLIER_ADDRESS_SUCCESS,
        supplieraddress
    };
};

const getSupplierAddressDetailFail = error => {
  return {
    type: GET_SUPPLIER_ADDRESS_FAIL,
    error: error
  };
};



const createActiveSupplierStart = () => {
    return {
        type: CREATE_ACTIVE_SUPPLIER_START
    };
};


const createActiveSupplierSuccess = supplieraddress => {
    return {
        type: CREATE_ACTIVE_SUPPLIER_SUCCESS,
        supplieraddress
    };
};

const createActiveSupplierFail = error => {
    return {
        type: CREATE_ACTIVE_SUPPLIER_FAIL,
        error: error
    };
};






//active suppliers
const getActiveSupplierListStart = () => {
    return {
      type: GET_ACTIVE_SUPPLIERS_START
    };
};
  
const getActiveSupplierListSuccess = activesuppliers => {
    return {
        type: GET_ACTIVE_SUPPLIERS_SUCCESS,
        activesuppliers
    };
};

const getActiveSupplierListFail = error => {
    return {
        type: GET_ACTIVE_SUPPLIERS_FAIL,
        error: error
    };
};

const getActiveSupplierDetailStart = () => {
    return {
        type: GET_ACTIVE_SUPPLIER_START
    };
};

const getActiveSupplierDetailSuccess = activesupplier => {
    return {
        type: GET_ACTIVE_SUPPLIER_SUCCESS,
        activesupplier
    };
};

const getActiveSupplierDetailFail = error => {
  return {
    type: GET_ACTIVE_SUPPLIER_FAIL,
    error: error
  };
};

const activateSupplierStart = error => {
    return {
        type: ACTIVATE_SUPPLIER_START,
        error: error
    };
};


const activateSupplierSuccess = activesupplier => {
    return {
        type: ACTIVATE_SUPPLIER_SUCCESS,
        activesupplier
    };
};

const activateSupplierFail = error => {
    return {
        type: ACTIVATE_SUPPLIER_FAIL,
        error: error
    };
};


const deactivateSupplierStart = error => {
    return {
        type: DEACTIVATE_SUPPLIER_START,
        error: error
    };
};


const deactivateSupplierSuccess = supplier => {
    return {
        type: DEACTIVATE_SUPPLIER_SUCCESS,
        supplier
    };
};

const deactivateSupplierFail = error => {
    return {
        type: DEACTIVATE_SUPPLIER_FAIL,
        error: error
    };
};






//active suppliers
export const getActiveSuppliers = (token) => {
    return dispatch => {
      dispatch(getActiveSupplierListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(activesuppliersURL, headers)
        .then(res => {
          const activesuppliers = res.data;
          dispatch(getActiveSupplierListSuccess(activesuppliers));
          })
        .catch(err => {
          dispatch(getActiveSupplierListFail(err));
      });
    };
  };
  
  export const getActiveSupplier = (id, token) => {
    return dispatch => {
      dispatch(getActiveSupplierDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${activesuppliersURL}${id}/`, headers)
        .then(res => {
          const activesupplier = res.data;
          console.log(activesupplier)
          dispatch(getActiveSupplierDetailSuccess(activesupplier));
          })
        .catch(err => {
          dispatch(getActiveSupplierDetailFail(err));
      });
    };
  };
  
  export const addActiveSupplier = (supplier, token) => {
    return dispatch => {
      dispatch(createActiveSupplierStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(activesuppliersURL, supplier, headers)
        .then(res => {
          dispatch(createActiveSupplierSuccess(supplier));
        })
        .catch(err => {
          dispatch(createActiveSupplierFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};  
  
export const editActiveSupplier = (id, supplieraddress, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${activesuppliersURL}${id}/`, supplieraddress, headers)
    .then(res => {
      dispatch({
          type: EDIT_ACTIVE_SUPPLIER,
          payload: res.data
      });
    }).catch(err => console.log(err))
 }

  //deactived suppliers
  export const getDeactivedSuppliers = (token) => {
    return dispatch => {
      dispatch(getDeactivedSupplierListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(deactivedsuppliersURL, headers)
        .then(res => {
          const deactivatedsuppliers = res.data;
          dispatch(getDeactivedSupplierListSuccess(deactivatedsuppliers));
          })
        .catch(err => {
          dispatch(getDeactivedSupplierListFail(err));
      });
    };
  };
  
  export const getDeactivedSupplier = (id, token) => {
    return dispatch => {
      dispatch(getDeactivedSupplierDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${deactivedsuppliersURL}${id}`, headers)
        .then(res => {
          const deactivatedsupplier = res.data;
          dispatch(getDeactivedSupplierDetailSuccess(deactivatedsupplier));
          })
        .catch(err => {
          dispatch(getDeactivedSupplierDetailFail(err));
      });
    };
}; 
  

  

  
  //supplier addresses
export const getSupplierAddresses = (id, token) => {
    return dispatch => {
      dispatch(getSupplierAddressListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${supplieraddressesURL}?id=${id}`, headers)
        .then(res => {
          const supplieraddresses = res.data;
          dispatch(getSupplierAddressListSuccess(supplieraddresses));
          })
        .catch(err => {
          dispatch(getSupplierAddressListFail(err));
      });
    };
  };
  
export const getSupplierAddress = (id, token) => {
    return dispatch => {
      dispatch(getSupplierAddressDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${supplieraddressesURL}${id}`, headers)
        .then(res => {
          const supplieraddress = res.data;
          dispatch(getSupplierAddressDetailSuccess(supplieraddress));
          })
        .catch(err => {
          dispatch(getSupplierAddressDetailFail(err));
      });
    };
}; 
  
export const addSupplierAddress = (supplieraddress, token) => {
    return dispatch => {
      dispatch(createSupplierAddressStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .post(supplieraddressesURL, supplieraddress, headers)
        .then(res => {
          dispatch(createSupplierAddressSuccess(supplieraddress));
        })
        .catch(err => {
          dispatch(createSupplierAddressFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};  
  
export const editSupplierAddress = (id, supplieraddress, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${supplieraddressesURL}${id}/`, supplieraddress, headers)
    .then(res => {
      dispatch({
          type: EDIT_SUPPLIER_ADDRESS,
          payload: res.data
      });
    }).catch(err => console.log(err))
 }



export const deactivateSupplier = (id, supplier, token) => {
    return dispatch => {
        dispatch(deactivateSupplierStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${activesuppliersURL}${id}/deactivate/`, supplier, headers)
          .then(res => {
            dispatch(deactivateSupplierSuccess(supplier));
          })
          .catch(err => {
            dispatch(deactivateSupplierFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
    };
};


export const activateSupplier = (id, supplier, token) => {
    return dispatch => {
        dispatch(activateSupplierStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${deactivedsuppliersURL}${id}/activate/`, supplier, headers)
          .then(res => {
            dispatch(activateSupplierSuccess(supplier));
          })
          .catch(err => {
            dispatch(activateSupplierFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
    };
};