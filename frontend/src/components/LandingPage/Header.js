import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Fab,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import projectLogo from './ubuntu.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center',
    display: 'flex',
  },
  tabs:{
    backgroundColor: 'grey',
  }
});


const Header = (props) => {
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <div
        className="header-nav-wrapper header-nav-wrapper-lg rounded-sm px-4 navbar-dark"


      >
        <div className="header-nav-logo">
          <div className="nav-logo">
            <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/'

              >
                <i className="bg-white">
                  <img
                    alt="Carolina React Admin Dashboard with Material-UI PRO"
                    src={projectLogo}
                  />
              </i>
              <span>UBUNTU-AFRO PUBLISHERS</span>

            </Button>
          </div>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/about'
            >
              ABOUT US
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/team'
            >
              OUR TEAM
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/newsletter'
            >
              NEWSLETTER
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/contact-us'
            >
              CONTACT US
            </Button>
          </div>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
          <Button
              color="inherit"
              component={Link}
              to='/login'
              className=" px-4 py-2 text-capitalize">
              LOGIN
            </Button>
          </span>
          <span className="d-block d-lg-none">
            <Fab
              onClick={toggleDrawer('right', true)}
              color="primary"
              size="medium">
              <MenuRoundedIcon />
            </Fab>
          </span>
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          elevation={11}>
          <List className="py-0">
            <ListItem className="d-block bg-secondary py-2 px-3">
              <div className="d-flex w-100 justify-content-between navbar-light align-items-center">
                <div className="header-nav-logo justify-content-start">
                  <Button
                      color="inherit"
                      className=" px-4 py-2 text-capitalize"
                      component={Link}
                      to='/'

                    >
                    <span>UBUNTU-AFRO</span>

                  </Button>


                </div>
                <IconButton
                  onClick={toggleDrawer('right', false)}
                  color="primary">
                  <MenuRoundedIcon />
                </IconButton>
              </div>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/about'
              >
                ABOUT US
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/team'
              >
                OUR TEAM
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/newsletter'
              >
                NEWSLETTER
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/contact-us'
              >
                CONTACT US
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                  color="inherit"
                  component={Link}
                  to='/login'
                  className=" px-4 py-2 text-capitalize">
                  LOGIN
                </Button>

            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Header);
