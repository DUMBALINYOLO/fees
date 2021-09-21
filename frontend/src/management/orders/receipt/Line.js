import React, { Component } from 'react'
import { MdCancel as DeleteIcon } from 'react-icons/md'
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';





class PaymentPlan extends Component {

  render = () => {

    const { index, orderitems, quantity,line } = this.props;


    return (
      <div style={{backgroundColor:'#434547'}}>
        <div className="p-fluid p-formgrid p-grid">

          <div className="p-field p-col-12 p-md-5" style={{padding: 10}}>
              <Dropdown
                  value={line}
                  optionLabel="name"
                  optionValue="id"
                  name="line"
                  options={orderitems}
                  onChange={this.props.changeHandler(index)}
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select Debit Account"
                />
          </div>
          <div className="p-field p-col-12 p-md-5" style={{padding: 10}}>
            <InputText
              value={quantity}
              name="quantity"
              type="number"
              tooltip="Enter Quantity"
              onChange={this.props.changeHandler(index)}
              onFocus={this.props.focusHandler}
            />
          </div>
          
          <div className="p-field p-col-12 p-md-2" style={{padding: 10}}>
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
