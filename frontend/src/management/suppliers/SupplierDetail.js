import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const SupplierDetail = (props) => { 
    const {
        id,
        name,
        email,
        phone,
        website,
        contact_person,
        account,
        bp_number,
        supplier_number,
            

    } = props.data;

    
    return (
        <Paper>

           
            <div className="flexgrid-demo">
                    
                <h1 style={{textAlign: 'center'}}>SUPPLIER DETAILS</h1>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="ID">
                            <p>
                                {id}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="NAME">
                            <p>
                                {name}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="EMAIL">
                            <p>
                                {email}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="PHONE">
                            <p>
                                {phone}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="BP NUMBER">
                            <p>
                                {supplier_number}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="WEBSITE">
                            <p>
                                {website}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="CONTACT PERSON">
                            <p>
                                {contact_person}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="ACCOUNT">
                            <p>
                                {account}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="BP NUMBER">
                            <p>
                                {bp_number}
                            </p>
                        </Panel>
                    </div>
                </div>
            </div>
        </Paper>
    );
}


export default SupplierDetail;