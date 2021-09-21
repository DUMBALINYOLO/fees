import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const SingleJournalEntryDetail = (props) => { 
    const {
        id,
        name,
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
                        <Panel header="NAME">
                            <p>
                                {name}
                            </p>
                        </Panel>
                    </div>
                </div>

                
            </div>
        </Paper>
    );
}


export default SingleJournalEntryDetail;