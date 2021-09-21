import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';






const Detail = (props) => { 

    const {
        id,
        title,
        version,
        appearance,
        status,
        author,
        genre,
        description,
        hardcopy_read_price,

    } = props.data;





    



    
    return (
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
                                    {title}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="VERSION">
                                <p>
                                    {version}
                                </p>
                            </Panel>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="APPERANCE">
                                <p>
                                    {appearance}
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
                            <Panel header="AUTHOR">
                                <p>
                                    {author}
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
                            <Panel header="GENRE">
                                <p>
                                    {genre}
                                </p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="HARD COPY PRICE">
                                <p>
                                    {hardcopy_read_price}
                                </p>
                            </Panel>
                        </div>
                    </div>
                </div>
            </Paper>
    );
}



  
export default Detail;
  

