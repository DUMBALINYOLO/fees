import axios from 'axios';
import {
    GET_FULLY_PAID_INVOICES_START,
    GET_FULLY_PAID_INVOICES_SUCCESS,
    GET_FULLY_PAID_INVOICES_FAIL,
    GET_FULLY_PAID_INVOICE_START,
    GET_FULLY_PAID_INVOICE_SUCCESS,
    GET_FULLY_PAID_INVOICE_FAIL,
    GET_PARTIALLY_PAID_INVOICES_START,
    GET_PARTIALLY_PAID_INVOICES_SUCCESS,
    GET_PARTIALLY_PAID_INVOICES_FAIL,
    GET_PARTIALLY_PAID_INVOICE_START,
    GET_PARTIALLY_PAID_INVOICE_SUCCESS,
    GET_PARTIALLY_PAID_INVOICE_FAIL,
    GET_UNPAID_INVOICES_START,
    GET_UNPAID_INVOICES_SUCCESS,
    GET_UNPAID_INVOICES_FAIL,
    GET_UNPAID_INVOICE_START,
    GET_UNPAID_INVOICE_SUCCESS,
    GET_UNPAID_INVOICE_FAIL,
    GET_CUSTOMER_ORDERS_START,
    GET_CUSTOMER_ORDERS_SUCCESS,
    GET_CUSTOMER_ORDERS_FAIL,
    GET_CUSTOMER_ORDER_START,
    GET_CUSTOMER_ORDER_SUCCESS,
    GET_CUSTOMER_ORDER_FAIL,
    GET_PENDING_CUSTOMER_ORDERS_START,
    GET_PENDING_CUSTOMER_ORDERS_SUCCESS,
    GET_PENDING_CUSTOMER_ORDERS_FAIL,
    GET_PENDING_CUSTOMER_ORDER_START,
    GET_PENDING_CUSTOMER_ORDER_SUCCESS,
    GET_PENDING_CUSTOMER_ORDER_FAIL,
    GET_REJECTED_CUSTOMER_ORDERS_START,
    GET_REJECTED_CUSTOMER_ORDERS_SUCCESS,
    GET_REJECTED_CUSTOMER_ORDERS_FAIL,
    GET_REJECTED_CUSTOMER_ORDER_START,
    GET_REJECTED_CUSTOMER_ORDER_SUCCESS,
    GET_REJECTED_CUSTOMER_ORDER_FAIL,
    GET_COMPLETED_CUSTOMER_ORDERS_START,
    GET_COMPLETED_CUSTOMER_ORDERS_SUCCESS,
    GET_COMPLETED_CUSTOMER_ORDERS_FAIL,
    GET_COMPLETED_CUSTOMER_ORDER_START,
    GET_COMPLETED_CUSTOMER_ORDER_SUCCESS,
    GET_COMPLETED_CUSTOMER_ORDER_FAIL,
    GET_CANCELLED_CUSTOMER_ORDERS_START,
    GET_CANCELLED_CUSTOMER_ORDERS_SUCCESS,
    GET_CANCELLED_CUSTOMER_ORDERS_FAIL,
    GET_CANCELLED_CUSTOMER_ORDER_START,
    GET_CANCELLED_CUSTOMER_ORDER_SUCCESS,
    GET_CANCELLED_CUSTOMER_ORDER_FAIL,
    GET_REFUNDED_CUSTOMER_ORDERS_START,
    GET_REFUNDED_CUSTOMER_ORDERS_SUCCESS,
    GET_REFUNDED_CUSTOMER_ORDERS_FAIL,
    GET_REFUNDED_CUSTOMER_ORDER_START,
    GET_REFUNDED_CUSTOMER_ORDER_SUCCESS,
    GET_REFUNDED_CUSTOMER_ORDER_FAIL,
    GET_HARDCOPY_ORDER_ITEMS_START,
    GET_HARDCOPY_ORDER_ITEMS_SUCCESS,
    GET_HARDCOPY_ORDER_ITEMS_FAIL,
    GET_EBOOK_ORDER_ITEMS_START,
    GET_EBOOK_ORDER_ITEMS_SUCCESS,
    GET_EBOOK_ORDER_ITEMS_FAIL,
    GET_SERIES_ORDER_ITEMS_START,
    GET_SERIES_ORDER_ITEMS_SUCCESS,
    GET_SERIES_ORDER_ITEMS_FAIL,
    ACCEPT_CUSTOMER_ORDER_START,
    ACCEPT_CUSTOMER_ORDER_SUCCESS ,
    ACCEPT_CUSTOMER_ORDER_FAIL,
    REJECT_CUSTOMER_ORDER_START,
    REJECT_CUSTOMER_ORDER_SUCCESS,
    REJECT_CUSTOMER_ORDER_FAIL,
    ACCEPT_REJECTED_CUSTOMER_ORDER_START,
    ACCEPT_REJECTED_CUSTOMER_ORDER_SUCCESS,
    ACCEPT_REJECTED_CUSTOMER_ORDER_FAIL,
    REFUND_CUSTOMER_ORDER_START,
    REFUND_CUSTOMER_ORDER_SUCCESS,
    REFUND_CUSTOMER_ORDER_FAIL,
    PAY_CUSTOMER_ORDER_START ,
    PAY_CUSTOMER_ORDER_SUCCESS,
    PAY_CUSTOMER_ORDER_FAIL,
    PAY_PARTIALLY_CUSTOMER_ORDER_START,
    PAY_PARTIALLY_CUSTOMER_ORDER_SUCCESS,
    PAY_PARTIALLY_CUSTOMER_ORDER_FAIL,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_START,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_SUCCESS,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_FAIL,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_START,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_SUCCESS,
    GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_FAIL,
    VERIFY_CUSTOMER_ORDER_PAYMENT_START,
    VERIFY_CUSTOMER_ORDER_PAYMENT_SUCCESS,
    VERIFY_CUSTOMER_ORDER_PAYMENT_FAIL,
    GET_CASH_INVOICE_PAYMENTS_START,
    GET_CASH_INVOICE_PAYMENTS_SUCCESS,
    GET_CASH_INVOICE_PAYMENTS_FAIL,
    GET_CASH_INVOICE_PAYMENT_START,
    GET_CASH_INVOICE_PAYMENT_SUCCESS,
    GET_CASH_INVOICE_PAYMENT_FAIL,
    GET_DEBIT_CARD_INVOICE_PAYMENTS_START,
    GET_DEBIT_CARD_INVOICE_PAYMENTS_SUCCESS,
    GET_DEBIT_CARD_INVOICE_PAYMENTS_FAIL,
    GET_DEBIT_CARD_INVOICE_PAYMENT_START,
    GET_DEBIT_CARD_INVOICE_PAYMENT_SUCCESS,
    GET_DEBIT_CARD_INVOICE_PAYMENT_FAIL,
    GET_MOBILE_INVOICE_PAYMENTS_START,
    GET_MOBILE_INVOICE_PAYMENTS_SUCCESS,
    GET_MOBILE_INVOICE_PAYMENTS_FAIL,
    GET_MOBILE_INVOICE_PAYMENT_START,
    GET_MOBILE_INVOICE_PAYMENT_SUCCESS,
    GET_MOBILE_INVOICE_PAYMENT_FAIL,
    GET_TRANSFER_INVOICE_PAYMENTS_START,
    GET_TRANSFER_INVOICE_PAYMENTS_SUCCESS,
    GET_TRANSFER_INVOICE_PAYMENTS_FAIL,
    GET_TRANSFER_INVOICE_PAYMENT_START,
    GET_TRANSFER_INVOICE_PAYMENT_SUCCESS,
    GET_TRANSFER_INVOICE_PAYMENT_FAIL,
    GET_INVOICE_LINES_START,
    GET_INVOICE_LINES_SUCCESS,
    GET_INVOICE_LINES_FAIL,

} from '../../types/customerOrderTypes';
import {
    fullypaidinvoicesURL,
    partiallypaidinvoicesURL,
    unpaidinvoicesURL,
    customerordersURL,
    pendingcustomerordersURL,
    rejectedcustomerordersURL,
    completedcustomerordersURL,
    cancelledcustomerordersURL,
    refundedcustomerordersURL,
    hardcopyorderitemsURL,
    ebookorderitemsURL,
    seriesorderitemsURL,
    transferinvoicepaymentsURL,
    debitcardinvoicepaymentsURL,
    cashinvoicepaymentsURL,
    mobileinvoicepaymentsURL,
    unverifiedinvoicepaymentsURL,
    invoicelinesURL

} from '../../constants';
import { returnErrors } from '../messages';


