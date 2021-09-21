import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';
import { Toolbar } from 'primereact/toolbar';
import Pay from './Pay'





const SupplierDetail = (props) => { 

    const [seriesDialog, setSeriesDialog] = useState(false);

    const openNew = () => {
        setSeriesDialog(true);
    }

    const hideDialog = () => {
        setSeriesDialog(false);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button 
                    label="PAY" 
                    className="p-button-warning " 
                    onClick={openNew}
                />
            </React.Fragment>
        )
    }
    
    const {
        id,
        validated_by,
        expected_receipt_date,
        date,
        due,
        supplier,
        ship_to,
        tracking_number,
        notes,
        status,
        received_to_date,
        issuing_inventory_controller,
        days_overdue,
        consumables_total,
        total,
        latest_receipt_date,
        tax_amount,
        amount_paid,
        total_due,
        payment_status,
        received_total,
        percent_received,
            
    } = props.data;

    
    return (
        <Paper>
            <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
            <Dialog
                visible={seriesDialog}
                style={{ width: '800px' }}
                header="STOCK FORM"
                modal
                className="p-fluid"
                onHide={hideDialog}
                >
                    < Pay
                        data={props.data}
                        productDialog={seriesDialog}
                    />

            </Dialog>
           
            <div className="flexgrid-demo">
                    
                <h1 style={{textAlign: 'center'}}>ORDER DETAILS</h1>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="ID">
                            <p>
                                {id}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="ISSUED BY">
                            <p>
                                {issuing_inventory_controller}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="VALIDATE BY">
                            <p>
                                {validated_by}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="DATE">
                            <p>
                                {date}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="DUE DATE">
                            <p>
                                {due}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="EXPECTED DATE">
                            <p>
                                {expected_receipt_date}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="TRACKING NUMBER">
                            <p>
                                {tracking_number}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="SUPPLIER">
                            <p>
                                {supplier}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="WAREHOUSE">
                            <p>
                                {ship_to}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="NOTES">
                            <p>
                                {notes}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="STATUS">
                            <p>
                                {status}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="RECEIVED TO DATE">
                            <p>
                                {received_to_date}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="DAYS OVERDUE">
                            <p>
                                {days_overdue}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="TOTAL COST">
                            <p>
                                {total}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="TOTAL DUE">
                            <p>
                                {total_due}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="CONSUMABLES TOTAL">
                            <p>
                                {consumables_total}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="DAYS OVERDUE">
                            <p>
                                {days_overdue}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="LATEST RECEIPT DATE">
                            <p>
                                {latest_receipt_date}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="TAX AMOUNT">
                            <p>
                                ${tax_amount}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="AMOUNT PAID">
                            <p>
                                ${amount_paid}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="PAYMENT STATUS">
                            <p>
                                {payment_status}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="RECEIVED TOTAL">
                            <p>
                                {received_total}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="PERCENT RECEIVED">
                            <p>
                                {percent_received} %
                            </p>
                        </Panel>
                    </div>
                </div>
            </div>
        </Paper>
    );
}


export default SupplierDetail;