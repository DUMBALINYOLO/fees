import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';





const SupplierDetail = (props) => { 
    
    const {
        name,
        description
            
    } = props.data;

    
    return (
        <Paper>
           
            <div className="flexgrid-demo">
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header={name}>
                            <p>
                                {description}
                            </p>
                        </Panel>
                    </div>
                </div>

                
               
            </div>
        </Paper>
    );
}


export default SupplierDetail;