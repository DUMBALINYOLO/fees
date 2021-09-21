import axios from 'axios';
import {
    GET_CUSTOMER_UNPAID_INVOICES_START,
    GET_CUSTOMER_UNPAID_INVOICES_SUCCESS,
    GET_CUSTOMER_UNPAID_INVOICES_FAIL,
    GET_CUSTOMER_UNPAID_INVOICE_START,
    GET_CUSTOMER_UNPAID_INVOICE_SUCCESS,
    GET_CUSTOMER_UNPAID_INVOICE_FAIL,
    GET_CUSTOMER_EBOOK_ORDER_ITEMS_START,
    GET_CUSTOMER_EBOOK_ORDER_ITEMS_SUCCESS,
    GET_CUSTOMER_EBOOK_ORDER_ITEMS_FAIL,
    GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_START,
    GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_SUCCESS,
    GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_FAIL,
    GET_CUSTOMER_PARTIALY_PAID_INVOICES_START,
    GET_CUSTOMER_PARTIALY_PAID_INVOICES_SUCCESS,
    GET_CUSTOMER_PARTIALY_PAID_INVOICES_FAIL,
    GET_CUSTOMER_PARTIALY_PAID_INVOICE_START,
    GET_CUSTOMER_PARTIALY_PAID_INVOICE_SUCCESS,
    GET_CUSTOMER_PARTIALY_PAID_INVOICE_FAIL,
    GET_CUSTOMER_SERIES_ORDER_ITEMS_START,
    GET_CUSTOMER_SERIES_ORDER_ITEMS_SUCCESS,
    GET_CUSTOMER_SERIES_ORDER_ITEMS_FAIL,
    GET_CUSTOMER_FULLY_PAID_INVOICES_START,
    GET_CUSTOMER_FULLY_PAID_INVOICES_SUCCESS,
    GET_CUSTOMER_FULLY_PAID_INVOICES_FAIL,
    GET_CUSTOMER_FULLY_PAID_INVOICE_START,
    GET_CUSTOMER_FULLY_PAID_INVOICE_SUCCESS,
    GET_CUSTOMER_FULLY_PAID_INVOICE_FAIL,
    CREATE_EBOOK_CUSTOMER_ORDER_ITEM_START,
    CREATE_EBOOK_CUSTOMER_ORDER_ITEM_SUCCESS,
    CREATE_EBOOK_CUSTOMER_ORDER_ITEM_FAIL,
    CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_START,
    CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_SUCCESS,
    CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_FAIL,
    CREATE_SERIES_CUSTOMER_ORDER_ITEM_START,
    CREATE_SERIES_CUSTOMER_ORDER_ITEM_SUCCESS,
    CREATE_SERIES_CUSTOMER_ORDER_ITEM_FAIL,
    GET_CUSTOMER_CART_START,
    GET_CUSTOMER_CART_SUCCESS,
    GET_CUSTOMER_CART_FAIL,
    GET_CUSTOMER_PAYMENTS_START,
    GET_CUSTOMER_PAYMENTS_SUCCESS,
    GET_CUSTOMER_PAYMENTS_FAIL,
} from '../../types/customerTypes';
import {
    customerunpaidinvoicesURL,
    customerebookorderitemsURL,
    customerhardcopyorderitemsURL,
    customerpartialypaidinvoicesURL,
    customerseriesorderitemsURL,
    customerfullypaidinvoicesURL,
    customercartURL,
    customerpaymentsURL,
} from '../../constants';
import { returnErrors } from '../messages';


const getCustomerPaymentListStart = () => {
  return {
    type: GET_CUSTOMER_PAYMENTS_START
  };
};

const getCustomerPaymentListSuccess = customerpayments => {
  return {
    type: GET_CUSTOMER_PAYMENTS_SUCCESS,
    customerpayments
  };
};

const getCustomerPaymentListFail = error => {
  return {
    type: GET_CUSTOMER_PAYMENTS_FAIL,
    error: error
  };
};

const getCustomerCartStart = () => {
    return {
      type: GET_CUSTOMER_CART_START
    };
  };

const getCustomerCartSuccess = customercart => {
    return {
      type: GET_CUSTOMER_CART_SUCCESS,
      customercart
    };
  };

const getCustomerCartFail = error => {
    return {
      type: GET_CUSTOMER_CART_FAIL,
      error: error
    };
};



const getCustomerUnpaidInvoiceListStart = () => {
    return {
      type: GET_CUSTOMER_UNPAID_INVOICES_START
    };
  };

