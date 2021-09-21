import React, { Component } from 'react'
import { MdCancel as DeleteIcon } from 'react-icons/md'
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';








class PaymentPlan extends Component {


  render = () => {

    const { index, accounts, debit_account, amount } = this.props;


    return (
      <div style={{backgroundColor:'#434547'}}>
        <div className="p-fluid p-formgrid p-grid">

          <div className="p-field p-col-12 p-md-4" style={{padding: 20}}>
              <Dropdown
                  value={debit_account}
                  optionLabel="name"
                  optionValue="id"
                  name="debit_account"
                  options={accounts}
                  onChange={this.props.changeHandler(index)}
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select Debit Account"
                />
          </div>
          <div className="p-field p-col-12 p-md-4" style={{padding: 20}}>
            <InputText
              value={amount}
              name="amount"
              type="number"
              tooltip="Enter Amount"
              onChange={this.props.changeHandler(index)}
              onFocus={this.props.focusHandler}
            />
          </div>
          <div className="p-field p-col-12 p-md-4" style={{padding: 20}}>
            <button type="button"
              className='deleteItem'
              onClick={this.props.deleteHandler(index)}
            ><DeleteIcon size="1.25em" /></button>
          </div>
        </div>
      </div>

    )
  }
}

export default PaymentPlan;
