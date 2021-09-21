import React, {  useEffect } from 'react';
import PropTypes from 'prop-types';
import Corporate from '../../containers/Templates/Operate';
import {
  Grid,

  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,


} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {
  getService, 
} from '../../actions/services';

import AOS from "aos";
import 'aos/dist/aos.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '30px',
    paddingLeft: '40px',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Service = (props) => {
  const {
    classes,
    service,

  } = props;
  const [value, setValue] = React.useState(0);
 

  useEffect(() => {
    if(!props.fetched) {
      props.getService(props.match.params.id);
    }
    console.log('mount it!');

  }, []);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate >
      <div className={classes.root} data-aos="zoom-in-up">
        <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
                <Card className="mb-4">
                  <div className="card-badges">
                    <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                      TUNNEL LIGHT
                    </span>
                  </div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="image-title-overlay"
                    title="...">
                    <div className="image-title-overlay--bottom">
                      <h3 className="display-4 font-weight-bold m-0 text-white">
                        {service.name}
                      </h3>
                    </div>
                    <img 
                      alt="..." className="card-img-top" 
                      src={service.photo}
                      style={{height: '400px'}}
                    />
                  </a>
                </Card>
              </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={12}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="DESCRIPTION" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
                <Grid item xs={12} lg={12}  data-aos="zoom-in-up">
                <Card className="mb-4">
                  <CardContent className="p-3">
                    
                    <p className="card-text">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
                </Grid>
              </Grid>
            </TabPanel>
           
          </Grid>
        </Grid>
        <div className="sidebar-inner-layout-overlay" />
      </div>
    </Corporate>
  );
};

const mapStateToProps = state =>({
  service: state.services.service,
})

const MappedServices = connect(
mapStateToProps,
{getService} )
(Service);


export default withStyles(styles)(MappedServices);

