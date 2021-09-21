import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../../layout/ManagementLayout'
import SingleJournalEntryDetail from './About';
import { 
  getUnPostedUnAdjustedEntry,
  getCredits,
  getDebits
} from '../../../actions/accounts/books';
import Credits from '../Credits';


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

const JournalEntry =(props) => {
    const [value, setValue] = useState(0)
    const { classes, token } = props;


    useEffect(() => {
      if(!props.fetched) {
          props.getUnPostedUnAdjustedEntry(props.match.params.id, token);
          props.getCredits(props.match.params.id, token);
          props.getDebits(props.match.params.id, token);
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
              <Tab label="CREDITS" />
              <Tab label="DEBITS" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><SingleJournalEntryDetail data={props.journal}/></TabContainer>}
          {value === 1 && <TabContainer><Credits records={props.credits}/></TabContainer>}
          {value === 2 && <TabContainer><Credits records={props.debits}/></TabContainer>}
        </div>
      </ManagementLayout>
    );
}

const mapStateToProps = state => ({
    entry: state.books.unpostedunadjustedentry,
    credits: state.books.credits,
    debits: state.books.debits,
    token: state.auth.token,
    loading: state.accounts.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
      getUnPostedUnAdjustedEntry,
      getCredits,
      getDebits
    
    }
  )(JournalEntry);


export default withStyles(styles)(SingleAccountMapped);
