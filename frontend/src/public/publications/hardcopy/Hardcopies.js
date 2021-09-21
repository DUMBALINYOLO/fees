import React, {useState, useRef, useEffect } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  Card
 } from '@material-ui/core';
import SearchEbook from "./SearchHardcopy";
import EbookCard from "./HardcopyCard";
import {getCustomerHardcopies, getHardcopyGenres} from '../../../actions/publications/publications';
import AOS from "aos";
import 'aos/dist/aos.css';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';





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
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))


function valuetext(value) {
  return `${value}°C`;
}


const Ebooks = props => {

  const classes = useStyles();
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const { records, genres } = props;
  const [checked, setChecked] = useState([]);

  console.log(genres)


  const [price, setPrice] = useState([20, 37]);
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleGenre = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1){
      newChecked.push(value);
    }else{
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };


  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerHardcopies();
        props.getHardcopyGenres()
    }
    console.log('mount it!');
  }, []);

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);




  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/hardcopies/${id}`)
  }



  return (
    <>

      <Paper className={classes.pageContent} data-aos="fade-left">
        <Toast ref={toast} />

            <SearchEbook
                courseData={records}
                listView={listView}
                handleSwitchView={handleSwitchView}
              />
              <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
                direction="row"
                spacing={3}
              >


                <Grid
                    item
                    xs={12}

                >
                    <Grid
                      container
                      alignItems="flex-start"
                      justify="flex-start"
                      direction="row"
                      spacing={3}
                    >
                    {
                      records.map((series) => {
                        return (
                          <Grid
                            item
                            md={listView === 'list' ? 12 : 3}
                            sm={listView === 'list' ? 12 : 6}
                            key={series.id}
                            xs={12}
                            >

                              <EbookCard

                                list={listView === 'list'}
                                full_name={series.title}
                                short_name={series.genre}
                                thumbnail={series.cover}
                                status={series.version}
                                genre={series.genre}
                                author={series.author}
                                price={series.price}
                                detailOpen={() => handleClick(series.id)}
                              />
                          </Grid>
                          );
                        })
                      }
                  </Grid>

                </Grid>
              </Grid>
        </Paper>

    </>
  );
};


const mapStateToProps = state =>({
    records: state.publications.customerhardcopies,
    genres: state.publications.hardcopygenres
})

export default connect(
  mapStateToProps,
  {
    getCustomerHardcopies,
    getHardcopyGenres,
  } )
  (Ebooks);