const getCustomerUnpaidInvoiceListSuccess = customerunpaidinvoices => {
    return {
      type: GET_CUSTOMER_UNPAID_INVOICES_SUCCESS,
      customerunpaidinvoices
    };
  };

const getCustomerUnpaidInvoiceListFail = error => {
    return {
      type: GET_CUSTOMER_UNPAID_INVOICES_FAIL,
      error: error
    };
};

const getCustomerUnpaidInvoiceDetailStart = () => {
    return {
      type: GET_CUSTOMER_UNPAID_INVOICE_START
    };
  };

const getCustomerUnpaidInvoiceDetailSuccess = customerunpaidinvoice => {
    return {
      type: GET_CUSTOMER_UNPAID_INVOICE_SUCCESS,
      customerunpaidinvoice
    };
};


const getCustomerUnpaidInvoiceDetailFail = error => {
    return {
      type: GET_CUSTOMER_UNPAID_INVOICE_FAIL,
      error: error
    };
};


const getCustomerPartiallyPaidInvoiceListStart = () => {
  return {
    type: GET_CUSTOMER_PARTIALY_PAID_INVOICES_START
  };
};

const getCustomerPartiallyPaidInvoiceListSuccess = customerpartiallypaidinvoices => {
  return {
    type: GET_CUSTOMER_PARTIALY_PAID_INVOICES_SUCCESS,
    customerpartiallypaidinvoices
  };
};

const getCustomerPartiallyPaidInvoiceListFail = error => {
  return {
    type: GET_CUSTOMER_PARTIALY_PAID_INVOICES_FAIL,
    error: error
  };
};

const getCustomerPartiallyPaidInvoiceDetailStart = () => {
  return {
    type: GET_CUSTOMER_PARTIALY_PAID_INVOICE_START
  };
};

const getCustomerPartiallyPaidInvoiceDetailSuccess = customerpartiallypaidinvoice => {
  return {
    type: GET_CUSTOMER_PARTIALY_PAID_INVOICE_SUCCESS,
    customerpartiallypaidinvoice
  };
};

const getCustomerPartiallyPaidInvoiceDetailFail = error => {
  return {
    type: GET_CUSTOMER_PARTIALY_PAID_INVOICE_FAIL,
    error: error
  };
};


const getCustomerFullyPaidInvoiceListStart = () => {
  return {
    type: GET_CUSTOMER_FULLY_PAID_INVOICES_START
  };
};

const getCustomerFullyPaidInvoiceListSuccess = customerfullypaidinvoices => {
  return {
    type: GET_CUSTOMER_FULLY_PAID_INVOICES_SUCCESS,
    customerfullypaidinvoices
  };
};

const getCustomerFullyPaidInvoiceListFail = error => {
  return {
    type: GET_CUSTOMER_FULLY_PAID_INVOICES_FAIL,
    error: error
  };
};

const getCustomerFullyPaidInvoiceDetailStart = () => {
  return {
    type: GET_CUSTOMER_FULLY_PAID_INVOICE_START
  };
};

const getCustomerFullyPaidInvoiceDetailSuccess = customerfullypaidinvoice => {
  return {
    type: GET_CUSTOMER_FULLY_PAID_INVOICE_SUCCESS,
    customerfullypaidinvoice
  };
};

const getCustomerFullyPaidInvoiceDetailFail = error => {
  return {
    type: GET_CUSTOMER_FULLY_PAID_INVOICE_FAIL,
    error: error
  };
};


const getCustomerEbookOrderItemListStart = () => {
  return {
    type: GET_CUSTOMER_EBOOK_ORDER_ITEMS_START
  };
};

const getCustomerEbookOrderItemListSuccess = customerebookorderitems => {
  return {
    type: GET_CUSTOMER_EBOOK_ORDER_ITEMS_SUCCESS,
    customerebookorderitems
  };
};

const getCustomerEbookOrderItemListFail = error => {
  return {
    type: GET_CUSTOMER_EBOOK_ORDER_ITEMS_FAIL,
    error: error
  };
};

const getCustomerHardcopyOrderItemListStart = () => {
  return {
    type: GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_START
  };
};

const getCustomerHardcopyOrderItemListSuccess = customerhardcopyorderitems => {
  return {
    type: GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_SUCCESS,
    customerhardcopyorderitems
  };
};

const getCustomerHardcopyOrderItemListFail = error => {
  return {
    type: GET_CUSTOMER_HARDCOPY_ORDER_ITEMS_FAIL,
    error: error
  };
};


