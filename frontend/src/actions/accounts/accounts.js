import axios from 'axios';
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
import {
  accountsURL,
  deletedaccountsURL,
  journalentriesURL,
  interestbearingaccountsURL,
  accountcreditsURL,
  accountdebitsURL,
  inactiveaccountsURL
} from '../../constants';
import { returnErrors } from '../messages';

//journal entries
const getJournalEntryListStart = () => {
  return {
    type: GET_JOURNAL_ENTRIES_START
  };
};

const getJournalEntryListSuccess = journalentries => {
  return {
    type: GET_JOURNAL_ENTRIES_SUCCESS,
    journalentries
  };
};

const getJournalEntryListFail = error => {
  return {
    type: GET_JOURNAL_ENTRIES_FAIL,
    error: error
  };
};

//in active accounts
const getInActiveAccountListStart = () => {
  return {
    type: GET_IN_ACTIVE_ACCOUNTS_START
  };
};

const getInActiveAccountListSuccess = inactiveaccounts => {
  return {
    type: GET_IN_ACTIVE_ACCOUNTS_SUCCESS,
    inactiveaccounts
  };
};

const getInActiveAccountListFail = error => {
  return {
    type: GET_IN_ACTIVE_ACCOUNTS_FAIL,
    error: error
  };
};

const getInActiveAccountDetailStart = () => {
  return {
    type: GET_IN_ACTIVE_ACCOUNT_START
  };
};

const getInActiveAccountDetailSuccess = inactiveaccount => {
  return {
    type: GET_IN_ACTIVE_ACCOUNT_SUCCESS,
    inactiveaccount
  };
};

const getInActiveAccountDetailFail = error => {
  return {
    type: GET_IN_ACTIVE_ACCOUNT_FAIL,
    error: error
  };
};

//account credits
const getAccountCreditListStart = () => {
  return {
    type: GET_ACCOUNT_CREDITS_START
  };
};

const getAccountCreditListSuccess = accountcredits => {
  return {
    type: GET_ACCOUNT_CREDITS_SUCCESS,
    accountcredits
  };
};

const getAccountCreditListFail = error => {
  return {
    type: GET_ACCOUNT_CREDITS_FAIL,
    error: error
  };
};

//account debits
const getAccountDebitListStart = () => {
  return {
    type: GET_ACCOUNT_DEBITS_START
  };
};

const getAccountDebitListSuccess = accountdebits => {
  return {
    type: GET_ACCOUNT_DEBITS_SUCCESS,
    accountdebits
  };
};

const getAccountDebitListFail = error => {
  return {
    type: GET_ACCOUNT_DEBITS_FAIL,
    error: error
  };
};

//accounts
const getAccountListStart = () => {
  return {
    type: GET_ACCOUNTS_START
  };
};

const getAccountListSuccess = accounts => {
  return {
    type: GET_ACCOUNTS_SUCCESS,
    accounts
  };
};

const getAccountListFail = error => {
  return {
    type: GET_ACCOUNTS_FAIL,
    error: error
  };
};

const createAccountStart = () => {
  return {
    type: CREATE_ACCOUNT_START
  };
};


const createAccountSuccess = account => {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    account
  };
};

const createAccountFail = error => {
  return {
    type: CREATE_ACCOUNT_FAIL,
    error: error
  };
};

const getAccountDetailStart = () => {
  return {
    type: GET_ACCOUNT_START
  };
};

const getAccountDetailSuccess = account => {
  return {
    type: GET_ACCOUNT_SUCCESS,
    account
  };
};

const getAccountDetailFail = error => {
  return {
    type: GET_ACCOUNT_FAIL,
    error: error
  };
};

const getDeletedAccountListStart = () => {
  return {
    type: GET_DELETED_ACCOUNTS_START
  };
};

const getDeletedAccountListSuccess = deletedaccounts => {
  return {
    type: GET_DELETED_ACCOUNTS_SUCCESS,
    deletedaccounts
  };
};

const getDeletedAccountListFail = error => {
  return {
    type: GET_DELETED_ACCOUNTS_FAIL,
    error: error
  };
};

//interest bearing accounts
const getInterestBearingAccountListStart = () => {
  return {
    type: GET_INTEREST_BEARING_ACCOUNTS_START
  };
};

const getInterestBearingAccountListSuccess = interestbearingaccounts => {
  return {
    type: GET_INTEREST_BEARING_ACCOUNTS_SUCCESS,
    interestbearingaccounts
  };
};

const getInterestBearingAccountListFail = error => {
  return {
    type: GET_INTEREST_BEARING_ACCOUNTS_FAIL,
    error: error
  };
};

const createInterestBearingAccountStart = () => {
  return {
    type: CREATE_INTEREST_BEARING_ACCOUNT_START
  };
};


const createInterestBearingAccountSuccess = interestbearingaccount => {
  return {
    type: CREATE_INTEREST_BEARING_ACCOUNT_SUCCESS,
    interestbearingaccount
  };
};

const createInterestBearingAccountFail = error => {
  return {
    type: CREATE_INTEREST_BEARING_ACCOUNT_FAIL,
    error: error
  };
};

const getInterestBearingAccountDetailStart = () => {
  return {
    type: GET_INTEREST_BEARING_ACCOUNT_START
  };
};

const getInterestBearingAccountDetailSuccess = interestbearingaccount => {
  return {
    type: GET_INTEREST_BEARING_ACCOUNT_SUCCESS,
    interestbearingaccount
  };
};

