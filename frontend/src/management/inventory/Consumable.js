import React, {useEffect} from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';
import { connect } from 'react-redux';
import {
    getConsumable

} from '../../actions/inventory/inventory';
import ManagementLayout from '../layout/ManagementLayout';





const Consumable = (props) => { 

    useEffect(() => {
        if(!props.fetched) {
            props.getConsumable(props.match.params.id, props.token);
        }
        console.log('mount it!');
  
      }, []);
    
    const {
        id,
        supplier,
        name,
        category,
        unit_of_measure,
        description,
        minimum_order_level,
        maximum_stock_level,
        created_by,

    } = props.consumable;


    
    return (
        <ManagementLayout>
            <Paper>   
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
                            <Panel header="NAME">
                                <p>
                                    {name}
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
                            <Panel header="SUPPLIER">
                                <p>
                                    {supplier}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="UNIT OF MEASURE">
                                <p>
                                    {unit_of_measure}
                                </p>
                            </Panel>
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="MAXIMUM STOCK LEVEL">
                                <p>
                                    {maximum_stock_level}
                                </p>
                            </Panel>
                        </div>
                        
                        <div className="p-col">
                            <Panel header="MINIMUM ORDER LEVEL">
                                <p>
                                    {minimum_order_level}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="CREATED BY">
                                <p>
                                    {created_by}
                                </p>
                            </Panel>
                        </div>
                    </div>
                </div>
            </Paper>
        </ManagementLayout>
    );
}


const mapStateToProps = state =>({
    consumable: state.inventory.consumable,
    token: state.auth.token,

})

export default connect(
  mapStateToProps,
  {
    getConsumable
    } )
  (Consumable);


  

