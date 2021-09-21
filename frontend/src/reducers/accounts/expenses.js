import {
  GET_BILL_PAYMENTS_START,
  GET_BILL_PAYMENTS_SUCCESS,
  GET_BILL_PAYMENTS_FAIL,
  CREATE_BILL_PAYMENT_START,
  CREATE_BILL_PAYMENT_SUCCESS,
  CREATE_BILL_PAYMENT_FAIL,
  GET_BILL_PAYMENT_START,
  GET_BILL_PAYMENT_SUCCESS,
  GET_BILL_PAYMENT_FAIL,
  EDIT_BILL_PAYMENT,
  GET_UNVERIFIED_BILL_PAYMENTS_START,
  GET_UNVERIFIED_BILL_PAYMENTS_SUCCESS,
  GET_UNVERIFIED_BILL_PAYMENTS_FAIL,
  CREATE_UNVERIFIED_BILL_PAYMENT_START,
  CREATE_UNVERIFIED_BILL_PAYMENT_SUCCESS,
  CREATE_UNVERIFIED_BILL_PAYMENT_FAIL,
  GET_UNVERIFIED_BILL_PAYMENT_START,
  GET_UNVERIFIED_BILL_PAYMENT_SUCCESS,
  GET_UNVERIFIED_BILL_PAYMENT_FAIL,
  GET_BILL_CASH_PAYMENTS_START,
  GET_BILL_CASH_PAYMENTS_SUCCESS,
  GET_BILL_CASH_PAYMENTS_FAIL,
  CREATE_BILL_CASH_PAYMENT_START,
  CREATE_BILL_CASH_PAYMENT_SUCCESS,
  CREATE_BILL_CASH_PAYMENT_FAIL,
  GET_BILL_CASH_PAYMENT_START,
  GET_BILL_CASH_PAYMENT_SUCCESS,
  GET_BILL_CASH_PAYMENT_FAIL,
  GET_BILL_TRANSFER_PAYMENTS_START,
  GET_BILL_TRANSFER_PAYMENTS_SUCCESS,
  GET_BILL_TRANSFER_PAYMENTS_FAIL,
  CREATE_BILL_TRANSFER_PAYMENT_START,
  CREATE_BILL_TRANSFER_PAYMENT_SUCCESS,
  CREATE_BILL_TRANSFER_PAYMENT_FAIL,
  GET_BILL_TRANSFER_PAYMENT_START,
  GET_BILL_TRANSFER_PAYMENT_SUCCESS,
  GET_BILL_TRANSFER_PAYMENT_FAIL,
  GET_BILL_DEBIT_CARD_PAYMENTS_START,
  GET_BILL_DEBIT_CARD_PAYMENTS_SUCCESS,
  GET_BILL_DEBIT_CARD_PAYMENTS_FAIL,
  CREATE_BILL_DEBIT_CARD_PAYMENT_START,
  CREATE_BILL_DEBIT_CARD_PAYMENT_SUCCESS,
  CREATE_BILL_DEBIT_CARD_PAYMENT_FAIL,
  GET_BILL_DEBIT_CARD_PAYMENT_START,
  GET_BILL_DEBIT_CARD_PAYMENT_SUCCESS,
  GET_BILL_DEBIT_CARD_PAYMENT_FAIL,
  GET_BILL_MOBILE_PAYMENTS_START,
  GET_BILL_MOBILE_PAYMENTS_SUCCESS,
  GET_BILL_MOBILE_PAYMENTS_FAIL,
  CREATE_BILL_MOBILE_PAYMENT_START,
  CREATE_BILL_MOBILE_PAYMENT_SUCCESS,
  CREATE_BILL_MOBILE_PAYMENT_FAIL,
  GET_BILL_MOBILE_PAYMENT_START,
  GET_BILL_MOBILE_PAYMENT_SUCCESS,
  GET_BILL_MOBILE_PAYMENT_FAIL,
  GET_DAILY_PENDING_PAYMENT_BILLS_START,
  GET_DAILY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_DAILY_PENDING_PAYMENT_BILLS_FAIL,
  GET_DAILY_PENDING_PAYMENT_BILL_START,
  GET_DAILY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_DAILY_PENDING_PAYMENT_BILL_FAIL,
  GET_WEEKLY_PENDING_PAYMENT_BILLS_START,
  GET_WEEKLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_WEEKLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_WEEKLY_PENDING_PAYMENT_BILL_START,
  GET_WEEKLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_WEEKLY_PENDING_PAYMENT_BILL_FAIL,
  GET_BIMONTHLY_PENDING_PAYMENT_BILLS_START,
  GET_BIMONTHLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_BIMONTHLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_BIMONTHLY_PENDING_PAYMENT_BILL_START,
  GET_BIMONTHLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_BIMONTHLY_PENDING_PAYMENT_BILL_FAIL,
  GET_MONTHLY_PENDING_PAYMENT_BILLS_START,
  GET_MONTHLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_MONTHLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_MONTHLY_PENDING_PAYMENT_BILL_START,
  GET_MONTHLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_MONTHLY_PENDING_PAYMENT_BILL_FAIL,
  GET_QUARTERLY_PENDING_PAYMENT_BILLS_START,
  GET_QUARTERLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_QUARTERLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_QUARTERLY_PENDING_PAYMENT_BILL_START,
  GET_QUARTERLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_QUARTERLY_PENDING_PAYMENT_BILL_FAIL,
  GET_BIANNUALLY_PENDING_PAYMENT_BILLS_START,
  GET_BIANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_BIANNUALLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_BIANNUALLY_PENDING_PAYMENT_BILL_START,
  GET_BIANNUALLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_BIANNUALLY_PENDING_PAYMENT_BILL_FAIL,
  GET_ANNUALLY_PENDING_PAYMENT_BILLS_START,
  GET_ANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_ANNUALLY_PENDING_PAYMENT_BILLS_FAIL,
  GET_ANNUALLY_PENDING_PAYMENT_BILL_START,
  GET_ANNUALLY_PENDING_PAYMENT_BILL_SUCCESS,
  GET_ANNUALLY_PENDING_PAYMENT_BILL_FAIL,
  GET_ONCE_OFF_PENDING_PAYMENT_BILLS_START,
  GET_ONCE_OFF_PENDING_PAYMENT_BILLS_SUCCESS,
  GET_ONCE_OFF_PENDING_PAYMENT_BILLS_FAIL,
  GET_ONCE_OFF_PENDING_PAYMENT_BILL_START,
  GET_ONCE_OFF_PENDING_PAYMENT_BILL_SUCCESS,
  GET_ONCE_OFF_PENDING_PAYMENT_BILL_FAIL,
  EDIT_UNVERIFIED_BILL_PAYMENT,
  EDIT_BILL_CASH_PAYMENT,
  EDIT_BILL_TRANSFER_PAYMENT,
  EDIT_BILL_DEBIT_CARD_PAYMENT,
  EDIT_BILL_MOBILE_PAYMENT,
  GET_BILL_LINES_START,
  GET_BILL_LINES_SUCCESS,
  GET_BILL_LINES_FAIL,
  GET_ONCE_OFF_FULLY_PAID_BILLS_START,
  GET_ONCE_OFF_FULLY_PAID_BILLS_SUCCESS,
  GET_ONCE_OFF_FULLY_PAID_BILLS_FAIL,
  GET_ONCE_OFF_FULLY_PAID_BILL_START,
  GET_ONCE_OFF_FULLY_PAID_BILL_SUCCESS,
  GET_ONCE_OFF_FULLY_PAID_BILL_FAIL,
  GET_ONCE_OFF_UNVERIFIED_BILLS_START,
  GET_ONCE_OFF_UNVERIFIED_BILLS_SUCCESS,
  GET_ONCE_OFF_UNVERIFIED_BILLS_FAIL,
  CREATE_ONCE_OFF_UNVERIFIED_BILL_START,
  CREATE_ONCE_OFF_UNVERIFIED_BILL_SUCCESS,
  CREATE_ONCE_OFF_UNVERIFIED_BILL_FAIL,
  GET_ONCE_OFF_UNVERIFIED_BILL_START,
  GET_ONCE_OFF_UNVERIFIED_BILL_SUCCESS,
  GET_ONCE_OFF_UNVERIFIED_BILL_FAIL,
  GET_ANNUALLY_FULLY_PAID_BILLS_START,
  GET_ANNUALLY_FULLY_PAID_BILLS_SUCCESS,
  GET_ANNUALLY_FULLY_PAID_BILLS_FAIL,
  GET_ANNUALLY_FULLY_PAID_BILL_START,
  GET_ANNUALLY_FULLY_PAID_BILL_SUCCESS,
  GET_ANNUALLY_FULLY_PAID_BILL_FAIL,
  GET_ANNUALLY_UNVERIFIED_BILLS_START,
  GET_ANNUALLY_UNVERIFIED_BILLS_SUCCESS,
  GET_ANNUALLY_UNVERIFIED_BILLS_FAIL,
  CREATE_ANNUALLY_UNVERIFIED_BILL_START,
  CREATE_ANNUALLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_ANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_ANNUALLY_UNVERIFIED_BILL_START,
  GET_ANNUALLY_UNVERIFIED_BILL_SUCCESS,
  GET_ANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_BIANNUALLY_FULLY_PAID_BILLS_START,
  GET_BIANNUALLY_FULLY_PAID_BILLS_SUCCESS,
  GET_BIANNUALLY_FULLY_PAID_BILLS_FAIL,
  GET_BIANNUALLY_FULLY_PAID_BILL_START,
  GET_BIANNUALLY_FULLY_PAID_BILL_SUCCESS,
  GET_BIANNUALLY_FULLY_PAID_BILL_FAIL,
  GET_BIANNUALLY_UNVERIFIED_BILLS_START,
  GET_BIANNUALLY_UNVERIFIED_BILLS_SUCCESS,
  GET_BIANNUALLY_UNVERIFIED_BILLS_FAIL,
  CREATE_BIANNUALLY_UNVERIFIED_BILL_START,
  CREATE_BIANNUALLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_BIANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_BIANNUALLY_UNVERIFIED_BILL_START,
  GET_BIANNUALLY_UNVERIFIED_BILL_SUCCESS,
  GET_BIANNUALLY_UNVERIFIED_BILL_FAIL,
  GET_QUARTERLY_FULLY_PAID_BILLS_START,
  GET_QUARTERLY_FULLY_PAID_BILLS_SUCCESS,
  GET_QUARTERLY_FULLY_PAID_BILLS_FAIL,
  GET_QUARTERLY_FULLY_PAID_BILL_START,
  GET_QUARTERLY_FULLY_PAID_BILL_SUCCESS,
  GET_QUARTERLY_FULLY_PAID_BILL_FAIL,
  GET_QUARTERLY_UNVERIFIED_BILLS_START,
  GET_QUARTERLY_UNVERIFIED_BILLS_SUCCESS,
  GET_QUARTERLY_UNVERIFIED_BILLS_FAIL,
  CREATE_QUARTERLY_UNVERIFIED_BILL_START,
  CREATE_QUARTERLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_QUARTERLY_UNVERIFIED_BILL_FAIL,
  GET_QUARTERLY_UNVERIFIED_BILL_START,
  GET_QUARTERLY_UNVERIFIED_BILL_SUCCESS,
  GET_QUARTERLY_UNVERIFIED_BILL_FAIL,
  GET_MONTHLY_FULLY_PAID_BILLS_START,
  GET_MONTHLY_FULLY_PAID_BILLS_SUCCESS,
  GET_MONTHLY_FULLY_PAID_BILLS_FAIL,
  GET_MONTHLY_FULLY_PAID_BILL_START,
  GET_MONTHLY_FULLY_PAID_BILL_SUCCESS,
  GET_MONTHLY_FULLY_PAID_BILL_FAIL,
  GET_MONTHLY_UNVERIFIED_BILLS_START,
  GET_MONTHLY_UNVERIFIED_BILLS_SUCCESS,
  GET_MONTHLY_UNVERIFIED_BILLS_FAIL,
  CREATE_MONTHLY_UNVERIFIED_BILL_START,
  CREATE_MONTHLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_MONTHLY_UNVERIFIED_BILL_FAIL,
  GET_MONTHLY_UNVERIFIED_BILL_START,
  GET_MONTHLY_UNVERIFIED_BILL_SUCCESS,
  GET_MONTHLY_UNVERIFIED_BILL_FAIL,
  GET_BIMONTHLY_FULLY_PAID_BILLS_START,
  GET_BIMONTHLY_FULLY_PAID_BILLS_SUCCESS,
  GET_BIMONTHLY_FULLY_PAID_BILLS_FAIL,
  GET_BIMONTHLY_FULLY_PAID_BILL_START,
  GET_BIMONTHLY_FULLY_PAID_BILL_SUCCESS,
  GET_BIMONTHLY_FULLY_PAID_BILL_FAIL,
  GET_BIMONTHLY_UNVERIFIED_BILLS_START,
  GET_BIMONTHLY_UNVERIFIED_BILLS_SUCCESS,
  GET_BIMONTHLY_UNVERIFIED_BILLS_FAIL,
  CREATE_BIMONTHLY_UNVERIFIED_BILL_START,
  CREATE_BIMONTHLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_BIMONTHLY_UNVERIFIED_BILL_FAIL,
  GET_BIMONTHLY_UNVERIFIED_BILL_START,
  GET_BIMONTHLY_UNVERIFIED_BILL_SUCCESS,
  GET_BIMONTHLY_UNVERIFIED_BILL_FAIL,
  GET_WEEKLY_FULLY_PAID_BILLS_START,
  GET_WEEKLY_FULLY_PAID_BILLS_SUCCESS,
  GET_WEEKLY_FULLY_PAID_BILLS_FAIL,
  GET_WEEKLY_FULLY_PAID_BILL_START,
  GET_WEEKLY_FULLY_PAID_BILL_SUCCESS,
  GET_WEEKLY_FULLY_PAID_BILL_FAIL,
  GET_WEEKLY_UNVERIFIED_BILLS_START,
  GET_WEEKLY_UNVERIFIED_BILLS_SUCCESS,
  GET_WEEKLY_UNVERIFIED_BILLS_FAIL,
  CREATE_WEEKLY_UNVERIFIED_BILL_START,
  CREATE_WEEKLY_UNVERIFIED_BILL_SUCCESS,
  CREATE_WEEKLY_UNVERIFIED_BILL_FAIL,
  GET_WEEKLY_UNVERIFIED_BILL_START,
  GET_WEEKLY_UNVERIFIED_BILL_SUCCESS,
  GET_WEEKLY_UNVERIFIED_BILL_FAIL,
  GET_DAILY_FULLY_PAID_BILLS_START,
  GET_DAILY_FULLY_PAID_BILLS_SUCCESS,
  GET_DAILY_FULLY_PAID_BILLS_FAIL,
  GET_DAILY_FULLY_PAID_BILL_START,
  GET_DAILY_FULLY_PAID_BILL_SUCCESS,
  GET_DAILY_FULLY_PAID_BILL_FAIL,
  GET_DAILY_UNVERIFIED_BILLS_START,
  GET_DAILY_UNVERIFIED_BILLS_SUCCESS,
  GET_DAILY_UNVERIFIED_BILLS_FAIL,
  CREATE_DAILY_UNVERIFIED_BILL_START,
  CREATE_DAILY_UNVERIFIED_BILL_SUCCESS,
  CREATE_DAILY_UNVERIFIED_BILL_FAIL,
  GET_DAILY_UNVERIFIED_BILL_START,
  GET_DAILY_UNVERIFIED_BILL_SUCCESS,
  GET_DAILY_UNVERIFIED_BILL_FAIL,
  GET_BILLS_START,
  GET_BILLS_SUCCESS,
  GET_BILLS_FAIL,
  CREATE_BILL_START,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAIL,
  GET_BILL_START,
  GET_BILL_SUCCESS,
  GET_BILL_FAIL,
  EDIT_DAILY_UNVERIFIED_BILL,
  EDIT_BILL,
  EDIT_WEEKLY_UNVERIFIED_BILL,
  EDIT_BIMONTHLY_UNVERIFIED_BILL,
  EDIT_MONTHLY_UNVERIFIED_BILL,
  EDIT_QUARTERLY_UNVERIFIED_BILL,
  EDIT_BIANNUALLY_UNVERIFIED_BILL,
  EDIT_ANNUALLY_UNVERIFIED_BILL,
  EDIT_ONCE_OFF_UNVERIFIED_BILL,
  GET_BILL_SUPPLIERS_START,
  GET_BILL_SUPPLIERS_SUCCESS,
  GET_BILL_SUPPLIERS_FAIL,
  VERIFY_DAILY_BILL_START,
  VERIFY_DAILY_BILL_SUCCESS,
  VERIFY_DAILY_BILL_FAIL,
  VERIFY_WEEKLY_BILL_START,
  VERIFY_WEEKLY_BILL_SUCCESS,
  VERIFY_WEEKLY_BILL_FAIL,
  VERIFY_BIMONTHLY_BILL_START,
  VERIFY_BIMONTHLY_BILL_SUCCESS,
  VERIFY_BIMONTHLY_BILL_FAIL,
  VERIFY_MONTHLY_BILL_START,
  VERIFY_MONTHLY_BILL_SUCCESS,
  VERIFY_MONTHLY_BILL_FAIL,
  VERIFY_QUARTERLY_BILL_START,
  VERIFY_QUARTERLY_BILL_SUCCESS,
  VERIFY_QUARTERLY_BILL_FAIL,
  VERIFY_BIANNUALLY_BILL_START,
  VERIFY_BIANNUALLY_BILL_SUCCESS,
  VERIFY_BIANNUALLY_BILL_FAIL,
  VERIFY_ANNUALLY_BILL_START,
  VERIFY_ANNUALLY_BILL_SUCCESS,
  VERIFY_ANNUALLY_BILL_FAIL,
  VERIFY_ONCEOFF_BILL_START,
  VERIFY_ONCEOFF_BILL_SUCCESS,
  VERIFY_ONCEOFF_BILL_FAIL,

  PAY_DAILY_BILL_START,
  PAY_DAILY_BILL_SUCCESS,
  PAY_DAILY_BILL_FAIL,
  PAY_WEEKLY_BILL_START,
  PAY_WEEKLY_BILL_SUCCESS,
  PAY_WEEKLY_BILL_FAIL,
  PAY_BIMONTHLY_BILL_START,
  PAY_BIMONTHLY_BILL_SUCCESS,
  PAY_BIMONTHLY_BILL_FAIL,
  PAY_MONTHLY_BILL_START,
  PAY_MONTHLY_BILL_SUCCESS,
  PAY_MONTHLY_BILL_FAIL,
  PAY_QUARTERLY_BILL_START,
  PAY_QUARTERLY_BILL_SUCCESS,
  PAY_QUARTERLY_BILL_FAIL,
  PAY_BIANNUALLY_BILL_START,
  PAY_BIANNUALLY_BILL_SUCCESS,
  PAY_BIANNUALLY_BILL_FAIL,
  PAY_ANNUALLY_BILL_START,
  PAY_ANNUALLY_BILL_SUCCESS,
  PAY_ANNUALLY_BILL_FAIL,
  PAY_ONCEOFF_BILL_START,
  PAY_ONCEOFF_BILL_SUCCESS,
  PAY_ONCEOFF_BILL_FAIL,

  VERIFY_BILL_PAYMENT_START,
  VERIFY_BILL_PAYMENT_SUCCESS,
  VERIFY_BILL_PAYMENT_FAIL,
} from '../../types/expenseTypes';
import { updateObject } from "../../utility";

