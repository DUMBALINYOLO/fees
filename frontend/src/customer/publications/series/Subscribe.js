import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { 
    addCustomerSeriesOrderItem
} from '../../../actions/invoicing/customers';
import { Dropdown } from 'primereact/dropdown';




const durationChoices = [
    {key:15, value:'FIFTEEN DAYS'},
    {key:30, value:'THIRTY DAYS'},
    {key:60, value:'SIXTY DAYS'},
    {key:90, value:'NINETY DAYS'},
    {key:120, value:'ONE  HUNDRED AND TWENTY DAYS'},
    {key:240, value:'TWO HUNDRED AND FORTY DAYS'},
    {key:365, value:'THREE HUNDRED AND SIXTY FIVE DAYS'},

]


const Buy = (props) => {
    let order = {
        type: 'series',
        read_type: 'online',
        plan: '',
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
                <Dropdown
                    value={record.plan}
                    optionLabel="value"
                    optionValue="key"
                    options={durationChoices}
                    onChange={(e) => onInputChange(e, 'plan')}
                    filter
                    showClear
                    filterBy="value"
                    placeholder="DURATION"
                />
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