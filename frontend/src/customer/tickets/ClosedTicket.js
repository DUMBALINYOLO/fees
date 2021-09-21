import React, { Fragment, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Corporate from '../../containers/Templates/CustomerWrapper';
import Comments from './ClosedComments';
import {getComments} from '../../actions/tickets/comments';
import {getCustomerClosedTicket} from '../../actions/tickets/customertickets';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '40px',
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    backgroundColor: theme.palette.background.paper
  }
});

const Ticket = (props) => {
  const { classes, token } = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerClosedTicket(props.match.params.id, token)
        props.getComments(props.match.params.id, token)

    }
    console.log('mount it!');
  }, []);




  return (
    <>
      {token !== null ?
          <Corporate>


              <Comments
                comments={props.comments}
                data={props.ticket}
                getComments={props.getComments}

              />

          </Corporate>
        : <Redirect to='/login' />
      }
  </>
  );
};

const mapStateToProps = state => ({
    ticket: state.customertickets.customerclosedticket,
    comments: state.comments.comments,
    token: state.auth.token,
});



const TicketMapped = connect(
    mapStateToProps,
    {
      getCustomerClosedTicket,
      getComments
    }
  )(Ticket);


export default withStyles(styles)(TicketMapped);