const getInvoiceLineListStart = () => {
  return {
    type: GET_INVOICE_LINES_START
  };
};

const getInvoiceLineListSuccess = invoicelines => {
  return {
    type: GET_INVOICE_LINES_SUCCESS,
    invoicelines
  };
};

const getInvoiceLineListFail = error => {
  return {
    type: GET_INVOICE_LINES_FAIL,
    error: error
  };
};



const getFullyPaidInvoiceListStart = () => {
    return {
      type: GET_FULLY_PAID_INVOICES_START
    };
  };
  
const getFullyPaidInvoiceListSuccess = fullypaidinvoices => {
    return {
      type: GET_FULLY_PAID_INVOICES_SUCCESS,
      fullypaidinvoices
    };
  };
  
const getFullyPaidInvoiceListFail = error => {
    return {
      type: GET_FULLY_PAID_INVOICES_FAIL,
      error: error
    };
};
  
const getFullyPaidInvoiceDetailStart = () => {
    return {
      type: GET_FULLY_PAID_INVOICE_START
    };
  };
  
const getFullyPaidInvoiceDetailSuccess = fullypaidinvoice => {
    return {
      type: GET_FULLY_PAID_INVOICE_SUCCESS,
      fullypaidinvoice
    };
};
  
const getFullyPaidInvoiceDetailFail = error => {
    return {
      type: GET_FULLY_PAID_INVOICE_FAIL,
      error: error
    };
};
  

const getPartiallyPaidInvoiceListStart = () => {
    return {
      type: GET_PARTIALLY_PAID_INVOICES_START
    };
  };
  
const getPartiallyPaidInvoiceListSuccess = partiallypaidinvoices => {
    return {
      type: GET_PARTIALLY_PAID_INVOICES_SUCCESS,
      partiallypaidinvoices
    };
  };
  
const getPartiallyPaidInvoiceListFail = error => {
    return {
      type: GET_PARTIALLY_PAID_INVOICES_FAIL,
      error: error
    };
};
  
const getPartiallyPaidInvoiceDetailStart = () => {
    return {
      type: GET_PARTIALLY_PAID_INVOICE_START
    };
  };
  
const getPartiallyPaidInvoiceDetailSuccess = partiallypaidinvoice => {
    return {
      type: GET_PARTIALLY_PAID_INVOICE_SUCCESS,
      partiallypaidinvoice
    };
};
  
const getPartiallyPaidInvoiceDetailFail = error => {
    return {
      type: GET_PARTIALLY_PAID_INVOICE_FAIL,
      error: error
    };
};



const getUnpaidInvoiceListStart = () => {
    return {
      type: GET_UNPAID_INVOICES_START
    };
  };
  
const getUnpaidInvoiceListSuccess = unpaidinvoices => {
    return {
      type: GET_UNPAID_INVOICES_SUCCESS,
      unpaidinvoices
    };
  };
  
