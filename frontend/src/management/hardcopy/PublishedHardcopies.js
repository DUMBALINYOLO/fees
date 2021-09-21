import React, {useState, useRef } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
 } from '@material-ui/core';
import SearchEbook from "./SearchSeries";
import EbookCard from "./SeriesCard";



const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))




const Series = props => {

  const classes = useStyles();
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const { records} = props;






  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/managementdashboard/published-hardcopies/${id}`)
  }



  return (
    <>

      <Paper className={classes.pageContent}>
        <Toast ref={toast} />
            
            <SearchEbook
                courseData={records}
                listView={listView}
                handleSwitchView={handleSwitchView}
              />
              <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
                direction="row"
                spacing={3}
              >
                {
                  records.map((series) => {
                    return (
                      <Grid
                        item
                        md={listView === 'list' ? 12 : 3}
                        sm={listView === 'list' ? 12 : 6}
                        xs={12}
                        key={series.id}
                      >
                        <EbookCard
                          list={listView === 'list'}
                          full_name={series.title}
                          short_name={series.genre}
                          thumbnail={series.cover}
                          status={series.version}
                          detailOpen={() => handleClick(series.id)}
                        />
                      </Grid>
                    );
                  })
                }
              </Grid>
        </Paper>

    </>
  );
};



export default Series;
