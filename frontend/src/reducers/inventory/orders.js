import {
    GET_FULLY_PAID_ORDERS_START,
    GET_FULLY_PAID_ORDERS_SUCCESS,
    GET_FULLY_PAID_ORDERS_FAIL,
    GET_FULLY_PAID_ORDER_START,
    GET_FULLY_PAID_ORDER_SUCCESS,
    GET_FULLY_PAID_ORDER_FAIL,
    GET_PARTIALLY_PAID_ORDERS_START,
    GET_PARTIALLY_PAID_ORDERS_SUCCESS,
    GET_PARTIALLY_PAID_ORDERS_FAIL,
    GET_PARTIALLY_PAID_ORDER_START,
    GET_PARTIALLY_PAID_ORDER_SUCCESS,
    GET_PARTIALLY_PAID_ORDER_FAIL,
    GET_UNPAID_ORDERS_START,
    GET_UNPAID_ORDERS_SUCCESS,
    GET_UNPAID_ORDERS_FAIL,
    GET_UNPAID_ORDER_START,
    GET_UNPAID_ORDER_SUCCESS,
    GET_UNPAID_ORDER_FAIL,
    GET_UNVERIFIED_ORDERS_START,
    GET_UNVERIFIED_ORDERS_SUCCESS,
    GET_UNVERIFIED_ORDERS_FAIL,
    GET_UNVERIFIED_ORDER_START,
    GET_UNVERIFIED_ORDER_SUCCESS,
    GET_UNVERIFIED_ORDER_FAIL,
    GET_FULLY_RECEIVED_ORDERS_START,
    GET_FULLY_RECEIVED_ORDERS_SUCCESS,
    GET_FULLY_RECEIVED_ORDERS_FAIL,
    GET_FULLY_RECEIVED_ORDER_START,
    GET_FULLY_RECEIVED_ORDER_SUCCESS,
    GET_FULLY_RECEIVED_ORDER_FAIL,
    GET_PARTIALLY_RECEIVED_ORDERS_START,
    GET_PARTIALLY_RECEIVED_ORDERS_SUCCESS,
    GET_PARTIALLY_RECEIVED_ORDERS_FAIL,
    GET_PARTIALLY_RECEIVED_ORDER_START,
    GET_PARTIALLY_RECEIVED_ORDER_SUCCESS,
    GET_PARTIALLY_RECEIVED_ORDER_FAIL,
    GET_UNRECEIVED_ORDERS_START,
    GET_UNRECEIVED_ORDERS_SUCCESS,
    GET_UNRECEIVED_ORDERS_FAIL,
    GET_UNRECEIVED_ORDER_START,
    GET_UNRECEIVED_ORDER_SUCCESS,
    GET_UNRECEIVED_ORDER_FAIL,
    GET_UNVERIFIED_DEBIT_NOTES_START,
    GET_UNVERIFIED_DEBIT_NOTES_SUCCESS,
    GET_UNVERIFIED_DEBIT_NOTES_FAIL,
    GET_UNVERIFIED_DEBIT_NOTE_START,
    GET_UNVERIFIED_DEBIT_NOTE_SUCCESS,
    GET_UNVERIFIED_DEBIT_NOTE_FAIL,
    GET_VERIFIED_DEBIT_NOTES_START,
    GET_VERIFIED_DEBIT_NOTES_SUCCESS,
    GET_VERIFIED_DEBIT_NOTES_FAIL,
    GET_VERIFIED_DEBIT_NOTE_START,
    GET_VERIFIED_DEBIT_NOTE_SUCCESS,
    GET_VERIFIED_DEBIT_NOTE_FAIL,
    GET_ORDER_ITEMS_START,
    GET_ORDER_ITEMS_SUCCESS,
    GET_ORDER_ITEMS_FAIL,
    GET_DEBIT_NOTE_LINES_START,
    GET_DEBIT_NOTE_LINES_SUCCESS,
    GET_DEBIT_NOTE_LINES_FAIL,
    GET_UNVERIFIED_ORDER_PAYMENTS_START,
    GET_UNVERIFIED_ORDER_PAYMENTS_SUCCESS,
    GET_UNVERIFIED_ORDER_PAYMENTS_FAIL,
    GET_UNVERIFIED_ORDER_PAYMENT_START,
    GET_UNVERIFIED_ORDER_PAYMENT_SUCCESS,
    GET_UNVERIFIED_ORDER_PAYMENT_FAIL,
    GET_CASH_ORDER_PAYMENTS_START,
    GET_CASH_ORDER_PAYMENTS_SUCCESS,
    GET_CASH_ORDER_PAYMENTS_FAIL,
    GET_CASH_ORDER_PAYMENT_START,
    GET_CASH_ORDER_PAYMENT_SUCCESS,
    GET_CASH_ORDER_PAYMENT_FAIL,
    GET_DEBIT_CARD_ORDER_PAYMENTS_START,
    GET_DEBIT_CARD_ORDER_PAYMENTS_SUCCESS,
    GET_DEBIT_CARD_ORDER_PAYMENTS_FAIL,
    GET_DEBIT_CARD_ORDER_PAYMENT_START,
    GET_DEBIT_CARD_ORDER_PAYMENT_SUCCESS,
    GET_DEBIT_CARD_ORDER_PAYMENT_FAIL,
    GET_MOBILE_ORDER_PAYMENTS_START,
    GET_MOBILE_ORDER_PAYMENTS_SUCCESS,
    GET_MOBILE_ORDER_PAYMENTS_FAIL,
    GET_MOBILE_ORDER_PAYMENT_START,
    GET_MOBILE_ORDER_PAYMENT_SUCCESS,
    GET_MOBILE_ORDER_PAYMENT_FAIL,
    GET_TRANSFER_ORDER_PAYMENTS_START,
    GET_TRANSFER_ORDER_PAYMENTS_SUCCESS,
    GET_TRANSFER_ORDER_PAYMENTS_FAIL,
    GET_TRANSFER_ORDER_PAYMENT_START,
    GET_TRANSFER_ORDER_PAYMENT_SUCCESS,
    GET_TRANSFER_ORDER_PAYMENT_FAIL,
    GET_STOCK_RECEIPTS_START,
    GET_STOCK_RECEIPTS_SUCCESS,
    GET_STOCK_RECEIPTS_FAIL,
    GET_STOCK_RECEIPT_START,
    GET_STOCK_RECEIPT_SUCCESS,
    GET_STOCK_RECEIPT_FAIL,
    GET_STOCK_RECEIPT_LINES_START,
    GET_STOCK_RECEIPT_LINES_SUCCESS,
    GET_STOCK_RECEIPT_LINES_FAIL,
    CREATE_ORDER_START,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CREATE_DEBIT_NOTE_START,
    CREATE_DEBIT_NOTE_SUCCESS,
    CREATE_DEBIT_NOTE_FAIL,
    VERIFY_ORDER_START,
    VERIFY_ORDER_SUCCESS,
    VERIFY_ORDER_FAIL,
    PAY_ORDER_START,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,
    PAY_PARTIALLY_ORDER_START,
    PAY_PARTIALLY_ORDER_SUCCESS,
    PAY_PARTIALLY_ORDER_FAIL,
    RECEIVE_STOCK_START,
    RECEIVE_STOCK_SUCCESS,
    RECEIVE_STOCK_FAIL,
    RECEIVE_PARTIALLY_STOCK_START,
    RECEIVE_PARTIALLY_STOCK_SUCCESS,
    RECEIVE_PARTIALLY_STOCK_FAIL,
    VERIFY_PAYMENT_START,
    VERIFY_PAYMENT_SUCCESS,
    VERIFY_PAYMENT_FAIL,

} from '../../types/orderTypes';
import { updateObject } from "../../utility";
const initialState = {
    unverifiedorders: [],
    unverifiedorder: {},
    fullypaidorders: [],
    fullypaidorder: {},
    partiallypaidorders: [],
    partiallypaidorder: {},
    unpaidorders: [],
    unpaidorder: {},
    unreceivedorders: [],
    unreceivedorder: {},
    partiallyreceivedorders: [],
    partiallyreceivedorder: {},
    fullyreceivedorders: [],
    fullyreceivedorder: {},
    unverifieddebitnotes: [],
    unverifieddebitnote: {},
    verifieddebitnotes: [],
    verifieddebitnote: {},
    debitnotelines: [],
    orderitems: [],
    unverifiedorderpayments: [],
    unverifiedorderpayment: {},
    cashorderpayments: [],
    cashorderpayment: {},
    debitcardorderpayments: [],
    debitcardorderpayment: {},
    mobileorderpayments: [],
    mobileorderpayment: {},
    partnerorderpayments: [],
    partnerorderpayment: {},
    stockreceipts: [],
    stockreceipt: {},
    stockreceiptlines: [],
    loading: false,
    error: null,
}