const getUnpaidInvoiceListFail = error => {
    return {
      type: GET_UNPAID_INVOICES_FAIL,
      error: error
    };
};
  
const getUnpaidInvoiceDetailStart = () => {
    return {
      type: GET_UNPAID_INVOICE_START
    };
  };
  
const getUnpaidInvoiceDetailSuccess = unpaidinvoice => {
    return {
      type: GET_UNPAID_INVOICE_SUCCESS,
      unpaidinvoice
    };
};
  
const getUnpaidInvoiceDetailFail = error => {
    return {
      type: GET_UNPAID_INVOICE_FAIL,
      error: error
    };
};


const getCustomerOrderListStart = () => {
    return {
      type: GET_CUSTOMER_ORDERS_START
    };
  };
  
const getCustomerOrderListSuccess = customerorders => {
    return {
      type: GET_CUSTOMER_ORDERS_SUCCESS,
      customerorders
    };
  };
  
const getCustomerOrderListFail = error => {
    return {
      type: GET_CUSTOMER_ORDERS_FAIL,
      error: error
    };
};
  
const getCustomerOrderDetailStart = () => {
    return {
      type: GET_CUSTOMER_ORDER_START
    };
  };
  
const getCustomerOrderDetailSuccess = customerorder => {
    return {
      type: GET_CUSTOMER_ORDER_SUCCESS,
      customerorder 
    };
};
  
const getCustomerOrderDetailFail = error => {
    return {
      type: GET_CUSTOMER_ORDER_FAIL,
      error: error
    };
};





const getPendingCustomerOrderListStart = () => {
    return {
      type: GET_PENDING_CUSTOMER_ORDERS_START
    };
  };
  
const getPendingCustomerOrderListSuccess = pendingcustomerorders => {
    return {
      type: GET_PENDING_CUSTOMER_ORDERS_SUCCESS,
      pendingcustomerorders
    };
  };
  
const getPendingCustomerOrderListFail = error => {
    return {
      type: GET_PENDING_CUSTOMER_ORDERS_FAIL,
      error: error
    };
};
  
const getPendingCustomerOrderDetailStart = () => {
    return {
      type: GET_PENDING_CUSTOMER_ORDER_START
    };
  };
  
const getPendingCustomerOrderDetailSuccess = pendingcustomerorder => {
    return {
      type: GET_PENDING_CUSTOMER_ORDER_SUCCESS,
      pendingcustomerorder 
    };
};
  
const getPendingCustomerOrderDetailFail = error => {
    return {
      type: GET_PENDING_CUSTOMER_ORDER_FAIL,
      error: error
    };
};



const getRejectedCustomerOrderListStart = () => {
    return {
      type: GET_REJECTED_CUSTOMER_ORDERS_START
    };
  };
  
const getRejectedCustomerOrderListSuccess = rejectedcustomerorders => {
    return {
      type: GET_REJECTED_CUSTOMER_ORDERS_SUCCESS,
      rejectedcustomerorders
    };
  };
  
const getRejectedCustomerOrderListFail = error => {
    return {
      type: GET_REJECTED_CUSTOMER_ORDERS_FAIL,
      error: error
    };
};
  
const getRejectedCustomerOrderDetailStart = () => {
    return {
      type: GET_REJECTED_CUSTOMER_ORDER_START
    };
  };
  
const getRejectedCustomerOrderDetailSuccess = rejectedcustomerorder => {
    return {
      type: GET_REJECTED_CUSTOMER_ORDER_SUCCESS,
      rejectedcustomerorder
    };
};
  
const getRejectedCustomerOrderDetailFail = error => {
    return {
      type: GET_REJECTED_CUSTOMER_ORDER_FAIL,
      error: error
    };
};



const getCancelledCustomerOrderListStart = () => {
    return {
      type: GET_CANCELLED_CUSTOMER_ORDERS_START
    };
  };
  
const getCancelledCustomerOrderListSuccess = cancelledcustomerorders => {
    return {
      type: GET_CANCELLED_CUSTOMER_ORDERS_SUCCESS,
      cancelledcustomerorders
    };
  };
  
const getCancelledCustomerOrderListFail = error => {
    return {
      type: GET_CANCELLED_CUSTOMER_ORDERS_FAIL,
      error: error
    };
};
  
const getCancelledCustomerOrderDetailStart = () => {
    return {
      type: GET_CANCELLED_CUSTOMER_ORDER_START
    };
  };
  
const getCancelledCustomerOrderDetailSuccess = cancelledcustomerorder => {
    return {
      type: GET_CANCELLED_CUSTOMER_ORDER_SUCCESS,
      cancelledcustomerorder
    };
};
  
const getCancelledCustomerOrderDetailFail = error => {
    return {
      type: GET_CANCELLED_CUSTOMER_ORDER_FAIL,
      error: error
    };
};


const getCompletedCustomerOrderListStart = () => {
    return {
      type: GET_COMPLETED_CUSTOMER_ORDERS_START
    };
  };
  
const getCompletedCustomerOrderListSuccess = completedcustomerorders => {
    return {
      type: GET_COMPLETED_CUSTOMER_ORDERS_SUCCESS,
      completedcustomerorders
    };
  };
  
const getCompletedCustomerOrderListFail = error => {
    return {
      type: GET_COMPLETED_CUSTOMER_ORDERS_FAIL,
      error: error
    };
};
  
const getCompletedCustomerOrderDetailStart = () => {
    return {
      type: GET_COMPLETED_CUSTOMER_ORDER_START
    };
  };
  
const getCompletedCustomerOrderDetailSuccess = completedcustomerorder => {
    return {
      type: GET_COMPLETED_CUSTOMER_ORDER_SUCCESS,
      completedcustomerorder
    };
};
  
