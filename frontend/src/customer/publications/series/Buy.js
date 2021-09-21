import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { 
    addCustomerSeriesOrderItem
} from '../../../actions/invoicing/customers';
import { InputText } from 'primereact/inputtext';







const Buy = (props) => {
    let order = {
        type: 'series',
        read_type: 'hardcopy',
        client: props.email,
        series: props.id,
        quantity: 1
    }

    const {token} =props;
    const [record, setRecord]  = useState(order)

    const saveItem = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.addCustomerSeriesOrderItem(_record, token)
        }
        props.seriesDialog(false)
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    return (
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12">
            <label htmlFor="righticon">QUANTITY</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="quantity"
                    name="quantity"
                    value={record.quantity}
                    onChange={(e) => onInputChange(e, 'quantity')}
                    type='number'
                />
            </span>
            </div>
          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveItem}/>
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
  {addCustomerSeriesOrderItem} )
  (Buy);