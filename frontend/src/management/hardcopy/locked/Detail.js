import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';
import { Button } from 'primereact/button';

import { Toolbar } from 'primereact/toolbar';





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



    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    label="UNLOCK"
                    className="p-button-success "
                    onClick= {()=> props.unlockHardcopy(id, props.data, props.token)}
                />
            </React.Fragment>
        )
    }







    return (
            <Paper>
                <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>



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

                    </div>
                </div>
            </Paper>
    );
}




export default Detail;