const getCompletedCustomerOrderDetailFail = error => {
    return {
      type: GET_COMPLETED_CUSTOMER_ORDER_FAIL,
      error: error
    };
};


const getRefundedCustomerOrderListStart = () => {
    return {
      type: GET_REFUNDED_CUSTOMER_ORDERS_START
    };
  };
  
const getRefundedCustomerOrderListSuccess = refundedcustomerorders => {
    return {
      type: GET_REFUNDED_CUSTOMER_ORDERS_SUCCESS,
      refundedcustomerorders
    };
  };
  
const getRefundedCustomerOrderListFail = error => {
    return {
      type: GET_REFUNDED_CUSTOMER_ORDERS_FAIL,
      error: error
    };
};
  
const getRefundedCustomerOrderDetailStart = () => {
    return {
      type: GET_REFUNDED_CUSTOMER_ORDER_START
    };
  };
  
const getRefundedCustomerOrderDetailSuccess = refundedcustomerorder => {
    return {
      type: GET_REFUNDED_CUSTOMER_ORDER_SUCCESS,
      refundedcustomerorder
    };
};
  
const getRefundedCustomerOrderDetailFail = error => {
    return {
      type: GET_REFUNDED_CUSTOMER_ORDER_FAIL,
      error: error
    };
};


const getHardcopyOrderItemListStart = () => {
    return {
      type: GET_HARDCOPY_ORDER_ITEMS_START
    };
  };
  
const getHardcopyOrderItemListSuccess = hardcopyorderitems => {
    return {
      type: GET_HARDCOPY_ORDER_ITEMS_SUCCESS,
      hardcopyorderitems
    };
  };
  
const getHardcopyOrderItemListFail = error => {
    return {
      type: GET_HARDCOPY_ORDER_ITEMS_FAIL,
      error: error
    };
};


const getSeriesOrderItemListStart = () => {
    return {
      type: GET_SERIES_ORDER_ITEMS_START
    };
  };
  
const getSeriesOrderItemListSuccess = seriesorderitems => {
    return {
      type: GET_SERIES_ORDER_ITEMS_SUCCESS,
      seriesorderitems
    };
  };
  
const getSeriesOrderItemListFail = error => {
    return {
      type: GET_SERIES_ORDER_ITEMS_FAIL,
      error: error
    };
};


const getEbookOrderItemListStart = () => {
    return {
      type: GET_EBOOK_ORDER_ITEMS_START
    };
  };
  
const getEbookOrderItemListSuccess = ebookorderitems => {
    return {
      type: GET_EBOOK_ORDER_ITEMS_SUCCESS,
      ebookorderitems
    };
  };
  
const getEbookOrderItemListFail = error => {
    return {
      type: GET_EBOOK_ORDER_ITEMS_FAIL,
      error: error
    };
};


const acceptCustomerOrderStart = () => {
    return {
      type: ACCEPT_CUSTOMER_ORDER_START
    };
};
  
const acceptCustomerOrderSuccess = order => {
    return {
      type: ACCEPT_CUSTOMER_ORDER_SUCCESS,
      order
    };
};
  
const acceptCustomerOrderFail = error => {
    return {
      type: ACCEPT_CUSTOMER_ORDER_FAIL,
      error: error
    };
};



const rejectCustomerOrderStart = () => {
    return {
      type: REJECT_CUSTOMER_ORDER_START
    };
};
  
const rejectCustomerOrderSuccess = order => {
    return {
      type: REJECT_CUSTOMER_ORDER_SUCCESS,
      order
    };
};
  
const rejectCustomerOrderFail = error => {
    return {
      type: REJECT_CUSTOMER_ORDER_FAIL,
      error: error
    };
};


const acceptRejectedCustomerOrderStart = () => {
    return {
      type: ACCEPT_REJECTED_CUSTOMER_ORDER_START
    };
};
  
const acceptRejectedCustomerOrderSuccess = order => {
    return {
      type: ACCEPT_REJECTED_CUSTOMER_ORDER_SUCCESS,
      order
    };
};
  
const acceptRejectedCustomerOrderFail = error => {
    return {
      type: ACCEPT_REJECTED_CUSTOMER_ORDER_FAIL,
      error: error
    };
};


const refundCustomerOrderStart = () => {
    return {
      type: REFUND_CUSTOMER_ORDER_START
    };
};
  
const refundCustomerOrderSuccess = order => {
    return {
      type: REFUND_CUSTOMER_ORDER_SUCCESS,
      order
    };
};
  
const refundCustomerOrderFail = error => {
    return {
      type: REFUND_CUSTOMER_ORDER_FAIL,
      error: error
    };
};



const payCustomerOrderStart = () => {
    return {
      type: PAY_CUSTOMER_ORDER_START
    };
};
  
const payCustomerOrderSuccess = order => {
    return {
      type: PAY_CUSTOMER_ORDER_SUCCESS,
      order
    };
};
  
const payCustomerOrderFail = error => {
    return {
      type: PAY_CUSTOMER_ORDER_FAIL,
      error: error
    };
};


const payPartiallyCustomerOrderStart = () => {
    return {
      type: PAY_PARTIALLY_CUSTOMER_ORDER_START
    };
};
  
const payPartiallyCustomerOrderSuccess = order => {
    return {
      type: PAY_PARTIALLY_CUSTOMER_ORDER_SUCCESS,
      order
    };
};
  
const payPartiallyCustomerOrderFail = error => {
    return {
      type: PAY_PARTIALLY_CUSTOMER_ORDER_FAIL,
      error: error
    };
};




const getUnverifiedCustomerOrderPaymentListStart = () => {
    return {
      type: GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_START
    };
  };
  
