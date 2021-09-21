import React, {useState, useRef, useEffect } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
 } from '@material-ui/core';
import SearchEbook from "./SearchSeries";
import EbookCard from "./SeriesCard";
import {getCustomerSeries} from '../../../actions/publications/publications';
import AOS from "aos";
import 'aos/dist/aos.css';




const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
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

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerSeries();
    }
    console.log('mount it!');
  }, []);

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/series/${id}`)
  }



  return (
    <>

      <Paper className={classes.pageContent} data-aos="fade-left">
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
                          genre={series.genre}
                          author={series.author}
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


const mapStateToProps = state =>({
    records: state.publications.customerseries,
})

export default connect(
  mapStateToProps,
  {getCustomerSeries} )
  (Series);
