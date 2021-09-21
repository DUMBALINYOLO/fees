import {
  GET_ACCOUNTS_START,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAIL,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAIL,
  EDIT_ACCOUNT,
  GET_DELETED_ACCOUNTS_START,
  GET_DELETED_ACCOUNTS_SUCCESS,
  GET_DELETED_ACCOUNTS_FAIL,
  GET_JOURNAL_ENTRIES_START,
  GET_JOURNAL_ENTRIES_SUCCESS,
  GET_JOURNAL_ENTRIES_FAIL,
  GET_INTEREST_BEARING_ACCOUNTS_START,
  GET_INTEREST_BEARING_ACCOUNTS_SUCCESS,
  GET_INTEREST_BEARING_ACCOUNTS_FAIL,
  CREATE_INTEREST_BEARING_ACCOUNT_START,
  CREATE_INTEREST_BEARING_ACCOUNT_SUCCESS,
  CREATE_INTEREST_BEARING_ACCOUNT_FAIL,
  GET_INTEREST_BEARING_ACCOUNT_START,
  GET_INTEREST_BEARING_ACCOUNT_SUCCESS,
  GET_INTEREST_BEARING_ACCOUNT_FAIL,
  EDIT_INTEREST_BEARING_ACCOUNT,
  GET_ACCOUNT_CREDITS_START,
  GET_ACCOUNT_CREDITS_SUCCESS,
  GET_ACCOUNT_CREDITS_FAIL,
  GET_ACCOUNT_DEBITS_START,
  GET_ACCOUNT_DEBITS_SUCCESS,
  GET_ACCOUNT_DEBITS_FAIL,
  GET_IN_ACTIVE_ACCOUNTS_START,
  GET_IN_ACTIVE_ACCOUNTS_SUCCESS,
  GET_IN_ACTIVE_ACCOUNTS_FAIL,
  GET_IN_ACTIVE_ACCOUNT_START,
  GET_IN_ACTIVE_ACCOUNT_SUCCESS,
  GET_IN_ACTIVE_ACCOUNT_FAIL,
  ACTIVATE_ACCOUNT,
} from '../../types/accountTypes';
import { updateObject } from "../../utility";

const initialState = {
    accounts: [],
    account: {},
    deletedaccounts: [],
    journalentries: [],
    interestbearingaccounts: [],
    interestbearingaccount: {},
    accountcredits: [],
    accountdebits: [],
    inactiveaccounts: [],
    inactiveaccount: {},
    loading: false,
    error: null,
}

const getInActiveAccountListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getInActiveAccountListSuccess = (state, action) => {
  return updateObject(state, {
    inactiveaccounts: action.inactiveaccounts,
    error: null,
    loading: false
  });
};

const getInActiveAccountListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getInActiveAccountDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getInActiveAccountDetailSuccess = (state, action) => {
  return updateObject(state, {
    inactiveaccount: action.inactiveaccount,
    error: null,
    loading: false
  });
};

const getInActiveAccountDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountingAdjustmentListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountingAdjustmentListSuccess = (state, action) => {
  return updateObject(state, {
    journalentries: action.journalentries,
    error: null,
    loading: false
  });
};

const getAccountingAdjustmentListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountListSuccess = (state, action) => {
  return updateObject(state, {
    accounts: action.accounts,
    error: null,
    loading: false
  });
};

const getAccountListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createAccountStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createAccountSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createAccountFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountDetailSuccess = (state, action) => {
  return updateObject(state, {
    account: action.account,
    error: null,
    loading: false
  });
};

const getAccountDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getDeletedAccountListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getDeletedAccountListSuccess = (state, action) => {
  return updateObject(state, {
    deletedaccounts: action.deletedaccounts,
    error: null,
    loading: false
  });
};

const getDeletedAccountListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getInterestBearingAccountListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getInterestBearingAccountListSuccess = (state, action) => {
  return updateObject(state, {
    interestbearingaccounts: action.interestbearingaccounts,
    error: null,
    loading: false
  });
};

const getInterestBearingAccountListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createInterestBearingAccountStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createInterestBearingAccountSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createInterestBearingAccountFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getInterestBearingAccountDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getInterestBearingAccountDetailSuccess = (state, action) => {
  return updateObject(state, {
    interestbearingaccount: action.interestbearingaccount,
    error: null,
    loading: false
  });
};

const getInterestBearingAccountDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountCreditListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountCreditListSuccess = (state, action) => {
  return updateObject(state, {
    accountcredits: action.accountcredits,
    error: null,
    loading: false
  });
};

const getAccountCreditListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getAccountDebitListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getAccountDebitListSuccess = (state, action) => {
  return updateObject(state, {
    accountdebits: action.accountdebits,
    error: null,
    loading: false
  });
};

const getAccountDebitListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export default function accounts(state = initialState, action){
  switch(action.type){
    case GET_IN_ACTIVE_ACCOUNTS_START:
      return getInActiveAccountListStart(state, action);
    case GET_IN_ACTIVE_ACCOUNTS_SUCCESS:
      return getInActiveAccountListSuccess(state, action);
    case GET_IN_ACTIVE_ACCOUNTS_FAIL:
      return getInActiveAccountListFail(state, action);
    case GET_IN_ACTIVE_ACCOUNT_START:
      return getInActiveAccountDetailStart(state, action);
    case GET_IN_ACTIVE_ACCOUNT_SUCCESS:
      return getInActiveAccountDetailSuccess(state, action);
    case GET_IN_ACTIVE_ACCOUNT_FAIL:
      return getInActiveAccountDetailFail(state, action);
    case ACTIVATE_ACCOUNT:
      return {
        ...state,
        account: [...state.inactiveaccounts, action.payload]
      };
    case GET_ACCOUNT_DEBITS_START:
      return getAccountDebitListStart(state, action);
    case GET_ACCOUNT_DEBITS_SUCCESS:
      return getAccountDebitListSuccess(state, action);
    case GET_ACCOUNT_DEBITS_FAIL:
      return getAccountDebitListFail(state, action);
    case GET_ACCOUNT_CREDITS_START:
      return getAccountCreditListStart(state, action);
    case GET_ACCOUNT_CREDITS_SUCCESS:
      return getAccountCreditListSuccess(state, action);
    case GET_ACCOUNT_CREDITS_FAIL:
      return getAccountCreditListFail(state, action);
    case GET_ACCOUNTS_START:
      return getAccountListStart(state, action);
    case GET_ACCOUNTS_SUCCESS:
      return getAccountListSuccess(state, action);
    case GET_ACCOUNTS_FAIL:
      return getAccountListFail(state, action);
    case CREATE_ACCOUNT_START:
      return createAccountStart(state, action);
    case CREATE_ACCOUNT_SUCCESS:
      return createAccountSuccess(state, action);
    case CREATE_ACCOUNT_FAIL:
      return createAccountFail(state, action);
    case GET_ACCOUNT_START:
      return getAccountDetailStart(state, action);
    case GET_ACCOUNT_SUCCESS:
      return getAccountDetailSuccess(state, action);
    case GET_ACCOUNT_FAIL:
      return getAccountDetailFail(state, action);
    case EDIT_ACCOUNT:
      const aarrayList = state.accounts;
      aarrayList.splice(aarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        accounts: aarrayList,
      };
    case GET_DELETED_ACCOUNTS_START:
      return getDeletedAccountListStart(state, action);
    case GET_DELETED_ACCOUNTS_SUCCESS:
      return getDeletedAccountListSuccess(state, action);
    case GET_DELETED_ACCOUNTS_FAIL:
      return getDeletedAccountListFail(state, action);
    case GET_JOURNAL_ENTRIES_START:
      return getAccountingAdjustmentListStart(state, action);
    case GET_JOURNAL_ENTRIES_SUCCESS:
      return getAccountingAdjustmentListSuccess(state, action);
    case GET_JOURNAL_ENTRIES_FAIL:
      return getAccountingAdjustmentListFail(state, action);
    case GET_INTEREST_BEARING_ACCOUNTS_START:
      return getInterestBearingAccountListStart(state, action);
    case GET_INTEREST_BEARING_ACCOUNTS_SUCCESS:
      return getInterestBearingAccountListSuccess(state, action);
    case GET_INTEREST_BEARING_ACCOUNTS_FAIL:
      return getInterestBearingAccountListFail(state, action);
    case CREATE_INTEREST_BEARING_ACCOUNT_START:
      return createInterestBearingAccountStart(state, action);
    case CREATE_INTEREST_BEARING_ACCOUNT_SUCCESS:
      return createInterestBearingAccountSuccess(state, action);
    case CREATE_INTEREST_BEARING_ACCOUNT_FAIL:
      return createInterestBearingAccountFail(state, action);
    case GET_INTEREST_BEARING_ACCOUNT_START:
      return getInterestBearingAccountDetailStart(state, action);
    case GET_INTEREST_BEARING_ACCOUNT_SUCCESS:
      return getInterestBearingAccountDetailSuccess(state, action);
    case GET_INTEREST_BEARING_ACCOUNT_FAIL:
      return getInterestBearingAccountDetailFail(state, action);
    case EDIT_INTEREST_BEARING_ACCOUNT:
      const arrayList = state.interestbearingaccounts;
      arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
      return {
        ...state,
        interestbearingaccounts: arrayList,
      };
    default:
      return state;
  }
}