const getUnverifiedCustomerOrderPaymentListSuccess = unverifiedcustomerorderpayments => {
    return {
      type: GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_SUCCESS,
      unverifiedcustomerorderpayments
    };
  };
  
const getUnverifiedCustomerOrderPaymentListFail = error => {
    return {
      type: GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENTS_FAIL,
      error: error
    };
};
  
const getUnverifiedCustomerOrderPaymentDetailStart = () => {
    return {
      type: GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_START
    };
  };
  
const getUnverifiedCustomerOrderPaymentDetailSuccess = unverifiedcustomerorderpayment => {
    return {
      type: GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_SUCCESS,
      unverifiedcustomerorderpayment
    };
};
  
const getUnverifiedCustomerOrderPaymentDetailFail = error => {
    return {
      type: GET_UNVERIFIED_CUSTOMER_ORDER_PAYMENT_FAIL,
      error: error
    };
};


const verifyCustomerOrderPaymentStart = () => {
    return {
      type: VERIFY_CUSTOMER_ORDER_PAYMENT_START
    };
};
  
const verifyCustomerOrderPaymentSuccess = order => {
    return {
      type: VERIFY_CUSTOMER_ORDER_PAYMENT_SUCCESS,
      order
    };
};
  
const verifyCustomerOrderPaymentFail = error => {
    return {
      type: VERIFY_CUSTOMER_ORDER_PAYMENT_FAIL,
      error: error
    };
};

  


const getCashInvoicePaymentListStart = () => {
    return {
      type: GET_CASH_INVOICE_PAYMENTS_START
    };
  };
  
const getCashInvoicePaymentListSuccess = cashinvoicepayments => {
    return {
      type: GET_CASH_INVOICE_PAYMENTS_SUCCESS,
      cashinvoicepayments
    };
  };
  
const getCashInvoicePaymentListFail = error => {
    return {
      type: GET_CASH_INVOICE_PAYMENTS_FAIL,
      error: error
    };
};
  
const getCashInvoicePaymentDetailStart = () => {
    return {
      type: GET_CASH_INVOICE_PAYMENT_START
    };
  };
  
const getCashInvoicePaymentDetailSuccess = cashinvoicepayment => {
    return {
      type: GET_CASH_INVOICE_PAYMENT_SUCCESS,
      cashinvoicepayment
    };
};
  
const getCashInvoicePaymentDetailFail = error => {
    return {
      type: GET_CASH_INVOICE_PAYMENT_FAIL,
      error: error
    };
};


const getDebitCardInvoicePaymentListStart = () => {
    return {
      type: GET_DEBIT_CARD_INVOICE_PAYMENTS_START
    };
  };
  
const getDebitCardInvoicePaymentListSuccess = debitcardinvoicepayments => {
    return {
      type: GET_DEBIT_CARD_INVOICE_PAYMENTS_SUCCESS,
      debitcardinvoicepayments
    };
  };
  
const getDebitCardInvoicePaymentListFail = error => {
    return {
      type: GET_DEBIT_CARD_INVOICE_PAYMENTS_FAIL,
      error: error
    };
};
  
const getDebitCardInvoicePaymentDetailStart = () => {
    return {
      type: GET_DEBIT_CARD_INVOICE_PAYMENT_START
    };
};

const getDebitCardInvoicePaymentDetailSuccess = debitcardinvoicepayment => {
    return {
      type: GET_DEBIT_CARD_INVOICE_PAYMENT_SUCCESS,
      debitcardinvoicepayment
    };
};
  
const getDebitCardInvoicePaymentDetailFail = error => {
    return {
      type: GET_DEBIT_CARD_INVOICE_PAYMENT_FAIL,
      error: error
    };
};


const getMobileInvoicePaymentListStart = () => {
    return {
      type: GET_MOBILE_INVOICE_PAYMENTS_START
    };
};
  
const getMobileInvoicePaymentListSuccess = mobileinvoicepayments => {
    return {
      type: GET_MOBILE_INVOICE_PAYMENTS_SUCCESS,
      mobileinvoicepayments
    };
  };
  
const getMobileInvoicePaymentListFail = error => {
    return {
      type: GET_MOBILE_INVOICE_PAYMENTS_FAIL,
      error: error
    };
};
  
const getMobileInvoicePaymentDetailStart = () => {
    return {
      type: GET_MOBILE_INVOICE_PAYMENT_START
    };
  };
  
const getMobileInvoicePaymentDetailSuccess = mobileinvoicepayment => {
    return {
      type: GET_MOBILE_INVOICE_PAYMENT_SUCCESS,
      mobileinvoicepayment
    };
};
  
const getMobileInvoicePaymentDetailFail = error => {
    return {
      type: GET_MOBILE_INVOICE_PAYMENT_FAIL,
      error: error
    };
};




const getTransferInvoicePaymentListStart = () => {
    return {
      type: GET_TRANSFER_INVOICE_PAYMENTS_START
    };
};
  
const getTransferInvoicePaymentListSuccess = transferinvoicepayments => {
    return {
      type: GET_TRANSFER_INVOICE_PAYMENTS_SUCCESS,
      transferinvoicepayments
    };
  };
  
const getTransferInvoicePaymentListFail = error => {
    return {
      type: GET_TRANSFER_INVOICE_PAYMENTS_FAIL,
      error: error
    };
};
  
const getTransferInvoicePaymentDetailStart = () => {
    return {
      type: GET_TRANSFER_INVOICE_PAYMENT_START
    };
  };
  
const getTransferInvoicePaymentDetailSuccess = transferinvoicepayment => {
    return {
      type: GET_TRANSFER_INVOICE_PAYMENT_SUCCESS,
      transferinvoicepayment
    };
};
  
