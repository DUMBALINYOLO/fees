import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const SingleJournalEntryDetail = (props) => { 
    const {
        id,
        date,
        creator,
        reference_number,
        total_debits,
        total_credits,
        memo
    } = props.data;

    
    return (
        <Paper className='bg-royal card-box-hover-rise'>

           
            <div className="flexgrid-demo">
                    
                <h1 style={{textAlign: 'center'}}>JOURNAL DETAILS</h1>
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
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="REFERRENCE NUMBER">
                            <p>
                                {reference_number}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="CREATOR">
                            <p>
                                {creator}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="TOTAL DEBITS">
                            <p>
                                {total_debits}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="TOTAL CREDITS">
                            <p>
                                {total_credits}
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
                </div>
                
            </div>
        </Paper>
    );
}


export default SingleJournalEntryDetail;