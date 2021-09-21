import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { 
    acceptCustomerOrder
} from '../../../actions/invoicing/invoices';
import {  useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {InputText} from 'primereact/inputtext';







const Accept = (props) => {
    let order = {
        validated_by: props.email,
        due: null
    }

    const {token} =props;
    const [record, setRecord]  = useState(order)
    const history = useHistory();

    const saveItem = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.acceptCustomerOrder(props.id, _record, token)
        }
        props.orderDialog(false)
        history.push(`/managementdashboard/invoices`)
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
                <label>DUE DATE</label>
                <InputText
                    id="due"
                    type="date"
                    value={record.due}
                    format="yy-mm-dd"
                    onChange={(e) => onInputChange ('due')}
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
  {acceptCustomerOrder} )
  (Accept);