const getCustomerSeriesOrderItemListStart = () => {
  return {
    type: GET_CUSTOMER_SERIES_ORDER_ITEMS_START
  };
};

const getCustomerSeriesOrderItemListSuccess = customerseriesorderitems => {
  return {
    type: GET_CUSTOMER_SERIES_ORDER_ITEMS_SUCCESS,
    customerseriesorderitems
  };
};

const getCustomerSeriesOrderItemListFail = error => {
  return {
    type: GET_CUSTOMER_SERIES_ORDER_ITEMS_FAIL,
    error: error
  };
};


const createCustomerEbookOrderItemStart = () => {
  return {
    type: CREATE_EBOOK_CUSTOMER_ORDER_ITEM_START
  };
};

const createCustomerEbookOrderItemSuccess = orderitem => {
  return {
    type: CREATE_EBOOK_CUSTOMER_ORDER_ITEM_SUCCESS,
    orderitem
  };
};

const createCustomerEbookOrderItemFail = error => {
  return {
    type: CREATE_EBOOK_CUSTOMER_ORDER_ITEM_FAIL,
    error: error
  };
};



const createCustomerHardcopyOrderItemStart = () => {
  return {
    type: CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_START
  };
};

const createCustomerHardcopyOrderItemSuccess = orderitem => {
  return {
    type: CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_SUCCESS,
    orderitem
  };
};

const createCustomerHardcopyOrderItemFail = error => {
  return {
    type: CREATE_HARDCOPY_CUSTOMER_ORDER_ITEM_FAIL,
    error: error
  };
};



const createCustomerSeriesOrderItemStart = () => {
  return {
    type: CREATE_SERIES_CUSTOMER_ORDER_ITEM_START
  };
};

const createCustomerSeriesOrderItemSuccess = orderitem => {
  return {
    type: CREATE_SERIES_CUSTOMER_ORDER_ITEM_SUCCESS,
    orderitem
  };
};

const createCustomerSeriesOrderItemFail = error => {
  return {
    type: CREATE_SERIES_CUSTOMER_ORDER_ITEM_FAIL,
    error: error
  };
};


export const getCustomerPayments = (token) => {
  return dispatch => {
      dispatch(getCustomerPaymentListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customerpaymentsURL, headers)
        .then(res => {
          const customerpayments = res.data;
          dispatch(getCustomerPaymentListSuccess(customerpayments));
          })
        .catch(err => {
          dispatch(getCustomerPaymentListFail(err));
        });
    };
};



