import React, {useState, useRef, useEffect } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
 } from '@material-ui/core';
import ServiceCard from "./ServiceCard";
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




const Services = props => {

  const classes = useStyles();
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const { records} = props;

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/services/${id}`)
  }



  return (
    <>

      <Paper className={classes.pageContent} data-aos="fade-left">
        <Toast ref={toast} />

            
              <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
                direction="row"
                spacing={3}
              >
                {
                  records.map((service) => {
                    return (
                      <Grid
                        item
                        md={listView === 'list' ? 12 : 3}
                        sm={listView === 'list' ? 12 : 6}
                        xs={12}
                        key={service.id}
                      >
                        <ServiceCard
                          list={listView === 'list'}
                          full_name={service.name}
                          thumbnail={service.photo}
                          detailOpen={() => handleClick(service.id)}
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

export default Services;




