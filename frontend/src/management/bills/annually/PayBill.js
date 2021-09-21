import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import {
    payAnnuallyBill
} from '../../../actions/accounts/expenses';
import {
  getAccounts,
} from '../../../actions/accounts/accounts';
import { InputText } from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {  useHistory } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';





const paymentTypeOptions = [
    {key: "cash", value: "Cash" },
    {key:"transfer", value: "Transfer"},
    {key:"debit card", value: "Debit Card"},
    {key: "mobile", value: "Mobile-Transfer"}
]





const PayBill = (props) => {
    let emptyPayment = {
      date: '',
      method: '',
      account: '',
      amount: 0,

    }

    const [record, setRecord] = useState(emptyPayment);
    const history = useHistory();
    const {accounts, token} = props;


    useEffect(() => {
      if(!props.fetched) {
          props.getAccounts(token);
      }
      console.log('mount it!');
    }, []);


    const savePayment= (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.payAnnuallyBill(props.id, _record, props.token)
        }
        props.orderDialog(false)
        // history.push(`/managementdashboard/invoices`)
    }


    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    return (
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12" style={{padding: 10}}>
                <Dropdown
                    value={record.method}
                    optionLabel="value"
                    optionValue="key"
                    options={paymentTypeOptions}
                    onChange={(e) => onInputChange(e, 'method')}
                    filter
                    showClear
                    filterBy="value"
                    placeholder="Select Payment Method"
                    />
            </div>
            <div className="p-field p-col-12 p-md-12" style={{padding: 10}}>
                <Dropdown
                    value={record.account}
                    optionLabel="name"
                    optionValue="id"
                    options={accounts}
                    onChange={(e) => onInputChange(e, 'account')}
                    filter
                    showClear
                    filterBy="name"
                    placeholder="Select Account"
                    />
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">AMOUNT</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText
                        id="amount"
                        name="amount"
                        type='number'
                        value={record.amount}
                        onChange={(e) => onInputChange(e, 'amount')}
                    />
                </span>
            </div>
            <div className="p-field p-col-12  p-md-12">
              <label htmlFor="date">DATE</label>
              <InputText
                  name='date'
                  type='date'
                  onChange={(e) => onInputChange(e, 'date')}
                  value={record.date}
                  dateFormat="yy-mm-dd"
                />
            </div>
            <div className="p-field p-col-12 p-md-6">
                <Button label='MAKE PAYMENT' onClick={savePayment}/>
            </div>
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
    accounts: state.accounts.accounts,
})

export default connect(
  mapStateToProps,
  {payAnnuallyBill, getAccounts} )
  (PayBill);
