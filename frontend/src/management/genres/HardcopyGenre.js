import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import {
    getHardcopyGenre
    
} from '../../actions/publications/publications';
import { getOnceOffs  } from '../../actions/publications/onceoffs';
import { getPublishedHardCopies} from '../../actions/publications/publishedhardcopies';
import { getLockedHardCopies } from '../../actions/publications/lockedhardcopies';
import Detail from './HardcopyDetail';
import Hardcopies from '../hardcopy/Hardcopies';
import LockedHardcopies from '../hardcopy/LockedHardcopies';
import PublishedHardcopies from '../hardcopy/PublishedHardcopies'





function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollIconTabs extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getHardcopyGenre(this.props.match.params.id, this.props.token);
      this.props.getLockedHardCopies(this.props.match.params.id, this.props.token);
      this.props.getPublishedHardCopies(this.props.match.params.id, this.props.token);  
      this.props.getOnceOffs(this.props.match.params.id, this.props.token); 

    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getHardcopyGenre(this.props.match.params.id, newProps.token);
        this.props.getLockedHardCopies(this.props.match.params.id, newProps.token);
        this.props.getPublishedHardCopies(this.props.match.params.id, newProps.token);
        this.props.getOnceOffs(this.props.match.params.id, newProps.token);  
        
        
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { 
        token,
        classes
    } = this.props;
    const { value } = this.state;


    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="DETAILS" />
              <Tab label="ALL" />
              <Tab label="LOCKED" />
              <Tab label="PUBLISHED" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Detail data={this.props.genre}/></TabContainer>}
          {value === 1 && <TabContainer><Hardcopies data={this.props.genre} getBooks={this.props.getOnceOffs} records={this.props.onceoffs}/></TabContainer>}
          {value === 2 && <TabContainer><LockedHardcopies records={this.props.lockedhardcopies}/></TabContainer>}
          {value === 3 && <TabContainer><PublishedHardcopies  records={this.props.publishedhardcopies}/></TabContainer>}
          
        </div>
      </ManagementLayout>
    );
  }
}

const mapStateToProps = state => ({
    genre: state.publications.hardcopygenre,
    onceoffs: state.onceoffs.onceoffs,
    publishedhardcopies: state.publishedhardcopies.publishedhardcopies,
    lockedhardcopies: state.lockedhardcopies.lockedhardcopies,
    token: state.auth.token,
    loading: state.orders.loading,
  });
  
  
  
const SingleAccountMapped = connect(
    mapStateToProps,
    {
        getHardcopyGenre,
        getLockedHardCopies,
        getPublishedHardCopies,
        getOnceOffs,


    }
  )(ScrollIconTabs);


export default withStyles(styles)(SingleAccountMapped);
