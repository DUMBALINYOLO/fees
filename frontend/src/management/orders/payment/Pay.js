import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { 
    payOrder
} from '../../../actions/inventory/orders';
import { InputText } from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';




const paymentTypeOptions = [
    {key: "cash", value: "Cash" },
    {key:"transfer", value: "Transfer"},
    {key:"debit card", value: "Debit Card"},
    {key: "mobile", value: "Mobile-Transfer"}
]


const PayOrder = (props) => {
    let emptyPayment = {
        method: '',
        amount: 0,
        paid_by: props.email
    }

    const [record, setRecord] = useState(emptyPayment);

    const savePayment = (e) => {
        e.preventDefault(); 
        props.payOrder(props.data.id, record, props.token)
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
            <div className="p-field p-col-12 p-md-3">
                <Button label='MAKE PAYMENT' onClick={savePayment}/>
            </div>  
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
    email: state.auth.email,
})

export default connect(
  mapStateToProps,
  {payOrder} )
  (PayOrder);