export const getCustomerCart = (email, token) => {
    return dispatch => {
        dispatch(getCustomerCartStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .get(`${customercartURL}?email=${email}`, headers)
          .then(res => {
            const customercart = res.data;
            dispatch(getCustomerCartSuccess(customercart));
            })
          .catch(err => {
            dispatch(getCustomerCartFail(err));
          });
      };
};



export const getCustomerUnpaidInvoices = ( token) => {
    return dispatch => {
        dispatch(getCustomerUnpaidInvoiceListStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .get(customerunpaidinvoicesURL, headers)
          .then(res => {
            const customerunpaidinvoices = res.data;
            dispatch(getCustomerUnpaidInvoiceListSuccess(customerunpaidinvoices));
            })
          .catch(err => {
            dispatch(getCustomerUnpaidInvoiceListFail(err));
          });
      };
};

export const getCustomerUnpaidInvoice = (id, token) => {
    return dispatch => {
        dispatch(getCustomerUnpaidInvoiceDetailStart());
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        axios
          .get(`${customerunpaidinvoicesURL}${id}`, headers)
          .then(res => {
            const customerunpaidinvoices = res.data;
            dispatch(getCustomerUnpaidInvoiceDetailSuccess(customerunpaidinvoices));
            })
          .catch(err => {
            dispatch(getCustomerUnpaidInvoiceDetailFail(err));
          });
      };
};



export const getCustomerPartiallyPaidInvoices = ( token) => {
  return dispatch => {
      dispatch(getCustomerPartiallyPaidInvoiceListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(customerpartialypaidinvoicesURL, headers)
        .then(res => {
          const customerpartiallypaidinvoices = res.data;
          dispatch(getCustomerPartiallyPaidInvoiceListSuccess(customerpartiallypaidinvoices));
          })
        .catch(err => {
          dispatch(getCustomerPartiallyPaidInvoiceListFail(err));
        });
    };
};

export const getCustomerPartiallyPaidInvoice = (id, token) => {
  return dispatch => {
      dispatch(getCustomerPartiallyPaidInvoiceDetailStart());
      let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
      axios
        .get(`${customerpartialypaidinvoicesURL}${id}`, headers)
        .then(res => {
          const customerpartiallypaidinvoice = res.data;
          dispatch(getCustomerPartiallyPaidInvoiceDetailSuccess(customerpartiallypaidinvoice));
          })
        .catch(err => {
          dispatch(getCustomerPartiallyPaidInvoiceDetailFail(err));
        });
    };
};



export const getCustomerFullyPaidInvoices = (token) => {
  return dispatch => {
      dispatch(getCustomerFullyPaidInvoiceListStart());
      let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
      axios
        .get(customerfullypaidinvoicesURL, headers)
        .then(res => {
          const customerfullypaidinvoices = res.data;
          dispatch(getCustomerFullyPaidInvoiceListSuccess(customerfullypaidinvoices));
          })
        .catch(err => {
          dispatch(getCustomerFullyPaidInvoiceListFail(err));
        });
    };
};

export const getCustomerFullyPaidInvoice = (id, token) => {
  return dispatch => {
      dispatch(getCustomerFullyPaidInvoiceDetailStart());
      let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
      axios
        .get(`${customerfullypaidinvoicesURL}${id}`, headers)
        .then(res => {
          const customerfullypaidinvoice = res.data;
          dispatch(getCustomerFullyPaidInvoiceDetailSuccess(customerfullypaidinvoice));
          })
        .catch(err => {
          dispatch(getCustomerFullyPaidInvoiceDetailFail(err));
        });
    };
};


export const getCustomerHardcopyOrderItems = (id, token) => {
  return dispatch => {
      dispatch(getCustomerHardcopyOrderItemListStart());
      let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
      };
      axios
        .get(`${customerhardcopyorderitemsURL}?id=${id}`, headers)
        .then(res => {
          const customerhardcopyorderitems = res.data;
          dispatch(getCustomerHardcopyOrderItemListSuccess(customerhardcopyorderitems));
          })
        .catch(err => {
          dispatch(getCustomerHardcopyOrderItemListFail(err));
        });
    };
};


export const getCustomerEbookOrderItems = (id, token) => {
  return dispatch => {
      dispatch(getCustomerEbookOrderItemListStart());
      let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
      axios
        .get(`${customerebookorderitemsURL}?id=${id}`, headers)
        .then(res => {
          const customerebookorderitems = res.data;
          dispatch(getCustomerEbookOrderItemListSuccess(customerebookorderitems));
          })
        .catch(err => {
          dispatch(getCustomerEbookOrderItemListFail(err));
        });
    };
};


export const getCustomerSeriesOrderItems = (id, token) => {
  return dispatch => {
      dispatch(getCustomerSeriesOrderItemListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .get(`${customerseriesorderitemsURL}?id=${id}`, headers)
        .then(res => {
          const customerseriesorderitems = res.data;
          dispatch(getCustomerSeriesOrderItemListSuccess(customerseriesorderitems));
          })
        .catch(err => {
          dispatch(getCustomerSeriesOrderItemListFail(err));
        });
    };
};


export const addCustomerEbookOrderItem = (orderitem, token) => {
  return dispatch => {
      dispatch(createCustomerEbookOrderItemStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
      axios
        .post(customerebookorderitemsURL, orderitem, headers)
        .then(res => {
          dispatch(createCustomerEbookOrderItemSuccess(orderitem));
        })
        .catch(err => {
          dispatch(createCustomerEbookOrderItemFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};



export const addCustomerHardcopyOrderItem = (orderitem, token) => {
  return dispatch => {
      dispatch(createCustomerHardcopyOrderItemStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
      axios
        .post(customerhardcopyorderitemsURL, orderitem, headers)
        .then(res => {
          dispatch(createCustomerHardcopyOrderItemSuccess(orderitem));
        })
        .catch(err => {
          dispatch(createCustomerHardcopyOrderItemFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const addCustomerSeriesOrderItem = (orderitem, token) => {
  return dispatch => {
      dispatch(createCustomerSeriesOrderItemStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
      axios
        .post(customerseriesorderitemsURL, orderitem, headers)
        .then(res => {
          dispatch(createCustomerSeriesOrderItemSuccess(orderitem));
        })
        .catch(err => {
          dispatch(createCustomerSeriesOrderItemFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};
