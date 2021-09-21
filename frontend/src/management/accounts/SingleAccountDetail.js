import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const SingleAccountDetail = (props) => {
    const {
        id,
        name,
        account_number,
        type,
        balance_sheet_category,
        balance,
        description,
        total_debit,
        total_credit,


    } = props.data;


    return (
        <Paper className='card-box-hover-rise'>


            <div className="flexgrid-demo">

                <h1 style={{textAlign: 'center'}}>ACCOUNT DETAILS</h1>
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
                        <Panel header="NUMBER">
                            <p>
                                {account_number}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="TYPE">
                            <p>
                                {type}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="BALANCE SHEET CATEGORY">
                            <p>
                                {balance_sheet_category}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="BALANCE">
                            <p>
                                {balance}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="DESCRIPTION">
                            <p>
                                {description}
                            </p>
                        </Panel>
                    </div>

                    <div className="p-col">
                        <Panel header="TOTAL DEBIT">
                            <p>
                                {total_debit}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="TOTAL CREDIT">
                            <p>
                                {total_credit}
                            </p>
                        </Panel>
                    </div>
                </div>
            </div>
        </Paper>
    );
}


export default SingleAccountDetail;
