import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import SingleJournalDetail from './SingleJournalDetail';
import { 
  getJournal,
  getPostedEntries,
  getUnPostedUnAdjustedEntries,
  getUnadjustedEntries,
  getUnpostedEntries
} from '../../actions/accounts/books';
import PostedEntries from './posted/Entries';
import UnAdjustedEntries from './unadjusted/Entries';
import UnPostedEntries from './unposted/Entries';
import UnAdjustedUnPostedEntries from './unposted_n/Entries';

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

const Journal =(props) => {
    const [value, setValue] = useState(0)
    const { classes, token } = props;


    useEffect(() => {
      if(!props.fetched) {
          props.getJournal(props.match.params.id, token);
          props.getPostedEntries(props.match.params.id, token);
          props.getUnPostedUnAdjustedEntries(props.match.params.id, token);
          props.getUnadjustedEntries(props.match.params.id, token);
          props.getUnpostedEntries(props.match.params.id, token);
      }
      console.log('mount it!');

    }, []);





  const handleChange = (event, value) => {
    setValue(value );
  };

    


    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
              className= 'bg-royal card-box-hover-rise'
            >
              <Tab label="ABOUT" />
              <Tab label="POSTED JOURNAL ENTRIES" />
              <Tab label="UNADJUSTED JOURNAL ENTRIES" />
              <Tab label="UNPOSTED JOURNAL ENTRIES" />
              <Tab label="UNADJUSTED & UNPOSTED JOURNAL ENTRIES" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><SingleJournalDetail data={props.journal}/></TabContainer>}
          {value === 1 && <TabContainer><PostedEntries entries={props.postedentries}/></TabContainer>}
          {value === 2 && <TabContainer><UnAdjustedEntries entires={props.undjustedentries}/></TabContainer>}
          {value === 3 && <TabContainer><UnPostedEntries entries={props.unpostedentries}/></TabContainer>}
          {value === 4 && <TabContainer><UnAdjustedUnPostedEntries entries={props.unpostedunadjustedentries} /></TabContainer>}
        </div>
      </ManagementLayout>
    );
}

const mapStateToProps = state => ({
    journal: state.books.journal,
    undjustedentries: state.books.undjustedentries,
    unpostedentries: state.books.unpostedentries,
    postedentries: state.books.postedentries,
    unpostedunadjustedentries: state.books.unpostedunadjustedentries,
    token: state.auth.token,
    loading: state.accounts.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
      getJournal,
      getPostedEntries,
      getUnPostedUnAdjustedEntries,
      getUnadjustedEntries,
      getUnpostedEntries
    
    }
  )(Journal);


export default withStyles(styles)(SingleAccountMapped);