const initialState = {
  loading: false,
  error: null,
  billpayments: [],
  unverifiedbillpayments: [],
  billcashpayments: [],
  billtransferpayments: [],
  billdebitcardpayments: [],
  billmobilepayments: [],
  dailypendingpaymentbills: [],
  weeklypendingpaymentbills: [],
  bimonthlypendingpaymentbills: [],
  monthlypendingpaymentbills: [],
  quarterlypendingpaymentbills: [],
  biannuallypendingpaymentbills: [],
  annuallypendingpaymentbills: [],
  onceoffpendingpaymentbills: [],
  bills: [],
  dailyunverifiedbills: [],
  dailyfullypaidbills: [],
  weeklyunverifiedbills: [],
  weeklyfullypaidbills: [],
  bimonthlyunverifiedbills: [],
  bimonthlyfullypaidbills: [],
  monthlyunverifiedbills: [],
  monthlyfullypaidbills: [],
  quarterlyunverifiedbills: [],
  quarterlyfullypaidbills: [],
  biannuallyunverifiedbills: [],
  biannuallyfullypaidbills: [],
  annuallyunverifiedbills: [],
  annuallyfullypaidbills: [],
  onceoffunverifiedbills: [],
  onceofffullypaidbills: [],
  billlines: [],
  billpayment: {},
  unverifiedbillpayment: {},
  billcashpayment: {},
  billtransferpayment: {},
  billdebitcardpayment: {},
  billmobilepayment: {},
  dailypendingpaymentbill: {},
  weeklypendingpaymentbill: {},
  bimonthlypendingpaymentbill: {},
  monthlypendingpaymentbill: {},
  quarterlypendingpaymentbill: {},
  biannuallypendingpaymentbill: {},
  annuallypendingpaymentbill: {},
  onceoffpendingpaymentbill: {},
  bill: {},
  dailyunverifiedbill: {},
  dailyfullypaidbill: {},
  weeklyunverifiedbill: {},
  weeklyfullypaidbill: {},
  bimonthlyunverifiedbill: {},
  bimonthlyfullypaidbill: {},
  monthlyunverifiedbill: {},
  monthlyfullypaidbill: {},
  quarterlyunverifiedbill: {},
  quarterlyfullypaidbill: {},
  biannuallyunverifiedbill: {},
  biannuallyfullypaidbill: {},
  annuallyunverifiedbill: {},
  annuallyfullypaidbill: {},
  onceoffunverifiedbill: {},
  onceofffullypaidbill: {},
  billline: {},
  billsuppliers: [],
}



const verifyDailyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyDailyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyDailyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyWeeklyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyWeeklyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyWeeklyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyBiMonthlyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyBiMonthlyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyBiMonthlyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyMonthlyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyMonthlyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyMonthlyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyQuarterlyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyQuarterlyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyQuarterlyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyBiAnnuallyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyBiAnnuallyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyBiAnnuallyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyAnnuallyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyAnnuallyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyAnnuallyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payDailyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payDailyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payDailyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payWeeklyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payWeeklyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payWeeklyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payBiMonthlyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payBiMonthlyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payBiMonthlyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payMonthlyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payMonthlyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payMonthlyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payQuarterlyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payQuarterlyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payQuarterlyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payBiAnnuallyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payBiAnnuallyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payBiAnnuallyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payAnnuallyBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payAnnuallyBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payAnnuallyBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const payOnceOffBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const payOnceOffBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const payOnceOffBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};




const verifyOnceOffBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyOnceOffBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyOnceOffBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const verifyBillPaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const verifyBillPaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const verifyBillPaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const getBillSupplierListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillSupplierListSuccess = (state, action) => {
  return updateObject(state, {
    billsuppliers: action.billsuppliers,
    error: null,
    loading: false
  });
};

const getBillSupplierListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bill payments
const getBillPaymentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillPaymentListSuccess = (state, action) => {
  return updateObject(state, {
    billpayments: action.billpayments,
    error: null,
    loading: false
  });
};

const getBillPaymentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBillPaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBillPaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBillPaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBillPaymentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillPaymentDetailSuccess = (state, action) => {
  return updateObject(state, {
    billpayment: action.billpayment,
    error: null,
    loading: false
  });
};

const getBillPaymentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//unverified bill payments
const getUnverifiedBillPaymentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnverifiedBillPaymentListSuccess = (state, action) => {
  return updateObject(state, {
    unverifiedbillpayments: action.unverifiedbillpayments,
    error: null,
    loading: false
  });
};

const getUnverifiedBillPaymentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createUnverifiedBillPaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createUnverifiedBillPaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createUnverifiedBillPaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getUnverifiedBillPaymentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getUnverifiedBillPaymentDetailSuccess = (state, action) => {
  return updateObject(state, {
    unverifiedbillpayment: action.unverifiedbillpayment,
    error: null,
    loading: false
  });
};

const getUnverifiedBillPaymentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bill cash payments
const getBillCashPaymentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillCashPaymentListSuccess = (state, action) => {
  return updateObject(state, {
    billcashpayments: action.billcashpayments,
    error: null,
    loading: false
  });
};

const getBillCashPaymentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBillCashPaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBillCashPaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBillCashPaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBillCashPaymentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillCashPaymentDetailSuccess = (state, action) => {
  return updateObject(state, {
    billcashpayment: action.billcashpayment,
    error: null,
    loading: false
  });
};

const getBillCashPaymentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bill transfer payments
const getBillTransferPaymentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillTransferPaymentListSuccess = (state, action) => {
  return updateObject(state, {
    billtransferpayments: action.billtransferpayments,
    error: null,
    loading: false
  });
};

const getBillTransferPaymentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBillTransferPaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBillTransferPaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBillTransferPaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBillTransferPaymentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillTransferPaymentDetailSuccess = (state, action) => {
  return updateObject(state, {
    billtransferpayment: action.billtransferpayment,
    error: null,
    loading: false
  });
};

const getBillTransferPaymentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bill debit card payments
const getBillDebitCardPaymentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillDebitCardPaymentListSuccess = (state, action) => {
  return updateObject(state, {
    billdebitcardpayments: action.billdebitcardpayments,
    error: null,
    loading: false
  });
};

const getBillDebitCardPaymentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBillDebitCardPaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBillDebitCardPaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBillDebitCardPaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBillDebitCardPaymentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillDebitCardPaymentDetailSuccess = (state, action) => {
  return updateObject(state, {
    billdebitcardpayment: action.billdebitcardpayment,
    error: null,
    loading: false
  });
};

const getBillDebitCardPaymentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bill mobile payments
const getBillMobilePaymentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillMobilePaymentListSuccess = (state, action) => {
  return updateObject(state, {
    billmobilepayments: action.billmobilepayments,
    error: null,
    loading: false
  });
};

const getBillMobilePaymentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBillMobilePaymentStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBillMobilePaymentSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBillMobilePaymentFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBillMobilePaymentDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillMobilePaymentDetailSuccess = (state, action) => {
  return updateObject(state, {
    billmobilepayment: action.billmobilepayment,
    error: null,
    loading: false
  });
};

const getBillMobilePaymentDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//daily pending payment bills
const getDailyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDailyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    dailypendingpaymentbills: action.dailypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getDailyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDailyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDailyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    dailypendingpaymentbill: action.dailypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getDailyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//weekly pending payment bills
const getWeeklyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWeeklyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    weeklypendingpaymentbills: action.weeklypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getWeeklyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getWeeklyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWeeklyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    weeklypendingpaymentbill: action.weeklypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getWeeklyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bimonthly pending payment bills
const getBiMonthlyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiMonthlyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    bimonthlypendingpaymentbills: action.bimonthlypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getBiMonthlyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBiMonthlyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiMonthlyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    bimonthlypendingpaymentbill: action.bimonthlypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getBiMonthlyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//monthly pending payment bills
const getMonthlyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMonthlyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    monthlypendingpaymentbills: action.monthlypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getMonthlyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getMonthlyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMonthlyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    monthlypendingpaymentbill: action.monthlypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getMonthlyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//quarterly pending payment bills
const getQuarterlyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getQuarterlyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    quarterlypendingpaymentbills: action.quarterlypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getQuarterlyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getQuarterlyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getQuarterlyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    quarterlypendingpaymentbill: action.quarterlypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getQuarterlyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//biannually pending payment bills
const getBiAnnuallyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiAnnuallyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    biannuallypendingpaymentbills: action.biannuallypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getBiAnnuallyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBiAnnuallyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiAnnuallyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    biannuallypendingpaymentbill: action.biannuallypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getBiAnnuallyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//annually pending payment bills
const getAnnuallyPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAnnuallyPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    annuallypendingpaymentbills: action.annuallypendingpaymentbills,
    error: null,
    loading: false
  });
};

const getAnnuallyPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAnnuallyPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAnnuallyPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    annuallypendingpaymentbill: action.annuallypendingpaymentbill,
    error: null,
    loading: false
  });
};

const getAnnuallyPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//onceoff pending payment bills
const getOnceOffPendingPaymentBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffPendingPaymentBillListSuccess = (state, action) => {
  return updateObject(state, {
    onceoffpendingpaymentbills: action.onceoffpendingpaymentbills,
    error: null,
    loading: false
  });
};

const getOnceOffPendingPaymentBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOnceOffPendingPaymentBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffPendingPaymentBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    onceoffpendingpaymentbill: action.onceoffpendingpaymentbill,
    error: null,
    loading: false
  });
};

const getOnceOffPendingPaymentBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bills
const getBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillListSuccess = (state, action) => {
  return updateObject(state, {
    bills: action.bills,
    error: null,
    loading: false
  });
};

const getBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    bill: action.bill,
    error: null,
    loading: false
  });
};

const getBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//daily unverified bills
const getDailyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDailyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    dailyunverifiedbills: action.dailyunverifiedbills,
    error: null,
    loading: false
  });
};

const getDailyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createDailyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createDailyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createDailyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDailyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDailyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    dailyunverifiedbill: action.dailyunverifiedbill,
    error: null,
    loading: false
  });
};

const getDailyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//daily fully paid bills
const getDailyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDailyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    dailyfullypaidbills: action.dailyfullypaidbills,
    error: null,
    loading: false
  });
};

const getDailyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDailyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDailyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    dailyfullypaidbill: action.dailyfullypaidbill,
    error: null,
    loading: false
  });
};

const getDailyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//weekly unverified bills
const getWeeklyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWeeklyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    weeklyunverifiedbills: action.weeklyunverifiedbills,
    error: null,
    loading: false
  });
};

const getWeeklyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createWeeklyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createWeeklyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createWeeklyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getWeeklyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWeeklyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    weeklyunverifiedbill: action.weeklyunverifiedbill,
    error: null,
    loading: false
  });
};

const getWeeklyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//weekly fully paid bills
const getWeeklyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWeeklyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    weeklyfullypaidbills: action.weeklyfullypaidbills,
    error: null,
    loading: false
  });
};

const getWeeklyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getWeeklyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getWeeklyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    weeklyfullypaidbill: action.weeklyfullypaidbill,
    error: null,
    loading: false
  });
};

const getWeeklyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bimonthly unverified bills
const getBiMonthlyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiMonthlyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    bimonthlyunverifiedbills: action.bimonthlyunverifiedbills,
    error: null,
    loading: false
  });
};

const getBiMonthlyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBiMonthlyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBiMonthlyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBiMonthlyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBiMonthlyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiMonthlyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    bimonthlyunverifiedbill: action.bimonthlyunverifiedbill,
    error: null,
    loading: false
  });
};

const getBiMonthlyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bimonthly fully paid bills
const getBiMonthlyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiMonthlyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    bimonthlyfullypaidbills: action.bimonthlyfullypaidbills,
    error: null,
    loading: false
  });
};

const getBiMonthlyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBiMonthlyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiMonthlyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    bimonthlyfullypaidbill: action.bimonthlyfullypaidbill,
    error: null,
    loading: false
  });
};

const getBiMonthlyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//monthly unverified bills
const getMonthlyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMonthlyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    monthlyunverifiedbills: action.monthlyunverifiedbills,
    error: null,
    loading: false
  });
};

const getMonthlyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createMonthlyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createMonthlyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createMonthlyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getMonthlyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMonthlyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    monthlyunverifiedbill: action.monthlyunverifiedbill,
    error: null,
    loading: false
  });
};

const getMonthlyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//monthly fully paid bills
const getMonthlyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMonthlyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    monthlyfullypaidbills: action.monthlyfullypaidbills,
    error: null,
    loading: false
  });
};

const getMonthlyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getMonthlyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getMonthlyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    monthlyfullypaidbill: action.monthlyfullypaidbill,
    error: null,
    loading: false
  });
};

const getMonthlyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//quarterly unverified bills
const getQuarterlyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getQuarterlyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    quarterlyunverifiedbills: action.quarterlyunverifiedbills,
    error: null,
    loading: false
  });
};

const getQuarterlyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createQuarterlyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createQuarterlyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createQuarterlyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getQuarterlyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getQuarterlyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    quarterlyunverifiedbill: action.quarterlyunverifiedbill,
    error: null,
    loading: false
  });
};

const getQuarterlyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//quarterly fully paid bills
const getQuarterlyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getQuarterlyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    quarterlyfullypaidbills: action.quarterlyfullypaidbills,
    error: null,
    loading: false
  });
};

const getQuarterlyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getQuarterlyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getQuarterlyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    quarterlyfullypaidbill: action.quarterlyfullypaidbill,
    error: null,
    loading: false
  });
};

const getQuarterlyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//biannually unverified bills
const getBiAnnuallyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiAnnuallyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    biannuallyunverifiedbills: action.biannuallyunverifiedbills,
    error: null,
    loading: false
  });
};

const getBiAnnuallyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createBiAnnuallyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createBiAnnuallyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createBiAnnuallyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBiAnnuallyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiAnnuallyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    biannuallyunverifiedbill: action.biannuallyunverifiedbill,
    error: null,
    loading: false
  });
};

const getBiAnnuallyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//biannually fully paid bills
const getBiAnnuallyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiAnnuallyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    biannuallyfullypaidbills: action.biannuallyfullypaidbills,
    error: null,
    loading: false
  });
};

const getBiAnnuallyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getBiAnnuallyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBiAnnuallyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    biannuallyfullypaidbill: action.biannuallyfullypaidbill,
    error: null,
    loading: false
  });
};

const getBiAnnuallyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//annually unverified bills
const getAnnuallyUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAnnuallyUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    annuallyunverifiedbills: action.annuallyunverifiedbills,
    error: null,
    loading: false
  });
};

const getAnnuallyUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAnnuallyUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAnnuallyUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAnnuallyUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAnnuallyUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAnnuallyUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    annuallyunverifiedbill: action.annuallyunverifiedbill,
    error: null,
    loading: false
  });
};

const getAnnuallyUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//annually fully paid bills
const getAnnuallyFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAnnuallyFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    annuallyfullypaidbills: action.annuallyfullypaidbills,
    error: null,
    loading: false
  });
};

const getAnnuallyFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAnnuallyFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAnnuallyFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    annuallyfullypaidbill: action.annuallyfullypaidbill,
    error: null,
    loading: false
  });
};

const getAnnuallyFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//onceoff unverified bills
const getOnceOffUnverifiedBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffUnverifiedBillListSuccess = (state, action) => {
  return updateObject(state, {
    onceoffunverifiedbills: action.onceoffunverifiedbills,
    error: null,
    loading: false
  });
};

const getOnceOffUnverifiedBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createOnceOffUnverifiedBillStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createOnceOffUnverifiedBillSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createOnceOffUnverifiedBillFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOnceOffUnverifiedBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffUnverifiedBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    onceoffunverifiedbill: action.onceoffunverifiedbill,
    error: null,
    loading: false
  });
};

const getOnceOffUnverifiedBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//onceoff fully paid bills
const getOnceOffFullyPaidBillListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffFullyPaidBillListSuccess = (state, action) => {
  return updateObject(state, {
    onceofffullypaidbills: action.onceofffullypaidbills,
    error: null,
    loading: false
  });
};

const getOnceOffFullyPaidBillListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getOnceOffFullyPaidBillDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getOnceOffFullyPaidBillDetailSuccess = (state, action) => {
  return updateObject(state, {
    onceofffullypaidbill: action.onceofffullypaidbill,
    error: null,
    loading: false
  });
};

const getOnceOffFullyPaidBillDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//bill lines
const getBillLineListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getBillLineListSuccess = (state, action) => {
  return updateObject(state, {
    billlines: action.billlines,
    error: null,
    loading: false
  });
};

const getBillLineListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function expenses(state = initialState, action){
  switch(action.type){
    case GET_BILL_PAYMENTS_START:
      return getBillPaymentListStart(state, action);
    case GET_BILL_PAYMENTS_SUCCESS:
      return getBillPaymentListSuccess(state, action);
    case GET_BILL_PAYMENTS_FAIL:
      return getBillPaymentListFail(state, action);
    case CREATE_BILL_PAYMENT_START:
      return createBillPaymentStart(state, action);
    case CREATE_BILL_PAYMENT_SUCCESS:
      return createBillPaymentSuccess(state, action);
    case CREATE_BILL_PAYMENT_FAIL:
      return createBillPaymentFail(state, action);
    case GET_BILL_PAYMENT_START:
      return getBillPaymentDetailStart(state, action);
    case GET_BILL_PAYMENT_SUCCESS:
      return getBillPaymentDetailSuccess(state, action);
    case GET_BILL_PAYMENT_FAIL:
      return getBillPaymentDetailFail(state, action);
    case EDIT_BILL_PAYMENT:
      const barrayList = state.billpayments;
      barrayList.splice(barrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        billpayments: barrayList,
      };
    case GET_UNVERIFIED_BILL_PAYMENTS_START:
      return getUnverifiedBillPaymentListStart(state, action);
    case GET_UNVERIFIED_BILL_PAYMENTS_SUCCESS:
      return getUnverifiedBillPaymentListSuccess(state, action);
    case GET_UNVERIFIED_BILL_PAYMENTS_FAIL:
      return getUnverifiedBillPaymentListFail(state, action);
    case CREATE_UNVERIFIED_BILL_PAYMENT_START:
      return createUnverifiedBillPaymentStart(state, action);
    case CREATE_UNVERIFIED_BILL_PAYMENT_SUCCESS:
      return createUnverifiedBillPaymentSuccess(state, action);
    case CREATE_UNVERIFIED_BILL_PAYMENT_FAIL:
      return createUnverifiedBillPaymentFail(state, action);
    case GET_UNVERIFIED_BILL_PAYMENT_START:
      return getUnverifiedBillPaymentDetailStart(state, action);
    case GET_UNVERIFIED_BILL_PAYMENT_SUCCESS:
      return getUnverifiedBillPaymentDetailSuccess(state, action);
    case GET_UNVERIFIED_BILL_PAYMENT_FAIL:
      return getUnverifiedBillPaymentDetailFail(state, action);
    case EDIT_UNVERIFIED_BILL_PAYMENT:
      const uarrayList = state.unverifiedbillpayments;
      uarrayList.splice(uarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        unverifiedbillpayments: uarrayList,
      };
    case GET_BILL_CASH_PAYMENTS_START:
      return getBillCashPaymentListStart(state, action);
    case GET_BILL_CASH_PAYMENTS_SUCCESS:
      return getBillCashPaymentListSuccess(state, action);
    case GET_BILL_CASH_PAYMENTS_FAIL:
      return getBillCashPaymentListFail(state, action);
    case CREATE_BILL_CASH_PAYMENT_START:
      return createBillCashPaymentStart(state, action);
    case CREATE_BILL_CASH_PAYMENT_SUCCESS:
      return createBillCashPaymentSuccess(state, action);
    case CREATE_BILL_CASH_PAYMENT_FAIL:
      return createBillCashPaymentFail(state, action);
    case GET_BILL_CASH_PAYMENT_START:
      return getBillCashPaymentDetailStart(state, action);
    case GET_BILL_CASH_PAYMENT_SUCCESS:
      return getBillCashPaymentDetailSuccess(state, action);
    case GET_BILL_CASH_PAYMENT_FAIL:
      return getBillCashPaymentDetailFail(state, action);
    case EDIT_BILL_CASH_PAYMENT:
      const carrayList = state.billcashpayments;
      carrayList.splice(carrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        billcashpayments: carrayList,
      };
    case GET_BILL_TRANSFER_PAYMENTS_START:
      return getBillTransferPaymentListStart(state, action);
    case GET_BILL_TRANSFER_PAYMENTS_SUCCESS:
      return getBillTransferPaymentListSuccess(state, action);
    case GET_BILL_TRANSFER_PAYMENTS_FAIL:
      return getBillTransferPaymentListFail(state, action);
    case CREATE_BILL_TRANSFER_PAYMENT_START:
      return createBillTransferPaymentStart(state, action);
    case CREATE_BILL_TRANSFER_PAYMENT_SUCCESS:
      return createBillTransferPaymentSuccess(state, action);
    case CREATE_BILL_TRANSFER_PAYMENT_FAIL:
      return createBillTransferPaymentFail(state, action);
    case GET_BILL_TRANSFER_PAYMENT_START:
      return getBillTransferPaymentDetailStart(state, action);
    case GET_BILL_TRANSFER_PAYMENT_SUCCESS:
      return getBillTransferPaymentDetailSuccess(state, action);
    case GET_BILL_TRANSFER_PAYMENT_FAIL:
      return getBillTransferPaymentDetailFail(state, action);
    case EDIT_BILL_TRANSFER_PAYMENT:
      const arrayList = state.billtransferpayments;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        billtransferpayments: arrayList,
      };
    case GET_BILL_DEBIT_CARD_PAYMENTS_START:
      return getBillDebitCardPaymentListStart(state, action);
    case GET_BILL_DEBIT_CARD_PAYMENTS_SUCCESS:
      return getBillDebitCardPaymentListSuccess(state, action);
    case GET_BILL_DEBIT_CARD_PAYMENTS_FAIL:
      return getBillDebitCardPaymentListFail(state, action);
    case CREATE_BILL_DEBIT_CARD_PAYMENT_START:
      return createBillDebitCardPaymentStart(state, action);
    case CREATE_BILL_DEBIT_CARD_PAYMENT_SUCCESS:
      return createBillDebitCardPaymentSuccess(state, action);
    case CREATE_BILL_DEBIT_CARD_PAYMENT_FAIL:
      return createBillDebitCardPaymentFail(state, action);
    case GET_BILL_DEBIT_CARD_PAYMENT_START:
      return getBillDebitCardPaymentDetailStart(state, action);
    case GET_BILL_DEBIT_CARD_PAYMENT_SUCCESS:
      return getBillDebitCardPaymentDetailSuccess(state, action);
    case GET_BILL_DEBIT_CARD_PAYMENT_FAIL:
      return getBillDebitCardPaymentDetailFail(state, action);
    case EDIT_BILL_DEBIT_CARD_PAYMENT:
      const darrayList = state.billdebitcardpayments;
      darrayList.splice(darrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        billdebitcardpayments: darrayList,
      };
    case GET_BILL_MOBILE_PAYMENTS_START:
      return getBillMobilePaymentListStart(state, action);
    case GET_BILL_MOBILE_PAYMENTS_SUCCESS:
      return getBillMobilePaymentListSuccess(state, action);
    case GET_BILL_MOBILE_PAYMENTS_FAIL:
      return getBillMobilePaymentListFail(state, action);
    case CREATE_BILL_MOBILE_PAYMENT_START:
      return createBillMobilePaymentStart(state, action);
    case CREATE_BILL_MOBILE_PAYMENT_SUCCESS:
      return createBillMobilePaymentSuccess(state, action);
    case CREATE_BILL_MOBILE_PAYMENT_FAIL:
      return createBillMobilePaymentFail(state, action);
    case GET_BILL_MOBILE_PAYMENT_START:
      return getBillMobilePaymentDetailStart(state, action);
    case GET_BILL_MOBILE_PAYMENT_SUCCESS:
      return getBillMobilePaymentDetailSuccess(state, action);
    case GET_BILL_MOBILE_PAYMENT_FAIL:
      return getBillMobilePaymentDetailFail(state, action);
    case EDIT_BILL_MOBILE_PAYMENT:
      const parrayList = state.billmobilepayments;
      parrayList.splice(parrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        billmobilepayments: parrayList,
      };
    case GET_DAILY_PENDING_PAYMENT_BILLS_START:
      return getDailyPendingPaymentBillListStart(state, action);
    case GET_DAILY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getDailyPendingPaymentBillListSuccess(state, action);
    case GET_DAILY_PENDING_PAYMENT_BILLS_FAIL:
      return getDailyPendingPaymentBillListFail(state, action);
    case GET_DAILY_PENDING_PAYMENT_BILL_START:
      return getDailyPendingPaymentBillDetailStart(state, action);
    case GET_DAILY_PENDING_PAYMENT_BILL_SUCCESS:
      return getDailyPendingPaymentBillDetailSuccess(state, action);
    case GET_DAILY_PENDING_PAYMENT_BILL_FAIL:
      return getDailyPendingPaymentBillDetailFail(state, action);
    case GET_WEEKLY_PENDING_PAYMENT_BILLS_START:
      return getWeeklyPendingPaymentBillListStart(state, action);
    case GET_WEEKLY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getWeeklyPendingPaymentBillListSuccess(state, action);
    case GET_WEEKLY_PENDING_PAYMENT_BILLS_FAIL:
      return getWeeklyPendingPaymentBillListFail(state, action);
    case GET_WEEKLY_PENDING_PAYMENT_BILL_START:
      return getWeeklyPendingPaymentBillDetailStart(state, action);
    case GET_WEEKLY_PENDING_PAYMENT_BILL_SUCCESS:
      return getWeeklyPendingPaymentBillDetailSuccess(state, action);
    case GET_WEEKLY_PENDING_PAYMENT_BILL_FAIL:
      return getWeeklyPendingPaymentBillDetailFail(state, action);
    case GET_BIMONTHLY_PENDING_PAYMENT_BILLS_START:
      return getBiMonthlyPendingPaymentBillListStart(state, action);
    case GET_BIMONTHLY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getBiMonthlyPendingPaymentBillListSuccess(state, action);
    case GET_BIMONTHLY_PENDING_PAYMENT_BILLS_FAIL:
      return getBiMonthlyPendingPaymentBillListFail(state, action);
    case GET_BIMONTHLY_PENDING_PAYMENT_BILL_START:
      return getBiMonthlyPendingPaymentBillDetailStart(state, action);
    case GET_BIMONTHLY_PENDING_PAYMENT_BILL_SUCCESS:
      return getBiMonthlyPendingPaymentBillDetailSuccess(state, action);
    case GET_BIMONTHLY_PENDING_PAYMENT_BILL_FAIL:
      return getBiMonthlyPendingPaymentBillDetailFail(state, action);
    case GET_MONTHLY_PENDING_PAYMENT_BILLS_START:
      return getMonthlyPendingPaymentBillListStart(state, action);
    case GET_MONTHLY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getMonthlyPendingPaymentBillListSuccess(state, action);
    case GET_MONTHLY_PENDING_PAYMENT_BILLS_FAIL:
      return getMonthlyPendingPaymentBillListFail(state, action);
    case GET_MONTHLY_PENDING_PAYMENT_BILL_START:
      return getMonthlyPendingPaymentBillDetailStart(state, action);
    case GET_MONTHLY_PENDING_PAYMENT_BILL_SUCCESS:
      return getMonthlyPendingPaymentBillDetailSuccess(state, action);
    case GET_MONTHLY_PENDING_PAYMENT_BILL_FAIL:
      return getMonthlyPendingPaymentBillDetailFail(state, action);
    case GET_QUARTERLY_PENDING_PAYMENT_BILLS_START:
      return getQuarterlyPendingPaymentBillListStart(state, action);
    case GET_QUARTERLY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getQuarterlyPendingPaymentBillListSuccess(state, action);
    case GET_QUARTERLY_PENDING_PAYMENT_BILLS_FAIL:
      return getQuarterlyPendingPaymentBillListFail(state, action);
    case GET_QUARTERLY_PENDING_PAYMENT_BILL_START:
      return getQuarterlyPendingPaymentBillDetailStart(state, action);
    case GET_QUARTERLY_PENDING_PAYMENT_BILL_SUCCESS:
      return getQuarterlyPendingPaymentBillDetailSuccess(state, action);
    case GET_QUARTERLY_PENDING_PAYMENT_BILL_FAIL:
      return getQuarterlyPendingPaymentBillDetailFail(state, action);
    case GET_BIANNUALLY_PENDING_PAYMENT_BILLS_START:
      return getBiAnnuallyPendingPaymentBillListStart(state, action);
    case GET_BIANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getBiAnnuallyPendingPaymentBillListSuccess(state, action);
    case GET_BIANNUALLY_PENDING_PAYMENT_BILLS_FAIL:
      return getBiAnnuallyPendingPaymentBillListFail(state, action);
    case GET_BIANNUALLY_PENDING_PAYMENT_BILL_START:
      return getBiAnnuallyPendingPaymentBillDetailStart(state, action);
    case GET_BIANNUALLY_PENDING_PAYMENT_BILL_SUCCESS:
      return getBiAnnuallyPendingPaymentBillDetailSuccess(state, action);
    case GET_BIANNUALLY_PENDING_PAYMENT_BILL_FAIL:
      return getBiAnnuallyPendingPaymentBillDetailFail(state, action);
    case GET_ANNUALLY_PENDING_PAYMENT_BILLS_START:
      return getAnnuallyPendingPaymentBillListStart(state, action);
    case GET_ANNUALLY_PENDING_PAYMENT_BILLS_SUCCESS:
      return getAnnuallyPendingPaymentBillListSuccess(state, action);
    case GET_ANNUALLY_PENDING_PAYMENT_BILLS_FAIL:
      return getAnnuallyPendingPaymentBillListFail(state, action);
    case GET_ANNUALLY_PENDING_PAYMENT_BILL_START:
      return getAnnuallyPendingPaymentBillDetailStart(state, action);
    case GET_ANNUALLY_PENDING_PAYMENT_BILL_SUCCESS:
      return getAnnuallyPendingPaymentBillDetailSuccess(state, action);
    case GET_ANNUALLY_PENDING_PAYMENT_BILL_FAIL:
      return getAnnuallyPendingPaymentBillDetailFail(state, action);
    case GET_ONCE_OFF_PENDING_PAYMENT_BILLS_START:
      return getOnceOffPendingPaymentBillListStart(state, action);
    case GET_ONCE_OFF_PENDING_PAYMENT_BILLS_SUCCESS:
      return getOnceOffPendingPaymentBillListSuccess(state, action);
    case GET_ONCE_OFF_PENDING_PAYMENT_BILLS_FAIL:
      return getOnceOffPendingPaymentBillListFail(state, action);
    case GET_ONCE_OFF_PENDING_PAYMENT_BILL_START:
      return getOnceOffPendingPaymentBillDetailStart(state, action);
    case GET_ONCE_OFF_PENDING_PAYMENT_BILL_SUCCESS:
      return getOnceOffPendingPaymentBillDetailSuccess(state, action);
    case GET_ONCE_OFF_PENDING_PAYMENT_BILL_FAIL:
      return getOnceOffPendingPaymentBillDetailFail(state, action);
    case GET_BILLS_START:
      return getBillListStart(state, action);
    case GET_BILLS_SUCCESS:
      return getBillListSuccess(state, action);
    case GET_BILLS_FAIL:
      return getBillListFail(state, action);
    case CREATE_BILL_START:
      return createBillStart(state, action);
    case CREATE_BILL_SUCCESS:
      return createBillSuccess(state, action);
    case CREATE_BILL_FAIL:
      return createBillFail(state, action);
    case GET_BILL_START:
      return getBillDetailStart(state, action);
    case GET_BILL_SUCCESS:
      return getBillDetailSuccess(state, action);
    case GET_BILL_FAIL:
      return getBillDetailFail(state, action);
    case EDIT_BILL:
      const earrayList = state.bills;
      earrayList.splice(earrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        bills: earrayList,
      };
    case GET_DAILY_UNVERIFIED_BILLS_START:
      return getDailyUnverifiedBillListStart(state, action);
    case GET_DAILY_UNVERIFIED_BILLS_SUCCESS:
      return getDailyUnverifiedBillListSuccess(state, action);
    case GET_DAILY_UNVERIFIED_BILLS_FAIL:
      return getDailyUnverifiedBillListFail(state, action);
    case CREATE_DAILY_UNVERIFIED_BILL_START:
      return createDailyUnverifiedBillStart(state, action);
    case CREATE_DAILY_UNVERIFIED_BILL_SUCCESS:
      return createDailyUnverifiedBillSuccess(state, action);
    case CREATE_DAILY_UNVERIFIED_BILL_FAIL:
      return createDailyUnverifiedBillFail(state, action);
    case GET_DAILY_UNVERIFIED_BILL_START:
      return getDailyUnverifiedBillDetailStart(state, action);
    case GET_DAILY_UNVERIFIED_BILL_SUCCESS:
      return getDailyUnverifiedBillDetailSuccess(state, action);
    case GET_DAILY_UNVERIFIED_BILL_FAIL:
      return getDailyUnverifiedBillDetailFail(state, action);
    case EDIT_DAILY_UNVERIFIED_BILL:
      const larrayList = state.dailyunverifiedbills;
      larrayList.splice(larrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        dailyunverifiedbills: larrayList,
      };
    case GET_DAILY_FULLY_PAID_BILLS_START:
      return getDailyFullyPaidBillListStart(state, action);
    case GET_DAILY_FULLY_PAID_BILLS_SUCCESS:
      return getDailyFullyPaidBillListSuccess(state, action);
    case GET_DAILY_FULLY_PAID_BILLS_FAIL:
      return getDailyFullyPaidBillListFail(state, action);
    case GET_DAILY_FULLY_PAID_BILL_START:
      return getDailyFullyPaidBillDetailStart(state, action);
    case GET_DAILY_FULLY_PAID_BILL_SUCCESS:
      return getDailyFullyPaidBillDetailSuccess(state, action);
    case GET_DAILY_FULLY_PAID_BILL_FAIL:
      return getDailyFullyPaidBillDetailFail(state, action);
    case GET_WEEKLY_UNVERIFIED_BILLS_START:
      return getWeeklyUnverifiedBillListStart(state, action);
    case GET_WEEKLY_UNVERIFIED_BILLS_SUCCESS:
      return getWeeklyUnverifiedBillListSuccess(state, action);
    case GET_WEEKLY_UNVERIFIED_BILLS_FAIL:
      return getWeeklyUnverifiedBillListFail(state, action);
    case CREATE_WEEKLY_UNVERIFIED_BILL_START:
      return createWeeklyUnverifiedBillStart(state, action);
    case CREATE_WEEKLY_UNVERIFIED_BILL_SUCCESS:
      return createWeeklyUnverifiedBillSuccess(state, action);
    case CREATE_WEEKLY_UNVERIFIED_BILL_FAIL:
      return createWeeklyUnverifiedBillFail(state, action);
    case GET_WEEKLY_UNVERIFIED_BILL_START:
      return getWeeklyUnverifiedBillDetailStart(state, action);
    case GET_WEEKLY_UNVERIFIED_BILL_SUCCESS:
      return getWeeklyUnverifiedBillDetailSuccess(state, action);
    case GET_WEEKLY_UNVERIFIED_BILL_FAIL:
      return getWeeklyUnverifiedBillDetailFail(state, action);
    case EDIT_WEEKLY_UNVERIFIED_BILL:
      const warrayList = state.weeklyunverifiedbills;
      warrayList.splice(warrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        weeklyunverifiedbills: warrayList,
      };
    case GET_WEEKLY_FULLY_PAID_BILLS_START:
      return getWeeklyFullyPaidBillListStart(state, action);
    case GET_WEEKLY_FULLY_PAID_BILLS_SUCCESS:
      return getWeeklyFullyPaidBillListSuccess(state, action);
    case GET_WEEKLY_FULLY_PAID_BILLS_FAIL:
      return getWeeklyFullyPaidBillListFail(state, action);
    case GET_WEEKLY_FULLY_PAID_BILL_START:
      return getWeeklyFullyPaidBillDetailStart(state, action);
    case GET_WEEKLY_FULLY_PAID_BILL_SUCCESS:
      return getWeeklyFullyPaidBillDetailSuccess(state, action);
    case GET_WEEKLY_FULLY_PAID_BILL_FAIL:
      return getWeeklyFullyPaidBillDetailFail(state, action);
    case GET_BIMONTHLY_UNVERIFIED_BILLS_START:
      return getBiMonthlyUnverifiedBillListStart(state, action);
    case GET_BIMONTHLY_UNVERIFIED_BILLS_SUCCESS:
      return getBiMonthlyUnverifiedBillListSuccess(state, action);
    case GET_BIMONTHLY_UNVERIFIED_BILLS_FAIL:
      return getBiMonthlyUnverifiedBillListFail(state, action);
    case CREATE_BIMONTHLY_UNVERIFIED_BILL_START:
      return createBiMonthlyUnverifiedBillStart(state, action);
    case CREATE_BIMONTHLY_UNVERIFIED_BILL_SUCCESS:
      return createBiMonthlyUnverifiedBillSuccess(state, action);
    case CREATE_BIMONTHLY_UNVERIFIED_BILL_FAIL:
      return createBiMonthlyUnverifiedBillFail(state, action);
    case GET_BIMONTHLY_UNVERIFIED_BILL_START:
      return getBiMonthlyUnverifiedBillDetailStart(state, action);
    case GET_BIMONTHLY_UNVERIFIED_BILL_SUCCESS:
      return getBiMonthlyUnverifiedBillDetailSuccess(state, action);
    case GET_BIMONTHLY_UNVERIFIED_BILL_FAIL:
      return getBiMonthlyUnverifiedBillDetailFail(state, action);
    case EDIT_BIMONTHLY_UNVERIFIED_BILL:
      const biarrayList = state.bimonthlyunverifiedbills;
      biarrayList.splice(biarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        bimonthlyunverifiedbills: biarrayList,
      };
    case GET_BIMONTHLY_FULLY_PAID_BILLS_START:
      return getBiMonthlyFullyPaidBillListStart(state, action);
    case GET_BIMONTHLY_FULLY_PAID_BILLS_SUCCESS:
      return getBiMonthlyFullyPaidBillListSuccess(state, action);
    case GET_BIMONTHLY_FULLY_PAID_BILLS_FAIL:
      return getBiMonthlyFullyPaidBillListFail(state, action);
    case GET_BIMONTHLY_FULLY_PAID_BILL_START:
      return getBiMonthlyFullyPaidBillDetailStart(state, action);
    case GET_BIMONTHLY_FULLY_PAID_BILL_SUCCESS:
      return getBiMonthlyFullyPaidBillDetailSuccess(state, action);
    case GET_BIMONTHLY_FULLY_PAID_BILL_FAIL:
      return getBiMonthlyFullyPaidBillDetailFail(state, action);
    case GET_MONTHLY_UNVERIFIED_BILLS_START:
      return getMonthlyUnverifiedBillListStart(state, action);
    case GET_MONTHLY_UNVERIFIED_BILLS_SUCCESS:
      return getMonthlyUnverifiedBillListSuccess(state, action);
    case GET_MONTHLY_UNVERIFIED_BILLS_FAIL:
      return getMonthlyUnverifiedBillListFail(state, action);
    case CREATE_MONTHLY_UNVERIFIED_BILL_START:
      return createMonthlyUnverifiedBillStart(state, action);
    case CREATE_MONTHLY_UNVERIFIED_BILL_SUCCESS:
      return createMonthlyUnverifiedBillSuccess(state, action);
    case CREATE_MONTHLY_UNVERIFIED_BILL_FAIL:
      return createMonthlyUnverifiedBillFail(state, action);
    case GET_MONTHLY_UNVERIFIED_BILL_START:
      return getMonthlyUnverifiedBillDetailStart(state, action);
    case GET_MONTHLY_UNVERIFIED_BILL_SUCCESS:
      return getMonthlyUnverifiedBillDetailSuccess(state, action);
    case GET_MONTHLY_UNVERIFIED_BILL_FAIL:
      return getMonthlyUnverifiedBillDetailFail(state, action);
    case EDIT_MONTHLY_UNVERIFIED_BILL:
      const marrayList = state.monthlyunverifiedbills;
      marrayList.splice(marrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        monthlyunverifiedbills: marrayList,
      };
    case GET_MONTHLY_FULLY_PAID_BILLS_START:
      return getMonthlyFullyPaidBillListStart(state, action);
    case GET_MONTHLY_FULLY_PAID_BILLS_SUCCESS:
      return getMonthlyFullyPaidBillListSuccess(state, action);
    case GET_MONTHLY_FULLY_PAID_BILLS_FAIL:
      return getMonthlyFullyPaidBillListFail(state, action);
    case GET_MONTHLY_FULLY_PAID_BILL_START:
      return getMonthlyFullyPaidBillDetailStart(state, action);
    case GET_MONTHLY_FULLY_PAID_BILL_SUCCESS:
      return getMonthlyFullyPaidBillDetailSuccess(state, action);
    case GET_MONTHLY_FULLY_PAID_BILL_FAIL:
      return getMonthlyFullyPaidBillDetailFail(state, action);
    case GET_QUARTERLY_UNVERIFIED_BILLS_START:
      return getQuarterlyUnverifiedBillListStart(state, action);
    case GET_QUARTERLY_UNVERIFIED_BILLS_SUCCESS:
      return getQuarterlyUnverifiedBillListSuccess(state, action);
    case GET_QUARTERLY_UNVERIFIED_BILLS_FAIL:
      return getQuarterlyUnverifiedBillListFail(state, action);
    case CREATE_QUARTERLY_UNVERIFIED_BILL_START:
      return createQuarterlyUnverifiedBillStart(state, action);
    case CREATE_QUARTERLY_UNVERIFIED_BILL_SUCCESS:
      return createQuarterlyUnverifiedBillSuccess(state, action);
    case CREATE_QUARTERLY_UNVERIFIED_BILL_FAIL:
      return createQuarterlyUnverifiedBillFail(state, action);
    case GET_QUARTERLY_UNVERIFIED_BILL_START:
      return getQuarterlyUnverifiedBillDetailStart(state, action);
    case GET_QUARTERLY_UNVERIFIED_BILL_SUCCESS:
      return getQuarterlyUnverifiedBillDetailSuccess(state, action);
    case GET_QUARTERLY_UNVERIFIED_BILL_FAIL:
      return getQuarterlyUnverifiedBillDetailFail(state, action);
    case EDIT_QUARTERLY_UNVERIFIED_BILL:
      const qarrayList = state.quarterlyunverifiedbills;
      qarrayList.splice(qarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        quarterlyunverifiedbills: qarrayList,
      };
    case GET_QUARTERLY_FULLY_PAID_BILLS_START:
      return getQuarterlyFullyPaidBillListStart(state, action);
    case GET_QUARTERLY_FULLY_PAID_BILLS_SUCCESS:
      return getQuarterlyFullyPaidBillListSuccess(state, action);
    case GET_QUARTERLY_FULLY_PAID_BILLS_FAIL:
      return getQuarterlyFullyPaidBillListFail(state, action);
    case GET_QUARTERLY_FULLY_PAID_BILL_START:
      return getQuarterlyFullyPaidBillDetailStart(state, action);
    case GET_QUARTERLY_FULLY_PAID_BILL_SUCCESS:
      return getQuarterlyFullyPaidBillDetailSuccess(state, action);
    case GET_QUARTERLY_FULLY_PAID_BILL_FAIL:
      return getQuarterlyFullyPaidBillDetailFail(state, action);
    case GET_BIANNUALLY_UNVERIFIED_BILLS_START:
      return getBiAnnuallyUnverifiedBillListStart(state, action);
    case GET_BIANNUALLY_UNVERIFIED_BILLS_SUCCESS:
      return getBiAnnuallyUnverifiedBillListSuccess(state, action);
    case GET_BIANNUALLY_UNVERIFIED_BILLS_FAIL:
      return getBiAnnuallyUnverifiedBillListFail(state, action);
    case CREATE_BIANNUALLY_UNVERIFIED_BILL_START:
      return createBiAnnuallyUnverifiedBillStart(state, action);
    case CREATE_BIANNUALLY_UNVERIFIED_BILL_SUCCESS:
      return createBiAnnuallyUnverifiedBillSuccess(state, action);
    case CREATE_BIANNUALLY_UNVERIFIED_BILL_FAIL:
      return createBiAnnuallyUnverifiedBillFail(state, action);
    case GET_BIANNUALLY_UNVERIFIED_BILL_START:
      return getBiAnnuallyUnverifiedBillDetailStart(state, action);
    case GET_BIANNUALLY_UNVERIFIED_BILL_SUCCESS:
      return getBiAnnuallyUnverifiedBillDetailSuccess(state, action);
    case GET_BIANNUALLY_UNVERIFIED_BILL_FAIL:
      return getBiAnnuallyUnverifiedBillDetailFail(state, action);
    case EDIT_BIANNUALLY_UNVERIFIED_BILL:
      const zarrayList = state.biannuallyunverifiedbills;
      zarrayList.splice(zarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        biannuallyunverifiedbills: zarrayList,
      };
    case GET_BIANNUALLY_FULLY_PAID_BILLS_START:
      return getBiAnnuallyFullyPaidBillListStart(state, action);
    case GET_BIANNUALLY_FULLY_PAID_BILLS_SUCCESS:
      return getBiAnnuallyFullyPaidBillListSuccess(state, action);
    case GET_BIANNUALLY_FULLY_PAID_BILLS_FAIL:
      return getBiAnnuallyFullyPaidBillListFail(state, action);
    case GET_BIANNUALLY_FULLY_PAID_BILL_START:
      return getBiAnnuallyFullyPaidBillDetailStart(state, action);
    case GET_BIANNUALLY_FULLY_PAID_BILL_SUCCESS:
      return getBiAnnuallyFullyPaidBillDetailSuccess(state, action);
    case GET_BIANNUALLY_FULLY_PAID_BILL_FAIL:
      return getBiAnnuallyFullyPaidBillDetailFail(state, action);
    case GET_ANNUALLY_UNVERIFIED_BILLS_START:
      return getAnnuallyUnverifiedBillListStart(state, action);
    case GET_ANNUALLY_UNVERIFIED_BILLS_SUCCESS:
      return getAnnuallyUnverifiedBillListSuccess(state, action);
    case GET_ANNUALLY_UNVERIFIED_BILLS_FAIL:
      return getAnnuallyUnverifiedBillListFail(state, action);
    case CREATE_ANNUALLY_UNVERIFIED_BILL_START:
      return createAnnuallyUnverifiedBillStart(state, action);
    case CREATE_ANNUALLY_UNVERIFIED_BILL_SUCCESS:
      return createAnnuallyUnverifiedBillSuccess(state, action);
    case CREATE_ANNUALLY_UNVERIFIED_BILL_FAIL:
      return createAnnuallyUnverifiedBillFail(state, action);
    case GET_ANNUALLY_UNVERIFIED_BILL_START:
      return getAnnuallyUnverifiedBillDetailStart(state, action);
    case GET_ANNUALLY_UNVERIFIED_BILL_SUCCESS:
      return getAnnuallyUnverifiedBillDetailSuccess(state, action);
    case GET_ANNUALLY_UNVERIFIED_BILL_FAIL:
      return getAnnuallyUnverifiedBillDetailFail(state, action);
    case EDIT_ANNUALLY_UNVERIFIED_BILL:
      const farrayList = state.annuallyunverifiedbills;
      farrayList.splice(farrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        annuallyunverifiedbills: farrayList,
      };
    case GET_ANNUALLY_FULLY_PAID_BILLS_START:
      return getAnnuallyFullyPaidBillListStart(state, action);
    case GET_ANNUALLY_FULLY_PAID_BILLS_SUCCESS:
      return getAnnuallyFullyPaidBillListSuccess(state, action);
    case GET_ANNUALLY_FULLY_PAID_BILLS_FAIL:
      return getAnnuallyFullyPaidBillListFail(state, action);
    case GET_ANNUALLY_FULLY_PAID_BILL_START:
      return getAnnuallyFullyPaidBillDetailStart(state, action);
    case GET_ANNUALLY_FULLY_PAID_BILL_SUCCESS:
      return getAnnuallyFullyPaidBillDetailSuccess(state, action);
    case GET_ANNUALLY_FULLY_PAID_BILL_FAIL:
      return getAnnuallyFullyPaidBillDetailFail(state, action);
    case GET_ONCE_OFF_UNVERIFIED_BILLS_START:
      return getOnceOffUnverifiedBillListStart(state, action);
    case GET_ONCE_OFF_UNVERIFIED_BILLS_SUCCESS:
      return getOnceOffUnverifiedBillListSuccess(state, action);
    case GET_ONCE_OFF_UNVERIFIED_BILLS_FAIL:
      return getOnceOffUnverifiedBillListFail(state, action);
    case CREATE_ONCE_OFF_UNVERIFIED_BILL_START:
      return createOnceOffUnverifiedBillStart(state, action);
    case CREATE_ONCE_OFF_UNVERIFIED_BILL_SUCCESS:
      return createOnceOffUnverifiedBillSuccess(state, action);
    case CREATE_ONCE_OFF_UNVERIFIED_BILL_FAIL:
      return createOnceOffUnverifiedBillFail(state, action);
    case GET_ONCE_OFF_UNVERIFIED_BILL_START:
      return getOnceOffUnverifiedBillDetailStart(state, action);
    case GET_ONCE_OFF_UNVERIFIED_BILL_SUCCESS:
      return getOnceOffUnverifiedBillDetailSuccess(state, action);
    case GET_ONCE_OFF_UNVERIFIED_BILL_FAIL:
      return getOnceOffUnverifiedBillDetailFail(state, action);
    case EDIT_ONCE_OFF_UNVERIFIED_BILL:
      const oarrayList = state.onceoffunverifiedbills;
      oarrayList.splice(oarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        onceoffunverifiedbills: oarrayList,
      };
    case GET_ONCE_OFF_FULLY_PAID_BILLS_START:
      return getOnceOffFullyPaidBillListStart(state, action);
    case GET_ONCE_OFF_FULLY_PAID_BILLS_SUCCESS:
      return getOnceOffFullyPaidBillListSuccess(state, action);
    case GET_ONCE_OFF_FULLY_PAID_BILLS_FAIL:
      return getOnceOffFullyPaidBillListFail(state, action);
    case GET_ONCE_OFF_FULLY_PAID_BILL_START:
      return getOnceOffFullyPaidBillDetailStart(state, action);
    case GET_ONCE_OFF_FULLY_PAID_BILL_SUCCESS:
      return getOnceOffFullyPaidBillDetailSuccess(state, action);
    case GET_ONCE_OFF_FULLY_PAID_BILL_FAIL:
      return getOnceOffFullyPaidBillDetailFail(state, action);
    case GET_BILL_LINES_START:
      return getBillLineListStart(state, action);
    case GET_BILL_LINES_SUCCESS:
      return getBillLineListSuccess(state, action);
    case GET_BILL_LINES_FAIL:
      return getBillLineListFail(state, action);
    case GET_BILL_SUPPLIERS_START:
      return getBillSupplierListStart(state, action);
    case GET_BILL_SUPPLIERS_SUCCESS:
      return getBillSupplierListSuccess(state, action);
    case GET_BILL_SUPPLIERS_FAIL:
      return getBillSupplierListFail(state, action);

    case VERIFY_DAILY_BILL_START:
      return verifyDailyBillStart(state, action);
    case VERIFY_DAILY_BILL_SUCCESS:
      return verifyDailyBillSuccess(state, action);
    case VERIFY_DAILY_BILL_FAIL:
      return verifyDailyBillFail(state, action);
    case VERIFY_WEEKLY_BILL_START:
      return verifyWeeklyBillStart(state, action);
    case VERIFY_WEEKLY_BILL_SUCCESS:
      return verifyWeeklyBillSuccess(state, action);
    case VERIFY_WEEKLY_BILL_FAIL:
      return verifyWeeklyBillFail(state, action);
    case VERIFY_BIMONTHLY_BILL_START:
      return verifyBiMonthlyBillStart(state, action);
    case VERIFY_BIMONTHLY_BILL_SUCCESS:
      return verifyBiMonthlyBillSuccess(state, action);
    case VERIFY_BIMONTHLY_BILL_FAIL:
      return verifyBiMonthlyBillFail(state, action);
    case VERIFY_MONTHLY_BILL_START:
      return verifyMonthlyBillStart(state, action);
    case VERIFY_MONTHLY_BILL_SUCCESS:
      return verifyMonthlyBillSuccess(state, action);
    case VERIFY_MONTHLY_BILL_FAIL:
      return verifyMonthlyBillFail(state, action);
    case VERIFY_QUARTERLY_BILL_START:
      return verifyQuarterlyBillStart(state, action);
    case VERIFY_QUARTERLY_BILL_SUCCESS:
      return verifyQuarterlyBillSuccess(state, action);
    case VERIFY_QUARTERLY_BILL_FAIL:
      return verifyQuarterlyBillFail(state, action);
    case VERIFY_BIANNUALLY_BILL_START:
      return verifyBiAnnuallyBillStart(state, action);
    case VERIFY_BIANNUALLY_BILL_SUCCESS:
      return verifyBiAnnuallyBillSuccess(state, action);
    case VERIFY_BIANNUALLY_BILL_FAIL:
      return verifyBiAnnuallyBillFail(state, action);
    case VERIFY_ANNUALLY_BILL_START:
      return verifyAnnuallyBillStart(state, action);
    case VERIFY_ANNUALLY_BILL_SUCCESS:
      return verifyAnnuallyBillSuccess(state, action);
    case VERIFY_ANNUALLY_BILL_FAIL:
      return verifyAnnuallyBillFail(state, action);
    case VERIFY_ONCEOFF_BILL_START:
      return verifyOnceOffBillStart(state, action);
    case VERIFY_ONCEOFF_BILL_SUCCESS:
      return verifyOnceOffBillSuccess(state, action);
    case VERIFY_ONCEOFF_BILL_FAIL:
      return verifyOnceOffBillFail(state, action);


    case PAY_DAILY_BILL_START:
      return payDailyBillStart(state, action);
    case PAY_DAILY_BILL_SUCCESS:
      return payDailyBillSuccess(state, action);
    case PAY_DAILY_BILL_FAIL:
      return payDailyBillFail(state, action);
    case PAY_WEEKLY_BILL_START:
      return payWeeklyBillStart(state, action);
    case PAY_WEEKLY_BILL_SUCCESS:
      return payWeeklyBillSuccess(state, action);
    case PAY_WEEKLY_BILL_FAIL:
      return payWeeklyBillFail(state, action);
    case PAY_BIMONTHLY_BILL_START:
      return payBiMonthlyBillStart(state, action);
    case PAY_BIMONTHLY_BILL_SUCCESS:
      return payBiMonthlyBillSuccess(state, action);
    case PAY_BIMONTHLY_BILL_FAIL:
      return payBiMonthlyBillFail(state, action);
    case PAY_MONTHLY_BILL_START:
      return payMonthlyBillStart(state, action);
    case PAY_MONTHLY_BILL_SUCCESS:
      return payMonthlyBillSuccess(state, action);
    case PAY_MONTHLY_BILL_FAIL:
      return payMonthlyBillFail(state, action);
    case PAY_QUARTERLY_BILL_START:
      return payQuarterlyBillStart(state, action);
    case PAY_QUARTERLY_BILL_SUCCESS:
      return payQuarterlyBillSuccess(state, action);
    case PAY_QUARTERLY_BILL_FAIL:
      return payQuarterlyBillFail(state, action);
    case PAY_BIANNUALLY_BILL_START:
      return payBiAnnuallyBillStart(state, action);
    case PAY_BIANNUALLY_BILL_SUCCESS:
      return payBiAnnuallyBillSuccess(state, action);
    case PAY_BIANNUALLY_BILL_FAIL:
      return payBiAnnuallyBillFail(state, action);
    case PAY_ANNUALLY_BILL_START:
      return payAnnuallyBillStart(state, action);
    case PAY_ANNUALLY_BILL_SUCCESS:
      return payAnnuallyBillSuccess(state, action);
    case PAY_ANNUALLY_BILL_FAIL:
      return payAnnuallyBillFail(state, action);
    case PAY_ONCEOFF_BILL_START:
      return payOnceOffBillStart(state, action);
    case PAY_ONCEOFF_BILL_SUCCESS:
      return payOnceOffBillSuccess(state, action);
    case PAY_ONCEOFF_BILL_FAIL:
      return payOnceOffBillFail(state, action);

    case VERIFY_BILL_PAYMENT_START:
      return verifyBillPaymentStart(state, action);
    case VERIFY_BILL_PAYMENT_SUCCESS:
      return verifyBillPaymentSuccess(state, action);
    case VERIFY_BILL_PAYMENT_FAIL:
      return verifyBillPaymentFail(state, action);
    default:
      return state;
  }
}
