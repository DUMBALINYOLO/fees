import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const SupplierDetail = (props) => { 
    const {
        id,
        name,
        height,
        width,
        length,
        location,
        description,
        inventory_controller,
    } = props.data;

    
    return (
        <Paper>

           
            <div className="flexgrid-demo">
                    
                <h1 style={{textAlign: 'center'}}>WAREHOUSE DETAILS</h1>
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
                        <Panel header="HEIGHT">
                            <p>
                                {height}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="WIDTH">
                            <p>
                                {width}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="LENGHT">
                            <p>
                                {length}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="location">
                            <p>
                                {location}
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
                        <Panel header="MANAGER">
                            <p>
                                {inventory_controller}
                            </p>
                        </Panel>
                    </div>
                </div>
            </div>
        </Paper>
    );
}


export default SupplierDetail;