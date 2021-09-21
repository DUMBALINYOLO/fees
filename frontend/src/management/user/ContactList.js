import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import Add from '@material-ui/icons/Add';
import Star from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import styles from './contact-jss';
import { getAuthors } from '../../actions/users/authors';


class ContactList extends React.Component {
  state = {
    filter: 'all',
  };

  handleChange = (event, value) => {
    this.setState({ filter: value });
  };

  render() {
    const {
      classes,
      authors,
      itemSelected,
      showDetail,
      search,
      keyword,
      clippedRight,
      total
    } = this.props;

    const getItem = dataArray => dataArray.map(authors => {
      const index = authors.indexOf(authors);
      if (authors.get('first_name').toLowerCase().indexOf(keyword) === -1) {
        return false;
      }

      return (
        <ListItem
          button
          key={authors.get('id')}
          className={index === itemSelected ? classes.selected : ''}
          onClick={() => showDetail(authors)}
        >
          <ListItemAvatar>
            <Avatar alt={authors.get('first_name')} className={classes.avatar} />
          </ListItemAvatar>
          <ListItemText primary={authors.get('first_name')} secondary={authors.get('title')} />
        </ListItem>
      );
    });
    return (
      <Fragment>
        <Drawer
          variant="permanent"
          anchor="left"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            <div className={classNames(classes.toolbar, clippedRight && classes.clippedRight)}>
              <div className={classes.flex}>
              </div>
            </div>
            <div className={classes.total}>
              {total}
              &nbsp;
              Contacts
            </div>
            <List>
              {authors}
            </List>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
  itemSelected: PropTypes.number.isRequired,
  showDetail: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clippedRight: PropTypes.bool,
};

ContactList.defaultProps = {
  clippedRight: false,
};

const mapStateToProps = state => ({
  authors: state.authors.authors,
});


const ContactListMapped = connect(
  mapStateToProps,
  {getAuthors}
)(ContactList);

export default withStyles(styles)(ContactListMapped);