const getUnverifiedOrderListStart = (state, action) => {
    return updateObject(state, {
        
        error: null,
        loading: true
    });
};
  
const getUnverifiedOrderListSuccess = (state, action) => {
    return updateObject(state, {
        unverifiedorders: action.unverifiedorders,
        error: null,
        loading: true
    });
};

const getUnverifiedOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getUnverifiedOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getUnverifiedOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        unverifiedorder: action.unverifiedorder,
        error: null,
        loading: true
    });
};

const getUnverifiedOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getFullyPaidOrderListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getFullyPaidOrderListSuccess = (state, action) => {
    return updateObject(state, {
        fullypaidorders: action.fullypaidorders,
        error: null,
        loading: true
    });
};

const getFullyPaidOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getFullyPaidOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getFullyPaidOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        fullypaidorder: action.fullypaidorder,
        error: null,
        loading: true
    });
};

const getFullyPaidOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getPartiallyPaidOrderListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getPartiallyPaidOrderListSuccess = (state, action) => {
    return updateObject(state, {
        partiallypaidorders: action.partiallypaidorders,
        error: null,
        loading: true
    });
};

const getPartiallyPaidOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getPartiallyPaidOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getPartiallyPaidOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        partiallypaidorder: action.partiallypaidorder,
        error: null,
        loading: true
    });
};

const getPartiallyPaidOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};




const getUnpaidOrderListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getUnpaidOrderListSuccess = (state, action) => {
    return updateObject(state, {
        unpaidorders: action.unpaidorders,
        error: null,
        loading: true
    });
};

const getUnpaidOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getUnpaidOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getUnpaidOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        unpaidorder: action.unpaidorder,
        error: null,
        loading: true
    });
};

const getUnpaidOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getFullyReceivedOrderListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getFullyReceivedOrderListSuccess = (state, action) => {
    return updateObject(state, {
        fullyreceivedorders: action.fullyreceivedorders,
        error: null,
        loading: true
    });
};

const getFullyReceivedOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getFullyReceivedOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getFullyReceivedOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        fullyreceivedorder: action.fullyreceivedorder,
        error: null,
        loading: true
    });
};

const getFullyReceivedOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getPartiallyReceivedOrderListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getPartiallyReceivedOrderListSuccess = (state, action) => {
    return updateObject(state, {
        partiallyreceivedorders: action.partiallyreceivedorders,
        error: null,
        loading: true
    });
};

const getPartiallyReceivedOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getPartiallyReceivedOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getPartiallyReceivedOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        partiallyreceivedorder: action.partiallyreceivedorder,
        error: null,
        loading: true
    });
};

const getPartiallyReceivedOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getUnreceivedOrderListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getUnreceivedOrderListSuccess = (state, action) => {
    return updateObject(state, {
        unreceivedorders: action.unreceivedorders,
        error: null,
        loading: true
    });
};

const getUnreceivedOrderListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getUnreceivedOrderDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getUnreceivedOrderDetailSuccess = (state, action) => {
    return updateObject(state, {
        unreceivedorder: action.unreceivedorder,
        error: null,
        loading: true
    });
};

const getUnreceivedOrderDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getUnverifiedDebitNoteListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getUnverifiedDebitNoteListSuccess = (state, action) => {
    return updateObject(state, {
        unverifieddebitnotes: action.unverifieddebitnotes,
        error: null,
        loading: true
    });
};

const getUnverifiedDebitNoteListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getUnverifiedDebitNoteDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getUnverifiedDebitNoteDetailSuccess = (state, action) => {
    return updateObject(state, {
        unverifieddebitnote: action.unverifieddebitnote,
        error: null,
        loading: true
    });
};

const getUnverifiedDebitNoteDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getVerifiedDebitNoteListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getVerifiedDebitNoteListSuccess = (state, action) => {
    return updateObject(state, {
        verifieddebitnotes: action.verifieddebitnotes,
        error: null,
        loading: true
    });
};

const getVerifiedDebitNoteListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getVerifiedDebitNoteDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getVerifiedDebitNoteDetailSuccess = (state, action) => {
    return updateObject(state, {
        verifieddebitnote: action.verifieddebitnote,
        error: null,
        loading: true
    });
};

const getVerifiedDebitNoteDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getDebitNoteLineListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getDebitNoteLineListSuccess = (state, action) => {
    return updateObject(state, {
        verifieddebitnotelines: action.verifieddebitnotelines,
        error: null,
        loading: true
    });
};

const getDebitNoteLineListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getOrderItemListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getOrderItemListSuccess = (state, action) => {
    return updateObject(state, {
        orderitems: action.orderitems,
        error: null,
        loading: true
    });
};


const getOrderItemListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};




const getUnverifiedOrderPaymentListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getUnverifiedOrderPaymentListSuccess =(state, action) => {
    return updateObject(state, {
        unverifiedorderpayments: action.unverifiedorderpayments,
        error: null,
        loading: true
    });
};

const getUnverifiedOrderPaymentListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getUnverifiedOrderPaymentDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getUnverifiedOrderPaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
        unverifiedorderpayment: action.unverifiedorderpayment,
        error: null,
        loading: true
    });
};

const getUnverifiedOrderPaymentDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getCashOrderPaymentListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getCashOrderPaymentListSuccess = (state, action) => {
    return updateObject(state, {
        cashorderpayments: action.cashorderpayments,
        error: null,
        loading: true
    });
};

const getCashOrderPaymentListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getCashOrderPaymentDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getCashOrderPaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
        cashorderpayment: action.cashorderpayment,
        error: null,
        loading: true
    });
};

const getCashOrderPaymentDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getDebitCardOrderPaymentListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getDebitCardOrderPaymentListSuccess = (state, action) => {
    return updateObject(state, {
        debitcardorderpayments: action.debitcardorderpayments,
        error: null,
        loading: true
    });
};

const getDebitCardOrderPaymentListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getDebitCardOrderPaymentDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getDebitCardOrderPaymentDetailSuccess = (state, action) => {

    return updateObject(state, {
        debitcardorderpayment: action.debitcardorderpayment,
        error: null,
        loading: true
    });
};

const getDebitCardOrderPaymentDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getMobileOrderPaymentListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getMobileOrderPaymentListSuccess = (state, action) => {
    return updateObject(state, {
        mobileorderpayments: action.mobileorderpayments,
        error: null,
        loading: true
    });
};

const getMobileOrderPaymentListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getMobileOrderPaymentDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getMobileOrderPaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
        mobileorderpayment: action.mobileorderpayment,
        error: null,
        loading: true
    });
};

const getMobileOrderPaymentDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getTransferOrderPaymentListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getTransferOrderPaymentListSuccess = (state, action) => {
    return updateObject(state, {
        transferorderpayments: action.transferorderpayments,
        error: null,
        loading: true
    });
};

const getTransferOrderPaymentListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getTransferOrderPaymentDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getTransferOrderPaymentDetailSuccess = (state, action) => {
    return updateObject(state, {
        transferorderpayment: action.transferorderpayment,
        error: null,
        loading: true
    });
};

const getTransferOrderPaymentDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getStockReceiptListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getStockReceiptListSuccess = (state, action) => {
    return updateObject(state, {
        stockreceipts: action.stockreceipts,
        error: null,
        loading: true
    });
};

const getStockReceiptListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const getStockReceiptDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getStockReceiptDetailSuccess = (state, action) => {
    return updateObject(state, {
        stockreceipt: action.stockreceipt,
        error: null,
        loading: true
    });
};

const getStockReceiptDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getStockReceiptLineListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};
  
const getStockReceiptLineListSuccess = (state, action) => {
    return updateObject(state, {
        stockreceiptlines: action.stockreceiptlines,
        error: null,
        loading: true
    });
};

const getStockReceiptLineListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createOrderStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createOrderSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const createOrderFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const verifyOrderStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const verifyOrderSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const verifyOrderFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createDebitNoteStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const createDebitNoteSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const createDebitNoteFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const receiveStockStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const receiveStockSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const receiveStockFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const receivePartiallyStockStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const receivePartiallyStockSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const receivePartiallyStockFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const payOrderStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const payOrderSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const payOrderFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const payPartiallyOrderStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const payPartiallyOrderSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const payPartiallyOrderFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const verifyPaymentStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


const verifyPaymentSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const verifyPaymentFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};


export default function orders(state = initialState, action){
    switch(action.type){
        case GET_UNVERIFIED_ORDERS_START:
            return getUnverifiedOrderListStart(state, action);
        case GET_UNVERIFIED_ORDERS_SUCCESS:
            return getUnverifiedOrderListSuccess(state, action);
        case GET_UNVERIFIED_ORDERS_FAIL:
            return getUnverifiedOrderListFail(state, action);
        case GET_UNVERIFIED_ORDER_START:
            return getUnverifiedOrderDetailStart(state, action);
        case GET_UNVERIFIED_ORDER_SUCCESS:
            return getUnverifiedOrderDetailSuccess(state, action);
        case GET_UNVERIFIED_ORDER_FAIL:
            return getUnverifiedOrderDetailFail(state, action);
        case GET_FULLY_PAID_ORDERS_START:
            return getFullyPaidOrderListStart(state, action);
        case GET_FULLY_PAID_ORDERS_SUCCESS:
            return getFullyPaidOrderListSuccess(state, action);
        case GET_FULLY_PAID_ORDERS_FAIL:
            return getFullyPaidOrderListFail(state, action);
        case GET_FULLY_PAID_ORDER_START:
            return getFullyPaidOrderDetailStart(state, action);
        case GET_FULLY_PAID_ORDER_SUCCESS:
            return getFullyPaidOrderDetailSuccess(state, action);
        case GET_FULLY_PAID_ORDER_FAIL:
            return getFullyPaidOrderDetailFail(state, action);
        case GET_PARTIALLY_PAID_ORDERS_START:
            return getPartiallyPaidOrderListStart(state, action);
        case GET_PARTIALLY_PAID_ORDERS_SUCCESS:
            return getPartiallyPaidOrderListSuccess(state, action);
        case GET_PARTIALLY_PAID_ORDERS_FAIL:
            return getPartiallyPaidOrderListFail(state, action);
        case GET_PARTIALLY_PAID_ORDER_START:
            return getPartiallyPaidOrderDetailStart(state, action);
        case GET_PARTIALLY_PAID_ORDER_SUCCESS:
            return getPartiallyPaidOrderDetailSuccess(state, action);
        case GET_PARTIALLY_PAID_ORDER_FAIL:
            return getPartiallyPaidOrderDetailFail(state, action);
        case GET_UNPAID_ORDERS_START:
            return getUnpaidOrderListStart(state, action);
        case GET_UNPAID_ORDERS_SUCCESS:
            return getUnpaidOrderListSuccess(state, action);
        case GET_UNPAID_ORDERS_FAIL:
            return getUnpaidOrderListFail(state, action);
        case GET_UNPAID_ORDER_START:
            return getUnpaidOrderDetailStart(state, action);
        case GET_UNPAID_ORDER_SUCCESS:
            return getUnpaidOrderDetailSuccess(state, action);
        case GET_UNPAID_ORDER_FAIL:
            return getUnpaidOrderDetailFail(state, action);
        case GET_UNRECEIVED_ORDERS_START:
            return getUnreceivedOrderListStart(state, action);
        case GET_UNRECEIVED_ORDERS_SUCCESS:
            return getUnreceivedOrderListSuccess(state, action);
        case GET_UNRECEIVED_ORDERS_FAIL:
            return getUnreceivedOrderListFail(state, action);
        case GET_UNRECEIVED_ORDER_START:
            return getUnreceivedOrderDetailStart(state, action);
        case GET_UNRECEIVED_ORDER_SUCCESS:
            return getUnreceivedOrderDetailSuccess(state, action);
        case GET_UNRECEIVED_ORDER_FAIL:
            return getUnreceivedOrderDetailFail(state, action);
        case GET_FULLY_RECEIVED_ORDERS_START:
            return getFullyReceivedOrderListStart(state, action);
        case GET_FULLY_RECEIVED_ORDERS_SUCCESS:
            return getFullyReceivedOrderListSuccess(state, action);
        case GET_FULLY_RECEIVED_ORDERS_FAIL:
            return getFullyReceivedOrderListFail(state, action);
        case GET_FULLY_RECEIVED_ORDER_START:
            return getFullyReceivedOrderDetailStart(state, action);
        case GET_FULLY_RECEIVED_ORDER_SUCCESS:
            return getFullyReceivedOrderDetailSuccess(state, action);
        case GET_FULLY_RECEIVED_ORDER_FAIL:
            return getFullyReceivedOrderDetailFail(state, action);
        case GET_PARTIALLY_RECEIVED_ORDERS_START:
            return getPartiallyReceivedOrderListStart(state, action);
        case GET_PARTIALLY_RECEIVED_ORDERS_SUCCESS:
            return getPartiallyReceivedOrderListSuccess(state, action);
        case GET_PARTIALLY_RECEIVED_ORDERS_FAIL:
            return getPartiallyReceivedOrderListFail(state, action);
        case GET_PARTIALLY_RECEIVED_ORDER_START:
            return getPartiallyReceivedOrderDetailStart(state, action);
        case GET_PARTIALLY_RECEIVED_ORDER_SUCCESS:
            return getPartiallyReceivedOrderDetailSuccess(state, action);
        case GET_PARTIALLY_RECEIVED_ORDER_FAIL:
            return getPartiallyReceivedOrderDetailFail(state, action);
        case GET_UNVERIFIED_DEBIT_NOTES_START:
            return getUnverifiedDebitNoteListStart(state, action);
        case GET_UNVERIFIED_DEBIT_NOTES_SUCCESS:
            return getUnverifiedDebitNoteListSuccess(state, action);
        case GET_UNVERIFIED_DEBIT_NOTES_FAIL:
            return getUnverifiedDebitNoteListFail(state, action);
        case GET_UNVERIFIED_DEBIT_NOTE_START:
            return getUnverifiedDebitNoteDetailStart(state, action);
        case GET_UNVERIFIED_DEBIT_NOTE_SUCCESS:
            return getUnverifiedDebitNoteDetailSuccess(state, action);
        case GET_UNVERIFIED_DEBIT_NOTE_FAIL:
            return getUnverifiedDebitNoteDetailFail(state, action);
        case GET_VERIFIED_DEBIT_NOTES_START:
            return getVerifiedDebitNoteListStart(state, action);
        case GET_VERIFIED_DEBIT_NOTES_SUCCESS:
            return getVerifiedDebitNoteListSuccess(state, action);
        case GET_VERIFIED_DEBIT_NOTES_FAIL:
            return getVerifiedDebitNoteListFail(state, action);
        case GET_VERIFIED_DEBIT_NOTE_START:
            return getVerifiedDebitNoteDetailStart(state, action);
        case GET_VERIFIED_DEBIT_NOTE_SUCCESS:
            return getVerifiedDebitNoteDetailSuccess(state, action);
        case GET_VERIFIED_DEBIT_NOTE_FAIL:
            return getVerifiedDebitNoteDetailFail(state, action);
        case GET_DEBIT_NOTE_LINES_START:
            return getDebitNoteLineListStart(state, action);
        case GET_DEBIT_NOTE_LINES_SUCCESS:
            return getDebitNoteLineListSuccess(state, action);
        case GET_DEBIT_NOTE_LINES_FAIL:
            return getDebitNoteLineListFail(state, action);
        case GET_ORDER_ITEMS_START:
            return getOrderItemListStart(state, action);
        case GET_ORDER_ITEMS_SUCCESS:
            return getOrderItemListSuccess(state, action);
        case GET_ORDER_ITEMS_FAIL:
            return getOrderItemListFail(state, action);
        case GET_STOCK_RECEIPTS_START:
            return getStockReceiptListStart(state, action);
        case GET_STOCK_RECEIPTS_SUCCESS:
            return getStockReceiptListSuccess(state, action);
        case GET_STOCK_RECEIPTS_FAIL:
            return getStockReceiptListFail(state, action);
        case GET_STOCK_RECEIPT_START:
            return getStockReceiptDetailStart(state, action);
        case GET_STOCK_RECEIPT_SUCCESS:
            return getStockReceiptDetailSuccess(state, action);
        case GET_STOCK_RECEIPT_FAIL:
            return getStockReceiptDetailFail(state, action);
        case GET_STOCK_RECEIPT_LINES_START:
            return getStockReceiptLineListStart(state, action);
        case GET_STOCK_RECEIPT_LINES_SUCCESS:
            return getStockReceiptLineListSuccess(state, action);
        case GET_STOCK_RECEIPT_LINES_FAIL:
            return getStockReceiptLineListFail(state, action);
        case GET_UNVERIFIED_ORDER_PAYMENTS_START:
            return getUnverifiedOrderPaymentListStart(state, action);
        case GET_UNVERIFIED_ORDER_PAYMENTS_SUCCESS:
            return getUnverifiedOrderPaymentListSuccess(state, action);
        case GET_UNVERIFIED_ORDER_PAYMENTS_FAIL:
            return getUnverifiedOrderPaymentListFail(state, action);
        case GET_UNVERIFIED_ORDER_PAYMENT_START:
            return getUnverifiedOrderPaymentDetailStart(state, action);
        case GET_UNVERIFIED_ORDER_PAYMENT_SUCCESS:
            return getUnverifiedOrderPaymentDetailSuccess(state, action);
        case GET_UNVERIFIED_ORDER_PAYMENT_FAIL:
            return getUnverifiedOrderPaymentDetailFail(state, action);
        case GET_CASH_ORDER_PAYMENTS_START:
            return getCashOrderPaymentListStart(state, action);
        case GET_CASH_ORDER_PAYMENTS_SUCCESS:
            return getCashOrderPaymentListSuccess(state, action);
        case GET_CASH_ORDER_PAYMENTS_FAIL:
            return getCashOrderPaymentListFail(state, action);
        case GET_CASH_ORDER_PAYMENT_START:
            return getCashOrderPaymentDetailStart(state, action);
        case GET_CASH_ORDER_PAYMENT_SUCCESS:
            return getCashOrderPaymentDetailSuccess(state, action);
        case GET_CASH_ORDER_PAYMENT_FAIL:
            return getCashOrderPaymentDetailFail(state, action);
        case GET_DEBIT_CARD_ORDER_PAYMENTS_START:
            return getDebitCardOrderPaymentListStart(state, action);
        case GET_DEBIT_CARD_ORDER_PAYMENTS_SUCCESS:
            return getDebitCardOrderPaymentListSuccess(state, action);
        case GET_DEBIT_CARD_ORDER_PAYMENTS_FAIL:
            return getDebitCardOrderPaymentListFail(state, action);
        case GET_DEBIT_CARD_ORDER_PAYMENT_START:
            return getDebitCardOrderPaymentDetailStart(state, action);
        case GET_DEBIT_CARD_ORDER_PAYMENT_SUCCESS:
            return getDebitCardOrderPaymentDetailSuccess(state, action);
        case GET_DEBIT_CARD_ORDER_PAYMENT_FAIL:
            return getDebitCardOrderPaymentDetailFail(state, action);
        case GET_TRANSFER_ORDER_PAYMENTS_START:
            return getTransferOrderPaymentListStart(state, action);
        case GET_TRANSFER_ORDER_PAYMENTS_SUCCESS:
            return getTransferOrderPaymentListSuccess(state, action);
        case GET_TRANSFER_ORDER_PAYMENTS_FAIL:
            return getTransferOrderPaymentListFail(state, action);
        case GET_TRANSFER_ORDER_PAYMENT_START:
            return getTransferOrderPaymentDetailStart(state, action);
        case GET_TRANSFER_ORDER_PAYMENT_SUCCESS:
            return getTransferOrderPaymentDetailSuccess(state, action);
        case GET_TRANSFER_ORDER_PAYMENT_FAIL:
            return getTransferOrderPaymentDetailFail(state, action);
        case GET_MOBILE_ORDER_PAYMENTS_START:
            return getMobileOrderPaymentListStart(state, action);
        case GET_MOBILE_ORDER_PAYMENTS_SUCCESS:
            return getMobileOrderPaymentListSuccess(state, action);
        case GET_MOBILE_ORDER_PAYMENTS_FAIL:
            return getMobileOrderPaymentListFail(state, action);
        case GET_MOBILE_ORDER_PAYMENT_START:
            return getMobileOrderPaymentDetailStart(state, action);
        case GET_MOBILE_ORDER_PAYMENT_SUCCESS:
            return getMobileOrderPaymentDetailSuccess(state, action);
        case GET_MOBILE_ORDER_PAYMENT_FAIL:
            return getMobileOrderPaymentDetailFail(state, action);
        case CREATE_ORDER_START:
            return createOrderStart(state, action);
        case CREATE_ORDER_SUCCESS:
            return createOrderSuccess(state, action);
        case CREATE_ORDER_FAIL:
            return createOrderFail(state, action);
        case VERIFY_ORDER_START:
            return verifyOrderStart(state, action);
        case VERIFY_ORDER_SUCCESS:
            return verifyOrderSuccess(state, action);
        case VERIFY_ORDER_FAIL:
            return verifyOrderFail(state, action);
        case VERIFY_PAYMENT_START:
            return verifyPaymentStart(state, action);
        case VERIFY_PAYMENT_SUCCESS:
            return verifyPaymentSuccess(state, action);
        case VERIFY_PAYMENT_FAIL:
            return verifyPaymentFail(state, action);

        case PAY_ORDER_START:
            return payOrderStart(state, action);
        case PAY_ORDER_SUCCESS:
            return payOrderSuccess(state, action);
        case PAY_ORDER_FAIL:
            return payOrderFail(state, action);
        case PAY_PARTIALLY_ORDER_START:
            return payPartiallyOrderStart(state, action);
        case PAY_PARTIALLY_ORDER_SUCCESS:
            return payPartiallyOrderSuccess(state, action);
        case PAY_PARTIALLY_ORDER_FAIL:
            return payPartiallyOrderFail(state, action);
        case RECEIVE_STOCK_START:
            return receiveStockStart(state, action);
        case RECEIVE_STOCK_SUCCESS:
            return receiveStockSuccess(state, action);
        case RECEIVE_STOCK_FAIL:
            return receiveStockFail(state, action);
        case RECEIVE_PARTIALLY_STOCK_START:
            return receivePartiallyStockStart(state, action);
        case RECEIVE_PARTIALLY_STOCK_SUCCESS:
            return receivePartiallyStockSuccess(state, action);
        case RECEIVE_PARTIALLY_STOCK_FAIL:
            return receivePartiallyStockFail(state, action);

        case CREATE_DEBIT_NOTE_START:
            return createDebitNoteStart(state, action);
        case CREATE_DEBIT_NOTE_SUCCESS:
            return createDebitNoteSuccess(state, action);
        case CREATE_DEBIT_NOTE_FAIL:
            return createDebitNoteFail(state, action);
        
        
        default:
            return state;
    }
}

