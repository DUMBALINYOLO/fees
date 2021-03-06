import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  IconButton,
  Box,
  Card,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';


export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={12}>
          <Card className="card-box mb-4 bg-royal card-box-hover-rise">
            <div className="card-header-alt d-flex justify-content-between p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  Open tickets
                </h6>
              </div>
              <Box className="d-flex align-items-center">
                <IconButton size="small" color="primary">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </IconButton>
              </Box>
            </div>
            <div className="px-3 pb-3">
              <div className="scroll-area rounded bg-secondary shadow-overflow">
                <PerfectScrollbar>
                  <div className="p-3 bg-royal card-box-hover-rise">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Wrong product price
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Nazim Kidd
                          </a>
                          <span className="pl-2 text-muted">
                            opened 20 minutes ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-success">Completed</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Active IE8 issues
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Charlton Oconnell
                          </a>
                          <span className="pl-2 text-muted">
                            opened two hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-success">Completed</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            My account doesn't work
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Isha Rollins
                          </a>
                          <span className="pl-2 text-muted">
                            opened three hours ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-primary">On Hold</div>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Unpaid invoice status
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar4} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened 3 days ag0
                          </span>
                        </small>
                      </div>
                      <div>
                        <span className="badge badge-warning">Pending</span>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Mobile app problems
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar5} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Kush Malone
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <span className="badge badge-danger">Rejected</span>
                      </div>
                    </div>
                    <Divider className="my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-black">
                            Responsive issues on Firefox
                          </a>
                        </div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                          <a href="#/" onClick={e => e.preventDefault()}>
                            Celine Goulding
                          </a>
                          <span className="pl-2 text-muted">
                            opened one week ago
                          </span>
                        </small>
                      </div>
                      <div>
                        <div className="badge badge-primary">On Hold</div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          </Card>
        </Grid>
        
      </Grid>
    </Fragment>
  );
}