const getInterestBearingAccountDetailFail = error => {
  return {
    type: GET_INTEREST_BEARING_ACCOUNT_FAIL,
    error: error
  };
};

export const getInActiveAccounts = (username, token) => {
  return dispatch => {
        let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'remote-user': username,

        };
        dispatch(getInActiveAccountListStart());
      axios
        .get(inactiveaccountsURL, headers)
        .then(res => {
          const inactiveaccounts = res.data;
          dispatch(getInActiveAccountListSuccess(inactiveaccounts));
          })
        .catch(err => {
          dispatch(getInActiveAccountListStart(err));
        });
    };
};

export const getInActiveAccount = (id, username, token) => {
  return dispatch => {
      dispatch(getInActiveAccountDetailStart());
      axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'remote-user': username,
        };
      axios
        .get(`${inactiveaccountsURL}${id}`)
        .then(res => {
          const inactiveaccount = res.data;
          dispatch(getInActiveAccountDetailSuccess(inactiveaccount));
          })
        .catch(err => {
          dispatch(getInActiveAccountDetailFail(err));
        });
    };
};

export const activateAccount = (id, username, account, token) => dispatch => {
    const headers ={
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          'Accept': 'application/json',
          'remote-user': username,
    };
    axios.post(`${inactiveaccountsURL}${id}/activate/`, account, headers)
        .then(res => {
            dispatch({
                type: ACTIVATE_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountCredits = (id, token) => {
  return dispatch => {
      dispatch(getAccountCreditListStart());
      let headers = axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
      axios
        .get(`${accountcreditsURL}?id=${id}`, headers)
        .then(res => {
          const accountcredits = res.data;
          dispatch(getAccountCreditListSuccess(accountcredits));
          })
        .catch(err => {
          dispatch(getAccountCreditListFail(err));
        });
    };
};

export const getAccountDebits = (id, token) => {
  return dispatch => {
      dispatch(getAccountDebitListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${accountdebitsURL}?id=${id}`, headers)
        .then(res => {
          const accountdebits = res.data;
          dispatch(getAccountDebitListSuccess(accountdebits));
          })
        .catch(err => {
          dispatch(getAccountDebitListFail(err));
        });
    };
};

export const getAccounts = (token) => {
  return dispatch => {
      dispatch(getAccountListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        
      };
      axios
        .get(accountsURL, headers)
        .then(res => {
          const accounts = res.data;
          dispatch(getAccountListSuccess(accounts));
          })
        .catch(err => {
          dispatch(getAccountListFail(err));
        });
    };
};

export const getAccount = (id, token) => {
  return dispatch => {
      dispatch(getAccountDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${accountsURL}${id}`, headers)
        .then(res => {
          const account = res.data;
          dispatch(getAccountDetailSuccess(account));
          })
        .catch(err => {
          dispatch(getAccountDetailFail(err));
        });
    };
};

export const addAccount = (account, token) => {
  return dispatch => {
      dispatch(createAccountStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(accountsURL, account, headers)
        .then(res => {
          dispatch(createAccountSuccess(account));
        })
        .catch(err => {
          dispatch(createAccountFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editAccount = (id, account, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${accountsURL}${id}/`, account, headers)
        .then(res => {
            dispatch({
                type: EDIT_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getDeletedAccounts = (token) => {
  return dispatch => {
      dispatch(getDeletedAccountListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(deletedaccountsURL, headers)
        .then(res => {
          const deletedaccounts = res.data;
          dispatch(getDeletedAccountListSuccess(deletedaccounts));
          })
        .catch(err => {
          dispatch(getDeletedAccountListFail(err));
        });
    };
};

export const getJournalEntries = (token) => {
  return dispatch => {
      dispatch(getJournalEntryListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(journalentriesURL, headers)
        .then(res => {
          const journalentries = res.data;
          dispatch(getJournalEntryListSuccess(journalentries));
          })
        .catch(err => {
          dispatch(getJournalEntryListFail(err));
        });
    };
};


export const getInterestBearingAccounts = (token) => {
  return dispatch => {
      dispatch(getInterestBearingAccountListStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(interestbearingaccountsURL, headers)
        .then(res => {
          const interestbearingaccounts = res.data;
          dispatch(getInterestBearingAccountListSuccess(interestbearingaccounts));
          })
        .catch(err => {
          dispatch(getInterestBearingAccountListFail(err));
        });
    };
};

export const getInterestBearingAccount = (id, token) => {
  return dispatch => {
      dispatch(getInterestBearingAccountDetailStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .get(`${interestbearingaccountsURL}${id}`, headers)
        .then(res => {
          const interestbearingaccount = res.data;
          dispatch(getInterestBearingAccountDetailSuccess(interestbearingaccount));
          })
        .catch(err => {
          dispatch(getInterestBearingAccountDetailFail(err));
        });
    };
};

export const addInterestBearingAccount = (interestbearingaccount, token) => {
  return dispatch => {
      dispatch(createInterestBearingAccountStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .post(interestbearingaccountsURL, interestbearingaccount, headers)
        .then(res => {
          dispatch(createInterestBearingAccountSuccess(interestbearingaccount));
        })
        .catch(err => {
          dispatch(createInterestBearingAccountFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const editInterestBearingAccount = (id, interestbearingaccount, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${interestbearingaccountsURL}${id}/`, interestbearingaccount, headers)
    .then(res => {
        dispatch({
            type: EDIT_INTEREST_BEARING_ACCOUNT,
            payload: res.data
        });
    }).catch(err => console.log(err))
}
