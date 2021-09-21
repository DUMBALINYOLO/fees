import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import styles from './profile-jss';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import ProfileForm from './ProfileForm';
import WhatsApp from '@material-ui/icons/WhatsApp';
import People from '@material-ui/icons/People';
import LocalShipping from '@material-ui/icons/LocalShipping';
import LocationCity from '@material-ui/icons/LocationCity';
import DateRange from '@material-ui/icons/DateRange';
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';
import Filter2 from '@material-ui/icons/Filter2';
import Filter3 from '@material-ui/icons/Filter3';



const ITEM_HEIGHT = 48;

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorElOpt: null,
      showMobileDetail: false,
      recordForEdit: null,
      openPopup: false,
      open: false,
      isOpen: false,
    };

}




  render() {
    const {
      classes,
      data,

    } = this.props;

    const {id, username, email} = data;


    return (
      <main className={classNames(classes.content, this.state.showMobileDetail ? classes.detailPopup : '')}>
        <section className={classes.cover}>
          <div className={classes.opt}>
          </div>
          <IconButton
            className={classes.navIconHide}
            aria-label="Back"
          >
            <ArrowBack />
          </IconButton>
        </section>
        <div>
          <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <DateRange />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={id} secondary="ID" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <LocalShipping />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={username} secondary="USERNAME" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.blueIcon}>
                    <LocationCity />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} secondary="EMAIL" />
              </ListItem>
              <Divider variant="inset" />
          </List>
        </div>
      </main>
    );
  }
}



export default withStyles(styles)(About);
