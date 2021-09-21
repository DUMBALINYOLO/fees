import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Wrapper from '../home/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Fab,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Tooltip
} from '@material-ui/core';
import Corporate from '../../containers/Templates/Operate';
import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../assets/images/avatars/avatar6.jpg';

import people1 from '../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../assets/images/stock-photos/people-3.jpg';

import hero2 from '../../assets/images/hero-bg/hero-2.jpg';
import hero3 from '../../assets/images/hero-bg/hero-3.jpg';
import hero4 from '../../assets/images/hero-bg/hero-4.jpg';

import hero8 from '../../assets/images/hero-bg/hero-8.jpg';
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

const LivePreviewExample = () => {
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  const [value, setValue] = React.useState(0);

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate>
      <Wrapper>

        <div className="app-inner-content-layout app-inner-content-layout-fixed" data-aos="zoom-in-up">
          <div className="d-flex d-lg-none p-4 bg-secondary order-0 justify-content-end align-items-center">
            <Fab onClick={toggleSidebarMenu2} size="small" color="primary">
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </Fab>
          </div>
          <div className="app-inner-content-layout--main">
            <PerfectScrollbar>
              <div className="p-4">
                <h5 className="display-3 mb-3 font-weight-bold text-center">
                  OUR TEAM
                </h5>
                <Tabs
                  value={value}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  onChange={handleChange}>
                  <Tab label="FIRST PAGE" />
                  <Tab label="SECOND PAGE" />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="mb-4" data-aos="zoom-in-up">
                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-warning badge-pill">
                              FLEXIBLE
                            </div>
                            
                          </div>
                          <img alt="..." className="card-img-top" src={people1} />
                        </div>
                        <div className="card-body text-center card-body-avatar">
                          <div className="avatar-icon-wrapper avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <h3 className="card-title mt-4 mb-1">Pascal Sithole</h3>
                          <p className="card-text mb-3">
                            Managing Director
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
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="mb-4" data-aos="zoom-in-up">
                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-warning badge-pill">
                              FLEXIBLE
                            </div>
                          </div>
                          <img alt="..." className="card-img-top" src={people2} />
                        </div>
                        <div className="card-body text-center card-body-avatar">
                          <div className="avatar-icon-wrapper avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <h3 className="card-title mt-4 mb-1">Baridzi Moyo</h3>
                          <p className="card-text mb-3">Software Developer</p>
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
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="mb-4" data-aos="zoom-in-up">
                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-warning badge-pill">
                              FLEXIBLE
                            </div>
                          </div>
                          <img alt="..." className="card-img-top" src={people3} />
                        </div>
                        <div className="card-body text-center card-body-avatar">
                          <div className="avatar-icon-wrapper avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <h3 className="card-title mt-4 mb-1">CATHERINE CHIMELA</h3>
                          <p className="card-text mb-3">
                            RECEPTIONIST
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
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="mb-4"  data-aos="zoom-in-up">
                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-warning badge-pill">
                              FLEXIBLE
                            </div>
                          </div>
                          <img alt="..." className="card-img-top" src={hero3} />
                        </div>
                        <div className="card-body text-center card-body-avatar">
                          <div className="avatar-icon-wrapper avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                          <h3 className="card-title mt-4 mb-1">Kate Taylor</h3>
                          <p className="card-text mb-3">Frontend Developer</p>
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
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="mb-4" data-aos="zoom-in-up">
                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-warning badge-pill">
                              FLEXIBLE
                            </div>
                          </div>
                          <img alt="..." className="card-img-top" src={hero4} />
                        </div>
                        <div className="card-body text-center card-body-avatar">
                          <div className="avatar-icon-wrapper avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <h3 className="card-title mt-4 mb-1">
                            ALMS DUBE
                          </h3>
                          <p className="card-text mb-3">SOFTWARE DEVELOPER</p>
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
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="mb-4" data-aos="zoom-in-up">
                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-warning badge-pill">
                              Warning
                            </div>
                          </div>
                          <img alt="..." className="card-img-top" src={hero8} />
                        </div>
                        <div className="card-body text-center card-body-avatar">
                          <div className="avatar-icon-wrapper avatar-icon-xl">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <h3 className="card-title mt-4 mb-1">Mandy Karol</h3>
                          <p className="card-text mb-3">Software Developer</p>
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
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="card-transparent mb-4" data-aos="zoom-in-up">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <div className="img-wrapper-overlay">
                            <div className="overlay-btn-wrapper">
                              <Tooltip arrow title="View messages">
                                <Fab color="secondary" className="mr-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Fab>
                              </Tooltip>
                              <Tooltip arrow title="Send email">
                                <Fab color="secondary" className="ml-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Fab>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-danger">Danger</div>
                          </div>
                          <img
                            alt="..."
                            className="card-img-top rounded"
                            src={people2}
                          />
                        </a>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="card-transparent mb-4" data-aos="zoom-in-up">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <div className="img-wrapper-overlay">
                            <div className="overlay-btn-wrapper">
                              <Tooltip arrow title="View messages">
                                <Fab color="secondary" className="mr-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Fab>
                              </Tooltip>
                              <Tooltip arrow title="Send email">
                                <Fab color="secondary" className="ml-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Fab>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-danger">Danger</div>
                          </div>
                          <img
                            alt="..."
                            className="card-img-top rounded"
                            src={people1}
                          />
                        </a>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="card-transparent mb-4" data-aos="zoom-in-up">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <div className="img-wrapper-overlay">
                            <div className="overlay-btn-wrapper">
                              <Tooltip arrow title="View messages">
                                <Fab color="secondary" className="mr-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Fab>
                              </Tooltip>
                              <Tooltip arrow title="Send email">
                                <Fab color="secondary" className="ml-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Fab>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-danger">Danger</div>
                          </div>
                          <img
                            alt="..."
                            className="card-img-top rounded"
                            src={people3}
                          />
                        </a>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="card-transparent mb-4" data-aos="zoom-in-up">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <div className="img-wrapper-overlay">
                            <div className="overlay-btn-wrapper">
                              <Tooltip arrow title="View messages">
                                <Fab color="secondary" className="mr-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Fab>
                              </Tooltip>
                              <Tooltip arrow title="Send email">
                                <Fab color="secondary" className="ml-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Fab>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-danger">Danger</div>
                          </div>
                          <img
                            alt="..."
                            className="card-img-top rounded"
                            src={hero4}
                          />
                        </a>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="card-transparent mb-4" data-aos="zoom-in-up">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <div className="img-wrapper-overlay">
                            <div className="overlay-btn-wrapper">
                              <Tooltip arrow title="View messages">
                                <Fab color="secondary" className="mr-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Fab>
                              </Tooltip>
                              <Tooltip arrow title="Send email">
                                <Fab color="secondary" className="ml-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Fab>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-danger">Danger</div>
                          </div>
                          <img
                            alt="..."
                            className="card-img-top rounded"
                            src={hero3}
                          />
                        </a>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Card className="card-transparent mb-4" data-aos="zoom-in-up">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="card-img-wrapper rounded">
                          <div className="img-wrapper-overlay">
                            <div className="overlay-btn-wrapper">
                              <Tooltip arrow title="View messages">
                                <Fab color="secondary" className="mr-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Fab>
                              </Tooltip>
                              <Tooltip arrow title="Send email">
                                <Fab color="secondary" className="ml-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Fab>
                              </Tooltip>
                            </div>
                          </div>
                          <div className="card-badges card-badges-bottom">
                            <div className="badge badge-danger">Danger</div>
                          </div>
                          <img
                            alt="..."
                            className="card-img-top rounded"
                            src={hero2}
                          />
                        </a>
                      </Card>
                    </Grid>
                  </Grid>
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
export default LivePreviewExample;
