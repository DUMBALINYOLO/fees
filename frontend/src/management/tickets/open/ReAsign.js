import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import {
    reassignTicket
} from '../../../actions/tickets/opentickets';
import {getUsers} from '../../../actions/auth';
import { Dropdown } from 'primereact/dropdown';




const Buy = (props) => {
    let order = {
        assigned_to: '',
    }

    const {token} =props;
    const [record, setRecord]  = useState(order)


    useEffect(() => {
        if(!props.fetched) {
            props.getUsers(token)

        }
        console.log('mount it!');
      }, []);

    const saveItem = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.reassignTicket(props.id, _record, token)
            console.log(token)
        }
        props.ticketDialog(false)
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
            <label htmlFor="righticon">ASIGN TO</label>
            <span className="p-float-label p-input-icon-right">
                <Dropdown
                    value={record.assigned_to}
                    optionLabel="username"
                    optionValue="id"
                    options={props.staffusers}
                    onChange={(e) => onInputChange(e, 'assigned_to')}
                    filter
                    showClear
                    filterBy="username"
                    placeholder="ASIGN TO"
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
    staffusers: state.auth.people,
})

export default connect(
  mapStateToProps,
  {getUsers, reassignTicket} )
  (Buy);