const getTransferInvoicePaymentDetailFail = error => {
    return {
      type: GET_TRANSFER_INVOICE_PAYMENT_FAIL,
      error: error
    };
};

  
export const getInvoiceLines = (id, token) => {
  return dispatch => {
      dispatch(getInvoiceLineListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
      axios
        .get(`${invoicelinesURL}?id=${id}`, headers)
        .then(res => {
          const invoicelines = res.data;
          dispatch(getInvoiceLineListSuccess(invoicelines));
          })
        .catch(err => {
          dispatch(getInvoiceLineListFail(err));
        });
    };
};




export const getFullyPaidInvoices = (token) => {
    return dispatch => {
        dispatch(getFullyPaidInvoiceListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(fullypaidinvoicesURL, headers)
          .then(res => {
            const fullypaidinvoices = res.data;
            dispatch(getFullyPaidInvoiceListSuccess(fullypaidinvoices));
            })
          .catch(err => {
            dispatch(getFullyPaidInvoiceListFail(err));
          });
      };
};
  
export const getFullyPaidInvoice = (id, token) => {
    return dispatch => {
        dispatch(getFullyPaidInvoiceDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${fullypaidinvoicesURL}${id}`, headers)
          .then(res => {
            const fullypaidinvoices = res.data;
            dispatch(getFullyPaidInvoiceDetailSuccess(fullypaidinvoices));
            })
          .catch(err => {
            dispatch(getFullyPaidInvoiceDetailFail(err));
          });
      };
};


export const getPartiallyPaidInvoices = (token) => {
    return dispatch => {
        dispatch(getPartiallyPaidInvoiceListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(partiallypaidinvoicesURL, headers)
          .then(res => {
            const partiallypaidinvoices = res.data;
            dispatch(getPartiallyPaidInvoiceListSuccess(partiallypaidinvoices));
            })
          .catch(err => {
            dispatch(getPartiallyPaidInvoiceListFail(err));
          });
      };
};
  
export const getPartiallyPaidInvoice = (id, token) => {
    return dispatch => {
        dispatch(getPartiallyPaidInvoiceDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${partiallypaidinvoicesURL}${id}`, headers)
          .then(res => {
            const partiallypaidinvoices = res.data;
            dispatch(getPartiallyPaidInvoiceDetailSuccess(partiallypaidinvoices));
            })
          .catch(err => {
            dispatch(getPartiallyPaidInvoiceDetailFail(err));
          });
      };
};




export const getUnpaidInvoices = (token) => {
    return dispatch => {
        dispatch(getUnpaidInvoiceListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(unpaidinvoicesURL, headers)
          .then(res => {
            const unpaidinvoices = res.data;
            dispatch(getUnpaidInvoiceListSuccess(unpaidinvoices));
            })
          .catch(err => {
            dispatch(getUnpaidInvoiceListFail(err));
          });
      };
};
  
export const getUnpaidInvoice = (id, token) => {
    return dispatch => {
        dispatch(getUnpaidInvoiceDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${unpaidinvoicesURL}${id}`, headers)
          .then(res => {
            const unpaidinvoices = res.data;
            dispatch(getUnpaidInvoiceDetailSuccess(unpaidinvoices));
            })
          .catch(err => {
            dispatch(getUnpaidInvoiceDetailFail(err));
          });
      };
};


export const getCustomerOrders = (token) => {
    return dispatch => {
        dispatch(getCustomerOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(customerordersURL, headers)
          .then(res => {
            const customerorders = res.data;
            dispatch(getCustomerOrderListSuccess(customerorders));
            })
          .catch(err => {
            dispatch(getCustomerOrderListFail(err));
          });
      };
};
  
export const getCustomerOrder = (id, token) => {
    return dispatch => {
        dispatch(getCustomerOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${customerordersURL}${id}`, headers)
          .then(res => {
            const customerorder = res.data;
            dispatch(getCustomerOrderDetailSuccess(customerorder));
            })
          .catch(err => {
            dispatch(getCustomerOrderDetailFail(err));
          });
      };
};




export const getPendingCustomerOrders = (token) => {
    return dispatch => {
        dispatch(getPendingCustomerOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(pendingcustomerordersURL, headers)
          .then(res => {
            const pendingcustomerorders = res.data;
            dispatch(getPendingCustomerOrderListSuccess(pendingcustomerorders));
            })
          .catch(err => {
            dispatch(getPendingCustomerOrderListFail(err));
          });
      };
};
  
export const getPendingCustomerOrder = (id, token) => {
    return dispatch => {
        dispatch(getPendingCustomerOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${pendingcustomerordersURL}${id}`, headers)
          .then(res => {
            const pendingcustomerorder = res.data;
            dispatch(getPendingCustomerOrderDetailSuccess(pendingcustomerorder));
            })
          .catch(err => {
            dispatch(getPendingCustomerOrderDetailFail(err));
          });
      };
};



export const getRejectedCustomerOrders = (token) => {
    return dispatch => {
        dispatch(getRejectedCustomerOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(rejectedcustomerordersURL, headers)
          .then(res => {
            const rejectedcustomerorders = res.data;
            dispatch(getRejectedCustomerOrderListSuccess(rejectedcustomerorders));
            })
          .catch(err => {
            dispatch(getRejectedCustomerOrderListFail(err));
          });
      };
};
  
export const getRejectedCustomerOrder = (id, token) => {
    return dispatch => {
        dispatch(getRejectedCustomerOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${rejectedcustomerordersURL}${id}`, headers)
          .then(res => {
            const rejectedcustomerorder = res.data;
            dispatch(getRejectedCustomerOrderDetailSuccess(rejectedcustomerorder));
            })
          .catch(err => {
            dispatch(getRejectedCustomerOrderDetailFail(err));
          });
      };
};


export const getCancelledCustomerOrders = (token) => {
    return dispatch => {
        dispatch(getCancelledCustomerOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(cancelledcustomerordersURL, headers)
          .then(res => {
            const cancelledcustomerorders = res.data;
            dispatch(getCancelledCustomerOrderListSuccess(cancelledcustomerorders));
            })
          .catch(err => {
            dispatch(getCancelledCustomerOrderListFail(err));
          });
      };
};
  
export const getCancelledCustomerOrder = (id, token) => {
    return dispatch => {
        dispatch(getCancelledCustomerOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${cancelledcustomerordersURL}${id}`, headers)
          .then(res => {
            const cancelledcustomerorder = res.data;
            dispatch(getCancelledCustomerOrderDetailSuccess(cancelledcustomerorder));
            })
          .catch(err => {
            dispatch(getCancelledCustomerOrderDetailFail(err));
          });
      };
};




export const getCompletedCustomerOrders = (token) => {
    return dispatch => {
        dispatch(getCompletedCustomerOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(completedcustomerordersURL, headers)
          .then(res => {
            const completedcustomerorders = res.data;
            dispatch(getCompletedCustomerOrderListSuccess(completedcustomerorders));
            })
          .catch(err => {
            dispatch(getCompletedCustomerOrderListFail(err));
          });
      };
};
  
export const getCompletedCustomerOrder = (id, token) => {
    return dispatch => {
        dispatch(getCompletedCustomerOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${completedcustomerordersURL}${id}`, headers)
          .then(res => {
            const completedcustomerorder = res.data;
            dispatch(getCompletedCustomerOrderDetailSuccess(completedcustomerorder));
            })
          .catch(err => {
            dispatch(getCompletedCustomerOrderDetailFail(err));
          });
      };
};


export const getRefundedCustomerOrders = (token) => {
    return dispatch => {
        dispatch(getRefundedCustomerOrderListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(refundedcustomerordersURL, headers)
          .then(res => {
            const refundedcustomerorders = res.data;
            dispatch(getRefundedCustomerOrderListSuccess(refundedcustomerorders));
            })
          .catch(err => {
            dispatch(getRefundedCustomerOrderListFail(err));
          });
      };
};

  
export const getRefundedCustomerOrder = (id, token) => {
    return dispatch => {
        dispatch(getRefundedCustomerOrderDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${refundedcustomerordersURL}${id}`, headers)
          .then(res => {
            const refundedcustomerorder = res.data;
            dispatch(getRefundedCustomerOrderDetailSuccess(refundedcustomerorder));
            })
          .catch(err => {
            dispatch(getRefundedCustomerOrderDetailFail(err));
          });
      };
};


export const getHardcopyOrderItems = (id, token) => {
    return dispatch => {
        dispatch(getHardcopyOrderItemListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${hardcopyorderitemsURL}?id=${id}`, headers)
          .then(res => {
            const hardcopyorderitems = res.data;
            dispatch(getHardcopyOrderItemListSuccess(hardcopyorderitems));
            })
          .catch(err => {
            dispatch(getHardcopyOrderItemListFail(err));
          });
      };
};


export const getSeriesOrderItems = (id, token) => {
    return dispatch => {
        dispatch(getSeriesOrderItemListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${seriesorderitemsURL}?id=${id}`, headers)
          .then(res => {
            const seriesorderitems = res.data;
            dispatch(getSeriesOrderItemListSuccess(seriesorderitems));
            })
          .catch(err => {
            dispatch(getSeriesOrderItemListFail(err));
          });
      };
};



export const getEbookOrderItems = (id, token) => {
    return dispatch => {
        dispatch(getEbookOrderItemListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${ebookorderitemsURL}?id=${id}`, headers)
          .then(res => {
            const ebookorderitems = res.data;
            dispatch(getEbookOrderItemListSuccess(ebookorderitems));
            })
          .catch(err => {
            dispatch(getEbookOrderItemListFail(err));
          });
      };
};


export const acceptCustomerOrder = (id, order, token) => {
    return dispatch => {
        dispatch(acceptCustomerOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${pendingcustomerordersURL}${id}/accept/`, order, headers)
          .then(res => {
            dispatch(acceptCustomerOrderSuccess(order));
          })
          .catch(err => {
            dispatch(acceptCustomerOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};


export const rejectCustomerOrder = (id, order, token) => {
    return dispatch => {
        dispatch(rejectCustomerOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${pendingcustomerordersURL}${id}/reject/`, order, headers)
          .then(res => {
            dispatch(rejectCustomerOrderSuccess(order));
          })
          .catch(err => {
            dispatch(rejectCustomerOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};


export const acceptRejectedCustomerOrder = (id, order, token) => {
    return dispatch => {
        dispatch(acceptRejectedCustomerOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${rejectedcustomerordersURL}${id}/accept/`, order, headers)
          .then(res => {
            dispatch(acceptRejectedCustomerOrderSuccess(order));
          })
          .catch(err => {
            dispatch(acceptRejectedCustomerOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};


export const refundCustomerOrder = (id, order, token) => {
    return dispatch => {
        dispatch(refundCustomerOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${completedcustomerordersURL}${id}/refund/`, order, headers)
          .then(res => {
            dispatch(refundCustomerOrderSuccess(order));
          })
          .catch(err => {
            dispatch(refundCustomerOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};



export const payCustomerOrder = (id, order, token) => {
    return dispatch => {
        dispatch(payCustomerOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${unpaidinvoicesURL}${id}/pay/`, order, headers)
          .then(res => {
            dispatch(payCustomerOrderSuccess(order));
          })
          .catch(err => {
            dispatch(payCustomerOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};


export const payPartiallyCustomerOrder = (id, order, token) => {
    return dispatch => {
        dispatch(payPartiallyCustomerOrderStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${partiallypaidinvoicesURL}${id}/pay/`, order, headers)
          .then(res => {
            dispatch(payPartiallyCustomerOrderSuccess(order));
          })
          .catch(err => {
            dispatch(payPartiallyCustomerOrderFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};




export const getUnverifiedCustomerOrderPayments = (id, token) => {
    return dispatch => {
        dispatch(getUnverifiedCustomerOrderPaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${unverifiedinvoicepaymentsURL}?id=${id}`, headers)
          .then(res => {
            const unverifiedcustomerorderpayments = res.data;
            dispatch(getUnverifiedCustomerOrderPaymentListSuccess(unverifiedcustomerorderpayments));
            })
          .catch(err => {
            dispatch(getUnverifiedCustomerOrderPaymentListFail(err));
          });
      };
};
  
export const getUnverifiedCustomerOrderPayment = (id, token) => {
    return dispatch => {
        dispatch(getUnverifiedCustomerOrderPaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${unverifiedinvoicepaymentsURL}${id}`, headers)
          .then(res => {
            const unverifiedcustomerorderpayment = res.data;
            dispatch(getUnverifiedCustomerOrderPaymentDetailSuccess(unverifiedcustomerorderpayment));
            })
          .catch(err => {
            dispatch(getUnverifiedCustomerOrderPaymentDetailFail(err));
          });
      };
};


export const verifyCustomerOrderPayment = (id, order, token) => {
    return dispatch => {
        dispatch(verifyCustomerOrderPaymentStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .post(`${unverifiedinvoicepaymentsURL}${id}/verify/`, order, headers)
          .then(res => {
            dispatch(verifyCustomerOrderPaymentSuccess(order));
          })
          .catch(err => {
            dispatch(verifyCustomerOrderPaymentFail(err));
            dispatch(returnErrors(err.response.data, err.response.status));
          });
      };
};



export const getCashInvoicePayments = (id, token) => {
    return dispatch => {
        dispatch(getCashInvoicePaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${cashinvoicepaymentsURL}?id=${id}`, headers)
          .then(res => {
            const cashinvoicepayments = res.data;
            dispatch(getCashInvoicePaymentListSuccess(cashinvoicepayments));
            })
          .catch(err => {
            dispatch(getCashInvoicePaymentListFail(err));
          });
      };
};

  
export const getCashInvoicePayment = (id, token) => {
    return dispatch => {
        dispatch(getCashInvoicePaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${cashinvoicepaymentsURL}${id}`, headers)
          .then(res => {
            const cashinvoicepayment = res.data;
            dispatch(getCashInvoicePaymentDetailSuccess(cashinvoicepayment));
            })
          .catch(err => {
            dispatch(getCashInvoicePaymentDetailFail(err));
          });
      };
};



export const getDebitCardInvoicePayments = (id, token) => {
    return dispatch => {
        dispatch(getDebitCardInvoicePaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${debitcardinvoicepaymentsURL}?id=${id}`, headers)
          .then(res => {
            const debitcardinvoicepayments = res.data;
            dispatch(getDebitCardInvoicePaymentListSuccess(debitcardinvoicepayments));
            })
          .catch(err => {
            dispatch(getDebitCardInvoicePaymentListFail(err));
          });
      };
};

  
export const getDebitCardInvoicePayment = (id, token) => {
    return dispatch => {
        dispatch(getDebitCardInvoicePaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${debitcardinvoicepaymentsURL}${id}`, headers)
          .then(res => {
            const debitcardinvoicepayment = res.data;
            dispatch(getDebitCardInvoicePaymentDetailSuccess(debitcardinvoicepayment));
            })
          .catch(err => {
            dispatch(getDebitCardInvoicePaymentDetailFail(err));
          });
      };
};


export const getMobileInvoicePayments = (id, token) => {
    return dispatch => {
        dispatch(getMobileInvoicePaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${mobileinvoicepaymentsURL}?id=${id}`, headers)
          .then(res => {
            const mobileinvoicepayments = res.data;
            dispatch(getMobileInvoicePaymentListSuccess(mobileinvoicepayments));
            })
          .catch(err => {
            dispatch(getMobileInvoicePaymentListFail(err));
          });
      };
};

  
export const getMobileInvoicePayment = (id, token) => {
    return dispatch => {
        dispatch(getMobileInvoicePaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${mobileinvoicepaymentsURL}${id}`, headers)
          .then(res => {
            const mobileinvoicepayment = res.data;
            dispatch(getMobileInvoicePaymentDetailSuccess(mobileinvoicepayment));
            })
          .catch(err => {
            dispatch(getMobileInvoicePaymentDetailFail(err));
          });
      };
};




export const getTransferInvoicePayments = (id, token) => {
    return dispatch => {
        dispatch(getTransferInvoicePaymentListStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${transferinvoicepaymentsURL}?id=${id}`, headers)
          .then(res => {
            const transferinvoicepayments = res.data;
            dispatch(getTransferInvoicePaymentListSuccess(transferinvoicepayments));
            })
          .catch(err => {
            dispatch(getTransferInvoicePaymentListFail(err));
          });
      };
};

  
export const getTransferInvoicePayment = (id, token) => {
    return dispatch => {
        dispatch(getTransferInvoicePaymentDetailStart());
        let headers = axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        };
        axios
          .get(`${transferinvoicepaymentsURL}${id}`, headers)
          .then(res => {
            const transferinvoicepayment = res.data;
            dispatch(getTransferInvoicePaymentDetailSuccess(transferinvoicepayment));
            })
          .catch(err => {
            dispatch(getTransferInvoicePaymentDetailFail(err));
          });
      };
};