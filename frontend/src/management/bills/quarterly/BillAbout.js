import React, {useState} from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import { Toolbar } from 'primereact/toolbar';
import PayBill from './PayBill';



const BillAbout = (props) => {
    const [seriesDialog, setSeriesDialog] = useState(false);
    const {
        id,
        vendor,
        date,
        due,
        memo,
        entry,
        total,
        category,
        total_payments,

    } = props.bill;


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

    return (
            <Paper>
                <Toolbar className="p-mb-4" left={leftToolbarTemplate}/>
                  <Dialog
                    visible={seriesDialog}
                    style={{ width: '600px' }}
                    header="PAYMENT FORM"
                    modal
                    className="p-fluid"
                    onHide={hideDialog}
                  >
                        <PayBill
                            id={id}
                            orderDialog={setSeriesDialog}
                        />
                </Dialog>
                <div className="flexgrid-demo">
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="ID">
                                <p>
                                    {id}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="DATE">
                                <p>
                                    {date}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="DUE">
                                <p>
                                    {due}
                                </p>
                            </Panel>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="MEMO">
                                <p>
                                    {memo}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="CATEGORY">
                                <p>
                                    {category}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="VENDOR">
                                <p>
                                    {vendor}
                                </p>
                            </Panel>
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="JOURNAL ENTRY">
                                <p>
                                    {entry}
                                </p>
                            </Panel>
                        </div>

                        <div className="p-col">
                            <Panel header="TOTAL">
                                <p>
                                    {total}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="TOTAL PAID">
                                <p>
                                    {total_payments}
                                </p>
                            </Panel>
                        </div>
                    </div>
                </div>
            </Paper>
    );
}

export default BillAbout;
