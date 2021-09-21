import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Wrapper from '../home/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  Grid,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';
import Corporate from '../../containers/Templates/Operate';
import {
  getStaffUsers

} from '../../actions/staffusers'


import AOS from "aos";
import 'aos/dist/aos.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      backgroundColor: '#7420ff',
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


const LivePreviewExample = (props) => {
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  const [value, setValue] = React.useState(0);
  const cecisa = useStyles();

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  useEffect(() => {
    if(!props.fetched) {
        props.getStaffUsers();
    }
    console.log('mount it!');

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate>
      <Wrapper>

        <div className="app-inner-content-layout app-inner-content-layout-fixed" data-aos="zoom-in-up">
          <div className="app-inner-content-layout--main">
            <PerfectScrollbar>
              <div className="p-4">
                <Tabs
                  value={value}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  onChange={handleChange}>
                  <Tab label="UBUNTU-AFRO PUBLISERS TEAM " />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Paper className={cecisa.pageContent}>
                    <Grid container spacing={4}>
                        { props.records.map((staff) => {
                          return (

                            <Grid item xs={12} sm={6} lg={4} key={staff.id}>
                              <Card className="mb-4" data-aos="zoom-in-up">
                                <div className="card-img-wrapper">
                                  <div className="card-badges card-badges-bottom">
                                    <div className="badge badge-warning badge-pill">
                                      TUNNEL LIGHT
                                    </div>

                                  </div>
                                  <img alt="..." className="card-img-top" src={staff.image} />
                                </div>
                                <div className="card-body text-center card-body-avatar">
                                  <h3 className="card-title mt-4 mb-1">{staff.full_name}</h3>
                                  <p className="card-text mb-3">
                                    {staff.position}
                                  </p>
                                  <div>
                                    <IconButton
                                      variant="outlined"
                                      className="d-50 p-0 text-facebook mr-1">
                                      <span className="btn-wrapper--icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                                      </span>
                                    </IconButton>

                                    <IconButton
                                      variant="outlined"
                                      className="d-50 p-0 text-twitter ml-1">
                                      <span className="btn-wrapper--icon">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                      </span>
                                    </IconButton>
                                  </div>
                                </div>
                              </Card>
                            </Grid>
                            );
                          })
                      }
                    </Grid>
                  </Paper>
                </TabPanel>

              </div>
            </PerfectScrollbar>
          </div>
          <div
            onClick={toggleSidebarMenu2}
            className={clsx('sidebar-inner-layout-overlay', {
              active: isSidebarMenuOpen2
            })}
          />
        </div>
      </Wrapper>
    </Corporate>
  );
};



const mapStateToProps = state =>({
  records: state.staffusers.staffusers,
})

export default connect(
mapStateToProps,
{getStaffUsers} )
(LivePreviewExample);
