import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import Users  from './Users';
import {connect}  from 'react-redux';
import {getUsers} from '../../actions/auth'


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

const UsersTab =(props) => {
  const [value, setValue] = useState(0)
  const { classes, records, token } = props;

  const admin = records.filter((user) => user.type === 'admin')
  const accountant = records.filter((user) => user.type === 'accountant')
  const author = records.filter((user) => user.type === 'author')
  const editor = records.filter((user) => user.type === 'editor')
  const sales_rep = records.filter((user) => user.type === 'sales_rep')



  useEffect(() => {
    if(!props.fetched) {
        props.getUsers(token);
    }
    console.log('mount it!');


  }, []);


  const handleChange = (event, value) => {
    setValue( value);
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
            >
              <Tab label="ADMINISTRATORS" />
              <Tab label="ACCOUNTANTS" />
              <Tab label="AUTHORS" />
              <Tab label="EDITORS" />
              <Tab label="SALES REPRESANTATIVES" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Users getUsers={props.getUsers} records={admin} /></TabContainer>}
          {value === 1 && <TabContainer><Users getUsers={props.getUsers} records={accountant} /></TabContainer>}
          {value === 2 && <TabContainer><Users getUsers={props.getUsers} records={author} /></TabContainer>}
          {value === 3 && <TabContainer><Users getUsers={props.getUsers} records={editor} /></TabContainer>}
          {value === 4 && <TabContainer><Users getUsers={props.getUsers} records={sales_rep} /></TabContainer>}
        </div>
      </ManagementLayout>
    );
}



const mapStateToProps = state =>({
  records: state.auth.people,
  token: state.auth.token,

})

const UsersMapped = connect(
  mapStateToProps,
  {getUsers}
)(UsersTab)

export default withStyles(styles)(UsersMapped);
