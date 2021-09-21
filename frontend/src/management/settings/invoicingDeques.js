import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import brand from '../../api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import settingList from '../../api/ui/settingList';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import dummy from '../../api/dummy/dummyContents';
import DetailSettings from './DetailSettings';
import styles from './settings-jss';
import { FiAirplay, FiTruck } from "react-icons/fi";
import ManagementLayout from '../layout/ManagementLayout';
import link from '../../api/ui/link';
import HowToReg from '@material-ui/icons/HowToReg';
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';

class InvoicingDeques extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openScaleConfig: false,
      checked: ['switch', 'check2'],
      keyword: '',
      settingTitle: 'Settings'
    };
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleScaleConfigClickOpen = (title) => {
    let {openScaleConfig, settingTitle } = this.state;
    this.setState({ openScaleConfig: true, settingTitle: title });
  };

  handleScaleConfigClose = () => {
    let {openScaleConfig } = this.state;
    this.setState({ openScaleConfig: false });
  };

  handleSearch = event => {
    this.setState({ keyword: event.target.value.toLowerCase() });
  }

  render() {
    const title = brand.name;
    const description = brand.desc;
    const { classes } = this.props;
    const { keyword, openScaleConfig, settingTitle } = this.state;
    return (
      <ManagementLayout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
          </Helmet>
          <Paper className={classes.paperStyled} elevation={0}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <div className={classes.profile}>

                  <div className={classes.profileText}>
                    <h1>INVOICING DASHBOARD</h1>
                  </div>
                </div>
              </Grid>
              <Grid item sm={8} xs={12}>
                <div className={classes.quickAccess}>

                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.root} elevation={4}>
            <AppBar position="static" color="inherit" className={classes.searchSettings}>
              <Toolbar>
                <div className={classes.flex}>
                  <div className={classes.wrapper}>
                    <div className={classes.search}>
                      <SearchIcon />
                    </div>
                    <input className={classes.input} placeholder="FIND INVOICES" onChange={(event) => this.handleSearch(event)} />
                  </div>
                </div>
              </Toolbar>
            </AppBar>
            <section className={classes.settingList}>
              <Grid container spacing={2}>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maadmins}
                    >
                      <span className={classes.text}>
                        CREDIT NOTES
                        <Typography variant="caption" className={classes.info}>
                          <HowToReg/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.masupervisors}
                    >
                      <span className={classes.text}>
                        PAYMENTS
                        <Typography variant="caption" className={classes.info}>
                          <Person/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.mamanagers}
                    >
                      <span className={classes.text}>
                        RECEIPTS
                        <Typography variant="caption" className={classes.info}>
                          <PersonOutline/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        INVOICES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        SALES GROUPS PRICING DISCOUNTS
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        QUOTATIONS
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        UNVERIFIED INVOICES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        OVERDUE INVOICES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        VOIDED INVOICES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        REFUNDED INVOICES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        FULLY PAID NOT YET SALES INVOICES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.maoperators}
                    >
                      <span className={classes.text}>
                        SALES
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
              </Grid>
            </section>
          </Paper>
        </div>
      </ManagementLayout>
    );
  }
}

export default withStyles(styles)(InvoicingDeques);
