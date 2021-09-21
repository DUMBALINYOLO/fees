import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './helpSupport-jss';
import {
  makeStyles,
  Paper,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),

  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


const About =(props) => {
  const [expanded, setExpanded] = useState('panel1')


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel:false);
  };

    const { classes } = props;
    const cecisa = useStyles();


    return (
      <Paper className={cecisa.pageContent}>

        <ExpansionPanel  className='card-box-hover-rise-alt' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>COMPANY NAME</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                UBUNTU-AFRO PUBLISHERS
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  className='card-box-hover-rise-alt ' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>MOTTO</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Unearthing Indigenous Potential
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>DATE OF ESTABLISHMENT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                12 June 2020

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading} style={{textAlign: 'center'}}>VALUES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                Creativity <br />
                Transparency <br />
                Mutual Respect<br />
                Inclusiveness <br />


              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>BUSINESS ADDRESS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                Pioneer House 5th floor, suit 501, office number 003. <br />
                Bulawayo Zimbabwe.

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>CONTACT DETAILS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             +263778481481 and or <br />
              +263776442240 <br />
              ubuntuafropublishers20@gmail.com <br />

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>SERVICES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                We provide the following services with utmost professionalism and with product quality in mind.
                  (1) Publishing <br />
                  (2) Translation <br />
                  (3)  Book editing <br />
                  (4)    Proof reading <br />
                  (5)    Book Reviews <br />
                  (6)        Professional online profiling <br />
                  (7)          Book cover designs <br />
                  (8)            Bulk printing <br />
                  (9)      Typesetting <br />
                  (10)      ISBN allocation <br />
                  (11)          Book launch & venue arrangements <br />
                  (12)        Online book marketing and selling <br />
                  (13)    Special dedications <br />
                  (14)      Writer mentorship <br />

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
  );
}



export default withStyles(styles)(About);
